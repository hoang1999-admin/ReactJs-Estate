import React from 'react'
export default function Header() {

    return (
        <header class="section-header">
            <section class="header-main border-bottom">
                <div class="container">
                    <div class="row align-items-center">
                        <div class="col-xl-2 col-lg-3 col-md-12">
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
                                        <option value="codex">Đặc biệt</option>
                                        <option value="comments">Tốt nhất</option>
                                        <option value="content">Chậm nhất</option>
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
                        <div class="col-xl-4 col-lg-4 col-md-6">
                            <div class="widgets-wrap float-md-right">
                                <div class="widget-header mr-3">
                                    <a href="#" class="widget-view">
                                        <div class="icon-area">
                                            <i class="fa fa-user"></i>
                                            <span class="notify">3</span>
                                        </div>
                                        <small class="text"> Thông tin  </small>
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
                                            <i class="fa fa-store"></i>
                                        </div>
                                        <small class="text"> Đặt hàng </small>
                                    </a>
                                </div>
                                <div class="widget-header">
                                    <a href="#" class="widget-view">
                                        <div class="icon-area">
                                            <i class="fa fa-shopping-cart"></i>
                                        </div>
                                        <small class="text"> Giõ hàng </small>
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
                                <a class="nav-link dropdown-toggle" data-toggle="dropdown" href="#"> Nhà Đất Cho Thuê </a>
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
                                <a class="nav-link dropdown-toggle" data-toggle="dropdown" href="#"> Tuyển Dụng </a>
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
                                <a class="nav-link dropdown-toggle" data-toggle="dropdown" href="#"> Tin Tức </a>
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
                                <a class="nav-link dropdown-toggle" data-toggle="dropdown" href="#"> Dự Án </a>
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
                        </ul>
                        <ul class="navbar-nav ml-md-auto">
                            <li class="nav-item">
                                <a class="nav-link" href="#">Tải ứng dụng</a>
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