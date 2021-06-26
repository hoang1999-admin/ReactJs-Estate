import React, { Component } from 'react'
import HomeServiceAdmin from '../../HomeServiceAdmin/HomeServiceAdmin';
import moment from 'moment';

class CreateProduct extends Component {
    constructor(props) {
        super(props)
        this.fileInput = React.createRef();
        this.state = {
            products: [],
            // step 2
            id: this.props.match.params.id,
            productidLong: '',
            categoryidLong: '',
            titleString: '',
            descriptionString: '',
            slugString: '',
            metakeyString: '',
            metadescString: '',
            priceDouble: '',
            pricesaleDouble: '',
            discountInteger: '',
            positionString: '',
            directionString: '',
            createdatTimestamp: moment().format(),
            imageString: '',
            areaString: '',
            addressString: '',
            phoneString: '',
            customerString: '',
            roomInteger: '',
            maincontainerBoolean: false,
            dealcontainerBoolean: false,
            container1Boolean: false,
            container2Boolean: false,
            requestcontainerBoolean: false,
            itemcontainerBoolean: false,
            servicecontainerBoolean: false,
            regioncontainerBoolean: false,
            statusString:1,
            statusString2:2,
        }
        this.changeProduct_idHandler = this.changeProduct_idHandler.bind(this);
        this.changeCategory_idHandler = this.changeCategory_idHandler.bind(this);
        this.changeTitleHandler = this.changeTitleHandler.bind(this);
        this.changeSlugHandler = this.changeSlugHandler.bind(this);
        this.changeDescriptionHandler = this.changeDescriptionHandler.bind(this);
        this.changeMetakeyHandler = this.changeMetakeyHandler.bind(this);
        this.changeMetadescHandler = this.changeMetadescHandler.bind(this);
        this.changePriceHandler = this.changePriceHandler.bind(this);
        this.changePricesaleHandler = this.changePricesaleHandler.bind(this);
        this.changeDiscountHandler = this.changeDiscountHandler.bind(this);
        this.changePositionHandler = this.changePositionHandler.bind(this);
        this.changeDirectionHandler = this.changeDirectionHandler.bind(this);
        this.changeImageHandler = this.changeImageHandler.bind(this);
        this.changeAreaHandler = this.changeAreaHandler.bind(this);
        this.changeAddressHandler = this.changeAddressHandler.bind(this);
        this.changePhoneHandler = this.changePhoneHandler.bind(this);
        this.changeCustomerHandler = this.changeCustomerHandler.bind(this);
        this.changeMainHandler = this.changeMainHandler.bind(this);
        this.changeDealHandler = this.changeDealHandler.bind(this);
        this.change1Handler = this.change1Handler.bind(this);
        this.change2Handler = this.change2Handler.bind(this);
        this.changeRequestHandler = this.changeRequestHandler.bind(this);
        this.changeServiceHandler = this.changeServiceHandler.bind(this);
        this.changeItemHandler = this.changeItemHandler.bind(this);
        this.changeRegionHandler = this.changeRegionHandler.bind(this);
        this.changeStatusHandler = this.changeStatusHandler.bind(this);

        this.saveProduct = this.saveProduct.bind(this);
        this.productService = new HomeServiceAdmin();
    }
    componentDidMount() {
        this.productService.getProducts().then(response => {
            this.setState({ products: response.data });
        });
    }
    saveProduct = (e) => {
        e.preventDefault();


        let product = {
            productidLong: this.state.productidLong,
            categoryidLong: this.state.categoryidLong,
            titleString: this.state.titleString,
            descriptionString: this.state.descriptionString,
            slugString: this.state.slugString,
            metakeyString: this.state.metakeyString,
            metadescString: this.state.metadescString,
            priceDouble: this.state.priceDouble,
            pricesaleDouble: this.state.pricesaleDouble,
            discountInteger: this.state.discountInteger,
            positionString: this.state.positionString,
            directionString: this.state.directionString,
            createdatTimestamp: this.state.createdatTimestamp,
            imageString: this.fileInput.current.files[0].name,
            areaString: this.state.areaString,
            addressString: this.state.addressString,
            phoneString: this.state.phoneString,
            customerString: this.state.customerString,
            roomInteger: this.state.roomInteger,
            maincontainerBoolean: this.state.maincontainerBoolean,
            dealcontainerBoolean: this.state.dealcontainerBoolean,
            container1Boolean: this.state.container1Boolean,
            container2Boolean: this.state.container2Boolean,
            requestcontainerBoolean: this.state.requestcontainerBoolean,
            itemcontainerBoolean: this.state.itemcontainerBoolean,
            servicecontainerBoolean: this.state.servicecontainerBoolean,
            regioncontainerBoolean: this.state.regioncontainerBoolean,
            statusString: this.state.statusString ? this.state.statusString:this.state.statusString2 ,
           


        };
        console.log('product => ' + JSON.stringify(product));

        // step 5
        if (product == '') {
            alert('Lưu thất bại');
        } else {
            this.productService.createProduct(product).then(res => {
                this.props.history.push('/list-product');
                alert('Lưu thành công ');
            });
        }


    }
    changeProduct_idHandler = (event) => {
        this.setState({ productidLong: event.target.value });
    }
    changeCategory_idHandler = (event) => {
        this.setState({ categoryidLong: event.target.value });
    }
    changeTitleHandler = (event) => {
        this.setState({ titleString: event.target.value });
    }
    changeSlugHandler = (event) => {
        this.setState({ slugString: event.target.value });
    }
    changeDescriptionHandler = (event) => {
        this.setState({ descriptionString: event.target.value });
    }

