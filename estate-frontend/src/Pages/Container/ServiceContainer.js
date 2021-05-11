import React, { Component } from 'react';

class ServiceContainer extends Component {
    render() {
        return (

            // {/* <!-- =============== SECTION SERVICES =============== --> */}
            <section class="padding-bottom">

                <header class="section-heading heading-line">
                    <h4 class="title-section text-uppercase">DỊCH VỤ THƯƠNG MẠI</h4>
                </header>

                <div class="row">
                    <div class="col-md-3 col-sm-6">
                        <article class="card card-post">
                            <img src="/resources/images/posts/1.jpg" class="card-img-top" />
                            <div class="card-body">
                                <h6 class="title">Đảm bảo thương mại</h6>
                                <p class="small text-uppercase text-muted">BẢO VỆ ĐƠN HÀNG</p>
                            </div>
                        </article>
                        {/* <!-- card.// --> */}
                    </div>
                    {/* <!-- col.// --> */}
                    <div class="col-md-3 col-sm-6">
                        <article class="card card-post">
                            <img src="/resources/images/posts/2.jpg" class="card-img-top" />
                            <div class="card-body">
                                <h6 class="title">Thanh toán bất cứ lúc nào</h6>
                                <p class="small text-uppercase text-muted">GIẢI PHÁP TÀI CHÍNH</p>
                            </div>
                        </article>
                        {/* <!-- card.// --> */}
                    </div>
                    {/* <!-- col.// --> */}
                    <div class="col-md-3 col-sm-6">
                        <article class="card card-post">
                            <img src="/resources/images/posts/3.jpg" class="card-img-top" />
                            <div class="card-body">
                                <h6 class="title">Giải pháp kiểm tra</h6>
                                <p class="small text-uppercase text-muted">KIỂM TRA DỄ DÀNG</p>
                            </div>
                        </article>
                        {/* <!-- card.// --> */}
                    </div>

                    {/* <!-- col.// --> */}
                    <div class="col-md-3 col-sm-6">
                        <article class="card card-post">
                            <img src="/resources/images/posts/4.jpg" class="card-img-top" />
                            <div class="card-body">
                                <h6 class="title">Giao lưu</h6>
                                <p class="small text-uppercase text-muted">DỊCH VỤ HẬU CẦN</p>
                            </div>
                        </article>
                        {/* <!-- card.// --> */}
                    </div>
                    {/* <!-- col.// --> */}
                </div>
                {/* <!-- row.// --> */}

            </section>
            // {/* <!-- =============== SECTION SERVICES .//END =============== --> */}

        );
    }
}

export default ServiceContainer;