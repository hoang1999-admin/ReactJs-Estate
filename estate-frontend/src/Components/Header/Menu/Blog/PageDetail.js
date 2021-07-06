/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable no-sequences */
/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable jsx-a11y/alt-text */
import React, { Component } from 'react';
import Header from '../../Header';
import Footer from '../../../Footer/Footer';
import Subcribe from '../../../Subcribe/Subcribe';
import HomeServices from '../../../../HomeServices/HomeServices';
import moment from 'moment';
import 'moment/locale/vi' 
class PageDetail extends Component {
    constructor(props) {
        super(props);
        this.state = {
            category: {},
            page: {},
            products: [],
            pagedetail: {},
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
    }
    componentDidMount() {
        const id = this.props.match.params.id;
        this.productService.getAllProductsRent().then(response => {
            this.setState({ products: response });
        });
        this.categoryService.getAllCategorysId(id).then((res) => {
            this.setState({ category: res });
        });
        this.categoryService.getAllPagesId(id).then((res) => {
            this.setState({ page: res });
        });
        this.categoryService.getAllPageDetailsId(id).then((res) => {
            this.setState({ pagedetail: res });
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
    renderproducts = () => {
        return this.state.products.map((product, key) => {
            moment.locale('vi');
            const dd = moment(product.createdatTimestamp).startOf('day').fromNow();
            return (
                <li class="col-6 col-lg-4 col-md-3" key={key}>
                    <a href={`/index=${product.idLong}`} class="item">
                        <div class="card-body">
                            <h5 class="title" style={{color:`#004e7f`}}>{product.titleString}</h5>
                            <img class="img-sm float-right" src={`/resources/images/items/${product.imageString}`} alt=""/>
                            <p class="text-muted"> <i class="fa fa-map-marker-alt"> </i> {product.positionString} </p>
                            <div class="price mt-1 "style={{fontWeight:`bold`}} >{product.pricesaleDouble} <sup> . </sup> {product.areaString} m<sup>2</sup></div>
                            <div className="row">
                    <div class=" col-9">{dd}</div>
                    <div class="col-3" style={{fontSize:`22px`}}><a href={`/luu`} title="Bấm để lưu tin" style={{color:`#004e7f`}}><i class="far fa-heart"></i></a></div>                    </div>
                        </div>
                        
                    </a>
                </li>

            );
        });
    };

    render() {

        const category = this.state.category;
        const pagedetail = this.state.pagedetail;
        const page = this.state.page;
        const dd = moment(page.createdatTimestamp).format("LLLL");
        return (
            <div >
                <Header />
                <div className="ml-5 mr-5">
                    <div class="container ">
                        <ol class="breadcrumb py-3 ">
                            <a href="/"><li class="breadcrumb-item"><a href="#">Trang-chu </a></li></a>
                            <a href="/"><li class="breadcrumb-item active" aria-current="page"> / tin-tuc</li></a>
                            <a href="/"><li class="breadcrumb-item active" aria-current="page"> / {category.slugString}</li></a>
                            <a href="/"><li class="breadcrumb-item active" aria-current="page"> / {page.slugString} </li></a>

                        </ol>
                    </div>
                    <div>
                        <button style={{ height: `20px` }, { textSize: "5px" }, { borderRadius: `10px 10px 10px 10px` }} className="bg-light">Tin tức</button>
                    </div>
                    <div>
                        <h1>{page.titleString}</h1>
                        <h5>Công bố: {dd}</h5>
                        <b>Cùng chủ đề: {page.metakeyString}</b>
                    </div>
                    <div className="row ">
                        <div className="col-9">
                        <p >{pagedetail.description1String}</p>
                        <p >{pagedetail.description2String}</p>
                        <p >{pagedetail.description3String}</p>
                        <p >{pagedetail.description4String}</p>
                        <p >{pagedetail.description5String}</p>
                        <p >{pagedetail.description6String}</p>
                        <p >{pagedetail.description7String}</p>
                            <img style={{ height: `600px` }, { width: `100%` }} src={`/resources/images/posts/${pagedetail.image1String}`} />
                            <br /><br />
                            <p >{pagedetail.description8String}</p>
                            <p >{pagedetail.description9String}</p>
                            <p >{pagedetail.description10String}</p>
                            <p >{pagedetail.description11String}</p>
                            <p >{pagedetail.description12String}</p>
                            <img style={{ height: `600px` }, { width: `100%` }} src={`/resources/images/posts/${pagedetail.image2String}`} />
                            <br /><br />
                            <p >{pagedetail.description13String}</p>
                            <p >{pagedetail.description14String}</p>
                            <p >{pagedetail.description15String}</p>
                            <p >{pagedetail.description16String}</p>
                            <p >{pagedetail.description17String}</p>
                            <p >{pagedetail.description18String}</p>
                            <p >{pagedetail.description19String}</p>
                            <img style={{ height: `600px` }, { width: `100%` }} src={`/resources/images/posts/${pagedetail.image3String}`} />
                            <br /><br />
                            <p >{pagedetail.description20String}</p>
                            <p >{pagedetail.description21String}</p>
                            <p >{pagedetail.description22String}</p>
                            <p >{pagedetail.description23String}</p>
                            <p >{pagedetail.description24String}</p>
                            <p >{pagedetail.description25String}</p>
                            <p >{pagedetail.description26String}</p>
                            <p >{pagedetail.description27String}</p>
                            <p >{pagedetail.description28String}</p>
                            <p >{pagedetail.description29String}</p>
                            <p >{pagedetail.description30String}</p>
                          <br />
                            <div>
                                <button style={{ height: `20px` }, { textSize: "5px" }, { borderRadius: `10px 10px 10px 10px` }} className="bg-light">Dự án</button>

                                <button style={{ height: `20px` }, { textSize: "5px" }, { borderRadius: `10px 10px 10px 10px` }} className="bg-light">Thông tin căn hộ</button>
                            </div><hr />
                            <section class="padding-bottom">
                <header class="section-heading heading-line">
                    <h4 class="title-section text-uppercase">NHÀ ĐẤT BÁN</h4>
                </header>

                <div class="card card-home-category">
                    <div class="row no-gutters">
                       
                        <div class="col-md-12">
                            <ul class="row no-gutters bordered-cols">
                                {this.renderproducts()}
                            </ul>
                        </div>
                        {/* <!-- col.// --> */}
                    </div>
                    {/* <!-- row.// --> */}
                </div>
                {/* <!-- card.// --> */}
            </section>
                        </div>
                        <div className="col-3">
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
                            <p>Video clips cập nhật</p>
                            <img style={{ height: `400px` }, { width: `320px` }} src={`/resources/images/posts/0852f3c0cd10bec6ea5faa408006d588.gif`} alt="This is an animated gif image, but it does not move" />
                        </div>
                    </div>
                </div>
                <Subcribe />
                <Footer />
            </div>
        );
    }
}

export default PageDetail;