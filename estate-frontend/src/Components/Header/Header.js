import React, { Component } from 'react'
import HomeServices from '../../HomeServices/HomeServices';
import axios from 'axios';
import NumberFormat from 'react-number-format';
import { Redirect } from 'react-router'
import { connect } from "react-redux";
import { logout } from "../Header/ActionAuth/Auth";
import { clearMessage } from "../Header/ActionAuth/Message";
import { Router } from "react-router-dom";
import { history } from '../Header/HelperssAuth/History';
import Text from './Language/Text';
class Header extends Component {

    constructor(props) {
        super(props);

        this.state = {
            category: [],
            categorysale: [],
            categoryrent: [],
            categoryapply: [],
            categoryfurnitureandextor: [],
            categoryfengshui: [],
            categoryrecruitment: [],
            categoryexample: [],
            searchs: [],
            search: '',
            currentPage: 1,
            productsPerPage: 6,
            totalPages: null,
            totalElements: null,

            showModeratorBoard: false,
            showAdminBoard: false,
            currentUser: undefined,
        };
        this.searchChange = this.searchChange.bind(this);
        this.searchData = this.searchData.bind(this);
        this.logOut = this.logOut.bind(this);

        this.productService = new HomeServices();
        this.categoryService = new HomeServices();

        history.listen((location) => {
            props.dispatch(clearMessage()); // clear message when changing location
        });
    }
    componentDidMount() {
        const user = this.props.user;

        if (user) {
            this.setState({
                currentUser: user,
                showModeratorBoard: user.roles.includes("ROLE_MODERATOR"),
                showAdminBoard: user.roles.includes("ROLE_ADMIN"),
            });
        }

        this.categoryService.getAllCategorys().then((res) => {
            this.setState({ category: res });
        });
        this.categoryService.getAllCategorySales().then((res) => {
            this.setState({ categorysale: res });
        });
        this.categoryService.getAllCategoryRents().then((res) => {
            this.setState({ categoryrent: res });
        });
        this.categoryService.getAllCategoryApplys().then((res) => {
            this.setState({ categoryapply: res });
        });
        this.categoryService.getAllCategoryFurnitureandexteriors().then((res) => {
            this.setState({ categoryfurnitureandextor: res });
        });
        this.categoryService.getAllCategoryFengshuis().then((res) => {
            this.setState({ categoryfengshui: res });
        });
        this.categoryService.getAllCategoryRecruitments().then((res) => {
            this.setState({ categoryrecruitment: res });
        });
        this.categoryService.getAllCategoryExamples().then((res) => {
            this.setState({ categoryexample: res });
        });
    }
    searchChange = (event) => {
        this.setState({
            search: event.target.value
        });
    };
    searchData = (event, currentPage) => {
        event.preventDefault();
        currentPage -= 1;
        axios.get("http://localhost:8080/api/v1/product/search/searchText=" + this.state.search + "?page=" + currentPage + "&size=" + this.state.productsPerPage)
            .then(response => response.data)
            .then((data) => {
                this.setState({
                    searchs: data.content,
                    totalPages: data.totalPages,
                    totalElements: data.totalElements,
                    currentPage: data.number + 1
                });


            });

        this.refs.fieldSearch = "";
        <Redirect to="/tim-kiem" />

    };
    rendercategory = () => {

        return this.state.category.map((categorys, key) => {
            return (
                <a href={`/loai-san-pham/index=${categorys.idLong}`} key={key}>{categorys.titleString}</a>
            );
        });
    }
    rendercategorysale = () => {

        return this.state.categorysale.map((categorys, key) => {
            return (

                <a href={`/loai-san-pham/index=${categorys.idLong}`} key={key}>{categorys.titleString}</a>


            );
        });
    }
    rendercategoryrent = () => {

        return this.state.categoryrent.map((categorys, key) => {
            return (

                <a href={`/loai-san-pham/index=${categorys.idLong}`} key={key}>{categorys.titleString}</a>


            );
        });
    }
    rendercategoryapply = () => {

        return this.state.categoryapply.map((categorys, key) => {
            return (

                <a href={`/tuyen-dung/index=${categorys.idLong}`} key={key}>{categorys.titleString}</a>


            );
        });
    }
    rendercategoryfurnitureandextor = () => {

        return this.state.categoryfurnitureandextor.map((categorys, key) => {
            return (

                <a href={`/noi-va-ngoai-that/index=${categorys.idLong}`} key={key}>{categorys.titleString}</a>


            );
        });
    }
    rendercategoryfengshui = () => {

        return this.state.categoryfengshui.map((categorys, key) => {
            return (

                <a href={`/phong-thuy/index=${categorys.idLong}`} key={key}>{categorys.titleString}</a>


            );
        });
    }
    rendercategoryrecruitment = () => {

        return this.state.categoryrecruitment.map((categorys, key) => {
            return (

                <a href={`/tin-tuc/index=${categorys.idLong}`} key={key}>{categorys.titleString}</a>


            );
        });
    }
    rendercategoryexample = () => {

        return this.state.categoryexample.map((categorys, key) => {
            return (

                <a href={`/du-an/index=${categorys.idLong}`} key={key}>{categorys.titleString}</a>


            );
        });
    }

