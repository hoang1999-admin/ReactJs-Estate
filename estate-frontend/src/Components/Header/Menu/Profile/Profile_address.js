import React, { Component } from 'react';
import Header from '../../../Header/Header';
import Footer from '../../../Footer/Footer';
import Subcribe from '../../../Subcribe/Subcribe';
class Profile_address extends Component {
    render() {
        return (
            <div>
            <Header />

                {/* <!-- ========================= SECTION PAGETOP ========================= --> */}
                <section class="section-pagetop bg-gray">
                    <div class="container">
                        <h2 class="title-page">Tài khoản của tôi</h2>
                    </div>
                    {/* <!-- container //  --> */}
                </section>
                {/* <!-- ========================= SECTION PAGETOP END// ========================= --> */}


                {/* <!-- ========================= SECTION CONTENT ========================= --> */}
                <section class="section-content padding-y">
                    <div class="container">

                        <div class="row">
                            <aside class="col-md-3">
                                <nav class="list-group">
                                    <a class="list-group-item" href={`/thong-tin-ca-nhan`}> Tổng quan về tài khoản </a>
                                    <a class="list-group-item active" href={`/dia-chi-cua-toi`}> Địa chỉ của tôi</a>
                                    <a class="list-group-item" href={`/don-dat-hang-cua-toi`}> Đơn đặt hàng của tôi </a>
                                    <a class="list-group-item" href={`/san-pham-yeu-thich`}> Sản phẩm yêu thích </a>
                                    <a class="list-group-item" href={`/cac-mat-hang-ban-chay`}> Các mặt hàng bán chạy </a>
                                    <a class="list-group-item" href={`/cai-dat`}> Cài đặt </a>
                                    <a class="list-group-item" href={`/`}> Đăng xuất </a>
                                </nav>
                            </aside>
                            {/* <!-- col.// --> */}
                            <main class="col-md-9">

                                <a href="#" class="btn btn-light mb-3"> <i class="fa fa-plus"></i> Add new address </a>

                                <div class="row">
                                    <div class="col-md-6">
                                        <article class="box mb-4">
                                            <h6>London, United Kingdom</h6>
                                            <p>Building: Nestone <br /> Floor: 22, Aprt: 12  </p>
                                            <a href="#" class="btn btn-light disabled"> <i class="fa fa-check"></i> Default</a> <a href="#" class="btn btn-light"> <i class="fa fa-pen"></i> </a>   <a href="#" class="btn btn-light"> <i class="text-danger fa fa-trash"></i>  </a>
                                        </article>
                                    </div>
                                    {/* <!-- col.// --> */}
                                    <div class="col-md-6">
                                        <article class="box mb-4">
                                            <h6>Tashkent, Uzbekistan</h6>
                                            <p>Building one <br /> Floor: 2, Aprt: 32  </p>
                                            <a href="#" class="btn btn-light">Make default</a> <a href="#" class="btn btn-light"> <i class="fa fa-pen"></i> </a>   <a href="#" class="btn btn-light"> <i class="text-danger fa fa-trash"></i>  </a>
                                        </article>
                                    </div>
                                    {/* <!-- col.// --> */}
                                    <div class="col-md-6">
                                        <article class="box mb-4">
                                            <h6>Moscow, Russia</h6>
                                            <p>Lenin street <br /> Building A, Floor: 3, Aprt: 32  </p>
                                            <a href="#" class="btn btn-light">Make default</a> <a href="#" class="btn btn-light"> <i class="fa fa-pen"></i> </a>   <a href="#" class="btn btn-light"> <i class="text-danger fa fa-trash"></i>  </a>
                                        </article>
                                    </div>
                                    {/* <!-- col.// --> */}
                                </div>
                                {/* <!-- row.// --> */}

                            </main>
                            {/* <!-- col.// --> */}
                        </div>

                    </div>
                    {/* <!-- container .//  --> */}
                </section>
                {/* <!-- ========================= SECTION CONTENT END// ========================= --> */}
                <Subcribe />
                <Footer />
            </div>
        );
    }
}

export default Profile_address;