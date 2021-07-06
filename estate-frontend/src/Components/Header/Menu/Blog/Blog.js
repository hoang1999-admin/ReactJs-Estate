/* eslint-disable no-sequences */
/* eslint-disable no-script-url */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */
import React, { Component } from 'react';
import HomeServices from '../../../../HomeServices/HomeServices';
import Header from '../../../../Components/Header/Header';
import Footer from '../../../../Components/Footer/Footer';
import Subcribe from '../../../../Components/Subcribe/Subcribe';
import './blog.css'

class Blog extends Component {

    constructor(props) {
        super(props);
        this.state = {
            category: {},
            products: [],
            blogs: [],
            posts1: [],
            posts2: [],
            posts3: [],
            posts4: [],
            posts5: [],
            posts6: [],

            pages1: [],
            pages2: [],
            pages3: [],
            pages4: [],
            pages5: [],
            pages6: [],

            categorysale: [],
            categoryrent: [],
            categoryapply: [],
            categoryfurnitureandextor: [],
            categoryfengshui: [],
            categoryrecruitment: [],
            categoryexample: [],
        };

        this.categoryService = new HomeServices();
        this.productService = new HomeServices();
        this.blogService = new HomeServices();
        this.pageService = new HomeServices();
        this.postService = new HomeServices();
        this.pageService = new HomeServices();
    }
    componentDidMount() {
        const id = this.props.match.params.id;
        this.categoryService.getAllCategorysId(id).then((res) => {
            this.setState({ category: res });
        });
        this.productService.getAllProductsRent().then(response => {
            this.setState({ products: response });
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
        this.blogService.getAllBlogs().then((res) => {
            this.setState({ blogs: res });
        });
        this.postService.getAllPosts1().then((res) => {
            this.setState({ posts1: res });
        });
        this.postService.getAllPosts2().then((res) => {
            this.setState({ posts2: res });
        });
        this.postService.getAllPosts3().then((res) => {
            this.setState({ posts3: res });
        });
        this.postService.getAllPosts4().then((res) => {
            this.setState({ posts4: res });
        });
        this.postService.getAllPosts5().then((res) => {
            this.setState({ posts5: res });
        });
        this.postService.getAllPosts6().then((res) => {
            this.setState({ posts6: res });
        });
        this.pageService.getAllPages1().then((res) => {
            this.setState({ pages1: res });
        });
        this.pageService.getAllPages2().then((res) => {
            this.setState({ pages2: res });
        });
        this.pageService.getAllPages3().then((res) => {
            this.setState({ pages3: res });
        });
        this.pageService.getAllPages4().then((res) => {
            this.setState({ pages4: res });
        });
        this.pageService.getAllPages5().then((res) => {
            this.setState({ pages5: res });
        });
        this.pageService.getAllPages6().then((res) => {
            this.setState({ pages6: res });
        });

    }
    rendercategorysale = () => {

        return this.state.categorysale.map((categorys, key) => {
            return (
                <ul>
                    <li>
                        <a href={`/loai-san-pham/index=${categorys.idLong}`} key={key}><b>{categorys.titleString}</b></a>
                    </li><hr />
                </ul>

            );
        });
    }
    rendercategoryrent = () => {

        return this.state.categoryrent.map((categorys, key) => {
            return (
                <ul>
                    <li>
                        <a href={`/loai-san-pham/index=${categorys.idLong}`} key={key}><b>{categorys.titleString}</b></a>
                    </li><hr />
                </ul>

            );
        });
    }
    rendercategoryapply = () => {

        return this.state.categoryapply.map((categorys, key) => {
            return (
                <ul>
                    <li>
                        <a href={`/tuyen-dung/index=${categorys.idLong}`} key={key}><b>{categorys.titleString}</b></a>
                    </li><hr />
                </ul>

            );
        });
    }
    rendercategoryfurnitureandextor = () => {

        return this.state.categoryfurnitureandextor.map((categorys, key) => {
            return (
                <ul>
                    <li>
                        <a href={`/noi-va-ngoai-that/index=${categorys.idLong}`} key={key}><b>{categorys.titleString}</b></a>
                    </li><hr />
                </ul>

            );
        });
    }
    rendercategoryfengshui = () => {

        return this.state.categoryfengshui.map((categorys, key) => {
            return (
                <ul>
                    <li>
                        <a href={`/phong-thuy/index=${categorys.idLong}`} key={key}><b>{categorys.titleString}</b></a>
                    </li><hr />
                </ul>

            );
        });
    }
    rendercategoryrecruitment = () => {

        return this.state.categoryrecruitment.map((categorys, key) => {
            return (
                <ul>
                    <li>
                        <a href={`/tin-tuc/index=${categorys.idLong}`} key={key}><b>{categorys.titleString}</b></a>
                    </li><hr />
                </ul>

            );
        });
    }
    rendercategoryexample = () => {

        return this.state.categoryexample.map((categorys, key) => {
            return (
                <ul>
                    <li>
                        <a href={`/du-an/index=${categorys.idLong}`} key={key}><b>{categorys.titleString}</b></a>
                    </li><hr />
                </ul>

            );
        });
    }
    renderblog = () => {

        return this.state.blogs.map((blog, key) => {
            return (

                <div >

                    <div class="clear"></div><br />
                    <div style={{ float: `left` }}>
                        <div >
                            <a href="" title="">
                                <img class="data-image" src={`/resources/images/posts/${blog.imageString}`} title={`/resources/images/posts/${blog.imageString}`} alt="" />
                            </a>
                        </div>
                    </div>
                    <div >
                        <p style={{ padding: `0px` }, { margin: `5px 5px 0px 0px` }, { fontSize: `12px` }}>
                            <a href={`/chi-tiet/index=${blog.idLong}`} key={key} title={`${blog.titleString}`}><b>{`${blog.titleString.substring(0, 75)}... `}<a title={blog.titleString} href={`/chi-tiet/index=${blog.idLong}`}> Đọc thêm</a></b></a>
                        </p>
                    </div>
                    <div class="clear"></div><br />
                </div>
            );
        });
    }
    renderpost1 = () => {
        return this.state.posts1.map((post, key) => {
            return (
                <div className="row" key={key}>
                    <div className="col-6">
                        <a href={`/chi-tiet-bai-viet/index=${post.idLong}`}><img src={`/resources/images/posts/${post.imageString}`} width="150px" height="150px" /></a>
                    </div>
                    <div className="col-6">
                        <b><a title={post.titleString} href={`/chi-tiet-bai-viet/index=${post.idLong}`}>{post.titleString}</a></b>
                    </div>
                    <p><a title={post.titleString} href={`/chi-tiet-bai-viet/index=${post.idLong}`}>{post.descriptionString}</a></p>
                </div>
            );
        });
    }
    renderpage1 = () => {
        return this.state.pages1.map((page, key) => {
            return (
                <ul>
                    <li className="mb-2" key={key}>
                        <a href={`/chi-tiet-trang/index=${page.idLong}`}>{page.titleString}</a>
                    </li>
                </ul>
            );
        });
    }
    renderpost2 = () => {
        return this.state.posts2.map((post, key) => {
            return (
                <div className="row" key={key}>
                    <div className="col-6">
                        <a href={`/chi-tiet-bai-viet/index=${post.idLong}`}><img src={`/resources/images/posts/${post.imageString}`} width="150px" height="150px" /></a>
                    </div>
                    <div className="col-6">
                        <b><a title={post.titleString} href={`/chi-tiet-bai-viet/index=${post.idLong}`}>{post.titleString}</a></b>
                    </div>
                    <p><a title={post.titleString} href={`/chi-tiet-bai-viet/index=${post.idLong}`}>{post.descriptionString}</a></p>
                </div>
            );
        });

    }
    renderpage2 = () => {
        return this.state.pages2.map((page, key) => {
            return (
                <ul>
                    <li className="mb-2" key={key}>
                        <a href={`/chi-tiet-trang/index=${page.idLong}`}>{page.titleString}</a>
                    </li>
                </ul>
            );
        });
    }
    renderpost3 = () => {
        return this.state.posts3.map((post, key) => {
            return (
                <div className="row" key={key}>
                    <div className="col-6">
                        <a href={`/chi-tiet-bai-viet/index=${post.idLong}`}><img src={`/resources/images/posts/${post.imageString}`} width="150px" height="150px" /></a>
                    </div>
                    <div className="col-6">
                        <b><a title={post.titleString} href={`/chi-tiet-bai-viet/index=${post.idLong}`}>{post.titleString}</a></b>
                    </div>
                    <p><a title={post.titleString} href={`/chi-tiet-bai-viet/index=${post.idLong}`}>{post.descriptionString}</a></p>
                </div>
            );
        });

    }
    renderpage3 = () => {
        return this.state.pages3.map((page, key) => {
            return (
                <ul>
                    <li className="mb-2" key={key}>
                        <a href={`/chi-tiet-trang/index=${page.idLong}`}>{page.titleString}</a>
                    </li>
                </ul>
            );
        });
    }
    renderpost4 = () => {
        return this.state.posts4.map((post, key) => {
            return (
                <div className="row" key={key}>
                    <div className="col-6">
                        <a href={`/chi-tiet-bai-viet/index=${post.idLong}`}><img src={`/resources/images/posts/${post.imageString}`} width="150px" height="150px" /></a>
                    </div>
                    <div className="col-6">
                        <b><a title={post.titleString} href={`/chi-tiet-bai-viet/index=${post.idLong}`}>{post.titleString}</a></b>
                    </div>
                    <p><a title={post.titleString} href={`/chi-tiet-bai-viet/index=${post.idLong}`}>{post.descriptionString}</a></p>
                </div>
            );
        });

    }
    renderpage4 = () => {
        return this.state.pages4.map((page, key) => {
            return (
                <ul>
                    <li className="mb-2" key={key}>
                        <a href={`/chi-tiet-trang/index=${page.idLong}`}>{page.titleString}</a>
                    </li>
                </ul>
            );
        });
    }
    renderpost5 = () => {
        return this.state.posts5.map((post, key) => {
            return (
                <div className="row" key={key}>
                    <div className="col-6">
                        <a href={`/chi-tiet-bai-viet/index=${post.idLong}`}><img src={`/resources/images/posts/${post.imageString}`} width="150px" height="150px" /></a>
                    </div>
                    <div className="col-6">
                        <b><a title={post.titleString} href={`/chi-tiet-bai-viet/index=${post.idLong}`}>{post.titleString}</a></b>
                    </div>
                    <p><a title={post.titleString} href={`/chi-tiet-bai-viet/index=${post.idLong}`}>{post.descriptionString}</a></p>
                </div>
            );
        });
    }
    renderpage5 = () => {
        return this.state.pages5.map((page, key) => {
            return (
                <ul>
                    <li className="mb-2" key={key}>
                        <a href={`/chi-tiet-trang/index=${page.idLong}`}>{page.titleString}</a>
                    </li>
                </ul>
            );
        });
    }
    renderpost6 = () => {
        return this.state.posts6.map((post, key) => {
            return (
                <div className="row" key={key}>
                    <div className="col-6">
                        <a href={`/chi-tiet-bai-viet/index=${post.idLong}`}><img src={`/resources/images/posts/${post.imageString}`} width="150px" height="150px" /></a>
                    </div>
                    <div className="col-6">
                        <b><a title={post.titleString} href={`/chi-tiet-bai-viet/index=${post.idLong}`}>{post.titleString}</a></b>
                    </div>
                    <p><a title={post.titleString} href={`/chi-tiet-bai-viet/index=${post.idLong}`}>{post.descriptionString}</a></p>
                </div>
            );
        });

    }
    renderpage6 = () => {
        return this.state.pages6.map((page, key) => {
            return (
                <ul>
                    <li className="mb-2" key={key}>
                        <a href={`/chi-tiet-trang/index=${page.idLong}`}>{page.titleString}</a>
                    </li>
                </ul>
            );
        });
    }
    render() {
        const category = this.state.category;
        return (
            <div >
                <Header />
                <div class="container ">
                    <ol class="breadcrumb py-3 ">
                        <a href="/"> <li class="breadcrumb-item mr-2"> trang-chu </li> </a>
                        <a href="javascript:void(0)"> <li class="breadcrumb-item mr-2"> / </li> </a>
                        <a href={category.slugString}> <li class="breadcrumb-item active" aria-current="page"> {category.slugString} </li> </a>

                    </ol>
                </div>
                <div className="row ml-5 mr-5">
                    <div className="col-lg-6">
                        <section class="padding-bottom">
                            <header class="section-heading heading-line">
                                <h4 class="title-section text-uppercase text-white" style={{ background: `#055699` }}>TIN NHÀ ĐẤT</h4>
                            </header>
                            <div className="row">
                                <div className="col-6" >
                                    {this.renderpost1()}
                                </div>
                                <div className="col-6">
                                    {this.renderpage1()}
                                </div>
                            </div>
                        </section>
                        <section class="padding-bottom">
                            <header class="section-heading heading-line">
                                <h4 class="title-section text-uppercase text-white" style={{ background: `#055699` }}>KIẾN TRÚC ĐẸP</h4>
                            </header>
                            <div className="row">
                                <div className="col-6" >
                                    {this.renderpost2()}
                                </div>
                                <div className="col-6">
                                    {this.renderpage2()}
                                </div>
                            </div>
                        </section>
                        <section class="padding-bottom">
                            <header class="section-heading heading-line">
                                <h4 class="title-section text-uppercase text-white" style={{ background: `#055699` }}>MẪU NHÀ ĐẸP</h4>
                            </header>
                            <div className="row">
                                <div className="col-6" >
                                    {this.renderpost3()}
                                </div>
                                <div className="col-6">
                                    {this.renderpage3()}
                                </div>
                            </div>
                        </section>
                        <section class="padding-bottom">
                            <header class="section-heading heading-line">
                                <h4 class="title-section text-uppercase text-white" style={{ background: `#055699` }}>THIẾT KẾ NỘI THẤT</h4>
                            </header>
                            <div className="row">
                                <div className="col-6" >
                                    {this.renderpost4()}
                                </div>
                                <div className="col-6">
                                    {this.renderpage4()}
                                </div>
                            </div>
                        </section>
                        <section class="padding-bottom">
                            <header class="section-heading heading-line">
                                <h4 class="title-section text-uppercase text-white" style={{ background: `#055699` }}>KINH NGHIỆM</h4>
                            </header>
                            <div className="row">
                                <div className="col-6" >
                                    {this.renderpost5()}
                                </div>
                                <div className="col-6">
                                    {this.renderpage5()}
                                </div>
                            </div>
                        </section>
                        <section class="padding-bottom">
                            <header class="section-heading heading-line">
                                <h4 class="title-section text-uppercase text-white" style={{ background: `#055699` }}>KIẾN THỨC XÂY DỰNG</h4>
                            </header>
                            <div className="row">
                                <div className="col-6" >
                                    {this.renderpost6()}
                                </div>
                                <div className="col-6">
                                    {this.renderpage6()}
                                </div>
                            </div>
                        </section>
                       <hr/>
                       <p>Trong chuyên mục Tin tức bất động sản, nếu quý vị chưa tìm thấy thông tin cần tìm hoặc muốn tham khảo thêm thông tin liên quan đến lĩnh vực Tin tức bất động sản thì hãy thử tìm thêm thông tin ở mục Hỏi đáp hoặc gửi email cho chúng tôi theo địa chỉ: hotro@batdongsan.com</p>
                    </div>
                    <div className="col-lg-3">
                        <div class="box-center fa-border">
                            <div class="box-title text-white text-center " style={{ background: `#055699` }}><b>TIN RAO VẶT HOT</b></div>

                            {this.renderblog()}

                        </div>
                    </div>

                    <div className="col-lg-3">
                        <h3 className="titles">NHÀ ĐẤT BÁN</h3>
                        <br />
                        {this.rendercategorysale()}
                        <h3 className="titles">NHÀ ĐẤT CHO THUÊ</h3>
                        <br />
                        {this.rendercategoryrent()}
                        <h3 className="titles">NỘI & NGOẠI THẤT</h3>
                        <br />
                        {this.rendercategoryfurnitureandextor()}
                        <h3 className="titles">PHONG THỦY</h3>
                        <br />
                        {this.rendercategoryfengshui()}
                        <h3 className="titles">TIN TỨC</h3>
                        <br />
                        {this.rendercategoryrecruitment()}
                        <h3 className="titles">TUYỂN DỤNG</h3>
                        <br />
                        {this.rendercategoryapply()}
                        <h3 className="titles">DỰ ÁN</h3>
                        <br />
                        {this.rendercategoryexample()}
                    </div>

                </div>
                <Subcribe />
                <Footer />
            </div>
        );
    }
}

export default Blog;