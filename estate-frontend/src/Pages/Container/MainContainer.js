import React, { Component } from 'react';
import HomeServices from '../../HomeServices/HomeServices';

class MainContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            categorys: [],
            categorytops: [],
            producttops:[],
            sliders: [],
            activeIndex: 4
        };
        this.categoryTopService = new HomeServices();
        this.categoryService = new HomeServices();
        this.sliderService = new HomeServices();
        this.productService = new HomeServices();
    }

    componentDidMount() {
        this.categoryTopService.getAllCategoryTops().then(response => {
            this.setState({ categorytops: response });
        });
        this.categoryService.getAllCategorys().then(response => {
            this.setState({ categorys: response });
        });
        this.sliderService.getAllSliders().then(response => {
            this.setState({ sliders: response });
        });
        this.productService.getAllProductTops().then(response => {
            this.setState({ producttops: response });
        });
    }
    renderCategoryTops = () => {
        return this.state.categorytops.map((category, key) => {
            return (
                <li key={key}>
                    <a href={`/loai-san-pham/index=${category.idLong}`}>{category.titleString}</a>
                </li>
            );
        });
    };
    renderProductTops = () => {
        return this.state.producttops.map((product, key) => {
            return (
                <div class="card-banner border-bottom" key ={key}>
                <div class="py-3" style={{ width: `100%` }}>
                    <h6 class="card-title">{product.titleString}</h6>
                    <a href={`/index=${product.idLong}`} class="btn btn-secondary btn-sm"> Chi tiết </a>
                </div>
                <img src={`/resources/images/items/${product.imageString}`}  height="60" class="img-bg" />
            </div>

            );
        });
    };
    renderSliders = () => {
        return this.state.sliders.map((slider, index) => {
            return (

                <div className={index === this.state.activeIndex ? 'carousel-item active' : 'carousel-item'}
                    key={index}>
                    <img src={`/resources/images/banners/${slider.imageString}`} alt="First slide" />
                </div>

            );
        });
    };
    render() {
        return (


            // {/* <!-- ========================= SECTION MAIN  ========================= --> */}
            <section class="section-main padding-y">
                <main class="card">
                    <div class="card-body">

                        <div class="row">
                            <aside class="col-lg col-md-3 flex-lg-grow-0">
                                <nav class="nav-home-aside">
                                    <h6 class="title-category"> Loại Sản Phẩm <i class="d-md-none icon fa fa-chevron-down"></i></h6>
                                    <ul class="menu-category">
                                        {this.renderCategoryTops()}
                                        <li >
                                            <a href="/loai-san-pham?All">Xem Thêm</a>
                                        </li>
                                    </ul>
                                </nav>
                            </aside>
                            {/* <!-- col.// --> */}
                            <div class="col-md-9 col-xl-7 col-lg-7">

                                {/* <!-- ================== COMPONENT SLIDER  BOOTSTRAP  ==================  --> */}
                                <div id="carousel1_indicator" class="slider-home-banner carousel slide" data-ride="carousel">
                                    <ol class="carousel-indicators">
                                        <li data-target="#carousel1_indicator" data-slide-to="0" class="active"></li>
                                        <li data-target="#carousel1_indicator" data-slide-to="1"></li>
                                        <li data-target="#carousel1_indicator" data-slide-to="2"></li>
                                        <li data-target="#carousel1_indicator" data-slide-to="3"></li>
                                    </ol>
                                    <div class="carousel-inner">
                                        {this.renderSliders()}
                                    </div>
                                    <a class="carousel-control-prev" href="#carousel1_indicator" role="button" data-slide="prev">
                                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                        <span class="sr-only">Previous</span>
                                    </a>
                                    <a class="carousel-control-next" href="#carousel1_indicator" role="button" data-slide="next">
                                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                        <span class="sr-only">Next</span>
                                    </a>
                                </div>
                                {/* <!-- ==================  COMPONENT SLIDER BOOTSTRAP end.// ==================  .// -->	 */}

                            </div>
                            {/* <!-- col.// --> */}
                            <div class="col-md d-none d-lg-block flex-grow-1">
                                <aside class="special-home-right">
                                    <h6 class="bg-blue text-center text-white mb-0 p-2">Loại phổ biến</h6>

                                    {this.renderProductTops()}
                                   
                                </aside>
                            </div>
                            {/* <!-- col.// --> */}
                        </div>
                        {/* <!-- row.// --> */}

                    </div>
                    {/* <!-- card-body.// --> */}
                </main>
                {/* <!-- card.// --> */}

            </section>
            // {/* <!-- ========================= SECTION MAIN END// ========================= --> */}

            // {/* <!-- container end.// --> */}
        );
    }
}

export default MainContainer;