    changeMetakeyHandler = (event) => {
        this.setState({ metakeyString: event.target.value });
    }
    changeMetadescHandler = (event) => {
        this.setState({ metadescString: event.target.value });
    }
    changePriceHandler = (event) => {
        this.setState({ priceDouble: event.target.value });
    }
    changePricesaleHandler = (event) => {
        this.setState({ pricesaleDouble: event.target.value });
    }
    changeDiscountHandler = (event) => {
        this.setState({ discountInteger: event.target.value });
    }
    changePositionHandler = (event) => {
        this.setState({ positionString: event.target.value });
    }

    changeDirectionHandler = (event) => {
        this.setState({ directionString: event.target.value });
    }
    changeImageHandler = (event) => {
        this.setState({ imageString: event.target.value });
    }
    changeAreaHandler = (event) => {
        this.setState({ areaString: event.target.value });
    }
    changeAddressHandler = (event) => {
        this.setState({ addressString: event.target.value });
    }
    changePhoneHandler = (event) => {
        this.setState({ phoneString: event.target.value });
    }
    changeCustomerHandler = (event) => {
        this.setState({ customerString: event.target.value });
    }
    changeRoomHandler = (event) => {
        this.setState({ roomInteger: event.target.value });
    }
    changeMainHandler = (event) => {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
        this.setState({ [name]: value });
    }
    changeDealHandler = (event) => {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
        this.setState({ [name]: value });
    }
    change1Handler = (event) => {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
        this.setState({ [name]: value });
    }
    change2Handler = (event) => {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
        this.setState({ [name]: value });
    }
    changeServiceHandler = (event) => {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
        this.setState({ [name]: value });
    }
    changeRequestHandler = (event) => {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
        this.setState({ [name]: value });
    }
    changeItemHandler = (event) => {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
        this.setState({ [name]: value });
    }
    changeRegionHandler = (event) => {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
        this.setState({ [name]: value });
    }
    changeStatusHandler = (event) => {
        if(this.state.statusString)
        {
            this.setState({ statusString: event.target.value });
        }else{
            this.setState({ statusString2: event.target.value });
        }
    }
    cancel() {
        this.props.history.push('/list-product');
    }
  
