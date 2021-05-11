import React, { Component } from 'react';
import HomeServices from '../../HomeServices/HomeServices';

class Container1 extends Component {
    constructor() {
        super();
        this.state = {
            products: []
        };

        this.productService = new HomeServices();
    }

    componentDidMount() {
        this.productService.getAllProductsRent().then(response => {
            this.setState({ products: response });
        });
    }

    renderproducts = () => {
        return this.state.products.map((product, key) => {
            return (
                <li class="col-6 col-lg-4 col-md-3" key={key}>
                    <a href={`/index=${product.idLong}`} class="item">
                        <div class="card-body">
                            <h5 class="title">{product.titleString}</h5>
                            <img class="img-sm float-right" src={`/resources/images/items/${product.imageString}`} />
                            <p class="text-muted"><i class="fa fa-map-marker-alt"></i>{product.positionString}</p>
                        </div>
                    </a>
                </li>

            );
        });
    };

    render() {
        return (

            // {/* <!-- =============== SECTION 1 =============== --> */}
            <section class="padding-bottom">
                <header class="section-heading heading-line">
                    <h4 class="title-section text-uppercase">NHÀ ĐẤT CHO THUÊ</h4>
                </header>

                <div class="card card-home-category">
                    <div class="row no-gutters">
                        <div class="col-md-3">

                            <div class="home-category-banner bg-light-orange">
                                <h5 class="title">"Kiến tạo cuộc sống phồn vinh" - Tân Tạo Garden</h5>
                                <p>Nhà văn Margaret Mitchell: "Đất đai là thứ duy nhất trên thế giới quan trọng hơn bất cứ thứ gì"</p>
                                <a href="/" class="btn btn-outline-primary rounded-pill">Nguồn bây giờ</a>
                                <img src="/resources/images/items/1619799185-lhw55.jpg" style={{ width: `400px`, height:`200px`}} class="img-bg" />
                            </div>

                        </div>
                        {/* <!-- col.// --> */}
                        <div class="col-md-9">
                            <ul class="row no-gutters bordered-cols">
                                {this.renderproducts()}
                            </ul>
                        </div>
                        {/* <!-- col.// --> */}
                    </div>
                    {/* <!-- row.// --> */}
                </div>
                {/* <!-- card.// --> */}
            </section>
            // {/* <!-- =============== SECTION 1 END =============== --> */}

        );
    }
}

export default Container1;