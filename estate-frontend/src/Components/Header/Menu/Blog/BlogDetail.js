import React, { Component } from 'react';
import Header from '../../Header';
import Footer from '../../../Footer/Footer';
import Subcribe from '../../../Subcribe/Subcribe';
import HomeServices from '../../../../HomeServices/HomeServices';
import moment from 'moment';
class BlogDetail extends Component {
    constructor(props) {
        super(props);
        this.state = {
            products: [],
            category: {},
            post: {},
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
        this.productService.getAllProductsRent().then(response => {
            this.setState({ products: response });
        });
        const id = this.props.match.params.id;
        this.categoryService.getAllCategorysId(id).then((res) => {
            this.setState({ category: res });
        });
        this.categoryService.getAllPostsId(id).then((res) => {
            this.setState({ post: res });
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
    renderproducts = () => {
        return this.state.products.map((product, key) => {
            return (
                <li class="col-6 col-lg-4 col-md-3" key={key}>
                    <a href={`/index=${product.idLong}`} class="item">
                        <div class="card-body">
                            <h5 class="title">{product.titleString}</h5>
                            <img class="img-sm float-right" src={`/resources/images/items/${product.imageString}`} />
                            <p class="text-muted"><i class="fa fa-map-marker-alt"></i>{product.positionString}</p>
                        </div>
                    </a>
                </li>

            );
        });
    };
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
    render() {

        const category = this.state.category;
        const post = this.state.post;
        const dd = moment(post.createdatTimestamp).format("LLLL");
        return (
            <div >
                <Header />
                <div className="ml-5 mr-5">
                    <div class="container ">
                        <ol class="breadcrumb py-3 ">
                            <a href="/"><li class="breadcrumb-item"><a href="#">Trang-chu </a></li></a>
                            <a href="/"><li class="breadcrumb-item active" aria-current="page"> / tin-tuc</li></a>
                            <a href="/"><li class="breadcrumb-item active" aria-current="page"> / {category.slugString}</li></a>
                            <a href="/"><li class="breadcrumb-item active" aria-current="page"> / {post.slugString} </li></a>

                        </ol>
                    </div>
                    <div>
                        <button style={{ height: `20px` }, { textSize: "5px" }, { borderRadius: `10px 10px 10px 10px` }} className="bg-light">Tin t???c</button>
                    </div>
                    <div>
                        <h1>{post.titleString}</h1>
                        <h5>C??ng b???: {dd}</h5>
                    </div>
                    <div className="row ">
                        <div className="col-9">
                            <img style={{ height: `600px` }, { width: `100%` }} src={`/resources/images/posts/${post.imageString}`} />
                            <br /><br /><p >{post.descriptionString}</p>
                            <img style={{ height: `600px` }, { width: `100%` }} src={`/resources/images/posts/${post.image1String}`} />
                            <br /><br /><p >{post.description1String}</p>
                            <img style={{ height: `600px` }, { width: `100%` }} src={`/resources/images/posts/${post.image2String}`} />
                            <br /><br /><p >{post.description2String}</p>
                            <img style={{ height: `600px` }, { width: `100%` }} src={`/resources/images/posts/${post.image3String}`} />
                            <br /><br /><p >{post.description3String}</p>
                            <section class="padding-bottom">
                                <header class="section-heading heading-line">
                                    <h4 class="title-section text-uppercase">NH?? ?????T CHO THU??</h4>
                                </header>

                                <div class="card card-home-category">
                                    <div class="row no-gutters">
                                        <div class="col-md-3">

                                            <div class="home-category-banner bg-light-orange">
                                                <h5 class="title">"Ki???n t???o cu???c s???ng ph???n vinh" - T??n T???o Garden</h5>
                                                <p>Nh?? v??n Margaret Mitchell: "?????t ??ai l?? th??? duy nh???t tr??n th??? gi???i quan tr???ng h??n b???t c??? th??? g??"</p>
                                                <a href="/" class="btn btn-outline-primary rounded-pill">Ngu???n b??y gi???</a>
                                                <img src="/resources/images/items/1619799185-lhw55.jpg" style={{ width: `400px`, height: `200px` }} class="img-bg" />
                                            </div>

                                        </div>
                                        {/* <!-- col.// --> */}
                                        <div class="col-md-9">
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
                            <div>
                                <p>L?????t xem: 858</p>
                            </div><br />
                            <div>
                                <button style={{ height: `20px` }, { textSize: "5px" }, { borderRadius: `10px 10px 10px 10px` }} className="bg-light">D??? ??n</button>

                                <button style={{ height: `20px` }, { textSize: "5px" }, { borderRadius: `10px 10px 10px 10px` }} className="bg-light">Th??ng tin c??n h???</button>
                            </div><hr />

                        </div>
                        <div className="col-3">
                            <h3 className="titles">NH?? ?????T B??N</h3>
                            <br />
                            {this.rendercategorysale()}
                            <h3 className="titles">NH?? ?????T CHO THU??</h3>
                            <br />
                            {this.rendercategoryrent()}
                            <h3 className="titles">N???I & NGO???I TH???T</h3>
                            <br />
                            {this.rendercategoryfurnitureandextor()}
                            <h3 className="titles">PHONG TH???Y</h3>
                            <br />
                            {this.rendercategoryfengshui()}
                            <h3 className="titles">TIN T???C</h3>
                            <br />
                            {this.rendercategoryrecruitment()}
                            <h3 className="titles">TUY???N D???NG</h3>
                            <br />
                            {this.rendercategoryapply()}
                            <h3 className="titles">D??? ??N</h3>
                            <br />
                            {this.rendercategoryexample()}
                            <p>Video clips c???p nh???t</p>
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

export default BlogDetail;