    renderproductsearch = () => {

        return this.state.searchs.map((searchs) => {
            return (
                <article class="card card-product-list" key={searchs.id}>
                    <h4>???? t??m ki???m</h4>
                    <div class="row no-gutters">
                        <aside class="col-md-3">
                            <a href={`/index=${searchs.idLong}`} class="img-wrap" style={{ width: `100%` }}>
                                <span class="badge badge-danger"> NEW </span>
                                <img src={`/resources/images/items/${searchs.imageString}`} />
                            </a>
                        </aside>
                        {/* <!-- col.// --> */}
                        <div class="col-md-6">
                            <div class="info-main">
                                <a href={`/index=${searchs.idLong}`} class="h5 title">{searchs.titleString}</a>
                                <div class="rating-wrap mb-2">
                                    <ul class="rating-stars">
                                        <li style={{ width: `100%` }} class="stars-active">
                                            <i class="fa fa-star"></i> <i class="fa fa-star"></i>
                                            <i class="fa fa-star"></i> <i class="fa fa-star"></i>
                                            <i class="fa fa-star"></i>
                                        </li>
                                        <li>
                                            <i class="fa fa-star"></i> <i class="fa fa-star"></i>
                                            <i class="fa fa-star"></i> <i class="fa fa-star"></i>
                                            <i class="fa fa-star"></i>
                                        </li>
                                    </ul>
                                    <div class="label-rating">9/10</div>
                                    <div class="label-rating"> <i class="fas fa-history" style={{color:`green`}}></i> {searchs.createdatTimestamp}</div>
                                </div>
                                {/* <!-- rating-wrap.// --> */}

                                <p class="mb-3">
                                    <span class="tag"> <i class="fa fa-check"></i> C?? s???n</span>
                                    <span class="tag"> {searchs.roomInteger} ph??ng </span>
                                    {/* <span class="tag"> 80 l?????t xem </span> */}
                                    {/* <span class="tag"> Russia </span> */}
                                </p>
                                <p>
                                    {`${searchs.descriptionString.substring(0, 115)}... `}<a href={`/index=${searchs.idLong}`}> ?????c th??m</a>
                                </p>
                            </div>
                            {/* <!-- info-main.// --> */}
                        </div>
                        {/* <!-- col.// --> */}
                        <aside class="col-sm-3">
                            <div class="info-aside">
                                <div class="price-wrap">
                                    {/* <span class="h5 price" style={{ color: `red` }}>Gi??: <NumberFormat value={products.priceDouble} displayType={'text'} thousandSeparator={true} /></span> */}
                                    <span class="h5 price" style={{ color: `red` }}>Gi??: {searchs.pricesaleDouble.toLocaleString('vi-VN')} </span>
                                    <small class="text-muted">/s???n ph???m</small>
                                </div>
                                {/* <!-- price-wrap.// --> */}
                                {/* <small class="text-warning">Paid shipping</small>

                                <p class="text-muted mt-3">Grand textile Co</p> */}
                                <p class="mt-3">
                                    <a href={`/lien-he`} class="btn btn-outline-primary"> <i class="fa fa-envelope"></i> Li??n h??? </a>
                                    <a href={`/luu`} class="btn btn-light"><i class="fa fa-heart"></i> L??u </a>
                                </p>


                            </div>
                            {/* <!-- info-aside.// --> */}
                        </aside>
                        {/* <!-- col.// --> */}
                    </div>
                    {/* <!-- row.// --> */}
                </article>
                // {/* <!-- card-product .// --> */}
            );
        });
    }

    logOut() {
        this.props.dispatch(logout());
    }

