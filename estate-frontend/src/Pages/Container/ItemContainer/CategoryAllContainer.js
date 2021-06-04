import React, { Component } from 'react';
import HomeServices from '../../../HomeServices/HomeServices';
import NumberFormat from 'react-number-format';
import axios from "axios";
class CategoryAllContainer extends Component {

    constructor(props) {
        super(props);
        this.state = {
            category: {},
            search: '',
            categorys: [],
            categorybyproduct: [],
            product: [],
            currentPage: 1,
            productsPerPage: 6,

        };

        this.categoryService = new HomeServices();
        this.productService = new HomeServices();
        this.categoryproductService = new HomeServices();
        this.countproductService = new HomeServices();
    }

    componentDidMount() {

        const id = this.props.match.params.id;

        if (id == null) {


            axios.get("http://localhost:8080/api/v1/products?pageNumber=" + this.state.currentPage + "&pageSize=" + this.state.productsPerPage)
                .then(response => response.data)
                .then((data) => {
                    this.setState({
                        product: data.content,
                        totalPages: data.totalPages,
                        totalElements: data.totalElements,
                        currentPage: data.number + 1
                    });
                });

        } else {
            this.categoryproductService.getAllProductByCategory(id).then(response => {
                this.setState({ categorybyproduct: response });
            });
        }
        this.categoryService.getAllCategorysId(id).then(response => {
            this.setState({ category: response });
        });
        this.categoryService.getAllCategorys().then(response => {
            this.setState({ categorys: response });
        });


    }
    changePage = (event) => {
        let targetPage = parseInt(event.target.value);
        this.setState({
            [event.target.name]: targetPage
        });
    };
    prevPage = () => {
        let prevPage = 1;
        if (this.state.currentPage > prevPage) {

            this.state.currentPage -= prevPage;

        }
    };
    nextPage = () => {
        if (this.state.currentPage < Math.ceil(this.state.totalElements / this.state.productsPerPage)) {

            this.state.currentPage += 1;

        }
    };


