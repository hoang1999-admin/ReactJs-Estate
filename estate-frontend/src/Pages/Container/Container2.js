import React, { Component } from 'react';
import HomeServices from '../../HomeServices/HomeServices';

class Container2 extends Component {
    constructor() {
        super();
        this.state = {
            products: []
        };

        this.productService = new HomeServices();
    }

    componentDidMount() {
        this.productService.getAllProductsSale().then(response => {
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

            // {/* <!-- =============== SECTION 2 =============== --> */}
            <section class="padding-bottom">
                <header class="section-heading heading-line">
                    <h4 class="title-section text-uppercase">NHÀ ĐẤT BÁN</h4>
                </header>

                <div class="card card-home-category">
                    <div class="row no-gutters">
                        <div class="col-md-3">

                            <div class="home-category-banner bg-light-orange">
                                <h5 class="title">"Vì cộng đồng - Kiến tạo an cư" - TTC Land</h5>
                                <p>Diễn viên Will Rogers: "Đừng chờ đợi để mua bất động sản. Hãy mua bất động sản và chờ đợi".   </p>
                                <a href="#" class="btn btn-outline-primary rounded-pill">Nguồn bây giờ</a>
                                <img src="/resources/images/items/1603683085-picture81518ff.jpg" class="img-bg" style={{ width: `400px`, height:`247px` }} />
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
            // {/* <!-- =============== SECTION 2 END =============== --> */}


        );
    }
}

export default Container2;