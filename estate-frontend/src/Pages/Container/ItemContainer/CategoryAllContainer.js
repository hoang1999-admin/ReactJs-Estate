/* eslint-disable no-script-url */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable no-redeclare */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable array-callback-return */
/* eslint-disable eqeqeq */
/* eslint-disable react/no-direct-mutation-state */
import React, { Component } from 'react';
import HomeServices from '../../../HomeServices/HomeServices';
import axios from "axios";
import Header from '../../../Components/Header/Header';
import Footer from '../../../Components/Footer/Footer';
import Subcribe from '../../../Components/Subcribe/Subcribe';
import Accep from '../../../Components/Accep/Accep';
import moment from 'moment';
import NumberFormat from 'react-number-format';

class CategoryAllContainer extends Component {

    constructor(props) {
        super(props);
        this.state = {
            id: this.props.match.params.id,
            category: {},
            search: '',
            filters: [],
            filterss: [],
            categorys: [],
            categorybyproduct: [],
            product: [],
            currentPage: 1,
            productsPerPage: 6,
            checked: false,
            // price
            minValue: 1000000,
            maxValue: 10000000000,
            step: 1000,
            firstValue: null,
            secondValue: null,
            // selection
            value1: null,

        };

        this.categoryService = new HomeServices();
        this.productService = new HomeServices();
        this.categoryproductService = new HomeServices();
        this.countproductService = new HomeServices();

        this.changePage = this.changePage.bind(this);
        this.prevPage = this.prevPage.bind(this);
        this.nextPage = this.nextPage.bind(this);
        this.firstPage = this.firstPage.bind(this);
        this.lastPage = this.lastPage.bind(this);
        this.searchSpace = this.searchSpace.bind(this);
        this.fetchURL = this.fetchURL.bind(this);
        this.fetchURLCategoryId = this.fetchURLCategoryId.bind(this);

        this.handleChangedong = this.handleChangedong.bind(this);
        this.handleChangetay = this.handleChangetay.bind(this);
        this.handleChangenam = this.handleChangenam.bind(this);
        this.handleChangebac = this.handleChangebac.bind(this);
        this.filterless50 = this.filterless50.bind(this);
        this.filterthan50 = this.filterthan50.bind(this);
        this.filterless100 = this.filterless100.bind(this);
        this.filterthan100 = this.filterthan100.bind(this);

        this.handleChange = this.handleChange.bind(this);
        this.handlePrice = this.handlePrice.bind(this);
        this.sortByPriceAsc = this.sortByPriceAsc.bind(this);
        this.sortByPriceDesc = this.sortByPriceDesc.bind(this);
        this.refreshPage = this.refreshPage.bind(this);

    }
    fetchURL(currentPage) {
        currentPage -= 1;
        axios.get(`http://localhost:8080/api/v1/products?page=${currentPage}&size=${this.state.productsPerPage}`)
            .then(response => response.data)
            .then((data) => {
                this.setState({
                    product: data.content,
                    filters: data.content,
                    totalPages: data.totalPages,
                    totalElements: data.totalElements,
                    currentPage: data.number + 1,

                });
            });
    }
    fetchURLCategoryId(currentPage) {
        currentPage -= 1;
        axios.get(`http://localhost:8080/api/v1/productbycategory/index=${this.state.id}?page=${currentPage}&size=${this.state.productsPerPage}`)
            .then(response => response.data)
            .then((data) => {
                this.setState({
                    categorybyproduct: data.content,
                    filterss: data.content,
                    totalPages: data.totalPages,
                    totalElements: data.totalElements,
                    currentPage: data.number + 1,

                });
            });

    }
    componentDidMount() {
        if (this.state.id == null) {
            this.fetchURL(this.state.currentPage);
        } else {

            this.fetchURLCategoryId(this.state.currentPage);
        }
        this.categoryService.getAllCategorysId(this.state.id).then(response => {
            this.setState({ category: response });
        });
        this.categoryService.getAllCategorySalesAndRent().then(response => {
            this.setState({ categorys: response });
        });


    }
    componentWillMount() {
        this.setState({ firstValue: this.state.minValue, secondValue: this.state.maxValue });
    }
    searchSpace = (event) => {
        if (this.state.id == null) {
            let keyword = event.target.value;
            this.setState({ search: keyword })
        }
        else {
            let keyword = event.target.value;
            this.setState({ search: keyword })
        }

    }
    refreshPage() {
        window.location.reload();
    }
    changePage = (event) => {
        let targetPage = parseInt(event.target.value);
        if (this.state.id == null) {
            this.fetchURL(targetPage);
        } else {
            this.fetchURLCategoryId(targetPage);
        }
        this.setState({
            [event.target.name]: targetPage
        });
    };
    firstPage = () => {
        let firstPage = 1;
        if (this.state.currentPage > firstPage) {
            if (this.state.id == null) {
                this.fetchURL(firstPage);
            } else {
                this.fetchURLCategoryId(firstPage);
            }
        }
    };
    prevPage = () => {
        let prevPage = 1;
        if (this.state.currentPage > prevPage) {
            if (this.state.id == null) {
                this.fetchURL(this.state.currentPage -= prevPage);
            } else {
                this.fetchURLCategoryId(this.state.currentPage -= prevPage);
            }
        }
    };
    lastPage = () => {
        let condition = Math.ceil(this.state.totalElements / this.state.productsPerPage);
        if (this.state.currentPage < condition) {
            if (this.state.id == null) {
                this.fetchURL(condition);
            } else {
                this.fetchURLCategoryId(condition);
            }
        }
    };
    nextPage = () => {
        if (this.state.currentPage < Math.ceil(this.state.totalElements / this.state.productsPerPage)) {
            if (this.state.id == null) {
                this.fetchURL(this.state.currentPage += 1);
            } else {
                this.fetchURLCategoryId(this.state.currentPage += 1);
            }
        }
    };

    rendercategory = () => {
        return this.state.categorys.map((categorys, key) => {
            return (
                <ul className="list-menu" key={key}>
                    <li><a href={`/loai-san-pham/index=${categorys.idLong}`} title={categorys.titleString}>{categorys.titleString}</a></li>
                </ul>
            );
        });
    }

