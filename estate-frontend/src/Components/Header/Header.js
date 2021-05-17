import React, { Component } from 'react'
class Header extends Component {
    render() {
        return (
            <header class="section-header">
                <section class="header-main border-bottom">
                    <div class="container">
                        <div class="row align-items-center">
                            <div class="col-xl-1 col-lg-3 col-md-12">
                                <a href="http://batdongsan.com" class="brand-wrap">
                                    <img class="logo" src="/resources/images/lgBDS-min.png" />
                                </a>
                                {/* <!-- brand-wrap.// --> */}
                            </div>
                            <div class="col-xl-6 col-lg-5 col-md-6">
                                <form action="#" class="search-header">
                                    <div class="input-group w-100">
                                        <select class="custom-select border-right" name="category_name">
                                            <option value="">Tất cả loại</option>
                                            <option value="codex">Căn hộ chung cư</option>
                                            <option value="comments">Các loại nhà bán</option>
                                            <option value="content">Các loại đất bán</option>
                                            <option value="content">Trang trại khu nghĩ dưỡng</option>
                                            <option value="content">Kho, nhà xưởng</option>
                                        </select>
                                        <input type="text" class="form-control" placeholder="Tìm Kiếm" />

                                        <div class="input-group-append">
                                            <button class="btn btn-primary" type="submit">
                                                <i class="fa fa-search"></i> Tìm Kiếm
                                  </button>
                                        </div>
                                    </div>
                                </form>
                                {/* <!-- search-wrap .end// --> */}
                            </div>
                            {/* <!-- col.// --> */}
                            <div class="col-xl-5 col-lg-4 col-md-6">
                                <div class="widgets-wrap float-md-right">
                                    <div class="widget-header mr-3">
                                        <a href={`/thong-tin-ca-nhan`} class="widget-view">
                                            <div class="icon-area">
                                                <i class="fa fa-user"></i>
                                                <span class="notify">3</span>
                                            </div>
                                            <small class="text"> Thông tin cá nhân </small>
                                        </a>
                                    </div>
                                    <div class="widget-header mr-3">
                                        <a href="#" class="widget-view">
                                            <div class="icon-area">
                                                <i class="fa fa-comment-dots"></i>
                                                <span class="notify">1</span>
                                            </div>
                                            <small class="text"> Thông báo </small>
                                        </a>
                                    </div>
                                    <div class="widget-header mr-3">
                                        <a href="#" class="widget-view">
                                            <div class="icon-area">
                                                <i class="fa fa-heart"></i>
                                            </div>
                                            <small class="text"> Lưu </small>
                                        </a>
                                    </div>
                                    <div class="widget-header">
                                        <a href="#" class="widget-view">
                                            <div class="icon-area">
                                                <i class="fa fa-shopping-cart"></i>
                                            </div>
                                            <small class="text"> Giỏ hàng </small>
                                        </a>
                                    </div>
                                    <div class="widget-header mr-3">
                                        <a href={`/dang-nhap`} class="widget-view">
                                            <div class="icon-area">
                                                <i class="fa fa-user"></i>
                                            </div>
                                            <small class="text"> Đăng nhập </small>
                                        </a>
                                    </div>
                                    <div class="widget-header mr-3">
                                        <a href={`/dang-ky`} class="widget-view">
                                            <div class="icon-area">
                                                <i class="fa fa-user"></i>

                                            </div>
                                            <small class="text"> Đăng ký </small>
                                        </a>
                                    </div>
                                </div>
                                {/* <!-- widgets-wrap.// --> */}
                            </div>
                            {/* <!-- col.// --> */}
                        </div>
                        {/* <!-- row.// --> */}
                    </div>
                    {/* <!-- container.// --> */}
                </section>
                {/* <!-- header-main .// --> */}



                <nav class="navbar navbar-main navbar-expand-lg border-bottom">
                    <div class="container">
                        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#main_nav" aria-controls="main_nav" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>

                        <div class="collapse navbar-collapse" id="main_nav">
                            <ul class="navbar-nav">
                                <li class="nav-item dropdown">
                                    <a class="nav-link dropdown-toggle" data-toggle="dropdown" href="#"> <i class="fa fa-bars text-muted mr-2"></i> Trang Chủ </a>
                                    <div class="dropdown-menu dropdown-large">
                                        <nav class="row">
                                            <div class="col-6">
                                                <a href="page-index-1.html">Home page 1</a>
                                                <a href="page-index-2.html">Home page 2</a>
                                                <a href="page-category.html">All category</a>
                                                <a href="page-listing-large.html">Listing list</a>
                                                <a href="page-listing-grid.html">Listing grid</a>
                                                <a href="page-shopping-cart.html">Shopping cart</a>
                                                <a href="page-detail-product.html">Product detail</a>
                                                <a href="page-content.html">Page content</a>
                                                <a href="page-user-login.html">Page login</a>
                                                <a href="page-user-register.html">Page register</a>
                                            </div>
                                            <div class="col-6">
                                                <a href="page-profile-main.html">Profile main</a>
                                                <a href="page-profile-orders.html">Profile orders</a>
                                                <a href="page-profile-seller.html">Profile seller</a>
                                                <a href="page-profile-wishlist.html">Profile wishlist</a>
                                                <a href="page-profile-setting.html">Profile setting</a>
                                                <a href="page-profile-address.html">Profile address</a>
                                                <a href="rtl-page-index-1.html">RTL home page</a>
                                                <a href="page-components.html" target="_blank">More components</a>
                                            </div>
                                        </nav>
                                        {/* <!--  row end .// --> */}
                                    </div>
                                    {/* <!--  dropdown-menu dropdown-large end.// --> */}
                                </li>
                                <li class="nav-item dropdown">
                                    <a class="nav-link dropdown-toggle" data-toggle="dropdown" href="#">Nhà Đất Bán </a>
                                    <div class="dropdown-menu dropdown-large">
                                        <nav class="row">
                                            <div class="col-6">
                                                <a href="page-index-1.html">Bán nhà đất</a>
                                                <a href="page-index-1.html">Bán căn hộ chung cư</a>
                                                <a href="page-index-2.html">Bán nhà riêng</a>
                                                <a href="page-category.html">Bán nhà biệt thự, liền kề</a>
                                            </div>
                                            <div class="col-6">
                                                <a href="page-listing-large.html">Bán nhà mặt phố</a>
                                                <a href="page-listing-grid.html">Bán đất nền dự án</a>
                                                <a href="page-shopping-cart.html">Bán trang trại, khu nghĩ dưỡng</a>
                                                <a href="page-detail-product.html">Bán kho, nhà xưởng</a>
                                                <a href="page-content.html" target="_blank">Bán loại bất động sản khác</a>
                                            </div>
                                        </nav>
                                        {/* <!--  row end .// --> */}
                                    </div>
                                    {/* <!--  dropdown-menu dropdown-large end.// --> */}
                                </li>
                                <li class="nav-item dropdown">
                                    <a class="nav-link dropdown-toggle" data-toggle="dropdown" href="#"> Nhà Đất Cho Thuê </a>
                                    <div class="dropdown-menu dropdown-large">
                                        <nav class="row">
                                            <div class="col-6">
                                                <a href="page-index-1.html">Nhà đất cho thuê</a>
                                                <a href="page-index-1.html">Cho thuê căn hộ chung cư</a>
                                                <a href="page-index-2.html">Cho thuê nhà riêng</a>
                                                <a href="page-category.html">Cho thuê nhà trọ, phòng trọ</a>
                                            </div>
                                            <div class="col-6">
                                                <a href="page-listing-large.html">Cho thuê nhà mặt phố</a>
                                                <a href="page-listing-grid.html">Cho thuê văn phòng </a>
                                                <a href="page-shopping-cart.html">Cho thuê cửa hàng</a>
                                                <a href="page-detail-product.html">Cho thuê kho, nhà xưởng, đất</a>
                                                <a href="page-content.html" target="_blank">Cho thuê loại bất động sản khác</a>
                                            </div>
                                        </nav>
                                        {/* <!--  row end .// --> */}
                                    </div>
                                    {/* <!--  dropdown-menu dropdown-large end.// --> */}
                                </li> <li class="nav-item dropdown">
                                    <a class="nav-link dropdown-toggle" data-toggle="dropdown" href="#"> Nội & Ngoại Thất </a>
                                    <div class="dropdown-menu dropdown-large">
                                        <nav class="row">
                                            <div class="col-6">
                                                <a href="page-index-1.html">Nội thất</a>
                                                <a href="page-index-2.html">Ngoại thất</a>
                                                <a href="page-category.html">Xây dựng</a>
                                                <a href="page-listing-large.html">Kiến trúc</a>

                                            </div>
                                            <div class="col-6">
                                                <a href="page-listing-grid.html">Tư vấn nội & ngoại thất</a>
                                                <a href="page-shopping-cart.html">Mách bạn</a>
                                                <a href="page-detail-product.html">Mua sắm</a>
                                                <a href="page-components.html" target="_blank">Nội & ngoại thất khác</a>
                                            </div>
                                        </nav>
                                        {/* <!--  row end .// --> */}
                                    </div>
                                    {/* <!--  dropdown-menu dropdown-large end.// --> */}
                                </li>
                                <li class="nav-item dropdown">
                                    <a class="nav-link dropdown-toggle" data-toggle="dropdown" href="#"> Phong Thủy </a>
                                    <div class="dropdown-menu dropdown-large">
                                        <nav class="row">
                                            <div class="col-6">
                                                <a href="page-index-1.html">Phong thủy toàn cảnh</a>
                                                <a href="page-index-2.html">Tư vấn phong thủy</a>
                                                <a href="page-category.html">Phong thủy nhà ở</a>

                                            </div>
                                            <div class="col-6">
                                                <a href="page-listing-large.html">Phong thủy văn phòng</a>
                                                <a href="page-listing-grid.html">Phong thủy theo tuổi</a>
                                                <a href="page-components.html" target="_blank">Phong thủy khác</a>
                                            </div>
                                        </nav>
                                        {/* <!--  row end .// --> */}
                                    </div>
                                    {/* <!--  dropdown-menu dropdown-large end.// --> */}
                                </li>
                                <li class="nav-item dropdown">
                                    <a class="nav-link dropdown-toggle" data-toggle="dropdown" href="#"> Tin Tức </a>
                                    <div class="dropdown-menu dropdown-large">
                                        <nav class="row">
                                            <div class="col-6">
                                                <a href="page-index-1.html">BDS & Covid-19</a>
                                                <a href="page-index-2.html">Tin thị trường</a>
                                                <a href="page-category.html">Phân tích nhận định</a>
                                                <a href="page-listing-large.html">Chính sách quản lý</a>
                                                <a href="page-listing-grid.html">Thông tin quy hoạch</a>

                                            </div>
                                            <div class="col-6">

                                                <a href="page-shopping-cart.html">Bất động sản thế giới</a>
                                                <a href="page-detail-product.html">Tài chính kế toán</a>
                                                <a href="page-content.html">Tư vấn luật</a>
                                                <a href="page-user-login.html">lời khuyên</a>
                                                <a href="page-components.html" target="_blank">Tin tức khác</a>
                                            </div>
                                        </nav>
                                        {/* <!--  row end .// --> */}
                                    </div>
                                    {/* <!--  dropdown-menu dropdown-large end.// --> */}
                                </li>
                                <li class="nav-item dropdown">
                                    <a class="nav-link dropdown-toggle" data-toggle="dropdown" href="#"> Dự Án </a>
                                    <div class="dropdown-menu dropdown-large">
                                        <nav class="row">
                                            <div class="col-6">
                                                <a href="page-index-1.html">Căn hộ chung cư</a>
                                                <a href="page-index-2.html">Cao ốc văn phòng</a>
                                                <a href="page-category.html">Trung tâm thương mại</a>
                                                <a href="page-listing-large.html">Khu đô thị mới</a>

                                            </div>
                                            <div class="col-6">
                                                <a href="page-listing-grid.html">Khu phức tạp</a>
                                                <a href="page-shopping-cart.html">Khu ở xã hội</a>
                                                <a href="page-detail-product.html">Khu nghĩ dưỡng, sinh thái</a>
                                                <a href="page-content.html">Khu công nghiệp</a>
                                                <a href="page-components.html" target="_blank">Dự án khác</a>
                                            </div>
                                        </nav>
                                        {/* <!--  row end .// --> */}
                                    </div>
                                    {/* <!--  dropdown-menu dropdown-large end.// --> */}
                                </li>
                            </ul>
                            <ul class="navbar-nav ml-md-auto">
                                <li class="nav-item">
                                    <a class="nav-link" href="#" download="taiungdung.application">Tải ứng dụng</a>
                                </li>
                                <li class="nav-item dropdown">
                                    <a class="nav-link dropdown-toggle" href="http://example.com" data-toggle="dropdown">Tiếng Anh</a>
                                    <div class="dropdown-menu dropdown-menu-right">
                                        <a class="dropdown-item" href="#">Tiếng Nga</a>
                                        <a class="dropdown-item" href="#">Tiếng Pháp</a>
                                        <a class="dropdown-item" href="#">Tiếng Tây Ban Nha</a>
                                        <a class="dropdown-item" href="#">Tiếng Trung Quốc</a>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        {/* <!-- collapse .// --> */}
                    </div>
                    {/* <!-- container .// --> */}
                </nav>

            </header>
            //  <!-- section-header.// -->

        );
    }
}
export default Header