import React, { Component } from 'react'
import HomeServices from '../../HomeServices/HomeServices';
import axios from 'axios';
import NumberFormat from 'react-number-format';
import { Redirect } from 'react-router'
import { connect } from "react-redux";
import { logout } from "../../Components/Header/ActionAuth/Auth";
import { clearMessage } from "../../Components/Header/ActionAuth/Message";
import { Router } from "react-router-dom";
import { history } from '../../Components/Header/HelperssAuth/History';
import Home from '../Home/Home';
class Dashboarch extends Component {
    constructor(props) {
        super(props);

        this.state = {
            searchs: [],
            search: '',
            currentPage: 1,
            productsPerPage: 6,
            totalPages: null,
            totalElements: null,


            currentUser: undefined,
        };
        this.searchChange = this.searchChange.bind(this);
        this.searchData = this.searchData.bind(this);
        this.logOut = this.logOut.bind(this);

        this.productService = new HomeServices();


        history.listen((location) => {
            props.dispatch(clearMessage()); // clear message when changing location
        });
    }
    componentDidMount() {
        const user = this.props.user;

        if (user) {
            this.setState({
                currentUser: user

            });
        }
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

        this.refs.fieldSearch.searchs = "";


    };
    renderproductsearch = () => {

        return this.state.searchs.map((searchs) => {
            return (
                <article class="card card-product-list" key={searchs.id}>
                    <h4>Đã tìm kiếm</h4>
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
                                </div>
                                {/* <!-- rating-wrap.// --> */}

                                <p class="mb-3">
                                    <span class="tag"> <i class="fa fa-check"></i> Có sẵn</span>
                                    <span class="tag"> {searchs.roomInteger} phòng </span>
                                    {/* <span class="tag"> 80 lượt xem </span> */}
                                    {/* <span class="tag"> Russia </span> */}
                                </p>
                                <p>
                                    {`${searchs.descriptionString.substring(0, 115)}... `}<a href={`/index=${searchs.idLong}`}> Đọc thêm</a>
                                </p>
                            </div>
                            {/* <!-- info-main.// --> */}
                        </div>
                        {/* <!-- col.// --> */}
                        <aside class="col-sm-3">
                            <div class="info-aside">
                                <div class="price-wrap">
                                    {/* <span class="h5 price" style={{ color: `red` }}>Giá: <NumberFormat value={products.priceDouble} displayType={'text'} thousandSeparator={true} /></span> */}
                                    <span class="h5 price" style={{ color: `red` }}>Giá: {searchs.pricesaleDouble.toLocaleString('vi-VN')} </span>
                                    <small class="text-muted">/sản phẩm</small>
                                </div>
                                {/* <!-- price-wrap.// --> */}
                                {/* <small class="text-warning">Paid shipping</small>

                                <p class="text-muted mt-3">Grand textile Co</p> */}
                                <p class="mt-3">
                                    <a href={`/lien-he`} class="btn btn-outline-primary"> <i class="fa fa-envelope"></i> Liên hệ </a>
                                    <a href={`/luu`} class="btn btn-light"><i class="fa fa-heart"></i> Lưu </a>
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
        return (

            <div class="wrapper">
                {/* <!-- Navbar --> */}
                <nav class="main-header navbar navbar-expand navbar-white navbar-light">
                    {/* <!-- Left navbar links --> */}
                    <ul class="navbar-nav">
                        <li class="nav-item">
                            <a class="nav-link" data-widget="pushmenu" href="/" role="button"><i class="fas fa-bars"></i></a>
                        </li>
                        <li class="nav-item d-none d-sm-inline-block">
                            <a href="/Admin" class="nav-link">Trang Chủ</a>
                        </li>
                        <li class="nav-item d-none d-sm-inline-block">
                            <a href="/lien-he" class="nav-link">Liên hệ</a>
                        </li>
                    </ul>

                    {/* <!-- SEARCH FORM --> */}
                    <form class="form-inline ml-3" >
                        <div class="input-group input-group-sm">
                            <input name="search" product={this.state.product} ref="fieldSearch" onChange={this.searchChange} value={this.state.search} type="text" class="form-control" placeholder="Tìm Kiếm" />
                            <div class="input-group-append">
                                <button class="btn btn-navbar" type="submit" onClick={this.searchData}>
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
                            <Router history={history}>
                              <Home/>
                            </Router>
                        </div>
                    </div>
                    <div className="col-9">
                        <div class="content-wrapper my-2">
                            <section class="content">
                                <div class="card">

                                    {
                                        this.state.search
                                            ?
                                            this.renderproductsearch()
                                            :
                                            <div>
                                                <div class="card-header">
                                                    <h3 class="card-title">
                                                        <strong class="text-danger">tt</strong>
                                                    </h3>

                                                    <div class="card-tools">
                                                        <a class="btn btn-sm btn-success" href="#"><i class="fas fa-plus-square"></i> </a>
                                                        <a class="btn btn-sm btn-danger" href="#"><i class="fas fa-trash"></i> </a>
                                                    </div>
                                                </div>
                                                <div class="card-body">
                                                    nd
                                                </div>
                                            </div>
                                    }

                                </div>
                            </section>
                        </div>
                    </div>
                </div>
                {/* <!-- Control Sidebar --> */}
                <aside class="control-sidebar control-sidebar-dark">
                    {/* <!-- Control sidebar content goes here --> */}
                </aside>
                {/* <!-- /.control-sidebar --> */}
            </div >

        );
    }
}
function mapStateToProps(state) {
    const { user } = state.auth;
    return {
        user,
    };
}


export default connect(mapStateToProps)(Dashboarch);
