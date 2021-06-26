import React, { Component } from 'react';
import HomeServices from '../../../HomeServices/HomeServices';
import axios from "axios";
import Header from '../../../Components/Header/Header';
import Footer from '../../../Components/Footer/Footer';
import Subcribe from '../../../Components/Subcribe/Subcribe';
import Accep from '../../../Components/Accep/Accep';
import moment from 'moment';
import { Range, getTrackBackground } from "react-range";

const STEP = 100000;
const MIN = 0;
const MAX = 10000000000;
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
            values:[0],
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
                                        <span className="tag"> <i className="fa fa-check"></i> Có sẵn </span>
                                        <span className="tag"> Mã: {products.productidLong} </span>
                                        <span className="tag"> Phòng: {products.roomInteger} phòng </span>
                                        <span className="tag"> Hướng: {products.directionString} </span>
                                        <span className="tag"> Diện tích: {products.areaString} m<sup>2</sup></span>
                                    </p>

                                    <p>
                                        {`${products.descriptionString.substring(0, 115)}... `}<a title={products.descriptionString} href={`/index=${products.idLong}`}> Đọc thêm</a>
                                    </p>

                                </div>
                                {/* <!-- info-main.// --> */}
                            </div>
                            {/* <!-- col.// --> */}
                            <aside className="col-sm-3">
                                <div className="info-aside">
                                    <div className="price-wrap">
                                        {/* <span  className ="h5 price" style={{ color: `red` }}>Giá: <NumberFormat value={products.priceDouble} displayType={'text'} thousandSeparator={true} /></span> */}
                                        <span className="h5 price" style={{ color: `red` }} title={products.pricesaleDouble}>Giá: {products.pricesaleDouble.toLocaleString('vi-VN')} </span>
                                        <small className="text-muted">/sản phẩm</small>
                                    </div>
                                    {/* <!-- price-wrap.// --> */}
                                    {/* <small  className ="text-warning">Paid shipping</small>
    
                                    <p  className ="text-muted mt-3">Grand textile Co</p> */}
                                    <p className="mt-3">
                                        <a href={`/lien-he`} className="btn btn-outline-primary" title="Liên hệ"> <i className="fa fa-envelope"></i> Liên hệ </a>
                                        <a href={`/luu`} className="btn btn-light" title="Lưu"><i className="fa fa-heart"></i> Lưu </a>
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
                                        <span className="tag"> <i className="fa fa-check"></i> Có sẵn </span>
                                        <span className="tag"> Mã: {products.productidLong} </span>
                                        <span className="tag"> Phòng: {products.roomInteger} phòng </span>
                                        <span className="tag"> Hướng: {products.directionString} </span>
                                        <span className="tag"> Diện tích: {products.areaString} m<sup>2</sup></span>
                                    </p>

                                    <p>
                                        {`${products.descriptionString.substring(0, 115)}... `}<a title={products.descriptionString} href={`/index=${products.idLong}`}> Đọc thêm</a>
                                    </p>

                                </div>
                                {/* <!-- info-main.// --> */}
                            </div>
                            {/* <!-- col.// --> */}
                            <aside className="col-sm-3">
                                <div className="info-aside">
                                    <div className="price-wrap">
                                        {/* <span  className ="h5 price" style={{ color: `red` }}>Giá: <NumberFormat value={products.priceDouble} displayType={'text'} thousandSeparator={true} /></span> */}
                                        <span className="h5 price" style={{ color: `red` }} title={products.pricesaleDouble}>Giá: {products.pricesaleDouble.toLocaleString('vi-VN')} </span>
                                        <small className="text-muted">/sản phẩm</small>
                                    </div>
                                    {/* <!-- price-wrap.// --> */}
                                    {/* <small  className ="text-warning">Paid shipping</small>
    
                                    <p  className ="text-muted mt-3">Grand textile Co</p> */}
                                    <p className="mt-3">
                                        <a href={`/lien-he`} className="btn btn-outline-primary" title="Liên hệ"> <i className="fa fa-envelope"></i> Liên hệ </a>
                                        <a href={`/luu`} className="btn btn-light" title="Lưu"><i className="fa fa-heart"></i> Lưu </a>
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
                                        <span className="tag"> <i className="fa fa-check"></i> Có sẵn </span>
                                        <span className="tag"> Mã: {products.productidLong} </span>
                                        <span className="tag"> Phòng: {products.roomInteger} phòng </span>
                                        <span className="tag"> Hướng: {products.directionString} </span>
                                        <span className="tag"> Diện tích: {products.areaString} m<sup>2</sup></span>
                                    </p>

                                    <p>
                                        {`${products.descriptionString.substring(0, 115)}... `}<a title={products.descriptionString} href={`/index=${products.idLong}`}> Đọc thêm</a>
                                    </p>

                                </div>
                                {/* <!-- info-main.// --> */}
                            </div>
                            {/* <!-- col.// --> */}
                            <aside className="col-sm-3">
                                <div className="info-aside">
                                    <div className="price-wrap">
                                        {/* <span  className ="h5 price" style={{ color: `red` }}>Giá: <NumberFormat value={products.priceDouble} displayType={'text'} thousandSeparator={true} /></span> */}
                                        <span className="h5 price" style={{ color: `red` }} title={products.pricesaleDouble}>Giá: {products.pricesaleDouble.toLocaleString('vi-VN')} </span>
                                        <small className="text-muted">/sản phẩm</small>
                                    </div>
                                    {/* <!-- price-wrap.// --> */}
                                    {/* <small  className ="text-warning">Paid shipping</small>
    
                                    <p  className ="text-muted mt-3">Grand textile Co</p> */}
                                    <p className="mt-3">
                                        <a href={`/lien-he`} className="btn btn-outline-primary" title="Liên hệ"> <i className="fa fa-envelope"></i> Liên hệ </a>
                                        <a href={`/luu`} className="btn btn-light" title="Lưu"><i className="fa fa-heart"></i> Lưu </a>
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
                } else if (this.state.filters == null)
                    return products
                else if (products.areaString >= 0) {
                    return products
                } else if (products.directionString >= 0) {
                    return products
                }else if (products.pricesaleDouble >= 0) {
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
                                        <span className="tag"> <i className="fa fa-check"></i> Có sẵn </span>
                                        <span className="tag"> Mã: {products.productidLong} </span>
                                        <span className="tag"> Phòng: {products.roomInteger} phòng </span>
                                        <span className="tag"> Hướng: {products.directionString} </span>
                                        <span className="tag"> Diện tích: {products.areaString} m<sup>2</sup></span>
                                    </p>

                                    <p>
                                        {`${products.descriptionString.substring(0, 115)}... `}<a title={products.descriptionString} href={`/index=${products.idLong}`}> Đọc thêm</a>
                                    </p>

                                </div>
                                {/* <!-- info-main.// --> */}
                            </div>
                            {/* <!-- col.// --> */}
                            <aside className="col-sm-3">
                                <div className="info-aside">
                                    <div className="price-wrap">
                                        {/* <span  className ="h5 price" style={{ color: `red` }}>Giá: <NumberFormat value={products.priceDouble} displayType={'text'} thousandSeparator={true} /></span> */}
                                        <span className="h5 price" style={{ color: `red` }} title={products.pricesaleDouble}>Giá: {products.pricesaleDouble.toLocaleString('vi-VN')} </span>
                                        <small className="text-muted">/sản phẩm</small>
                                    </div>
                                    {/* <!-- price-wrap.// --> */}
                                    {/* <small  className ="text-warning">Paid shipping</small>
    
                                    <p  className ="text-muted mt-3">Grand textile Co</p> */}
                                    <p className="mt-3">
                                        <a href={`/lien-he`} className="btn btn-outline-primary" title="Liên hệ"> <i className="fa fa-envelope"></i> Liên hệ </a>
                                        <a href={`/luu`} className="btn btn-light" title="Lưu"><i className="fa fa-heart"></i> Lưu </a>
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

    handlePrice= (event) =>{
        if (this.state.id == null) {
            const filter = this.state.product.filter((products) => products.pricesaleDouble = event);
            console.log(filter);
            this.setState({ filters: filter, checked: true });
        } else {
            const filterc = this.state.categorybyproduct.filter((products) =>products.pricesaleDouble = event);
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
                const filter = this.state.product.filter((products) => products.directionString.includes("Đông"));
                console.log(filter);
                this.setState({ filters: filter, checked: true });
            } else {
                const filterc = this.state.categorybyproduct.filter((products) => products.directionString.includes("Đông"));
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
                const filter = this.state.product.filter((products) => products.directionString.includes("Tây"));
                console.log(filter);
                this.setState({ filters: filter, checked: true });
            } else {
                const filterc = this.state.categorybyproduct.filter((products) => products.directionString.includes("Tây"));
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
                const filter = this.state.product.filter((products) => products.directionString.includes("Bắc"));
                console.log(filter);
                this.setState({ filters: filter, checked: true });
            } else {
                const filterc = this.state.categorybyproduct.filter((products) => products.directionString.includes("Bắc"));
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
    render() {
        const { currentPage, totalPages, totalElements } = this.state;
        const category = this.state.category;
        const id = this.props.match.params.id;
        if (id == null) {
            var n = this.state.product.length;
            var dong = this.state.product.filter((products) => products.directionString.includes("Đông")).length;
            var tay = this.state.product.filter((products) => products.directionString.includes("Tây")).length;
            var nam = this.state.product.filter((products) => products.directionString.includes("Nam")).length;
            var bac = this.state.product.filter((products) => products.directionString.includes("Bắc")).length;

            var less50 = this.state.product.filter((products) => products.areaString < 50).length;
            var than50 = this.state.product.filter((products) => products.areaString > 50).length;
            var less100 = this.state.product.filter((products) => products.areaString < 100).length;
            var than100 = this.state.product.filter((products) => products.areaString > 100).length;

            var QQM = this.state.product.filter((products) => products.positionString.includes("Mỹ")).length;
            var QQN = this.state.product.filter((products) => products.positionString.includes("Nga")).length;
            var QQVN = this.state.product.filter((products) => products.positionString.includes("Việt Nam")).length;
            var QQTQ = this.state.product.filter((products) => products.positionString.includes("Trung Quốc")).length;
            var QQNB = this.state.product.filter((products) => products.positionString.includes("Nhật Bản")).length;
            var QQHQ = this.state.product.filter((products) => products.positionString.includes("Hàn Quốc")).length;

            var TTHCN = this.state.product.filter((products) => products.positionString.includes("Hồ Chí Minh")).length;
            var TTHN = this.state.product.filter((products) => products.positionString.includes("Hà Nội")).length;
            var TTDN = this.state.product.filter((products) => products.positionString.includes("Đà Nẵng")).length;

            var QGV = this.state.product.filter((products) => products.positionString.includes("Gò Vấp")).length;
            var Q12 = this.state.product.filter((products) => products.positionString.includes("Quận 12")).length;
            var QPN = this.state.product.filter((products) => products.positionString.includes("Quận Phú NHuận")).length;
            var QTP = this.state.product.filter((products) => products.positionString.includes("Quận Tân Phú")).length;
            var QLB = this.state.product.filter((products) => products.positionString.includes("Quận Long Biên")).length;
            var QHM = this.state.product.filter((products) => products.positionString.includes("Quận Hoàng Mai")).length;
            var QST = this.state.product.filter((products) => products.positionString.includes("Quận Sơn Trà")).length;
            var QBD = this.state.product.filter((products) => products.positionString.includes("Quận Ba Đình")).length;

        } else {
            var n = this.state.categorybyproduct.length;
            var dong = this.state.categorybyproduct.filter((products) => products.directionString.includes("Đông")).length;
            var tay = this.state.categorybyproduct.filter((products) => products.directionString.includes("Tây")).length;
            var nam = this.state.categorybyproduct.filter((products) => products.directionString.includes("Nam")).length;
            var bac = this.state.categorybyproduct.filter((products) => products.directionString.includes("Bắc")).length;

            var less50 = this.state.categorybyproduct.filter((products) => products.areaString < 50).length;
            var than50 = this.state.categorybyproduct.filter((products) => products.areaString > 50).length;
            var less100 = this.state.categorybyproduct.filter((products) => products.areaString < 100).length;
            var than100 = this.state.categorybyproduct.filter((products) => products.areaString > 100).length;

            var QQM = this.state.product.filter((products) => products.positionString.includes("Mỹ")).length;
            var QQN = this.state.product.filter((products) => products.positionString.includes("Nga")).length;
            var QQVN = this.state.product.filter((products) => products.positionString.includes("Việt Nam")).length;
            var QQTQ = this.state.product.filter((products) => products.positionString.includes("Trung Quốc")).length;
            var QQNB = this.state.product.filter((products) => products.positionString.includes("Nhật Bản")).length;
            var QQHQ = this.state.product.filter((products) => products.positionString.includes("Hàn Quốc")).length;

            var TTHCN = this.state.product.filter((products) => products.positionString.includes("Hồ Chí Minh")).length;
            var TTHN = this.state.product.filter((products) => products.positionString.includes("Hà Nội")).length;
            var TTDN = this.state.product.filter((products) => products.positionString.includes("Đà Nẵng")).length;

            var QGV = this.state.product.filter((products) => products.positionString.includes("Gò Vấp")).length;
            var Q12 = this.state.product.filter((products) => products.positionString.includes("Quận 12")).length;
            var QPN = this.state.product.filter((products) => products.positionString.includes("Quận Phú NHuận")).length;
            var QTP = this.state.product.filter((products) => products.positionString.includes("Quận Tân Phú")).length;
            var QLB = this.state.product.filter((products) => products.positionString.includes("Quận Long Biên")).length;
            var QHM = this.state.product.filter((products) => products.positionString.includes("Quận Hoàng Mai")).length;
            var QST = this.state.product.filter((products) => products.positionString.includes("Quận Sơn Trà")).length;
            var QBD = this.state.product.filter((products) => products.positionString.includes("Quận Ba Đình")).length;

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
                                        <a href={`/loai-san-pham?All`} className="dropdown-toggle" data-toggle="collapse" data-target="#collapse_1">Loại sản phẩm </a>
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
                                        <a href="#" className="dropdown-toggle" data-toggle="collapse" data-target="#collapse_2"> Hướng </a>
                                    </h6>
                                    <div className="filter-content collapse show" id="collapse_2">
                                        <div className="inner">
                                            <label className="custom-control custom-checkbox" checked={this.state.checked} onChange={this.handleChangedong}  >
                                                <input type="checkbox" className="custom-control-input" value="Đông" name="Đông" />
                                                <div className="custom-control-label">Đông
                                                    <b className="badge badge-pill badge-light float-right">{dong}</b>  </div>
                                            </label>
                                            <label className="custom-control custom-checkbox" checked={this.state.checked} onChange={this.handleChangetay}>
                                                <input type="checkbox" className="custom-control-input" value="Tây" name="Tây" />
                                                <div className="custom-control-label">Tây
                                                    <b className="badge badge-pill badge-light float-right">{tay}</b>  </div>
                                            </label>
                                            <label className="custom-control custom-checkbox" checked={this.state.checked} onChange={this.handleChangenam}>
                                                <input type="checkbox" className="custom-control-input" value="Nam" name="Nam" />
                                                <div className="custom-control-label">Nam
                                                    <b className="badge badge-pill badge-light float-right">{nam}</b> </div>
                                            </label>
                                            <label className="custom-control custom-checkbox" checked={this.state.checked} onChange={this.handleChangebac}>
                                                <input type="checkbox" className="custom-control-input" value="Bắc" name="Bắc" />
                                                <div className="custom-control-label">Bắc
                                                    <b className="badge badge-pill badge-light float-right">{bac}</b> </div>
                                            </label>
                                        </div>
                                        {/* <!-- inner.// --> */}
                                    </div>
                                </article>
                                {/* <!-- filter-group .// --> */}
                                <article className="filter-group">
                                    <h6 className="title">
                                        <a href="#" className="dropdown-toggle" data-toggle="collapse" data-target="#collapse_3"> Mức giá </a>
                                    </h6>
                                    <div className="filter-content collapse show" id="collapse_3">
                                        <div className="inner" >
                                            <div
                                                style={{
                                                    display: "flex",
                                                    justifyContent: "center",
                                                    flexWrap: "wrap",
                                                    margin: "2em"
                                                }}
                                            >
                                                <Range
                                                    values={this.state.values}
                                                    step={STEP}
                                                    min={MIN}
                                                    max={MAX}
                                                    onChange={(values) => this.setState({ values })}
                                                    renderTrack={({ props, children }) => (
                                                        <div
                                                            onMouseDown={props.onMouseDown}
                                                            onTouchStart={props.onTouchStart}
                                                            style={{
                                                                ...props.style,
                                                                height: "36px",
                                                                display: "flex",
                                                                width: "100%"
                                                            }}
                                                        >
                                                            <div
                                                                ref={props.ref}
                                                                style={{
                                                                    height: "5px",
                                                                    width: "100%",
                                                                    borderRadius: "4px",
                                                                    background: getTrackBackground({
                                                                        values: this.state.values,
                                                                        colors: ["#548BF4", "#ccc"],
                                                                        min: MIN,
                                                                        max: MAX
                                                                    }),
                                                                    alignSelf: "center"
                                                                }}
                                                            >
                                                                {children}
                                                            </div>
                                                        </div>
                                                    )}
                                                    renderThumb={({ props, isDragged }) => (
                                                        <div
                                                            {...props}
                                                            style={{
                                                                ...props.style,
                                                                height: "42px",
                                                                width: "42px",
                                                                borderRadius: "4px",
                                                                backgroundColor: "#FFF",
                                                                display: "flex",
                                                                justifyContent: "center",
                                                                alignItems: "center",
                                                                boxShadow: "0px 2px 6px #AAA"
                                                            }}
                                                        >
                                                            <div
                                                                style={{
                                                                    height: "16px",
                                                                    width: "5px",
                                                                    backgroundColor: isDragged ? "#548BF4" : "#CCC"
                                                                }}
                                                            />
                                                        </div>
                                                    )}
                                                />
                                                <output style={{ marginTop: "30px" }} id="output">
                                                    {this.state.values[0].toFixed(1)}
                                                </output>
                                            </div>
                                            <div>
                                        
                                            </div>
                                        </div>
                                        {/* <!-- inner.// --> */}
                                    </div>
                                </article>
                                {/* <!-- filter-group .// --> */}
                                <article className="filter-group">
                                    <h6 className="title">
                                        <a href="#" className="dropdown-toggle" data-toggle="collapse" data-target="#collapse_4"> Diện tích </a>
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
                                        <a href="#" className="dropdown-toggle" data-toggle="collapse" data-target="#collapse_5">Vị trí</a>
                                    </h6>
                                    <div className="filter-content collapse show" id="collapse_5">

                                        <article className="filter-group ml-4">
                                            <h6 className="title">
                                                <a href="#" className="dropdown-toggle" data-toggle="collapse" data-target="#collapse_6">Quốc gia</a>
                                            </h6>
                                            <div className="filter-content collapse show" id="collapse_6">
                                                <div className="inner">
                                                    <b className="badge badge-pill badge-light float-right">{QQM}</b>
                                                    <label className="custom-control custom-radio" checked={this.state.checked} onChange={this.handleChange}>
                                                        <input type="radio" name="Mỹ" value="Mỹ" className="custom-control-input" />
                                                        <div className="custom-control-label">Mỹ</div>
                                                    </label>
                                                    <b className="badge badge-pill badge-light float-right">{QQN}</b>
                                                    <label className="custom-control custom-radio" onChange={this.handleChange}>
                                                        <input type="radio" name="Nga" value="Nga" className="custom-control-input" />
                                                        <div className="custom-control-label">Nga</div>
                                                    </label>
                                                    <b className="badge badge-pill badge-light float-right">{QQVN}</b>
                                                    <label className="custom-control custom-radio" onChange={this.handleChange}>
                                                        <input type="radio" name="Việt Nam" value="Việt Nam" className="custom-control-input" />
                                                        <div className="custom-control-label">Việt Nam</div>
                                                    </label>
                                                    <b className="badge badge-pill badge-light float-right">{QQTQ}</b>
                                                    <label className="custom-control custom-radio" onChange={this.handleChange}>
                                                        <input type="radio" name="Trung Quốc" value="Trung Quốc" className="custom-control-input" />
                                                        <div className="custom-control-label">Trung Quốc</div>
                                                    </label>
                                                    <b className="badge badge-pill badge-light float-right">{QQNB}</b>
                                                    <label className="custom-control custom-radio" onChange={this.handleChange}>
                                                        <input type="radio" name="Nhật Bản" value="Nhật Bản" className="custom-control-input" />
                                                        <div className="custom-control-label">Nhật Bản</div>
                                                    </label>
                                                    <b className="badge badge-pill badge-light float-right">{QQHQ}</b>
                                                    <label className="custom-control custom-radio" onChange={this.handleChange}>
                                                        <input type="radio" name="Hàn Quốc" value="Hàn Quốc" className="custom-control-input" />
                                                        <div className="custom-control-label">Hàn Quốc</div>
                                                    </label>

                                                </div>
                                                {/* <!-- inner.// --> */}
                                            </div>
                                        </article>
                                        <article className="filter-group ml-4">
                                            <h6 className="title">
                                                <a href="#" className="dropdown-toggle" data-toggle="collapse" data-target="#collapse_6">Tỉnh thành</a>
                                            </h6>
                                            <div className="filter-content collapse show" id="collapse_6">
                                                <div className="inner">
                                                    <b className="badge badge-pill badge-light float-right">{TTHCN}</b>
                                                    <label className="custom-control custom-radio" checked={this.state.checked} onChange={this.handleChange}>
                                                        <input type="radio" name="Hồ Chí Minh" value="Hồ Chí Minh" className="custom-control-input" />
                                                        <div className="custom-control-label">Hồ Chí Minh</div>
                                                    </label>
                                                    <b className="badge badge-pill badge-light float-right">{TTHN}</b>
                                                    <label className="custom-control custom-radio" onChange={this.handleChange}>
                                                        <input type="radio" name="Hà Nội" value="Hà Nội" className="custom-control-input" />
                                                        <div className="custom-control-label">Hà Nội</div>
                                                    </label>
                                                    <b className="badge badge-pill badge-light float-right">{TTDN}</b>
                                                    <label className="custom-control custom-radio" onChange={this.handleChange}>
                                                        <input type="radio" name="Đà Nẵng" value="Đà Nẵng" className="custom-control-input" />
                                                        <div className="custom-control-label">Đà Nẵng</div>
                                                    </label>
                                                </div>
                                                {/* <!-- inner.// --> */}
                                            </div>
                                        </article>
                                        <article className="filter-group ml-4">
                                            <h6 className="title">
                                                <a href="#" className="dropdown-toggle" data-toggle="collapse" data-target="#collapse_7">Quận,Huyện</a>
                                            </h6>
                                            <div className="filter-content collapse show" id="collapse_7">
                                                <div className="inner">
                                                    <b className="badge badge-pill badge-light float-right">{QGV}</b>
                                                    <label className="custom-control custom-radio" checked={this.state.checked} onChange={this.handleChange}>
                                                        <input type="radio" name="Quận Gò Vấp" value="Gò Vấp" className="custom-control-input" />
                                                        <div className="custom-control-label">Quận Gò Vấp</div>
                                                    </label>
                                                    <b className="badge badge-pill badge-light float-right">{Q12}</b>
                                                    <label className="custom-control custom-radio" onChange={this.handleChange}>
                                                        <input type="radio" name="Quận 12" value="Quận 12" className="custom-control-input" />
                                                        <div className="custom-control-label">Quận 12</div>
                                                    </label>
                                                    <b className="badge badge-pill badge-light float-right">{QPN}</b>
                                                    <label className="custom-control custom-radio" onChange={this.handleChange}>
                                                        <input type="radio" name="Quận Phú Nhuận" value="Phú Nhuận" className="custom-control-input" />
                                                        <div className="custom-control-label">Quận Phú Nhuận</div>
                                                    </label>
                                                    <b className="badge badge-pill badge-light float-right">{QTP}</b>
                                                    <label className="custom-control custom-radio" onChange={this.handleChange}>
                                                        <input type="radio" name="Quận Tân Phú" value="Tân Phú" className="custom-control-input" />
                                                        <div className="custom-control-label">Quận Tân Phú</div>
                                                    </label>
                                                    <b className="badge badge-pill badge-light float-right">{QLB}</b>
                                                    <label className="custom-control custom-radio" onChange={this.handleChange}>
                                                        <input type="radio" name="Quận Long Biên" className="custom-control-input" />
                                                        <div className="custom-control-label">Quận Long Biên</div>
                                                    </label>
                                                    <b className="badge badge-pill badge-light float-right">{QHM}</b>
                                                    <label className="custom-control custom-radio" onChange={this.handleChange}>
                                                        <input type="radio" name="Quận Hoàng Mai" value="Hoàng Mai" className="custom-control-input" />
                                                        <div className="custom-control-label">Quận Hoàng Mai</div>
                                                    </label>
                                                    <b className="badge badge-pill badge-light float-right">{QST}</b>
                                                    <label className="custom-control custom-radio" onChange={this.handleChange}>
                                                        <input type="radio" name="Quận Sơn Trà" value="Sơn Trà" className="custom-control-input" />
                                                        <div className="custom-control-label">Quận Sơn Trà</div>
                                                    </label>
                                                    <b className="badge badge-pill badge-light float-right">{QBD}</b>
                                                    <label className="custom-control custom-radio" onChange={this.handleChange}>
                                                        <input type="radio" name="Quận Ba Đình" value="Ba Đình" className="custom-control-input" />
                                                        <div className="custom-control-label">Quận Ba Đình</div>
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
                                        <strong className="mr-md-auto"> <i className="far fa-hand-point-right" style={{ color: `green` }}> </i> {n} / {totalElements} Sản phẩm </strong>
                                        <input title="Nhập sản phẩm cần tìm kiếm..." className="mr-2 form-control" style={{ width: `400px` }} type="text" placeholder="Nhập sản phẩm cần tìm kiếm..." onChange={(e) => this.searchSpace(e)} />
                                        <button title="Reset" className="mr-2 form-control" onClick={() => this.refreshPage()} >
                                            Làm mới
                                        </button>
                                        <select className="mr-2 form-control">
                                            <option>Mới nhất</option>
                                            <option>Xu hướng</option>
                                            <option>Phổ biến nhất</option>
                                            <option>Rẻ nhất</option>
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
                                Trang: {currentPage} / {totalPages} Tổng số trang.
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