    render() {
        const { currentUser, showModeratorBoard, showAdminBoard } = this.state;
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
                                <form class="search-header" action="/tim-kiem" ref="fieldSearch">
                                    <div class="input-group w-100">
                                        <select class="custom-select border-right">
                                            <option value="">T???t c??? lo???i</option>
                                            <option value="codex">C??n h??? chung c??</option>
                                            <option value="comments">C??c lo???i nh?? b??n</option>
                                            <option value="content">C??c lo???i ?????t b??n</option>
                                            <option value="content">Trang tr???i khu ngh?? d?????ng</option>
                                            <option value="content">Kho, nh?? x?????ng</option>
                                        </select>
                                        <input name="search" product={this.state.product} ref="fieldSearch" onChange={this.searchChange} value={this.state.search} type="text" class="form-control" placeholder="T??m Ki???m" />

                                        <div class="input-group-append">
                                            <button class="btn btn-primary" ref="fieldSearch" onClick={this.searchData} type="submit">
                                                <i class="fa fa-search"></i> T??m Ki???m
                                            </button>
                                        </div>
                                    </div>
                                </form>
                                {/* <!-- search-wrap .end// --> */}
                            </div>
                            {/* <!-- col.// --> */}

                            <div class="col-xl-5 col-lg-4 col-md-6">
                                <div class="widgets-wrap float-md-right">
                                    {/* <div class="widget-header mr-3">
                                        <a href="/test" class="widget-view">
                                            <div class="icon-area">
                                                <i class="fa fa-comment-dots"></i>

                                            </div>
                                            <small class="text"> Test </small>
                                        </a>
                                    </div>
                                    <div class="widget-header mr-3">
                                        <a href="/test2" class="widget-view">
                                            <div class="icon-area">
                                                <i class="fa fa-comment-dots"></i>

                                            </div>
                                            <small class="text"> Test2 </small>
                                        </a>
                                    </div> <div class="widget-header mr-3">
                                        <a href="/test3" class="widget-view">
                                            <div class="icon-area">
                                                <i class="fa fa-comment-dots"></i>

                                            </div>
                                            <small class="text"> Test3 </small>
                                        </a>
                                    </div> */}
                                    <div class="widget-header mr-3">
                                        <a href="#" class="widget-view">
                                            <div class="icon-area">
                                                <i class="fa fa-comment-dots"></i>
                                                <span class="notify">1</span>
                                            </div>
                                            <small class="text"> Th??ng b??o </small>
                                        </a>
                                    </div>
                                    <div class="widget-header mr-3">
                                        <a href="#" class="widget-view">
                                            <div class="icon-area">
                                                <i class="fa fa-heart"></i>
                                            </div>
                                            <small class="text"> L??u </small>
                                        </a>
                                    </div>
                                    <div class="widget-header">
                                        <a href={`/gio-hang`} class="widget-view">
                                            <div class="icon-area">
                                                <i class="fa fa-shopping-cart"></i>
                                            </div>
                                            <small class="text"> Gi??? h??ng </small>
                                        </a>
                                    </div>
                                    {showModeratorBoard && (
                                        <div class="widget-header mr-3">
                                            <a href={`/nguoi-trung-gian`} class="widget-view">
                                                <div class="icon-area">
                                                    <i class="fa fa-user"></i>
                                                </div>
                                                <small class="text">  Moderator </small>
                                            </a>
                                        </div>
                                    )}

                                    {showAdminBoard && (
                                        <div class="widget-header mr-3">
                                            <a href={`/Admin`} class="widget-view">
                                                <div class="icon-area">
                                                    <i class="fas fa-user-cog"></i>
                                                </div>
                                                <small class="text">  Qu???n Tr??? </small>
                                            </a>
                                        </div>
                                    )}
                                    {currentUser ? (

                                        <div class="widgets-wrap float-md-right">
                                            <div class="widget-header mr-3">
                                                <a href={`/thong-tin-ca-nhan`} class="widget-view">
                                                    <div class="icon-area">
                                                        <i class="fa fa-user"></i>
                                                    </div>
                                                    <small class="text">  {currentUser.username} </small>
                                                </a>
                                            </div>
                                            <Router history={history}>
                                                <div class="widget-header mr-3" onClick={this.logOut}>
                                                    <a href={`/`} class="widget-view">
                                                        <div class="icon-area">
                                                            <i class="fa fa-user"></i>

                                                        </div>
                                                        <small class="text" > ????ng Xu???t </small>
                                                    </a>
                                                </div>
                                            </Router>
                                        </div>

                                    ) : (
                                        <div class="widgets-wrap float-md-right">
                                            <div class="widget-header mr-3">
                                                <a href={`/dang-nhap`} class="widget-view">
                                                    <div class="icon-area">
                                                        <i class="fa fa-user"></i>
                                                    </div>
                                                    <small class="text"> ????ng nh???p </small>
                                                </a>

                                            </div>
                                            <div class="widget-header mr-3">
                                                <a href={`/dang-ky`} class="widget-view">
                                                    <div class="icon-area">
                                                        <i class="fa fa-user"></i>

                                                    </div>
                                                    <small class="text"> ????ng k?? </small>
                                                </a>
                                            </div>
                                        </div>

                                    )}

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
                                <a class="nav-link " href={`/`}> <i class="fa fa-bars text-muted mr-2"></i>Trang ch???</a>
                                    {/* <!--  dropdown-menu dropdown-large end.// --> */}
                                </li>
                                <li class="nav-item dropdown">
                                    <a class="nav-link dropdown-toggle" data-toggle="dropdown" href="#">Nh?? ?????t B??n </a>
                                    <div class="dropdown-menu dropdown-large ">
                                        <nav class="row">
                                            <div class="col-12">
                                                {this.rendercategorysale()}
                                            </div>
                                        </nav>
                                        {/* <!--  row end .// --> */}
                                    </div>
                                    {/* <!--  dropdown-menu dropdown-large end.// --> */}
                                </li>
                                <li class="nav-item dropdown">
                                    <a class="nav-link dropdown-toggle" data-toggle="dropdown" href="#"> Nh?? ?????t Cho Thu?? </a>
                                    <div class="dropdown-menu dropdown-large">
                                        <nav class="row">
                                            <div class="col-12">
                                                {this.rendercategoryrent()}
                                            </div>
                                        </nav>
                                        {/* <!--  row end .// --> */}
                                    </div>
                                    {/* <!--  dropdown-menu dropdown-large end.// --> */}
                                </li> <li class="nav-item dropdown">
                                    <a class="nav-link dropdown-toggle" data-toggle="dropdown" href="#"> N???i & Ngo???i Th???t </a>
                                    <div class="dropdown-menu dropdown-large">
                                        <nav class="row">
                                            <div class="col-12">
                                                {this.rendercategoryfurnitureandextor()}
                                            </div>
                                        </nav>
                                        {/* <!--  row end .// --> */}
                                    </div>
                                    {/* <!--  dropdown-menu dropdown-large end.// --> */}
                                </li>
                                <li class="nav-item dropdown">
                                    <a class="nav-link dropdown-toggle" data-toggle="dropdown" href="#"> Phong Th???y </a>
                                    <div class="dropdown-menu dropdown-large">
                                        <nav class="row">
                                            <div class="col-12">
                                                {this.rendercategoryfengshui()}
                                            </div>
                                        </nav>
                                        {/* <!--  row end .// --> */}
                                    </div>
                                    {/* <!--  dropdown-menu dropdown-large end.// --> */}
                                </li>
                                <li class="nav-item dropdown">
                                    <a class="nav-link dropdown-toggle" data-toggle="dropdown" href="#"> Tin T???c </a>
                                    <div class="dropdown-menu dropdown-large">
                                        <nav class="row">
                                            <div class="col-12">

                                                {this.rendercategoryrecruitment()}
                                            </div>
                                        </nav>
                                        {/* <!--  row end .// --> */}
                                    </div>
                                    {/* <!--  dropdown-menu dropdown-large end.// --> */}
                                </li>
                                <li class="nav-item dropdown">
                                    <a class="nav-link dropdown-toggle" data-toggle="dropdown" href="#"> Tuy???n D???ng </a>
                                    <div class="dropdown-menu dropdown-large">
                                        <nav class="row">
                                            <div class="col-lg-12">
                                                {this.rendercategoryapply()}
                                            </div>
                                        </nav>
                                        {/* <!--  row end .// --> */}
                                    </div>
                                    {/* <!--  dropdown-menu dropdown-large end.// --> */}
                                </li>
                                <li class="nav-item dropdown">
                                    <a class="nav-link dropdown-toggle" data-toggle="dropdown" href="#"> D??? ??n </a>
                                    <div class="dropdown-menu dropdown-large">
                                        <nav class="row">
                                            <div class="col-12">
                                                {this.rendercategoryexample()}
                                            </div>
                                        </nav>
                                        {/* <!--  row end .// --> */}
                                    </div>
                                    {/* <!--  dropdown-menu dropdown-large end.// --> */}
                                </li>
                            </ul>
                            <ul class="navbar-nav ml-md-auto">
                                {/* <li class="nav-item">
                                    <a class="nav-link" href="#" download="taiungdung.application">T???i ???ng d???ng</a>
                                </li> */}
                                <li class="nav-item dropdown">
                                   <Text/>
                                </li>
                            </ul>
                        </div>
                        {/* <!-- collapse .// --> */}
                    </div>
                    {/* <!-- container .// --> */}
                </nav>
                {this.renderproductsearch()}
            </header>
            //  <!-- section-header.// -->

        );
    }
}
function mapStateToProps(state) {
    const { user } = state.auth;
    return {
        user,
    };
}


export default connect(mapStateToProps)(Header);