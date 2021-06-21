import React, { Component } from 'react';
import Header from '../../../Header/Header';
import Footer from '../../../Footer/Footer';
import Subcribe from '../../../Subcribe/Subcribe';
class Profile_setting extends Component {
	render() {
		return (
		    <div>
            <Header />
				{/* <!-- ========================= SECTION PAGETOP ========================= --> */}
				<section class="section-pagetop bg-gray">
					<div class="container">
						<h2 class="title-page">Tài khoản của tôi</h2>
					</div>
					{/* <!-- container //  --> */}
				</section>
				{/* <!-- ========================= SECTION PAGETOP END// ========================= --> */}

				{/* <!-- ========================= SECTION CONTENT ========================= --> */}
				<section class="section-content padding-y">
					<div class="container">

						<div class="row">
							<aside class="col-md-3">
								<nav class="list-group">
									<a class="list-group-item" href={`/thong-tin-ca-nhan`}> Tổng quan về tài khoản </a>
									<a class="list-group-item" href={`/dia-chi-cua-toi`}> Địa chỉ của tôi</a>
									<a class="list-group-item" href={`/don-dat-hang-cua-toi`}> Đơn đặt hàng của tôi </a>
									<a class="list-group-item" href={`/san-pham-yeu-thich`}> Sản phẩm yêu thích </a>
									<a class="list-group-item" href={`/cac-mat-hang-ban-chay`}> Các mặt hàng bán chạy </a>
									<a class="list-group-item active" href={`/cai-dat`}> Cài đặt </a>
									<a class="list-group-item" href={`/`}> Đăng xuất </a>
								</nav>
							</aside>
							{/* <!-- col.// --> */}
							<main class="col-md-9">

								<div class="card">
									<div class="card-body">
										<form class="row">
											<div class="col-md-9">
												<div class="form-row">
													<div class="col form-group">
														<label>Tên</label>
														<input type="text" class="form-control" value="Vosidiy" />
													</div>
													{/* <!-- form-group end.// --> */}
													<div class="col form-group">
														<label>E-mail</label>
														<input type="email" class="form-control" value="vosidiy@gmail.com" />
													</div>
													{/* <!-- form-group end.// --> */}
												</div>
												{/* <!-- form-row.// --> */}

												<div class="form-row">
													<div class="form-group col-md-6">
														<label>Quốc gia</label>
														<select id="inputState" class="form-control">
															<option> Choose...</option>
															<option>Uzbekistan</option>
															<option>Russia</option>
															<option selected="">United States</option>
															<option>India</option>
															<option>Afganistan</option>
														</select>
													</div>
													{/* <!-- form-group end.// --> */}
													<div class="form-group col-md-6">
														<label>Thành Phố</label>
														<input type="text" class="form-control" />
													</div>
													{/* <!-- form-group end.// --> */}
												</div>
												{/* <!-- form-row.// --> */}

												<div class="form-row">
													<div class="form-group col-md-6">
														<label>Zip</label>
														<input type="text" class="form-control" value="123009" />
													</div>
													{/* <!-- form-group end.// --> */}
													<div class="form-group col-md-6">
														<label>Số điện thoại</label>
														<input type="text" class="form-control" value="+123456789" />
													</div>
													{/* <!-- form-group end.// --> */}
												</div>
												{/* <!-- form-row.// --> */}

												<button class="btn btn-primary">Lưu</button>
												<button class="btn btn-light">Thay đổi mật khẩu</button>

												<br /><br /><br /><br /><br /><br />

											</div>
											{/* <!-- col.// --> */}
											<div class="col-md">
												<img src="/resources/images/avatars/avatar1.jpg" class="img-md rounded-circle border" />
											</div>
											{/* <!-- col.// --> */}
										</form>
									</div>
									{/* <!-- card-body.// --> */}
								</div>
								{/* <!-- card .// --> */}



							</main>
							{/* <!-- col.// --> */}
						</div>

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

export default Profile_setting;