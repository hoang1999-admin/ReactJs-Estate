import React, { Component } from 'react';
import Header from '../../../Header/Header';
import Footer from '../../../Footer/Footer';
import Subcribe from '../../../Subcribe/Subcribe';
class Cart extends Component {
    render() {
        return (
            <div>
            <Header />
            {/* // <!-- ========================= SECTION CONTENT ========================= --> */}
            <section class="section-content padding-y">
                <div class="container">

                    <div class="row">
                        <main class="col-md-9" >
                            <div class="card">

                                <table class="table table-borderless table-shopping-cart">
                                    <thead class="text-muted">
                                        <tr class="small text-uppercase">
                                            <th scope="col">Sản Phẩm</th>
                                            <th scope="col" width="120">Số Lượng</th>
                                            <th scope="col" width="120">Giá</th>
                                            <th scope="col" class="text-right" width="200"> </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>
                                                <figure class="itemside">
                                                    <div class="aside"><img src="/resources/images/items/1603683147-picture21892dd.jpg" class="img-sm" /></div>
                                                    <figcaption class="info">
                                                        <a href="#" class="title text-dark">Bán nhà Thái Thịnh Đống Đa 30m*5T*3.3 tỷ, nhà đẹp ở ngay</a>
                                                        <p class="text-muted small">Size: XL, Color: blue, <br /> Brand: Gucci</p>
                                                    </figcaption>
                                                </figure>
                                            </td>
                                            <td>
                                                <select class="form-control">
                                                    <option>1</option>
                                                    <option>2</option>
                                                    <option>3</option>
                                                    <option>4</option>
                                                </select>
                                            </td>
                                            <td>
                                                <div class="price-wrap">
                                                    <var class="price">$1156.00</var>
                                                    <small class="text-muted"> $315.20 each </small>
                                                </div>
                                                {/* <!-- price-wrap .// --> */}
                                            </td>
                                            <td class="text-right">
                                                <a data-original-title="Save to Wishlist" title="" href={`/luu`} class="btn btn-light" data-toggle="tooltip"> <i class="fa fa-heart"></i></a>
                                                <a href="" class="btn btn-light"> Xóa</a>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <figure class="itemside">
                                                    <div class="aside"><img src="/resources/images/items/1603683085-picture72369ff.jpg" class="img-sm" /></div>
                                                    <figcaption class="info">
                                                        <a href="#" class="title text-dark">Phòng Trọ Phú Nhuận Sạch Đẹp, 4Tr/Tháng 32M2</a>
                                                        <p class="text-muted small">Size: XL, Color: blue, <br /> Brand: Gucci</p>
                                                    </figcaption>
                                                </figure>
                                            </td>
                                            <td>
                                                <select class="form-control">
                                                    <option>1</option>
                                                    <option>2</option>
                                                    <option>3</option>
                                                    <option>4</option>
                                                </select>
                                            </td>
                                            <td>
                                                <div class="price-wrap">
                                                    <var class="price">$149.97</var>
                                                    <small class="text-muted"> $75.00 each </small>
                                                </div>
                                                {/* <!-- price-wrap .// --> */}
                                            </td>
                                            <td class="text-right">
                                                <a data-original-title="Save to Wishlist" title="" href="" class="btn btn-light" data-toggle="tooltip"> <i class="fa fa-heart"></i></a>
                                                <a href="" class="btn btn-light btn-round"> Xóa</a>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <figure class="itemside">
                                                    <div class="aside"><img src="/resources/images/items/1603683085-picture38414ff.jpg" class="img-sm" /></div>
                                                    <figcaption class="info">
                                                        <a href="#" class="title text-dark">Cho Thuê Phòng Trọ Quận Phú Nhuận </a>
                                                        <p class="small text-muted">Size: XL, Color: blue,  Brand: Tissot</p>
                                                    </figcaption>
                                                </figure>
                                            </td>
                                            <td>
                                                <select class="form-control">
                                                    <option>1</option>
                                                    <option>2</option>
                                                    <option>3</option>
                                                </select>
                                            </td>
                                            <td>
                                                <div class="price-wrap">
                                                    <var class="price">$98.00</var>
                                                    <small class="text-muted"> $578.00 each</small>
                                                </div>
                                                {/* <!-- price-wrap .// --> */}
                                            </td>
                                            <td class="text-right">
                                                <a data-original-title="Save to Wishlist" title="" href="" class="btn btn-light" data-toggle="tooltip"> <i class="fa fa-heart"></i></a>
                                                <a href="" class="btn btn-light btn-round"> Xóa</a>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>

                                <div class="card-body border-top">
                                    <a href={`kiem-tra-gio-hang`} class="btn btn-primary float-md-right"> Thanh toán <i class="fa fa-chevron-right"></i> </a>
                                    <a href={`/`} class="btn btn-light"> <i class="fa fa-chevron-left"></i> Tiếp tục xem sản phẩm</a>
                                </div>
                            </div>
                            {/* <!-- card.// --> */}

                            <div class="alert alert-success mt-3">
                                <p class="icontext"><i class="icon text-success fa fa-truck"></i> Miễn phí vận chuyển 1-2 tuần</p>
                            </div>

                        </main>
                        {/* <!-- col.// --> */}
                        <aside class="col-md-3">
                            <div class="card mb-3">
                                <div class="card-body">
                                    <form>
                                        <div class="form-group">
                                            <label>Có mã giảm giá?</label>
                                            <div class="input-group">
                                                <input type="text" class="form-control" name="" placeholder="Mã giảm giá" />
                                                <span class="input-group-append">
                                                    <button class="btn btn-primary">Thanh toán</button>
                                                </span>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                                {/* <!-- card-body.// --> */}
                            </div>
                            {/* <!-- card .// --> */}
                            <div class="card">
                                <div class="card-body">
                                    <dl class="dlist-align">
                                        <dt>Tổng giá:</dt>
                                        <dd class="text-right">USD 568</dd>
                                    </dl>
                                    <dl class="dlist-align">
                                        <dt>Giảm giá: </dt>
                                        <dd class="text-right">USD 658</dd>
                                    </dl>
                                    <dl class="dlist-align">
                                        <dt>Tổng:</dt>
                                        <dd class="text-right  h5"><strong>$1,650</strong></dd>
                                    </dl>
                                    <hr />
                                    <p class="text-center mb-3">
                                        <img src="/resources/images/misc/payments.png" height="26" />
                                    </p>

                                </div>
                                {/* <!-- card-body.// --> */}
                            </div>
                            {/* <!-- card .// --> */}
                        </aside>
                        {/* <!-- col.// --> */}
                    </div>

                </div>
                {/* <!-- container .//  --> */}
            </section >
            {/* // <!-- ========================= SECTION CONTENT END// ========================= --> */}
            <Subcribe />
            <Footer />
        </div>
        );
    }
}

export default Cart;