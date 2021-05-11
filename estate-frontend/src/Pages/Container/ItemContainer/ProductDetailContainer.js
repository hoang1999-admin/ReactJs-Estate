import React, { Component } from 'react';
import HomeServices from '../../../HomeServices/HomeServices';

class ProductDetailContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            product: {},
            photo: []
        };

        this.productService = new HomeServices();
        this.photoService = new HomeServices();
    }

    componentDidMount() {
        const id = this.props.match.params.id;

        this.productService.getAllProductsId(id).then(response => {
            this.setState({ product: response });
        });

        this.photoService.getAllPhotos().then(response => {
            this.setState({ photo: response });
        });

    }

    renderphoto = () => {
        return this.state.photo.map((photos, key) => {
            return (
                <a href="#" class="item-thumb" key = {key}> 
                <img src={`/resources/images/items/${photos.imageString}`} />
                </a>

            );
        });
    }
    render() {
        const product = this.state.product;

        return (
            <div>

                <section class="py-3 bg-light">
                    <div class="container">
                        <ol class="breadcrumb">
                            <a href="/"><li class="breadcrumb-item"><a href="#">Trang-chu / </a></li></a>
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
                                            <div> <a href="#"><img src={`/resources/images/items/${product.imageString}`} /></a></div>
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
                                        <ul class="rating-stars">
                                            <li style={{ width: `80%` }} class="stars-active">
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
                                        <small class="label-rating text-muted">132 nhận xét</small>
                                        <small class="label-rating text-success"> <i class="fa fa-clipboard-check"></i> 154 đơn đặt hàng </small>
                                    </div>
                                    {/* <!-- rating-wrap.// --> */}

                                    <div class="mb-3">
                                        <var class="price h4" style={{ color: `red` }}>Giá: {product.pricesaleDouble} VND</var>
                                        {/* <span class="text-muted">USD 562.65 incl. VAT</span> */}
                                    </div>
                                    {/* <!-- price-detail-wrap .// --> */}
                                    <p>{product.descriptionString}</p>
                                    <dl class="row">
                                        <dt class="col-sm-3">Nhà cung cấp</dt>
                                        <dd class="col-sm-9"><a href="#">Công ty Bất Động Sản</a></dd>

                                        <dt class="col-sm-3">Số bài viết</dt>
                                        <dd class="col-sm-9">596 065</dd>

                                        <dt class="col-sm-3">Tình trạng</dt>
                                        <dd class="col-sm-9">vẫn còn</dd>
                                    </dl>

                                    <div class="form-row  mt-4">
                                        <div class="form-group col-md flex-grow-0">
                                            <div class="input-group mb-3 input-spinner">
                                                <div class="input-group-prepend">
                                                    <button class="btn btn-light" type="button" id="button-plus"> + </button>
                                                </div>
                                                <input type="text" class="form-control" value="1" />
                                                <div class="input-group-append">
                                                    <button class="btn btn-light" type="button" id="button-minus"> &minus; </button>
                                                </div>
                                            </div>
                                        </div>
                                        {/* <!-- col.// --> */}
                                        <div class="form-group col-md">
                                            <a href="#" class="btn  btn-primary">
                                                <i class="fas fa-shopping-cart"></i> <span class="text">Lưu</span>
                                            </a>
                                            <a href="#" class="btn btn-light">
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

                                <h5 class="title-description">Mô tả</h5>
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
                                    <h5 class="title-description">Videos</h5>


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

                    </div>
                    {/* <!-- container .//  --> */}
                </section>
                {/* <!-- ========================= SECTION CONTENT END// ========================= --> */}

            </div>
        );
    }
}

export default ProductDetailContainer;