    rendercategory = () => {
        return this.state.categorys.map((categorys, key) => {
            return (
                <ul class="list-menu" key={key}>
                    <li><a href={`/loai-san-pham/index=${categorys.idLong}`}>{categorys.titleString}</a></li>
                </ul>
            );
        });
    }
    renderproductsearch = () => {

        return this.state.search.map((searchs, key) => {
            return (
                <article class="card card-product-list" key={key}>

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
                                    <span class="h5 price" style={{ color: `red` }}>Giá: <NumberFormat value={searchs.priceDouble} displayType={'text'} thousandSeparator={true} /></span>
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
    renderproductbycategory = () => {

        return this.state.categorybyproduct.map((products, key) => {
            return (
                <article class="card card-product-list" key={key}>

                    <div class="row no-gutters">
                        <aside class="col-md-3">
                            <a href={`/index=${products.idLong}`} class="img-wrap" style={{ width: `100%` }}>
                                <span class="badge badge-danger"> NEW </span>
                                <img src={`/resources/images/items/${products.imageString}`} />
                            </a>
                        </aside>
                        {/* <!-- col.// --> */}
                        <div class="col-md-6">
                            <div class="info-main">
                                <a href={`/index=${products.idLong}`} class="h5 title">{products.titleString}</a>
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
                                    <span class="tag"> {products.roomInteger} phòng </span>
                                    {/* <span class="tag"> 80 lượt xem </span> */}
                                    {/* <span class="tag"> Russia </span> */}
                                </p>
                                <p>
                                    {`${products.descriptionString.substring(0, 115)}... `}<a href={`/index=${products.idLong}`}> Đọc thêm</a>
                                </p>
                            </div>
                            {/* <!-- info-main.// --> */}
                        </div>
                        {/* <!-- col.// --> */}
                        <aside class="col-sm-3">
                            <div class="info-aside">
                                <div class="price-wrap">
                                    <span class="h5 price" style={{ color: `red` }}>Giá: <NumberFormat value={products.priceDouble} displayType={'text'} thousandSeparator={true} /></span>
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
    renderproduct = () => {
        return this.state.product.map((products, key) => {
            return (
                <article class="card card-product-list" key={key}>
                    <div class="row no-gutters">
                        <aside class="col-md-3">
                            <a href={`/index=${products.idLong}`} class="img-wrap" style={{ width: `100%` }}>
                                <span class="badge badge-danger"> NEW </span>
                                <img src={`/resources/images/items/${products.imageString}`} />
                            </a>
                        </aside>
                        {/* <!-- col.// --> */}
                        <div class="col-md-6">
                            <div class="info-main">
                                <a href={`/index=${products.idLong}`} class="h5 title">{products.titleString}</a>
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
                                    <span class="tag"> {products.roomInteger} phòng </span>
                                    {/* <span class="tag"> 80 lượt xem </span> */}
                                    {/* <span class="tag"> Russia </span> */}
                                </p>

                                <p>
                                    {`${products.descriptionString.substring(0, 115)}... `}<a href={`/index=${products.idLong}`}> Đọc thêm</a>
                                </p>

                            </div>
                            {/* <!-- info-main.// --> */}
                        </div>
                        {/* <!-- col.// --> */}
                        <aside class="col-sm-3">
                            <div class="info-aside">
                                <div class="price-wrap">
                                    <span class="h5 price" style={{ color: `red` }}>Giá: <NumberFormat value={products.priceDouble} displayType={'text'} thousandSeparator={true} /></span>
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
    render() {
        const { currentPage, totalPages } = this.state;
        const category = this.state.category;
        const id = this.props.match.params.id;
        if (id == null) {
            var n = this.state.product.length;

        } else {
            var n = this.state.categorybyproduct.length;

        }


        return (
            // <!-- ========================= SECTION CONTENT ========================= -->
            <section class="section-content padding-y">
                <div class="container">


                    {/* <!-- ============================  FILTER TOP  ================================= --> */}
                    <div class="card mb-3">
                        <div class="card-body">
                            <ol class="breadcrumb float-left">
                                <li class="breadcrumb-item"><a href={`/`} >trang-chu</a></li>
                                <li class="breadcrumb-item"><a href={`/loai-san-pham?All`} >loai-san-pham</a></li>
                                <li class="breadcrumb-item active">{category.slugString}</li>
                            </ol>
                        </div>
                        {/* <!-- card-body .// --> */}
                    </div>
                    {/* <!-- card.// --> */}

                    {/* <!-- ============================ FILTER TOP END.// ================================= --> */}


                    <div class="row">
                        <aside class="col-md-2">

                            <article class="filter-group">
                                <h6 class="title">
                                    <a href={`/loai-san-pham?All`} class="dropdown-toggle" data-toggle="collapse" data-target="#collapse_1">Loại sản phẩm </a>
                                </h6>
                                <div class="filter-content collapse show" id="collapse_1">
                                    <div class="inner">
                                        {this.rendercategory()}
                                    </div>
                                    {/* <!-- inner.// --> */}
                                </div>
                            </article>
                            {/* <!-- filter-group  .// --> */}
                            <article class="filter-group">
                                <h6 class="title">
                                    <a href="#" class="dropdown-toggle" data-toggle="collapse" data-target="#collapse_2"> Hướng </a>
                                </h6>
                                <div class="filter-content collapse show" id="collapse_2">
                                    <div class="inner">
                                        <label class="custom-control custom-checkbox">
                                            <input type="checkbox" checked="" class="custom-control-input" />
                                            <div class="custom-control-label">Đông
                                  <b class="badge badge-pill badge-light float-right">120</b>  </div>
                                        </label>
                                        <label class="custom-control custom-checkbox">
                                            <input type="checkbox" checked="" class="custom-control-input" />
                                            <div class="custom-control-label">Tây
                                  <b class="badge badge-pill badge-light float-right">15</b>  </div>
                                        </label>
                                        <label class="custom-control custom-checkbox">
                                            <input type="checkbox" checked="" class="custom-control-input" />
                                            <div class="custom-control-label">Nam
                                  <b class="badge badge-pill badge-light float-right">35</b> </div>
                                        </label>
                                        <label class="custom-control custom-checkbox">
                                            <input type="checkbox" checked="" class="custom-control-input" />
                                            <div class="custom-control-label">Bắc
                                  <b class="badge badge-pill badge-light float-right">89</b> </div>
                                        </label>
                                        <label class="custom-control custom-checkbox">
                                            <input type="checkbox" class="custom-control-input" />
                                            <div class="custom-control-label">Tây nam
                                  <b class="badge badge-pill badge-light float-right">30</b>  </div>
                                        </label>
                                    </div>
                                    {/* <!-- inner.// --> */}
                                </div>
                            </article>
                            {/* <!-- filter-group .// --> */}
                            <article class="filter-group">
                                <h6 class="title">
                                    <a href="#" class="dropdown-toggle" data-toggle="collapse" data-target="#collapse_3"> Mức giá </a>
                                </h6>
                                <div class="filter-content collapse show" id="collapse_3">
                                    <div class="inner">
                                        <input type="range" class="custom-range" min="0" max="100" name="" />
                                        <div class="form-row">
                                            <div class="form-group col-md-6">
                                                <label>Thấp</label>
                                                <input class="form-control" placeholder="$0" type="number" />
                                            </div>
                                            <div class="form-group text-right col-md-6">
                                                <label>Cao</label>
                                                <input class="form-control" placeholder="$1,0000" type="number" />
                                            </div>
                                        </div>
                                        {/* <!-- form-row.// --> */}
                                        <button class="btn btn-block btn-primary">Lọc</button>
                                    </div>
                                    {/* <!-- inner.// --> */}
                                </div>
                            </article>
                            {/* <!-- filter-group .// --> */}
                            <article class="filter-group">
                                <h6 class="title">
                                    <a href="#" class="dropdown-toggle" data-toggle="collapse" data-target="#collapse_4"> Diện tích </a>
                                </h6>
                                <div class="filter-content collapse show" id="collapse_4">
                                    <div class="inner">
                                        <label class="checkbox-btn">
                                            <input type="checkbox" />
                                            <span class="btn btn-light"> Dưới 50 m<sup>2</sup></span>
                                        </label>

                                        <label class="checkbox-btn">
                                            <input type="checkbox" />
                                            <span class="btn btn-light"> Trên 50 m<sup>2</sup></span>
                                        </label>

                                        <label class="checkbox-btn">
                                            <input type="checkbox" />
                                            <span class="btn btn-light"> Nhỏ 100 m<sup>2</sup></span>
                                        </label>

                                        <label class="checkbox-btn">
                                            <input type="checkbox" />
                                            <span class="btn btn-light"> Lớn 100 m<sup>2</sup></span>
                                        </label>
                                    </div>
                                    {/* <!-- inner.// --> */}
                                </div>
                            </article>
                            {/* <!-- filter-group .// --> */}
                            <article class="filter-group">
                                <h6 class="title">
                                    <a href="#" class="dropdown-toggle" data-toggle="collapse" data-target="#collapse_5"> Điều kiện </a>
                                </h6>
                                <div class="filter-content collapse show" id="collapse_5">
                                    <div class="inner">
                                        <label class="custom-control custom-radio">
                                            <input type="radio" name="myfilter_radio" checked="" class="custom-control-input" />
                                            <div class="custom-control-label">Bất kỳ</div>
                                        </label>

                                        <label class="custom-control custom-radio">
                                            <input type="radio" name="myfilter_radio" class="custom-control-input" />
                                            <div class="custom-control-label">Mới </div>
                                        </label>

                                        <label class="custom-control custom-radio">
                                            <input type="radio" name="myfilter_radio" class="custom-control-input" />
                                            <div class="custom-control-label">Phổ biến</div>
                                        </label>

                                        <label class="custom-control custom-radio">
                                            <input type="radio" name="myfilter_radio" class="custom-control-input" />
                                            <div class="custom-control-label">Tốt nhất</div>
                                        </label>
                                    </div>
                                    {/* <!-- inner.// --> */}
                                </div>
                            </article>
                            {/* <!-- filter-group .// --> */}

                        </aside>
                        {/* <!-- col.// --> */}
                        <main class="col-md-10">


                            <header class="mb-3">
                                <div class="form-inline">
                                    <strong class="mr-md-auto">{n} Sản phẩm </strong>
                                    <select class="mr-2 form-control">
                                        <option>Mới nhất</option>
                                        <option>Xu hướng</option>
                                        <option>Phổ biến nhất</option>
                                        <option>Rẻ nhất</option>
                                    </select>
                                    <div class="btn-group">
                                        <a href={`/danh-sach`} class="btn btn-light" data-toggle="tooltip" title="List view">
                                            <i class="fa fa-bars"></i></a>
                                        <a href={`loai-san-pham?All`} class="btn btn-light active" data-toggle="tooltip" title="Grid view">
                                            <i class="fa fa-th"></i></a>
                                    </div>
                                </div>
                            </header>
                            {/* <!-- sect-heading --> */}


                            {this.renderproduct()}
                            {this.renderproductbycategory()}

                            <nav class="mb-4" aria-label="Page navigation sample">
                                <ul class="pagination">
                                    <li class="page-item " disabled={currentPage === 0 ? true : false} onClick={this.prevPage}><a class="page-link" href="#">Previous</a></li>

                                    <li class="page-item active" name="currentPage" value={currentPage}
                                        onChange={this.changePage}><a class="page-link" href="#">{currentPage}</a></li>

                                    <li class="page-item" disabled={currentPage === totalPages ? true : false} onClick={this.nextPage}><a class="page-link" href="#">Next</a></li>
                                </ul>
                            </nav>
                            Showing Page {currentPage} of {totalPages}
                            <div class="box text-center">
                                <p>Bạn đã tìm thấy những gì bạn đang tìm kiếm?</p>
                                <a href="" class="btn btn-light">Yes</a>
                                <a href="" class="btn btn-light">No</a>
                            </div>


                        </main>
                        {/* <!-- col.// --> */}

                    </div>

                </div>
                {/* <!-- container .//  --> */}
            </section>
            // <!-- ========================= SECTION CONTENT END// ========================= -->

        );
    }
}

export default CategoryAllContainer;