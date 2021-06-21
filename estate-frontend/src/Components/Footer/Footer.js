import React from 'react'
export default function Footer() {

    return (

        // <!-- ========================= FOOTER ========================= -->
        <footer class="section-footer bg-secondary">
            <div class="container">
                <section class="footer-top padding-y-lg text-white">
                    <div class="row">
                        <aside class="col-md col-6">
                            <a href="http://batdongsan.com" class="brand-wrap">
                                <img class="logo" src="/resources/images/lgBDS-min.png" />
                            </a><br /><br />
                            <h6 class="title">Công ty Cổ phần batdongsan.com Việt Nam</h6>
                            <a href="#" class="brand-wrap">
                                <img class="logo" src="/resources/images/avatars/da-dang-ki-bct.png" />
                            </a><br />
                        </aside>
                        <aside class="col-md col-6">
                            <h6 class="title">Công ty</h6>
                            <ul class="list-unstyled">
                                <li> <a href="#">Về chúng tôi</a></li>
                                <li> <a href="#">Nghề nghiệp</a></li>
                                <li> <a href="#">Tìm một cửa hàng</a></li>
                                <li> <a href="#">Quy tắc và điều khoản</a></li>
                                <li> <a href="#">Sơ đồ trang web</a></li>
                            </ul>
                        </aside>
                        <aside class="col-md col-6">
                            <h6 class="title">Hỗ trợ</h6>
                            <ul class="list-unstyled">
                                <li> <a href={`/lien-he`}>Liên hệ chúng tôi</a></li>
                                <li> <a href="#">Hoàn tiền</a></li>
                                <li> <a href="#">Tình trạng đặt hàng</a></li>
                                <li> <a href="#">Thông tin vận chuyển</a></li>
                                <li> <a href="#">Tranh chấp mở</a></li>
                            </ul>
                        </aside>
                        <aside class="col-md col-6">
                            <h6 class="title">Tài khoản</h6>
                            <ul class="list-unstyled">
                                <li> <a href={`/dang-nhap`}> Đăng nhập người dùng </a></li>
                                <li> <a href={`/dang-ky`}> Đăng ký người dùng </a></li>
                                <li> <a href={`/thong-tin-ca-nhan`}> Thiết lập tài khoản </a></li>
                                <li> <a href={`/don-dat-hang-cua-toi`}> Đơn đặt hàng của tôi </a></li>
                            </ul>
                        </aside>
                        <aside class="col-md">
                            <h6 class="title">Xã hội</h6>
                            <ul class="list-unstyled">
                                <li><a href="http://facebook.com" target="_blank" > <i class="fab fa-facebook"></i> Facebook </a></li>
                                <li><a href="http://twitter.com" target="_blank"> <i class="fab fa-twitter"></i> Twitter </a></li>
                                <li><a href="http://instagram.com" target="_blank"> <i class="fab fa-instagram"></i> Instagram </a></li>
                                <li><a href="http://youtube.com" target="_blank"> <i class="fab fa-youtube"></i> Youtube </a></li>
                            </ul>
                        </aside>
                    </div>
                    {/* <!-- row.// --> */}
                </section>
                {/* <!-- footer-top.// --> */}

                <section class="footer-bottom text-center">

                    <p class="text-white">© 2021. Công ty cổ phần Bất Động Sản. GPDKKD: 0303217124 do sở KH & ĐT TP.HCM cấp ngày 01/01/2021. GPMXH: 258/GP-BTTTT do Bộ Thông Tin và Truyền Thông cấp ngày 05/05/2021. Địa chỉ: 114/67 Dương Quảng Hàm, P. 5, Q.GV, TP.Hồ Chí Minh. Điện thoại: (+84) 865 323 067. Email: cskh@batdongsan.com.
Chịu trách nhiệm nội dung: Ngô Đình Hoàng. Xem chính sách sử dụng</p>
                    <p class="text-muted"> &copy 2021 Công ty Bat Dong San, All rights reserved </p>
                    <br />
                </section>

            </div>
            {/* <!-- //container --> */}
            <div class="btn-top">
                <img src="/resources/images/scroll-top.png" alt="JSOFT" style={{width:`50px`},{height:`80px`}} />
            </div>
        </footer>

        // {/* <!-- ========================= FOOTER END // ========================= --> */}

    );
}