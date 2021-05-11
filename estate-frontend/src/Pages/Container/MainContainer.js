import React, { Component } from 'react';
import HomeServices from '../../HomeServices/HomeServices';

class MainContainer extends React.Component {
    constructor() {
        super();
        this.state = {
          categorys: []
        };
    
        this.categoryService = new HomeServices();
      }
    
      componentDidMount() {
        this.categoryService.getAllCategorys().then(response => {
          this.setState({ categorys: response });
        });
      }
    
      renderCategorys = () => {
        return this.state.categorys.map((category, key) => {
          return (
            <li key={key}>
              <a href={`/loai-san-pham/${category.idLong}`}>{category.titleString}</a>
            </li>
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
                                        {this.renderCategorys()}
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
                                    </ol>
                                    <div class="carousel-inner">
                                        <div class="carousel-item active">
                                            <img src="/resources/images/banners/slide1.jpg" alt="First slide" />
                                        </div>
                                        <div class="carousel-item">
                                            <img src="/resources/images/banners/slide2.jpg" alt="Second slide" />
                                        </div>
                                        <div class="carousel-item">
                                            <img src="/resources/images/banners/slide3.jpg" alt="Third slide" />
                                        </div>
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

                                    <div class="card-banner border-bottom">
                                        <div class="py-3" style={{width:`80%`}}>
                                            <h6 class="card-title">BÁN GẤP nhà đẹp 5 tầng Tung tâm HOÀNG MAI MT 4,5m- GIÁ chỉ 2,x Tỷ</h6>
                                            <a href="/" class="btn btn-secondary btn-sm"> Chi tiết </a>
                                        </div>
                                        <img src="/resources/images/items/1.jpg" height="80" class="img-bg" />
                                    </div>

                                    <div class="card-banner border-bottom">
                                        <div class="py-3" style={{width:`80%`}}>
                                            <h6 class="card-title">Cho Thuê Nhà 247/3 Huỳnh Văn Bánh, 6.5X11M 1T 3L</h6>
                                            <a href="/" class="btn btn-secondary btn-sm"> Chi tiết </a>
                                        </div>
                                        <img src="/resources/images/items/2.jpg" height="80" class="img-bg" />
                                    </div>

                                    <div class="card-banner border-bottom">
                                        <div class="py-3" style={{width:`80%`}}>
                                            <h6 class="card-title">Bán gấp nhà đẹp,HXH, Nguyễn Kiệm,P3.QGV.40m2.2 lầu. 3.599 tỷ</h6>
                                            <a href="/" class="btn btn-secondary btn-sm"> Chi tiết </a>
                                        </div>
                                        <img src="/resources/images/items/6.jpg" height="80" class="img-bg" />
                                    </div>

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