    renderproductbycategory = () => {
        if (this.state.checked == false) {
            return this.state.categorybyproduct.filter((products) => {
                if (this.state.search == null)
                    return products
                else if (products.titleString.toLowerCase().includes(this.state.search.toLowerCase())) {
                    return products
                } else if (products.directionString.toLowerCase().includes(this.state.search.toLowerCase())) {
                    return products
                } else if (products.areaString.toLowerCase().includes(this.state.search.toLowerCase())) {
                    return products
                } else if (products.productidLong.toLowerCase().includes(this.state.search.toLowerCase())) {
                    return products
                }else if (products.positionString.toLowerCase().includes(this.state.search.toLowerCase())) {
                    return products
                }
            }).map((products, key) => {
                const dd = moment(products.createdatTimestamp).format("LLLL");

                return (
                    <article className="card card-product-list" key={key}>
                        <div className="row no-gutters">
                            <aside className="col-md-3">
                                <a href={`/index=${products.idLong}`} className="img-wrap" style={{ width: `100%` }}>
                                    {/* <span  className ="badge badge-danger"> NEW </span> */}
                                    <img src={`/resources/images/items/${products.imageString}`} title={products.imageString} alt=""/>
                                </a>
                            </aside>
                            {/* <!-- col.// --> */}
                            <div className="col-md-6">
                                <div className="info-main">
                                    <a href={`/index=${products.idLong}`} className="h5 title" title={products.titleString}>{products.titleString}</a>
                                    <div className="rating-wrap mb-2">
                                        <ul className="rating-stars">
                                            <li style={{ width: `100%` }} className="stars-active">
                                                <i className="fa fa-star"></i> <i className="fa fa-star"></i>
                                                <i className="fa fa-star"></i> <i className="fa fa-star"></i>
                                                <i className="fa fa-star"></i>
                                            </li>
                                            <li>
                                                <i className="fa fa-star"></i> <i className="fa fa-star"></i>
                                                <i className="fa fa-star"></i> <i className="fa fa-star"></i>
                                                <i className="fa fa-star"></i>
                                            </li>
                                        </ul>
                                        <div className="label-rating">9/10</div>
                                        <div className="label-rating"><i className="fas fa-history" style={{ color: `green` }}></i> {dd}</div>
                                    </div>
                                    {/* <!-- rating-wrap.// --> */}

                                    <p className="mb-3">
                                        <span className="tag"> <i className="fa fa-check"></i> C?? s???n </span>
                                        <span className="tag"> M??: {products.productidLong} </span>
                                        <span className="tag"> Ph??ng: {products.roomInteger} ph??ng </span>
                                        <span className="tag"> H?????ng: {products.directionString} </span>
                                        <span className="tag"> Di???n t??ch: {products.areaString} m<sup>2</sup></span>
                                    </p>

                                    <p>
                                        {`${products.descriptionString.substring(0, 115)}... `}<a title={products.descriptionString} href={`/index=${products.idLong}`}> ?????c th??m</a>
                                    </p>

                                </div>
                                {/* <!-- info-main.// --> */}
                            </div>
                            {/* <!-- col.// --> */}
                            <aside className="col-sm-3">
                                <div className="info-aside">
                                    <div className="price-wrap">
                                        {/* <span  className ="h5 price" style={{ color: `red` }}>Gi??: <NumberFormat value={products.priceDouble} displayType={'text'} thousandSeparator={true} /></span> */}
                                        <span className="h5 price" style={{ color: `red` }} title={products.pricesaleDouble}>Gi??: {products.pricesaleDouble.toLocaleString('vi-VN')} </span>
                                        <small className="text-muted">/s???n ph???m</small>
                                    </div>
                                    {/* <!-- price-wrap.// --> */}
                                    {/* <small  className ="text-warning">Paid shipping</small>
    
                                    <p  className ="text-muted mt-3">Grand textile Co</p> */}
                                    <p className="mt-3">
                                        <a href={`/lien-he`} className="btn btn-outline-primary" title="Li??n h???"> <i className="fa fa-envelope"></i> Li??n h??? </a>
                                        <a href={`/luu`} className="btn btn-light" title="L??u"><i className="fa fa-heart"></i> L??u </a>
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

        if (this.state.checked == true && this.state.filterss !== null) {
            return this.state.filterss.filter((products) => {
                if (this.state.search == null)
                    return products
                else if (products.titleString.toLowerCase().includes(this.state.search.toLowerCase())) {
                    return products
                } else if (products.directionString.toLowerCase().includes(this.state.search.toLowerCase())) {
                    return products
                } else if (products.areaString.toLowerCase().includes(this.state.search.toLowerCase())) {
                    return products
                } else if (products.productidLong.toLowerCase().includes(this.state.search.toLowerCase())) {
                    return products
                }else if (products.positionString.toLowerCase().includes(this.state.search.toLowerCase())) {
                    return products
                } else if (this.state.filterss == null)
                    return products
                else if (products.areaString >= 0) {
                    return products
                } else if (products.directionString >= 0) {
                    return products
                }

            }).map((products, key) => {
                const dd = moment(products.createdatTimestamp).format("LLLL");

                return (
                    <article className="card card-product-list" key={key}>
                        <div className="row no-gutters">
                            <aside className="col-md-3">
                                <a href={`/index=${products.idLong}`} className="img-wrap" style={{ width: `100%` }}>
                                    {/* <span  className ="badge badge-danger"> NEW </span> */}
                                    <img src={`/resources/images/items/${products.imageString}`} title={products.imageString} />
                                </a>
                            </aside>
                            {/* <!-- col.// --> */}
                            <div className="col-md-6">
                                <div className="info-main">
                                    <a href={`/index=${products.idLong}`} className="h5 title" title={products.titleString}>{products.titleString}</a>
                                    <div className="rating-wrap mb-2">
                                        <ul className="rating-stars">
                                            <li style={{ width: `100%` }} className="stars-active">
                                                <i className="fa fa-star"></i> <i className="fa fa-star"></i>
                                                <i className="fa fa-star"></i> <i className="fa fa-star"></i>
                                                <i className="fa fa-star"></i>
                                            </li>
                                            <li>
                                                <i className="fa fa-star"></i> <i className="fa fa-star"></i>
                                                <i className="fa fa-star"></i> <i className="fa fa-star"></i>
                                                <i className="fa fa-star"></i>
                                            </li>
                                        </ul>
                                        <div className="label-rating">9/10</div>
                                        <div className="label-rating"><i className="fas fa-history" style={{ color: `green` }}></i> {dd}</div>
                                    </div>
                                    {/* <!-- rating-wrap.// --> */}

                                    <p className="mb-3">
                                        <span className="tag"> <i className="fa fa-check"></i> C?? s???n </span>
                                        <span className="tag"> M??: {products.productidLong} </span>
                                        <span className="tag"> Ph??ng: {products.roomInteger} ph??ng </span>
                                        <span className="tag"> H?????ng: {products.directionString} </span>
                                        <span className="tag"> Di???n t??ch: {products.areaString} m<sup>2</sup></span>
                                    </p>

                                    <p>
                                        {`${products.descriptionString.substring(0, 115)}... `}<a title={products.descriptionString} href={`/index=${products.idLong}`}> ?????c th??m</a>
                                    </p>

                                </div>
                                {/* <!-- info-main.// --> */}
                            </div>
                            {/* <!-- col.// --> */}
                            <aside className="col-sm-3">
                                <div className="info-aside">
                                    <div className="price-wrap">
                                        {/* <span  className ="h5 price" style={{ color: `red` }}>Gi??: <NumberFormat value={products.priceDouble} displayType={'text'} thousandSeparator={true} /></span> */}
                                        <span className="h5 price" style={{ color: `red` }} title={products.pricesaleDouble}>Gi??: {products.pricesaleDouble.toLocaleString('vi-VN')} </span>
                                        <small className="text-muted">/s???n ph???m</small>
                                    </div>
                                    {/* <!-- price-wrap.// --> */}
                                    {/* <small  className ="text-warning">Paid shipping</small>
    
                                    <p  className ="text-muted mt-3">Grand textile Co</p> */}
                                    <p className="mt-3">
                                        <a href={`/lien-he`} className="btn btn-outline-primary" title="Li??n h???"> <i className="fa fa-envelope"></i> Li??n h??? </a>
                                        <a href={`/luu`} className="btn btn-light" title="L??u"><i className="fa fa-heart"></i> L??u </a>
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
    }

    renderproduct = () => {
        if (this.state.checked == false) {
            return this.state.product.filter((products) => {
                if (this.state.search == null)
                    return products
                else if (products.titleString.toLowerCase().includes(this.state.search.toLowerCase())) {
                    return products
                } else if (products.directionString.toLowerCase().includes(this.state.search.toLowerCase())) {
                    return products
                } else if (products.areaString.toLowerCase().includes(this.state.search.toLowerCase())) {
                    return products
                } else if (products.productidLong.toLowerCase().includes(this.state.search.toLowerCase())) {
                    return products
                }else if (products.positionString.toLowerCase().includes(this.state.search.toLowerCase())) {
                    return products
                }

            }).map((products, key) => {
                const dd = moment(products.createdatTimestamp).format("LLLL");

                return (
                    <article className="card card-product-list" key={key}>
                        <div className="row no-gutters">
                            <aside className="col-md-3">
                                <a href={`/index=${products.idLong}`} className="img-wrap" style={{ width: `100%` }}>
                                    {/* <span  className ="badge badge-danger"> NEW </span> */}
                                    <img src={`/resources/images/items/${products.imageString}`} title={products.imageString} />
                                </a>
                            </aside>
                            {/* <!-- col.// --> */}
                            <div className="col-md-6">
                                <div className="info-main">
                                    <a href={`/index=${products.idLong}`} className="h5 title" title={products.titleString}>{products.titleString}</a>
                                    <div className="rating-wrap mb-2">
                                        <ul className="rating-stars">
                                            <li style={{ width: `100%` }} className="stars-active">
                                                <i className="fa fa-star"></i> <i className="fa fa-star"></i>
                                                <i className="fa fa-star"></i> <i className="fa fa-star"></i>
                                                <i className="fa fa-star"></i>
                                            </li>
                                            <li>
                                                <i className="fa fa-star"></i> <i className="fa fa-star"></i>
                                                <i className="fa fa-star"></i> <i className="fa fa-star"></i>
                                                <i className="fa fa-star"></i>
                                            </li>
                                        </ul>
                                        <div className="label-rating">9/10</div>
                                        <div className="label-rating"><i className="fas fa-history" style={{ color: `green` }}></i> {dd}</div>
                                    </div>
                                    {/* <!-- rating-wrap.// --> */}

                                    <p className="mb-3">
                                        <span className="tag"> <i className="fa fa-check"></i> C?? s???n </span>
                                        <span className="tag"> M??: {products.productidLong} </span>
                                        <span className="tag"> Ph??ng: {products.roomInteger} ph??ng </span>
                                        <span className="tag"> H?????ng: {products.directionString} </span>
                                        <span className="tag"> Di???n t??ch: {products.areaString} m<sup>2</sup></span>
                                    </p>

                                    <p>
                                        {`${products.descriptionString.substring(0, 115)}... `}<a title={products.descriptionString} href={`/index=${products.idLong}`}> ?????c th??m</a>
                                    </p>

                                </div>
                                {/* <!-- info-main.// --> */}
                            </div>
                            {/* <!-- col.// --> */}
                            <aside className="col-sm-3">
                                <div className="info-aside">
                                    <div className="price-wrap">
                                        {/* <span  className ="h5 price" style={{ color: `red` }}>Gi??: <NumberFormat value={products.priceDouble} displayType={'text'} thousandSeparator={true} /></span> */}
                                        <span className="h5 price" style={{ color: `red` }} title={products.pricesaleDouble}>Gi??: {products.pricesaleDouble.toLocaleString('vi-VN')} </span>
                                        <small className="text-muted">/s???n ph???m</small>
                                    </div>
                                    {/* <!-- price-wrap.// --> */}
                                    {/* <small  className ="text-warning">Paid shipping</small>
    
                                    <p  className ="text-muted mt-3">Grand textile Co</p> */}
                                    <p className="mt-3">
                                        <a href={`/lien-he`} className="btn btn-outline-primary" title="Li??n h???"> <i className="fa fa-envelope"></i> Li??n h??? </a>
                                        <a href={`/luu`} className="btn btn-light" title="L??u"><i className="fa fa-heart"></i> L??u </a>
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

        if (this.state.checked == true && this.state.filters !== null) {
            return this.state.filters.filter((products) => {
                if (this.state.search == null)
                    return products
                else if (products.titleString.toLowerCase().includes(this.state.search.toLowerCase())) {
                    return products
                } else if (products.directionString.toLowerCase().includes(this.state.search.toLowerCase())) {
                    return products
                } else if (products.areaString.toLowerCase().includes(this.state.search.toLowerCase())) {
                    return products
                } else if (products.productidLong.toLowerCase().includes(this.state.search.toLowerCase())) {
                    return products
                }else if (products.positionString.toLowerCase().includes(this.state.search.toLowerCase())) {
                    return products
                } else if (this.state.filters == null)
                    return products
                else if (products.areaString >= 0) {
                    return products
                } else if (products.directionString >= 0) {
                    return products
                } else if (products.pricesaleDouble >= 0) {
                    return products
                }

            }).map((products, key) => {
                const dd = moment(products.createdatTimestamp).format("LLLL");

                return (
                    <article className="card card-product-list" key={key}>
                        <div className="row no-gutters">
                            <aside className="col-md-3">
                                <a href={`/index=${products.idLong}`} className="img-wrap" style={{ width: `100%` }}>
                                    {/* <span  className ="badge badge-danger"> NEW </span> */}
                                    <img src={`/resources/images/items/${products.imageString}`} title={products.imageString} />
                                </a>
                            </aside>
                            {/* <!-- col.// --> */}
                            <div className="col-md-6">
                                <div className="info-main">
                                    <a href={`/index=${products.idLong}`} className="h5 title" title={products.titleString}>{products.titleString}</a>
                                    <div className="rating-wrap mb-2">
                                        <ul className="rating-stars">
                                            <li style={{ width: `100%` }} className="stars-active">
                                                <i className="fa fa-star"></i> <i className="fa fa-star"></i>
                                                <i className="fa fa-star"></i> <i className="fa fa-star"></i>
                                                <i className="fa fa-star"></i>
                                            </li>
                                            <li>
                                                <i className="fa fa-star"></i> <i className="fa fa-star"></i>
                                                <i className="fa fa-star"></i> <i className="fa fa-star"></i>
                                                <i className="fa fa-star"></i>
                                            </li>
                                        </ul>
                                        <div className="label-rating">9/10</div>
                                        <div className="label-rating"><i className="fas fa-history" style={{ color: `green` }}></i> {dd}</div>
                                    </div>
                                    {/* <!-- rating-wrap.// --> */}

                                    <p className="mb-3">
                                        <span className="tag"> <i className="fa fa-check"></i> C?? s???n </span>
                                        <span className="tag"> M??: {products.productidLong} </span>
                                        <span className="tag"> Ph??ng: {products.roomInteger} ph??ng </span>
                                        <span className="tag"> H?????ng: {products.directionString} </span>
                                        <span className="tag"> Di???n t??ch: {products.areaString} m<sup>2</sup></span>
                                    </p>

                                    <p>
                                        {`${products.descriptionString.substring(0, 115)}... `}<a title={products.descriptionString} href={`/index=${products.idLong}`}> ?????c th??m</a>
                                    </p>

                                </div>
                                {/* <!-- info-main.// --> */}
                            </div>
                            {/* <!-- col.// --> */}
                            <aside className="col-sm-3">
                                <div className="info-aside">
                                    <div className="price-wrap">
                                        {/* <span  className ="h5 price" style={{ color: `red` }}>Gi??: <NumberFormat value={products.priceDouble} displayType={'text'} thousandSeparator={true} /></span> */}
                                        <span className="h5 price" style={{ color: `red` }} title={products.pricesaleDouble}>Gi??: {products.pricesaleDouble.toLocaleString('vi-VN')} </span>
                                        <small className="text-muted">/s???n ph???m</small>
                                    </div>
                                    {/* <!-- price-wrap.// --> */}
                                    {/* <small  className ="text-warning">Paid shipping</small>
    
                                    <p  className ="text-muted mt-3">Grand textile Co</p> */}
                                    <p className="mt-3">
                                        <a href={`/lien-he`} className="btn btn-outline-primary" title="Li??n h???"> <i className="fa fa-envelope"></i> Li??n h??? </a>
                                        <a href={`/luu`} className="btn btn-light" title="L??u"><i className="fa fa-heart"></i> L??u </a>
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
    }
    Reset() {
        window.location.reload();
    }
    handleChange = e => {
        const { name, value } = e.target;

        this.setState({
            [name]: value
        });
        if (this.state.id == null) {
            const filter = this.state.product.filter(
                (products) => products.positionString.toLowerCase().includes(value.toLowerCase())
            );
            console.log(filter);
            this.setState({ filters: filter, checked: true });
        } else {
            const filterc = this.state.categorybyproduct.filter(
                (products) => products.positionString.toLowerCase().includes(value.toLowerCase())
            );
            console.log(filterc);
            this.setState({ filterss: filterc, checked: true });
        }

    }
    handlePrice(name, event) {
        //We set the state value depending on input that is clicked
        if (name === "second") {
            let newValue = parseInt(this.state.firstValue) + parseInt(this.state.step);
            //The second value can't be lower than the first value
            if (parseInt(this.state.secondValue) > parseInt(newValue)) {
                this.setState({ secondValue: event.target.value });
            }


        } else {
            //The first value can't be greater than the second value
            if (parseInt(this.state.firstValue) < parseInt(this.state.secondValue)) {
                this.setState({ firstValue: event.target.value });
            }

        }
        if (this.state.id == null) {
            const filter = this.state.product.filter((products) => products.pricesaleDouble <= this.state.firstValue);
            console.log(filter);
            this.setState({ filters: filter, checked: true });
        } else {
            const filterc = this.state.categorybyproduct.filter((products) => products.pricesaleDouble <= this.state.firstValue);
            console.log(filterc);
            this.setState({ filterss: filterc, checked: true });
        }
    }
    handleChangedong = (event) => {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
        this.setState({ [name]: value });
        if (this.state.checked === false) {
            if (this.state.id == null) {
                const filter = this.state.product.filter((products) => products.directionString.includes("????ng"));
                console.log(filter);
                this.setState({ filters: filter, checked: true });
            } else {
                const filterc = this.state.categorybyproduct.filter((products) => products.directionString.includes("????ng"));
                console.log(filterc);
                this.setState({ filterss: filterc, checked: true });
            }
        }
        if (this.state.checked === true) {
            if (this.state.id == null) {
                this.setState({ product: this.state.product, checked: false });
            } else {
                this.setState({ categorybyproduct: this.state.categorybyproduct, checked: false });
            }
        }
    };

    handleChangetay = (event) => {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
        this.setState({ [name]: value });
        if (this.state.checked === false) {
            if (this.state.id == null) {
                const filter = this.state.product.filter((products) => products.directionString.includes("T??y"));
                console.log(filter);
                this.setState({ filters: filter, checked: true });
            } else {
                const filterc = this.state.categorybyproduct.filter((products) => products.directionString.includes("T??y"));
                console.log(filterc);
                this.setState({ filterss: filterc, checked: true });
            }
        }
        if (this.state.checked === true) {
            if (this.state.id == null) {
                this.setState({ product: this.state.product, checked: false });
            } else {
                this.setState({ categorybyproduct: this.state.categorybyproduct, checked: false });
            }
        }
    };

    handleChangenam = (event) => {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
        this.setState({ [name]: value });
        if (this.state.checked === false) {
            if (this.state.id == null) {
                const filter = this.state.product.filter((products) => products.directionString.includes("Nam"));
                console.log(filter);
                this.setState({ filters: filter, checked: true });
            } else {
                const filterc = this.state.categorybyproduct.filter((products) => products.directionString.includes("Nam"));
                console.log(filterc);
                this.setState({ filterss: filterc, checked: true });
            }
        }
        if (this.state.checked === true) {
            if (this.state.id == null) {
                this.setState({ product: this.state.product, checked: false });
            } else {
                this.setState({ categorybyproduct: this.state.categorybyproduct, checked: false });
            }
        }
    };

    handleChangebac = (event) => {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
        this.setState({ [name]: value });
        if (this.state.checked === false) {
            if (this.state.id == null) {
                const filter = this.state.product.filter((products) => products.directionString.includes("B???c"));
                console.log(filter);
                this.setState({ filters: filter, checked: true });
            } else {
                const filterc = this.state.categorybyproduct.filter((products) => products.directionString.includes("B???c"));
                console.log(filterc);
                this.setState({ filterss: filterc, checked: true });
            }
        }
        if (this.state.checked === true) {
            if (this.state.id == null) {
                this.setState({ product: this.state.product, checked: false });
            } else {
                this.setState({ categorybyproduct: this.state.categorybyproduct, checked: false });
            }
        }
    };

    filterless50 = (event) => {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
        this.setState({ [name]: value });
        if (this.state.checked === false) {
            if (this.state.id == null) {
                const filter = this.state.product.filter(
                    (products) => products.areaString < 50
                );
                console.log(filter);
                this.setState({ filters: filter, checked: true });
            } else {
                const filterc = this.state.categorybyproduct.filter(
                    (products) => products.areaString < 50
                );
                console.log(filterc);
                this.setState({ filterss: filterc, checked: true });
            }
        }
        if (this.state.checked === true) {
            if (this.state.id == null) {
                this.setState({ product: this.state.product, checked: false });
            } else {
                this.setState({ categorybyproduct: this.state.categorybyproduct, checked: false });
            }
        }
    }
    filterthan50 = (event) => {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
        this.setState({ [name]: value });
        if (this.state.checked === false) {
            if (this.state.id == null) {
                const filter = this.state.product.filter(
                    (products) => products.areaString > 50
                );
                console.log(filter);
                this.setState({ filters: filter, checked: true });
            } else {
                const filterc = this.state.categorybyproduct.filter(
                    (products) => products.areaString > 50
                );
                console.log(filterc);
                this.setState({ filterss: filterc, checked: true });
            }
        }
        if (this.state.checked === true) {
            if (this.state.id == null) {
                this.setState({ product: this.state.product, checked: false });
            } else {
                this.setState({ categorybyproduct: this.state.categorybyproduct, checked: false });
            }
        }
    }
    filterless100 = (event) => {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
        this.setState({ [name]: value });
        if (this.state.checked === false) {
            if (this.state.id == null) {
                const filter = this.state.product.filter(
                    (products) => products.areaString < 100
                );
                console.log(filter);
                this.setState({ filters: filter, checked: true });
            } else {
                const filterc = this.state.categorybyproduct.filter(
                    (products) => products.areaString < 100
                );
                console.log(filterc);
                this.setState({ filterss: filterc, checked: true });
            }
        }
        if (this.state.checked === true) {
            if (this.state.id == null) {
                this.setState({ product: this.state.product, checked: false });
            } else {
                this.setState({ categorybyproduct: this.state.categorybyproduct, checked: false });
            }
        }
    }
    filterthan100 = (event) => {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
        this.setState({ [name]: value });
        if (this.state.checked === false) {
            if (this.state.id == null) {
                const filter = this.state.product.filter(
                    (products) => products.areaString > 100
                );
                console.log(filter);
                this.setState({ filters: filter, checked: true });
            } else {
                const filterc = this.state.categorybyproduct.filter(
                    (products) => products.areaString > 100
                );
                console.log(filterc);
                this.setState({ filterss: filterc, checked: true });
            }
        }
        if (this.state.checked === true) {
            if (this.state.id == null) {
                this.setState({ product: this.state.product, checked: false });
            } else {
                this.setState({ categorybyproduct: this.state.categorybyproduct, checked: false });
            }
        }
    }

    onChange = event => {
        const target = event.target.value;
        if (this.state.id == null) {
            const filter = this.state.product.filter(
                (products) => products.pricesaleDouble >= target
            );
            console.log(filter);
            this.setState({ filters: filter, checked: true });
        } else {
            const filterc = this.state.categorybyproduct.filter(
                (products) => products.pricesaleDouble >= target
            );
            console.log(filterc);
            this.setState({ filterss: filterc, checked: true });
        }
    };
    sortByPriceAsc = () => {
        let sortedProductsAsc;
        if (this.state.id == null) {
            sortedProductsAsc = this.state.product.sort((a, b) => {
                return parseInt(a.pricesaleDouble) - parseInt(b.pricesaleDouble);
            })
            this.setState({
                filters: sortedProductsAsc
            })
        } else {
            sortedProductsAsc = this.state.categorybyproduct.sort((a, b) => {
                return parseInt(a.pricesaleDouble) - parseInt(b.pricesaleDouble);
            })
            this.setState({
                filterss: sortedProductsAsc
            })
        }
    }


    sortByPriceDesc = () => {
        let sortedProductsDsc;
        if (this.state.id == null) {
            sortedProductsDsc = this.state.product.sort((a, b) => {
                return parseInt(b.pricesaleDouble) - parseInt(a.pricesaleDouble);
            })
            this.setState({
                filters: sortedProductsDsc
            })
        } else {
            sortedProductsDsc = this.state.categorybyproduct.sort((a, b) => {
                return parseInt(b.pricesaleDouble) - parseInt(a.pricesaleDouble);
            })
            this.setState({
                filterss: sortedProductsDsc
            })
        }

    }

    render() {
        const { currentPage, totalPages, totalElements } = this.state;
        const category = this.state.category;
        const id = this.props.match.params.id;
        if (id == null) {
            var n = this.state.product.length;
            var dong = this.state.product.filter((products) => products.directionString.includes("????ng")).length;
            var tay = this.state.product.filter((products) => products.directionString.includes("T??y")).length;
            var nam = this.state.product.filter((products) => products.directionString.includes("Nam")).length;
            var bac = this.state.product.filter((products) => products.directionString.includes("B???c")).length;

            var less50 = this.state.product.filter((products) => products.areaString < 50).length;
            var than50 = this.state.product.filter((products) => products.areaString > 50).length;
            var less100 = this.state.product.filter((products) => products.areaString < 100).length;
            var than100 = this.state.product.filter((products) => products.areaString > 100).length;

            var QQM = this.state.product.filter((products) => products.positionString.includes("M???")).length;
            var QQN = this.state.product.filter((products) => products.positionString.includes("Nga")).length;
            var QQVN = this.state.product.filter((products) => products.positionString.includes("Vi???t Nam")).length;
            var QQTQ = this.state.product.filter((products) => products.positionString.includes("Trung Qu???c")).length;
            var QQNB = this.state.product.filter((products) => products.positionString.includes("Nh???t B???n")).length;
            var QQHQ = this.state.product.filter((products) => products.positionString.includes("H??n Qu???c")).length;

            var TTHCN = this.state.product.filter((products) => products.positionString.includes("H??? Ch?? Minh")).length;
            var TTHN = this.state.product.filter((products) => products.positionString.includes("H?? N???i")).length;
            var TTDN = this.state.product.filter((products) => products.positionString.includes("???? N???ng")).length;

            var QGV = this.state.product.filter((products) => products.positionString.includes("G?? V???p")).length;
            var Q12 = this.state.product.filter((products) => products.positionString.includes("Qu???n 12")).length;
            var QPN = this.state.product.filter((products) => products.positionString.includes("Qu???n Ph?? NHu???n")).length;
            var QTP = this.state.product.filter((products) => products.positionString.includes("Qu???n T??n Ph??")).length;
            var QLB = this.state.product.filter((products) => products.positionString.includes("Qu???n Long Bi??n")).length;
            var QHM = this.state.product.filter((products) => products.positionString.includes("Qu???n Ho??ng Mai")).length;
            var QST = this.state.product.filter((products) => products.positionString.includes("Qu???n S??n Tr??")).length;
            var QBD = this.state.product.filter((products) => products.positionString.includes("Qu???n Ba ????nh")).length;

        } else {
            var n = this.state.categorybyproduct.length;
            var dong = this.state.categorybyproduct.filter((products) => products.directionString.includes("????ng")).length;
            var tay = this.state.categorybyproduct.filter((products) => products.directionString.includes("T??y")).length;
            var nam = this.state.categorybyproduct.filter((products) => products.directionString.includes("Nam")).length;
            var bac = this.state.categorybyproduct.filter((products) => products.directionString.includes("B???c")).length;

            var less50 = this.state.categorybyproduct.filter((products) => products.areaString < 50).length;
            var than50 = this.state.categorybyproduct.filter((products) => products.areaString > 50).length;
            var less100 = this.state.categorybyproduct.filter((products) => products.areaString < 100).length;
            var than100 = this.state.categorybyproduct.filter((products) => products.areaString > 100).length;

            var QQM = this.state.categorybyproduct.filter((products) => products.positionString.includes("M???")).length;
            var QQN = this.state.categorybyproduct.filter((products) => products.positionString.includes("Nga")).length;
            var QQVN = this.state.categorybyproduct.filter((products) => products.positionString.includes("Vi???t Nam")).length;
            var QQTQ = this.state.categorybyproduct.filter((products) => products.positionString.includes("Trung Qu???c")).length;
            var QQNB = this.state.categorybyproduct.filter((products) => products.positionString.includes("Nh???t B???n")).length;
            var QQHQ = this.state.categorybyproduct.filter((products) => products.positionString.includes("H??n Qu???c")).length;

            var TTHCN = this.state.categorybyproduct.filter((products) => products.positionString.includes("H??? Ch?? Minh")).length;
            var TTHN = this.state.categorybyproduct.filter((products) => products.positionString.includes("H?? N???i")).length;
            var TTDN = this.state.categorybyproduct.filter((products) => products.positionString.includes("???? N???ng")).length;

            var QGV = this.state.categorybyproduct.filter((products) => products.positionString.includes("G?? V???p")).length;
            var Q12 = this.state.categorybyproduct.filter((products) => products.positionString.includes("Qu???n 12")).length;
            var QPN = this.state.categorybyproduct.filter((products) => products.positionString.includes("Qu???n Ph?? NHu???n")).length;
            var QTP = this.state.categorybyproduct.filter((products) => products.positionString.includes("Qu???n T??n Ph??")).length;
            var QLB = this.state.categorybyproduct.filter((products) => products.positionString.includes("Qu???n Long Bi??n")).length;
            var QHM = this.state.categorybyproduct.filter((products) => products.positionString.includes("Qu???n Ho??ng Mai")).length;
            var QST = this.state.categorybyproduct.filter((products) => products.positionString.includes("Qu???n S??n Tr??")).length;
            var QBD = this.state.categorybyproduct.filter((products) => products.positionString.includes("Qu???n Ba ????nh")).length;

        }

        return (
            <div>
                <Header />
                {/* // <!-- ========================= SECTION CONTENT ========================= -->/ */}
                <section className="section-content padding-y">
                    <div className="container">


                        {/* <!-- ============================  FILTER TOP  ================================= --> */}
                        <div className="card mb-3">
                            <div className="card-body">
                                <ol className="breadcrumb float-left">
                                    <li className="breadcrumb-item"><a href={`/`} >trang-chu</a></li>
                                    <li className="breadcrumb-item"><a href={`/loai-san-pham?All`} >loai-san-pham</a></li>
                                    <li className="breadcrumb-item active">{category.slugString}</li>
                                </ol>
                            </div>
                            {/* <!-- card-body .// --> */}
                        </div>
                        {/* <!-- card.// --> */}

                        {/* <!-- ============================ FILTER TOP END.// ================================= --> */}


                        <div className="row">
                            <aside className="col-md-2">

                                <article className="filter-group">
                                    <h6 className="title">
                                        <a href={`/loai-san-pham?All`} className="dropdown-toggle" data-toggle="collapse" data-target="#collapse_1">Lo???i s???n ph???m </a>
                                    </h6>
                                    <div className="filter-content collapse show" id="collapse_1">
                                        <div className="inner">
                                            {this.rendercategory()}
                                        </div>
                                        {/* <!-- inner.// --> */}
                                    </div>
                                </article>
                                {/* <!-- filter-group  .// --> */}
                                <article className="filter-group">
                                    <h6 className="title">
                                        <a href="#" className="dropdown-toggle" data-toggle="collapse" data-target="#collapse_2"> H?????ng </a>
                                    </h6>
                                    <div className="filter-content collapse show" id="collapse_2">
                                        <div className="inner">
                                            <label className="custom-control custom-checkbox" checked={this.state.checked} onChange={this.handleChangedong}  >
                                                <input type="checkbox" className="custom-control-input" value="????ng" name="????ng" />
                                                <div className="custom-control-label">????ng
                                                    <b className="badge badge-pill badge-light float-right">{dong}</b>  </div>
                                            </label>
                                            <label className="custom-control custom-checkbox" checked={this.state.checked} onChange={this.handleChangetay}>
                                                <input type="checkbox" className="custom-control-input" value="T??y" name="T??y" />
                                                <div className="custom-control-label">T??y
                                                    <b className="badge badge-pill badge-light float-right">{tay}</b>  </div>
                                            </label>
                                            <label className="custom-control custom-checkbox" checked={this.state.checked} onChange={this.handleChangenam}>
                                                <input type="checkbox" className="custom-control-input" value="Nam" name="Nam" />
                                                <div className="custom-control-label">Nam
                                                    <b className="badge badge-pill badge-light float-right">{nam}</b> </div>
                                            </label>
                                            <label className="custom-control custom-checkbox" checked={this.state.checked} onChange={this.handleChangebac}>
                                                <input type="checkbox" className="custom-control-input" value="B???c" name="B???c" />
                                                <div className="custom-control-label">B???c
                                                    <b className="badge badge-pill badge-light float-right">{bac}</b> </div>
                                            </label>
                                        </div>
                                        {/* <!-- inner.// --> */}
                                    </div>
                                </article>
                                {/* <!-- filter-group .// --> */}
                                <article className="filter-group">
                                    <h6 className="title">
                                        <a href="#" className="dropdown-toggle" data-toggle="collapse" data-target="#collapse_3"> M???c gi?? </a>
                                    </h6>
                                    <div class="filter-content collapse show" id="collapse_3">
                                        <div class="inner text-center">
                                            <div class="form-row">
                                                <div class="form-group text-left col-6">

                                                    <label className=" badge badge-pill badge-light"><NumberFormat value={this.state.minValue} displayType={'text'} thousandSeparator={true} /></label>
                                                </div>
                                                <div class="form-group text-right col-6">

                                                    <label className=" badge badge-pill badge-light"><NumberFormat value={this.state.maxValue} displayType={'text'} thousandSeparator={true} /></label>
                                                </div>
                                            </div>
                                            <input className="form-control" style={{ width: `100%` ,cursor: `pointer` }} type="range" value={this.state.firstValue} min={this.state.minValue} max={this.state.maxValue} step={this.state.step} onChange={this.handlePrice.bind(this, "first")} />

                                            {/* <!-- form-row.// --> */}
                                            <b className=" badge badge-pill badge-light mt-3"><NumberFormat value={this.state.firstValue} displayType={'text'} thousandSeparator={true} /></b>
                                            {/* <!-- inner.// --> */}
                                        </div>
                                    </div>
                                </article>
                                {/* <!-- filter-group .// --> */}
                                <article className="filter-group">
                                    <h6 className="title">
                                        <a href="#" className="dropdown-toggle" data-toggle="collapse" data-target="#collapse_4"> Di???n t??ch </a>
                                    </h6>
                                    <div className="filter-content collapse show" id="collapse_4">
                                        <div className="inner">
                                            <label className="checkbox-btn" checked={this.state.checked} onChange={this.filterless50}>
                                                <input type="checkbox" />
                                                <span className="btn btn-light"><i className="fas fa-angle-left"></i> 50 m<sup>2</sup></span>

                                            </label>
                                            <b className="badge badge-pill badge-light float-right">{less50}</b><br />
                                            <label className="checkbox-btn" checked={this.state.checked} onChange={this.filterthan50}>
                                                <input type="checkbox" />
                                                <span className="btn btn-light"><i className="fas fa-angle-right"></i> 50 m<sup>2</sup></span>

                                            </label>
                                            <b className="badge badge-pill badge-light float-right">{than50}</b><br />
                                            <label className="checkbox-btn" checked={this.state.checked} onChange={this.filterless100}>
                                                <input type="checkbox" />
                                                <span className="btn btn-light"><i className="fas fa-angle-left"></i> 100 m<sup>2</sup></span>

                                            </label>
                                            <b className="badge badge-pill badge-light float-right">{less100}</b><br />
                                            <label className="checkbox-btn" checked={this.state.checked} onChange={this.filterthan100}>
                                                <input type="checkbox" />
                                                <span className="btn btn-light"><i className="fas fa-angle-right"></i> 100 m<sup>2</sup></span>

                                            </label>
                                            <b className="badge badge-pill badge-light float-right">{than100}</b><br />
                                        </div>
                                        {/* <!-- inner.// --> */}
                                    </div>
                                </article>
                                {/* <!-- filter-group .// --> */}
                                <article className="filter-group">
                                    <h6 className="title">
                                        <a href="#" className="dropdown-toggle" data-toggle="collapse" data-target="#collapse_5">V??? tr??</a>
                                    </h6>
                                    <div className="filter-content collapse show" id="collapse_5">

                                        <article className="filter-group ml-4">
                                            <h6 className="title">
                                                <a href="#" className="dropdown-toggle" data-toggle="collapse" data-target="#collapse_6">Qu???c gia</a>
                                            </h6>
                                            <div className="filter-content collapse show" id="collapse_6">
                                                <div className="inner">
                                                    <b className="badge badge-pill badge-light float-right">{QQM}</b>
                                                    <label className="custom-control custom-radio" checked={this.state.checked} onChange={this.handleChange}>
                                                        <input type="radio" name="M???" value="M???" className="custom-control-input" />
                                                        <div className="custom-control-label">M???</div>
                                                    </label>
                                                    <b className="badge badge-pill badge-light float-right">{QQN}</b>
                                                    <label className="custom-control custom-radio" onChange={this.handleChange}>
                                                        <input type="radio" name="Nga" value="Nga" className="custom-control-input" />
                                                        <div className="custom-control-label">Nga</div>
                                                    </label>
                                                    <b className="badge badge-pill badge-light float-right">{QQVN}</b>
                                                    <label className="custom-control custom-radio" onChange={this.handleChange}>
                                                        <input type="radio" name="Vi???t Nam" value="Vi???t Nam" className="custom-control-input" />
                                                        <div className="custom-control-label">Vi???t Nam</div>
                                                    </label>
                                                    <b className="badge badge-pill badge-light float-right">{QQTQ}</b>
                                                    <label className="custom-control custom-radio" onChange={this.handleChange}>
                                                        <input type="radio" name="Trung Qu???c" value="Trung Qu???c" className="custom-control-input" />
                                                        <div className="custom-control-label">Trung Qu???c</div>
                                                    </label>
                                                    <b className="badge badge-pill badge-light float-right">{QQNB}</b>
                                                    <label className="custom-control custom-radio" onChange={this.handleChange}>
                                                        <input type="radio" name="Nh???t B???n" value="Nh???t B???n" className="custom-control-input" />
                                                        <div className="custom-control-label">Nh???t B???n</div>
                                                    </label>
                                                    <b className="badge badge-pill badge-light float-right">{QQHQ}</b>
                                                    <label className="custom-control custom-radio" onChange={this.handleChange}>
                                                        <input type="radio" name="H??n Qu???c" value="H??n Qu???c" className="custom-control-input" />
                                                        <div className="custom-control-label">H??n Qu???c</div>
                                                    </label>

                                                </div>
                                                {/* <!-- inner.// --> */}
                                            </div>
                                        </article>
                                        <article className="filter-group ml-4">
                                            <h6 className="title">
                                                <a href="#" className="dropdown-toggle" data-toggle="collapse" data-target="#collapse_6">T???nh th??nh</a>
                                            </h6>
                                            <div className="filter-content collapse show" id="collapse_6">
                                                <div className="inner">
                                                    <b className="badge badge-pill badge-light float-right">{TTHCN}</b>
                                                    <label className="custom-control custom-radio" checked={this.state.checked} onChange={this.handleChange}>
                                                        <input type="radio" name="H??? Ch?? Minh" value="H??? Ch?? Minh" className="custom-control-input" />
                                                        <div className="custom-control-label">H??? Ch?? Minh</div>
                                                    </label>
                                                    <b className="badge badge-pill badge-light float-right">{TTHN}</b>
                                                    <label className="custom-control custom-radio" onChange={this.handleChange}>
                                                        <input type="radio" name="H?? N???i" value="H?? N???i" className="custom-control-input" />
                                                        <div className="custom-control-label">H?? N???i</div>
                                                    </label>
                                                    <b className="badge badge-pill badge-light float-right">{TTDN}</b>
                                                    <label className="custom-control custom-radio" onChange={this.handleChange}>
                                                        <input type="radio" name="???? N???ng" value="???? N???ng" className="custom-control-input" />
                                                        <div className="custom-control-label">???? N???ng</div>
                                                    </label>
                                                </div>
                                                {/* <!-- inner.// --> */}
                                            </div>
                                        </article>
                                        <article className="filter-group ml-4">
                                            <h6 className="title">
                                                <a href="#" className="dropdown-toggle" data-toggle="collapse" data-target="#collapse_7">Qu???n,Huy???n</a>
                                            </h6>
                                            <div className="filter-content collapse show" id="collapse_7">
                                                <div className="inner">
                                                    <b className="badge badge-pill badge-light float-right">{QGV}</b>
                                                    <label className="custom-control custom-radio" checked={this.state.checked} onChange={this.handleChange}>
                                                        <input type="radio" name="Qu???n G?? V???p" value="G?? V???p" className="custom-control-input" />
                                                        <div className="custom-control-label">Qu???n G?? V???p</div>
                                                    </label>
                                                    <b className="badge badge-pill badge-light float-right">{Q12}</b>
                                                    <label className="custom-control custom-radio" onChange={this.handleChange}>
                                                        <input type="radio" name="Qu???n 12" value="Qu???n 12" className="custom-control-input" />
                                                        <div className="custom-control-label">Qu???n 12</div>
                                                    </label>
                                                    <b className="badge badge-pill badge-light float-right">{QPN}</b>
                                                    <label className="custom-control custom-radio" onChange={this.handleChange}>
                                                        <input type="radio" name="Qu???n Ph?? Nhu???n" value="Ph?? Nhu???n" className="custom-control-input" />
                                                        <div className="custom-control-label">Qu???n Ph?? Nhu???n</div>
                                                    </label>
                                                    <b className="badge badge-pill badge-light float-right">{QTP}</b>
                                                    <label className="custom-control custom-radio" onChange={this.handleChange}>
                                                        <input type="radio" name="Qu???n T??n Ph??" value="T??n Ph??" className="custom-control-input" />
                                                        <div className="custom-control-label">Qu???n T??n Ph??</div>
                                                    </label>
                                                    <b className="badge badge-pill badge-light float-right">{QLB}</b>
                                                    <label className="custom-control custom-radio" onChange={this.handleChange}>
                                                        <input type="radio" name="Qu???n Long Bi??n" className="custom-control-input" />
                                                        <div className="custom-control-label">Qu???n Long Bi??n</div>
                                                    </label>
                                                    <b className="badge badge-pill badge-light float-right">{QHM}</b>
                                                    <label className="custom-control custom-radio" onChange={this.handleChange}>
                                                        <input type="radio" name="Qu???n Ho??ng Mai" value="Ho??ng Mai" className="custom-control-input" />
                                                        <div className="custom-control-label">Qu???n Ho??ng Mai</div>
                                                    </label>
                                                    <b className="badge badge-pill badge-light float-right">{QST}</b>
                                                    <label className="custom-control custom-radio" onChange={this.handleChange}>
                                                        <input type="radio" name="Qu???n S??n Tr??" value="S??n Tr??" className="custom-control-input" />
                                                        <div className="custom-control-label">Qu???n S??n Tr??</div>
                                                    </label>
                                                    <b className="badge badge-pill badge-light float-right">{QBD}</b>
                                                    <label className="custom-control custom-radio" onChange={this.handleChange}>
                                                        <input type="radio" name="Qu???n Ba ????nh" value="Ba ????nh" className="custom-control-input" />
                                                        <div className="custom-control-label">Qu???n Ba ????nh</div>
                                                    </label>
                                                </div>
                                                {/* <!-- inner.// --> */}
                                            </div>
                                        </article>
                                    </div>
                                </article>
                                {/* <!-- filter-group .// --> */}

                            </aside>
                            {/* <!-- col.// --> */}
                            <main className="col-md-10">
                                <header className="mb-3">
                                    <div className="form-inline">
                                        <strong className="mr-md-auto"> <i className="far fa-hand-point-right" style={{ color: `green` }}> </i> {n} / {totalElements} S???n ph???m </strong>

                                        <input title="Nh???p s???n ph???m c???n t??m ki???m..." className="mr-2 form-control" style={{ width: `400px` }} type="text" placeholder="Nh???p s???n ph???m c???n t??m ki???m..." onChange={(e) => this.searchSpace(e)} />
                                        <button title="L??m m???i" className="mr-2 form-control" onClick={() => this.refreshPage()} >
                                            L??m m???i
                                        </button>
                                        <button title=" Gi?? gi???m d???n" className="mr-2 form-control" onClick={this.sortByPriceDesc}>
                                            Gi?? gi???m d???n
                                        </button>
                                        <button title=" Gi?? t??ng d???n" className="mr-2 form-control" onClick={this.sortByPriceAsc}>
                                            Gi?? t??ng d???n
                                        </button>
                                        <select className="mr-2 form-control" onChange={this.onChange}>
                                            <option value={3200000000}>M???i nh???t</option>
                                            <option value={7700000000}>Xu h?????ng</option>
                                            <option value={8000000}>Ph??? bi???n nh???t</option>
                                            <option value={this.state.value1} >R??? nh???t</option>
                                        </select>

                                        <div className="btn-group">
                                            <a href={`/danh-sach`} className="btn btn-light" data-toggle="tooltip" title="List view">
                                                <i className="fa fa-bars"></i></a>
                                            <a href={`loai-san-pham?All`} className="btn btn-light active" data-toggle="tooltip" title="Grid view">
                                                <i className="fa fa-th"></i></a>
                                        </div>
                                    </div>
                                </header>
                                {/* <!-- sect-heading --> */}


                                {this.renderproduct()}
                                {this.renderproductbycategory()}

                                <nav className="mb-4" aria-label="Page navigation sample">
                                    <ul className="pagination">
                                        <li className="page-item " disabled={currentPage === 1 ? true : false} onClick={this.firstPage}><a className="page-link" href="javascript:void(0)"><i className="fas fa-angle-double-left"></i></a></li>
                                        <li className="page-item " disabled={currentPage === 1 ? true : false} onClick={this.prevPage}><a className="page-link" href="javascript:void(0)"><i className="fas fa-angle-left"></i></a></li>

                                        <li className="page-item active" name="currentPage" value={currentPage} onChange={this.changePage}><a className="page-link" href="javascript:void(0)">{currentPage}</a></li>

                                        <li className="page-item" disabled={currentPage === totalPages ? true : false} onClick={this.nextPage}><a className="page-link" href="javascript:void(0)"><i className="fas fa-angle-right"></i></a></li>
                                        <li className="page-item" disabled={currentPage === totalPages ? true : false} onClick={this.lastPage}><a className="page-link" href="javascript:void(0)"><i className="fas fa-angle-double-right"></i></a></li>

                                    </ul>
                                </nav>
                                Trang: {currentPage} / {totalPages} T???ng s??? trang.
                                <Accep />

                            </main>
                            {/* <!-- col.// --> */}

                        </div>

                    </div>
                    {/* <!-- container .//  --> */}
                </section>
                {/* // <!-- ========================= SECTION CONTENT END// ========================= --> */}
                <Subcribe />
                <Footer />
            </div>
        );
    }
}
export default CategoryAllContainer;