import React, { Component } from 'react';
import HomeServices from '../../../HomeServices/HomeServices';
import NumberFormat from 'react-number-format';
import { MapInteractionCSS } from 'react-map-interaction';
import Header from '../../../Components/Header/Header';
import Footer from '../../../Components/Footer/Footer';
import Subcribe from '../../../Components/Subcribe/Subcribe';
import moment from 'moment';
class ProductDetailContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: this.props.match.params.id,
            product: {},
            photo: [],
            productrelation: [],
            image: [],
            value: {
                scale: 1,
                translation: { x: 0, y: 0 }
            }
        };

        this.productService = new HomeServices();
        this.photoService = new HomeServices();
        this.productrelationService = new HomeServices();
        this.changeimage = this.changeimage.bind(this);
    }

    componentDidMount() {
        const id = this.props.match.params.id;

        this.productService.getAllProductsId(this.state.id).then((res) => {
            let product = res.data;
            this.setState({ photo: product.photo, image: product.image, product: res.data });
        });

        this.productrelationService.getAllProductRelationId(id).then(response => {
            this.setState({ productrelation: response });

        });

    }

    changeimage(change) {
        this.setState({ image: change });
    }
    renderphoto = () => {
        return this.state.photo.map((photos, key) => {
            return (

                <img class="item-thumb" key={key} onClick={() => this.changeimage(photos.imageString)} src={`/resources/images/items/${photos.imageString}`} />


            );
        });
    }
    renderproductrelation = () => {
        return this.state.productrelation.map((productrelations, key) => {

            return (

                <li class="col-6 col-lg-4 col-md-3" key={key}>
                    <a href={`/index=${productrelations.idLong}`} class="item">
                        <div class="card-body">
                            <h5 class="title">{productrelations.titleString}</h5>
                            <img class="img-sm float-right" src={`/resources/images/items/${productrelations.imageString}`} />
                            <p class="text-muted"><i class="fa fa-map-marker-alt"></i>{productrelations.positionString}</p>
                        </div>
                    </a>
                </li>
            );
        });
    }
    render() {
        const product = this.state.product;
        const { scale, translation } = this.state;
        const dd = moment(product.createdatTimestamp).format("LLLL");
        return (
            <div>
                <Header />
                <section class="py-3 bg-light">
                    <div class="container">
                        <ol class="breadcrumb">
                            <a href="/"><li class="breadcrumb-item">Trang-chu / </li></a>
                            <a href="/"><li class="breadcrumb-item active" aria-current="page"> {product.slugString}</li></a>
                        </ol>
                    </div>
                </section>

                {/* <!-- ========================= SECTION CONTENT ========================= --> */}
                <section class="section-content bg-white padding-y">
                    <div class="container">

                        {/* <!-- ============================ ITEM DETAIL ======================== --> */}
                        <div class="row">
                            <aside class="col-md-6">
                                <div class="card">
                                    <article class="gallery-wrap">
                                        <div class="img-big-wrap">
                                            <div >
                                                <a >
                                                    <MapInteractionCSS value={this.state.value}
                                                        onChange={(value) => this.setState({ value })}>


                                                        {this.state.image ?
                                                            <img src={"/resources/images/items/" + this.state.image} />

                                                            :
                                                            <img src={"/resources/images/items/" + product.imageString} />}
                                                    </MapInteractionCSS>
                                                </a>
                                            </div>
                                        </div>
                                        {/* <!-- slider-product.// --> */}
                                        <div class="thumbs-wrap">
                                            {this.renderphoto()}

                                        </div>
                                        {/* <!-- slider-nav.// --> */}
                                    </article>
                                    {/* <!-- gallery-wrap .end// --> */}
                                </div>
                                {/* <!-- card.// --> */}
                            </aside>
                            <main class="col-md-6">
                                <article class="product-info-aside">

                                    <h2 class="title mt-3">{product.titleString}</h2>

                                    <div class="rating-wrap my-3">
                                        <div id="rating" >
                                            <input type="radio" id="star5" name="rating" value="5" />
                                            <label class="full" for="star5" title="Awesome - 5 stars"></label>

                                            <input type="radio" id="star4half" name="rating" value="4 and a half" />
                                            <label class="half" for="star4half" title="Pretty good - 4.5 stars"></label>

                                            <input type="radio" id="star4" name="rating" value="4" />
                                            <label class="full" for="star4" title="Pretty good - 4 stars"></label>

                                            <input type="radio" id="star3half" name="rating" value="3 and a half" />
                                            <label class="half" for="star3half" title="Meh - 3.5 stars"></label>

                                            <input type="radio" id="star3" name="rating" value="3" />
                                            <label class="full" for="star3" title="Meh - 3 stars"></label>

                                            <input type="radio" id="star2half" name="rating" value="2 and a half" />
                                            <label class="half" for="star2half" title="Kinda bad - 2.5 stars"></label>

                                            <input type="radio" id="star2" name="rating" value="2" />
                                            <label class="full" for="star2" title="Kinda bad - 2 stars"></label>

                                            <input type="radio" id="star1half" name="rating" value="1 and a half" />
                                            <label class="half" for="star1half" title="Meh - 1.5 stars"></label>

                                            <input type="radio" id="star1" name="rating" value="1" />
                                            <label class="full" for="star1" title="Sucks big time - 1 star"></label>

                                            <input type="radio" id="starhalf" name="rating" value="half" />
                                            <label class="half" for="starhalf" title="Sucks big time - 0.5 stars"></label>
                                        </div>
                                        {/* <small class="label-rating text-muted">132 nhận xét</small>
                                        <small class="label-rating text-success"> <i class="fa fa-clipboard-check"></i> 154 đơn đặt hàng </small> */}
                                        <small class="label-rating text-success ml-3" style={{fontSize:`20px` }}> <i class="fa fa-clipboard-check"></i> {dd}</small>

                                    </div>
                                    {/* <!-- rating-wrap.// --> */}
                                            <br/>
                                    <div class="mb-3">
                                        <var class="price h4" style={{ color: `red` }}>Giá: <NumberFormat value={this.state.product.priceDouble} displayType={'text'} thousandSeparator={true} /> VNĐ</var>
                                        {/* <span class="text-muted">USD 562.65 incl. VAT</span> */}
                                    </div>
                                    {/* <!-- price-detail-wrap .// --> */}
                                    <p>{product.descriptionString}</p>
                                    <dl class="row">
                                        <dt class="col-sm-3">Nhà cung cấp</dt>
                                        <dd class="col-sm-9"><a href="#">{product.customerString}</a></dd>

                                        <dt class="col-sm-3">Số bài viết</dt>
                                        <dd class="col-sm-9">{this.state.productrelation.length}</dd>

                                        <dt class="col-sm-3">Tình trạng</dt>
                                        <dd class="col-sm-9">vẫn còn</dd>
                                    </dl>

                                    <div class="form-row  mt-4">
                                        {/* <div class="form-group col-md flex-grow-0">
                                            <div class="input-group mb-3 input-spinner">
                                                <div class="input-group-prepend">
                                                    <button class="btn btn-light" type="button" id="button-plus"> + </button>
                                                </div>
                                                <input type="text" class="form-control" value="1" />
                                                <div class="input-group-append">
                                                    <button class="btn btn-light" type="button" id="button-minus"> &minus; </button>
                                                </div>
                                            </div>
                                        </div> */}
                                        {/* <!-- col.// --> */}
                                        <div class="form-group col-md">
                                            <a href="#" class="btn  btn-primary">
                                                <i class="fas fa-shopping-cart"></i> <span class="text">Lưu</span>
                                            </a>
                                            <a href={`lien-he`} class="btn btn-light">
                                                <i class="fas fa-envelope"></i> <span class="text">Liên Hệ với nhà cung cấp</span>
                                            </a>
                                        </div>
                                        {/* <!-- col.// --> */}
                                    </div>
                                    {/* <!-- row.// --> */}

                                </article>
                                {/* <!-- product-info-aside .// --> */}
                            </main>
                            {/* <!-- col.// --> */}
                        </div>
                        {/* <!-- row.// --> */}

                        {/* <!-- ================ ITEM DETAIL END .// ================= --> */}


                    </div>
                    {/* <!-- container .//  --> */}
                </section>
                {/* <!-- ========================= SECTION CONTENT END// ========================= --> */}

                {/* <!-- ========================= SECTION  ========================= --> */}
                <section class="section-name padding-y bg">
                    <div class="container">

                        <div class="row">
                            <div class="col-md-8">

                                <h5 class="title-description"><a href="javascript:void(0)" title={product.descriptionString}>Mô tả</a> <i className="far fa-hand-point-left ml-4" style={{ color: `green` }}> </i></h5>
                                <p>{product.metadescString}</p>
                                <table class="table table-bordered">
                                    <tr> <th colspan="2">Mã </th> </tr>
                                    <tr> <td>Mã Sản Phẩm</td><td>{product.productidLong}</td> </tr>

                                    <tr> <th colspan="2">Khu vực</th> </tr>
                                    <tr> <td>Khu Vực</td><td>{product.positionString}</td> </tr>
                                    <tr> <td>Hướng</td><td>{product.directionString}</td> </tr>
                                    <tr> <td>Địa Chỉ</td><td>{product.addressString}</td> </tr>
                                    <tr> <td>Diện Tích </td><td> {product.areaString} m<sup>2</sup></td> </tr>

                                    <tr> <th colspan="2">Thông Tin</th> </tr>
                                    <tr> <td>Chủ Đầu Tư</td><td>{product.customerString}</td> </tr>
                                    <tr> <td>Điện Thoại</td><td>{product.phoneString}</td> </tr>
                                    <tr> <td>Tình Trạng</td> <td> <i class="fa fa-check text-success"></i> Vẫn còn </td></tr>

                                    <tr> <th colspan="2">Phòng</th> </tr>
                                    <tr> <td>Số Phòng</td><td>{product.roomInteger}</td> </tr>

                                </table>
                            </div>
                            {/* <!-- col.// --> */}

                            <aside class="col-md-4">

                                <div class="box">

                                    <h5 class="title-description">Tin Tức</h5>
                                    <p>Giữ tiền hay tiếp tục đổ vào BĐS, đây là nhận định của một chuyên gia đã có 20 năm kinh nghiệm trong lĩnh vực địa ốc</p>
                                    <a href="#"><img width="100%" src="/resources/images/misc/photo1620574745039-16205747452751733040989.jpg" /></a>
                                    <br/>
                                    <article class="media mb-3">
                                        <a href="#"><img class="img-sm mr-3" src="/resources/images/posts/1619075529-yoh.jpg" /></a>
                                        <div class="media-body">
                                            <h6 class="mt-0"><a href="#">Khu đô thị Việt Hàn Phổ Yên</a></h6>
                                            <p class="mb-2">Dự án tọa lạc tại vị trí vàng trong làng Khu công nghiệp ( KCN ) xung quanh là Samsung, KCN Yên...</p>
                                        </div>
                                    </article>

                                    <article class="media mb-3">
                                        <a href="#"><img class="img-sm mr-3" src="/resources/images/posts/1619507628-ljq.jpg" /></a>
                                        <div class="media-body">
                                            <h6 class="mt-0"><a href="#">Khu Đô Thị Chợ Đêm Tân An</a></h6>
                                            <p class="mb-2">Tên dự án: Khu Đô Thị – Thương Mại – Dịch Vụ Đông Bắc Cầu Tân An Chủ đầu tư: Tân An Land Vị trí: Nằm...</p>
                                        </div>
                                    </article>

                                    <article class="media mb-3">
                                        <a href="#"><img class="img-sm mr-3" src="/resources/images/posts/1620201738-ssz.jpg" /></a>
                                        <div class="media-body">
                                            <h6 class="mt-0"><a href="#">Epic Town - Khu Đô Thị Số 1 Điện Thắng</a></h6>
                                            <p class="mb-2">Tên thương mại: Epic Town Vị trí: Quốc lộ 1A, Trạm thu phí, phường Điện Thắng, thị xã Điện Bàn, tỉnh...</p>
                                        </div>
                                    </article>
                                    <article class="media mb-3">
                                        <a href="#"><img class="img-sm mr-3" src="/resources/images/posts/1619580118-fne.jpeg" /></a>
                                        <div class="media-body">
                                            <h6 class="mt-0"><a href="#">Verosa Park</a></h6>
                                            <p class="mb-2">Sau thành công ở các dự án nhà phố liền kề, biệt thự cao cấp, và gần đây là căn hộ cao cấp Jamila và...</p>
                                        </div>
                                    </article>
                                </div>
                                {/* <!-- box.// --> */}
                            </aside>
                            {/* <!-- col.// --> */}
                        </div>
                        {/* <!-- row.// --> */}
                        {/* <!-- =============== SECTION 1 =============== --> */}
                        <section class="padding-bottom">
                            <header class="section-heading heading-line">
                                <h4 class="title-section text-uppercase">SẢN PHẨM LIÊN QUAN</h4>
                            </header>

                            <div class="card card-home-category">
                                <div class="row no-gutters">
                                    <div class="col-lg-12">
                                        <ul class="row no-gutters bordered-cols">
                                            {this.renderproductrelation()}
                                        </ul>
                                    </div>
                                    {/* <!-- col.// --> */}
                                </div>
                                {/* <!-- row.// --> */}
                            </div>
                            {/* <!-- card.// --> */}
                        </section>
                        {/* <!-- =============== SECTION 1 END =============== --> */}

                    </div>
                    {/* <!-- container .//  --> */}
                </section>
                {/* <!-- ========================= SECTION CONTENT END// ========================= --> */}
                <Subcribe />
                <Footer />
            </div>
        );
    }
}

export default ProductDetailContainer;