    render() {
        return (
            <div class="wrapper">
                {/* <!-- Navbar --> */}
                <nav class="main-header navbar navbar-expand navbar-white navbar-light">
                    {/* <!-- Left navbar links --> */}
                    <ul class="navbar-nav">
                        <li class="nav-item">
                            <a class="nav-link" data-widget="pushmenu" href="#" role="button"><i class="fas fa-bars"></i></a>
                        </li>
                        <li class="nav-item d-none d-sm-inline-block">
                            <a href="/Admin" class="nav-link">Trang chủ</a>
                        </li>
                        <li class="nav-item d-none d-sm-inline-block">
                            <a href="/lien-he" class="nav-link">Liên hệ</a>
                        </li>
                    </ul>

                    {/* <!-- SEARCH FORM --> */}
                    <form class="form-inline ml-3">
                        <div class="input-group input-group-sm">
                            <input class="form-control form-control-navbar" type="search" placeholder="Search" aria-label="Search" />
                            <div class="input-group-append">
                                <button class="btn btn-navbar" type="submit">
                                    <i class="fas fa-search"></i>
                                </button>
                            </div>
                        </div>
                    </form>

                    {/* <!-- Right navbar links --> */}
                    <ul class="navbar-nav ml-auto">
                        <li class="nav-item">
                            <a class="nav-link" data-widget="control-sidebar" data-slide="true" href="#" role="button">
                                <i class="fas fa-th-large"></i>
                            </a>
                        </li>
                    </ul>
                </nav>
                {/* <!-- Main Sidebar Container --> */}
                <div className="row">
                    <div className="col-3">
                        <div class="list-group">
                            <ul>
                                    <li class="list-group-item list-group-item-action"><a href="/list-product">Sản phẩm</a></li>
                                    <li class="list-group-item list-group-item-action"><a href="/list-category">Loại sản phẩm</a></li>
                                    <li class="list-group-item list-group-item-action"><a href="/list-email">E-mail</a></li>
                                    <li class="list-group-item list-group-item-action"><a href="/list-contact">Liên hệ</a></li>
                                    <li class="list-group-item list-group-item-action"><a href="/list-slider">slider</a></li>
                                    <li class="list-group-item list-group-item-action"><a href="/list-photo">Hình ảnh</a></li>
                                    <li class="list-group-item list-group-item-action"><a href="/list-area">Khu vực</a></li>
                                    <li class="list-group-item list-group-item-action"><a href="/list-productrelation">Sản phẩm liên quan</a></li>
                                    <li class="list-group-item list-group-item-action"><a href="/list-request">Yêu cầu</a></li>
                                    <li class="list-group-item list-group-item-action"><a href="/list-role">Vai trò thành viên</a></li>
                                    <li class="list-group-item list-group-item-action"><a href="/list-user">Thành viên</a></li>
                                </ul>
                        </div>
                    </div>
                    <div className="col-9">
                        <form name="form1" action="index.php?option=product&cat=process" method="post">
                            <div class="content-wrapper" >
                                <section class="content">
                                    <div class="card">
                                        <div class="card-header">
                                            <h3 class="card-title">
                                                <strong class="text-danger">DANH SÁCH THÊM SẢN PHẨM</strong>
                                            </h3>
                                            <div class="card-tools" style={{ float: `right` }} >
                                                <button type="submit" onClick={this.saveProduct} class="btn btn-success btn-sm">   <i class="far fa-save"></i> Lưu[Thêm]</button>
                                                <a onClick={this.cancel.bind(this)} class="btn btn-danger btn-sm" href="javascript:void(0)" role="button">
                                                    <i class="fas fa-times"></i> Thoát</a>
                                            </div>
                                        </div>
                                        <div class="card-body">
                                            <div class="row">
                                                <div class="col-6">
                                                    <div class="form-group">
                                                        <label for="">Mã sản phẩm</label>
                                                        <input value={this.state.productidString} onChange={this.changeProduct_idHandler} type="text" class="form-control" name="productidString" placeholder="vd: BDHDSF23" />
                                                    </div>
                                                    <div class="form-group">
                                                        <label for="">Loại sản phẩm</label>
                                                        <input value={this.state.categoryidLong} onChange={this.changeCategory_idHandler} type="number" min="1" class="form-control" name="categoryidLong" placeholder="vd: 1" />
                                                    </div>
                                                    <div class="form-group">
                                                        <label for="">Tên sản phẩm</label>
                                                        <input value={this.state.titleString} onChange={this.changeTitleHandler} type="text" class="form-control" name="titleString" placeholder=" Tên sản phẩm" />
                                                    </div>
                                                    <div class="form-group">
                                                        <label for="">Tên gạch nối</label>
                                                        <input value={this.state.slugString} onChange={this.changeSlugHandler} type="text" class="form-control" name="slugString" placeholder=" ten-san-pham" />
                                                    </div>
                                                    <div class="form-group">
                                                        <label for="">Mô tả sản phẩm</label>
                                                        <textarea value={this.state.descriptionString} onChange={this.changeDescriptionHandler} class="form-control" name="descriptionString" rows="3"></textarea>
                                                    </div>
                                                    <div class="form-group">
                                                        <label for="">Từ khóa</label>
                                                        <textarea value={this.state.metakeyString} onChange={this.changeMetakeyHandler} class="form-control" name="metakeyString" rows="3"></textarea>
                                                    </div>
                                                    <div class="form-group">
                                                        <label for="">Từ khóa mô tả</label>
                                                        <textarea value={this.state.metadescString} onChange={this.changeMetadescHandler} class="form-control" name="metadescString" rows="3"></textarea>
                                                    </div>
                                                    <p>Chọn loại quyền truy cập:</p>
                                                    <div className="row">
                                                        <div className="col-6">
                                                            <div class="form-group text-muted">

                                                                <label class="form-check form-check-inline" >
                                                                    <input class="form-check-input" type="checkbox" name="maincontainerBoolean" value="option1" ref="fieldPrice" checked={this.state.maincontainerBoolean} onChange={this.changeMainHandler} />
                                                                    <span class="form-check-label">Main Container</span>
                                                                </label>

                                                            </div>
                                                            <div class="form-group text-muted">

                                                                <label class="form-check form-check-inline" >
                                                                    <input class="form-check-input" type="checkbox" name="dealcontainerBoolean" value="option1" ref="fieldPrice" checked={this.state.dealcontainerBoolean} onChange={this.changeDealHandler} />
                                                                    <span class="form-check-label"> Deal Container</span>
                                                                </label>

                                                            </div>
                                                            <div class="form-group text-muted">

                                                                <label class="form-check form-check-inline" >
                                                                    <input class="form-check-input" type="checkbox" name="container1Boolean" value="option1" ref="fieldPrice" checked={this.state.container1Boolean} onChange={this.change1Handler} />
                                                                    <span class="form-check-label">Container 1</span>
                                                                </label>

                                                            </div>  <div class="form-group text-muted">

                                                                <label class="form-check form-check-inline" >
                                                                    <input class="form-check-input" type="checkbox" name="container2Boolean" value="option1" ref="fieldPrice" checked={this.state.container2Boolean} onChange={this.change2Handler} />
                                                                    <span class="form-check-label">Container 2</span>
                                                                </label>

                                                            </div>


                                                        </div>
                                                        <div className="col-6">
                                                            <div class="form-group text-muted">

                                                                <label class="form-check form-check-inline" >
                                                                    <input class="form-check-input" type="checkbox" name="servicecontainerBoolean" value="option1" ref="fieldPrice" checked={this.state.servicecontainerBoolean} onChange={this.changeServiceHandler} />
                                                                    <span class="form-check-label">Service Container</span>
                                                                </label>

                                                            </div>
                                                            <div class="form-group text-muted">

                                                                <label class="form-check form-check-inline" >
                                                                    <input class="form-check-input" type="checkbox" name="requestcontainerBoolean" value="option1" ref="fieldPrice" checked={this.state.requestcontainerBoolean} onChange={this.changeRequestHandler} />
                                                                    <span class="form-check-label">Request Container</span>
                                                                </label>

                                                            </div>
                                                            <div class="form-group text-muted">

                                                                <label class="form-check form-check-inline" >
                                                                    <input class="form-check-input" type="checkbox" name="itemcontainerBoolean" value="option1" ref="fieldPrice" checked={this.state.itemcontainerBoolean} onChange={this.changeItemHandler} />
                                                                    <span class="form-check-label">Item Container</span>
                                                                </label>

                                                            </div>
                                                            <div class="form-group text-muted">

                                                                <label class="form-check form-check-inline" >
                                                                    <input class="form-check-input" type="checkbox" name="regioncontainerBoolean" value="option1" ref="fieldPrice" checked={this.state.regioncontainerBoolean} onChange={this.changeRegionHandler} />
                                                                    <span class="form-check-label">Region Container</span>
                                                                </label>

                                                            </div>
                                                        </div>
                                                    </div>


                                                </div>
                                                <div class="col-6">
                                                    <div class="form-group">
                                                        <label for="">Giá</label>
                                                        <input value={this.state.priceDouble} onChange={this.changePriceHandler} type="text" class="form-control" name="priceDouble" />
                                                    </div>
                                                    <div class="form-group">
                                                        <label for="">Giá giảm</label>
                                                        <input value={this.state.pricesaleDouble} onChange={this.changePricesaleHandler} type="text" class="form-control" name="pricesaleDouble" />
                                                    </div>
                                                    <div class="form-group">
                                                        <label for="">Phần trăm giảm</label>
                                                        <input value={this.state.discountInteger} onChange={this.changeDiscountHandler} type="number" min="1" class="form-control" name="discountInteger" />
                                                    </div>
                                                    <div class="form-group">
                                                        <label for="">Vị trí</label>
                                                        <input value={this.state.positionString} onChange={this.changePositionHandler} type="text" class="form-control" name="positionString" rows="3"></input>
                                                    </div>
                                                    <div class="form-group">
                                                        <label for="">Hướng</label>
                                                        <input value={this.state.directionString} onChange={this.changeDirectionHandler} type="text" class="form-control" name="directionString" rows="3"></input>
                                                    </div>
                                                    <div class="form-group">
                                                        <label for="img">Hình ảnh</label>
                                                        <input id="img" ref={this.fileInput} type="file" accept="image/*" class="form-control" name="image" rows="3"></input>
                                                    </div>
                                                    <div class="form-group">
                                                        <label for="">Khu vực</label>
                                                        <input value={this.state.areaString} onChange={this.changeAreaHandler} type="text" class="form-control" name="areaString" rows="3"></input>
                                                    </div>
                                                    <div class="form-group">
                                                        <label for="">Địa chỉ</label>
                                                        <input value={this.state.addressString} onChange={this.changeAddressHandler} type="text" class="form-control" name="addressString" rows="3"></input>
                                                    </div>
                                                    <div class="form-group">
                                                        <label for="">Điện thoại</label>
                                                        <input value={this.state.phoneString} onChange={this.changePhoneHandler} type="text" class="form-control" min="1" name="phoneString" rows="3"></input>
                                                    </div>
                                                    <div class="form-group">
                                                        <label for="">Chủ đầu tư</label>
                                                        <input value={this.state.customerString} onChange={this.changeCustomerHandler} name="customerString" class="form-control" name="metakey" rows="3"></input>
                                                    </div>
                                                    <div class="form-group">
                                                        <label for="">Số Phòng</label>
                                                        <input value={this.state.roomInteger} onChange={this.changeRoomHandler} type="number" min="1" class="form-control" name="roomInteger" rows="3"></input>
                                                    </div>
                                                    <div class="form-group">
                                                        <label for="">Trạng thái</label>
                                                        <select class="form-control" name="status"  onChange={this.changeStatusHandler}>
                                                            <option value={this.state.statusString} name="statusString">Xuất bản</option>
                                                            <option value={this.state.statusString2} name="statusString">Chưa xuất bản</option>
                                                        </select>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </section>
                            </div>
                        </form>
                    </div>
                </div>

                <footer class="main-footer">
                    <div class="float-right d-none d-sm-block">
                        <b>Version</b> 3.0.4
                    </div>
                    <strong>Copyright & ngo dinh hoang ; 2020-2021 <a href="http://adminlte.io">AdminLTE.io</a>.</strong> All rights
                    reserved.
                </footer>

                {/* <!-- Control Sidebar --> */}
                <aside class="control-sidebar control-sidebar-dark">
                    {/* <!-- Control sidebar content goes here --> */}
                </aside>
                {/* <!-- /.control-sidebar --> */}
            </div>

        )
    }
}

export default CreateProduct
