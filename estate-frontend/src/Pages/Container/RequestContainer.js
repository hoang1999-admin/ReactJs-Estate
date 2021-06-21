import React, { Component } from 'react';
import HomeServices from '../../HomeServices/HomeServices';

class RequestContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            products: [],
            searchString: '',
            qualityInteger: null,
            titleString: '',
            priceBoolean: false,
            acreBoolean: false,
            statusInteger: 1,
        };
        this.handleChangesearch = this.handleChangesearch.bind(this);
        this.handleChangequality = this.handleChangequality.bind(this);
        this.handleChangetittle = this.handleChangetittle.bind(this);
        this.handleChangeprice = this.handleChangeprice.bind(this);
        this.handleChangeacre = this.handleChangeacre.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.productService = new HomeServices();
        this.requestServive = new HomeServices();
    }

    componentDidMount() {
        this.productService.getAllProducts().then(response => {
            this.setState({ products: response });
        });
    }
    handleChangesearch = (event) => {
        this.setState({ searchString: event.target.value });
    }
    handleChangequality = (event) => {
        this.setState({ qualityInteger: event.target.value });
    }
    handleChangetittle = (event) => {
        this.setState({ titleString: event.target.value });
    }
    handleChangeprice = (event) => {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
        this.setState({   [name]: value });
    }
    handleChangeacre = (event) => {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
        this.setState({   [name]: value });
    }
    handleSubmit = (event) => {
        event.preventDefault();
        alert('Lưu thành công : ' +"\n"+ this.state.searchString+"\n" + this.state.qualityInteger+"\n"+this.state.titleString+"\n"+this.state.priceBoolean+"\n"+this.state.acreBoolean);
        let request = { searchString: this.state.searchString, qualityInteger: this.state.qualityInteger, titleString: this.state.titleString, priceBoolean: this.state.priceBoolean, acreBoolean: this.state.acreBoolean,statusInteger:this.state.statusInteger };
        console.log('request => ' + JSON.stringify(request));
        this.requestServive.createRequest(request).then(res => {


        });
        this.refs.fieldSearch.value = "";
        this.refs.fieldTittle.value = "";
        this.refs.fieldQuality.value = "";
        this.refs.fieldPrice.value = false;
        this.refs.fieldAcre.value = false;
    }
    renderproducts = () => {
        return this.state.products.map((product, key) => {
            return (
                <option key={key}>{product.titleString}</option>


            );
        });
    };
    renderproductPrices = () => {
        return this.state.products.map((product, key) => {
            return (
                <option key={key} >{product.priceDouble}</option>


            );
        });
    };
    render() {
        return (

            // {/* <!-- =============== SECTION REQUEST =============== --> */}

            <section class="padding-bottom">

                <header class="section-heading heading-line">
                    <h4 class="title-section text-uppercase">YÊU CẦU</h4>
                </header>

                <div class="row">
                    <div class="col-md-8">
                        <div class="card-banner banner-quote overlay-gradient" style={{ backgroundImage: `url("/resources/images/items/1619797029-gah22.jpg")` }}>
                            <div class="card-img-overlay white">
                                <h3 class="card-title">Một cách dễ dàng để gửi yêu cầu đến nhà cung cấp</h3>
                                <p class="card-text" style={{ maxwidth: `400px` }}>“Cảm giác thoải mái nhất là khi biết rằng bạn đang đứng trên đất của chính bạn. Đất đai là điều duy nhất không thể bay đi. “- Anthony Trollope, tiểu thuyết gia.</p>
                                <a href="#" class="btn btn-primary rounded-pill">Tìm hiểu thêm</a>
                            </div>
                           
                        </div>
                    </div>
                    {/* <!-- col // --> */}
                    
                    <div class="col-md-4">
                       <div class="card card-body">
                            <h4 class="title py-3">Một yêu cầu, nhiều trích dẫn</h4>
                            <form>
                                <div class="form-group">
                                    <input class="form-control"ref="fieldSearch"value={this.state.searchString} onChange={this.handleChangesearch} name="" placeholder="Bạn muốn tìm kiếm gì?" type="text" />
                                </div>
                                <div class="form-group">
                                    <div class="input-group">
                                        <input class="form-control"ref="fieldQuality"value={this.state.qualityInteger} onChange={this.handleChangequality} placeholder="Số lượng" defaultValue="1" name="" type="number" min="1" max="10" />

                                        <select class="custom-select form-control" ref="fieldTittle" value={this.state.titleString} onChange={this.handleChangetittle}>
                                            <option>Lô đất</option>
                                            {this.renderproducts()}
                                        </select>
                                    </div>
                                </div>
                                <div class="form-group text-muted">
                                    <p>Chọn loại yêu cầu:</p>
                                    <label class="form-check form-check-inline" >
                                        <input class="form-check-input" type="checkbox" name="priceBoolean" value="option1"ref="fieldPrice" checked={this.state.priceBoolean} onChange={this.handleChangeprice} />
                                        <span class="form-check-label">Yêu cầu giá</span>
                                    </label>
                                    <label class="form-check form-check-inline" >
                                        <input class="form-check-input" type="checkbox" name="acreBoolean" value="option2"ref="fieldAcre"checked={this.state.acreBoolean} onChange={this.handleChangeacre} />
                                        <span class="form-check-label">Yêu cầu mẫu</span>
                                    </label>
                                </div>
                                <div class="form-group">
                                    <button class="btn btn-warning" onClick={this.handleSubmit}>Yêu cầu</button>
                                </div>
                            </form>
                        </div>

                    </div>
                    {/* <!-- col // --> */}
                </div>
                {/* <!-- row // --> */}
            </section>

            // {/* <!-- =============== SECTION REQUEST .//END =============== --> */}


        );
    }
}

export default RequestContainer;