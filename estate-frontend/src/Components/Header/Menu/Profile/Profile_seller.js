import React, { Component } from 'react';
import Header from '../../../Header/Header';
import Footer from '../../../Footer/Footer';
import Subcribe from '../../../Subcribe/Subcribe';
class Profile_seller extends Component {
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

				{/* !-- ========================= SECTION PAGETOP END// ========================= --> */}

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
									<a class="list-group-item active" href={`/cac-mat-hang-ban-chay`}> Các mặt hàng bán chạy </a>
									<a class="list-group-item" href={`/cai-dat`}> Cài đặt </a>
									<a class="list-group-item" href={`/`}> Đăng xuất </a>
								</nav>
							</aside>
							{/* <!-- col.// --> */}
							<main class="col-md-9">

								<article class="card">
									<div class="card-body">

										<div class="row">
											<div class="col-md-4">
												<figure class="card card-product-grid">
													<div class="img-wrap">
														<img src="/resources/images/items/1.jpg" />
													</div>
													{/* <!-- img-wrap.// --> */}
													<figcaption class="info-wrap">
														<a href="#" class="title mb-2">Hot sale unisex New Design Shirt for sport polo shirts latest design</a>
														<div class="price-wrap mb-3">
															<span class="price">$32.00-$40.00</span>
															<small class="text-muted">/per item</small>
														</div>
														{/* <!-- price-wrap.// --> */}
														<a href="#" class="btn btn-outline-primary"> <i class="fa fa-pen"></i> Edit </a>
														<a href="#" class="btn btn-primary"> <i class="fa fa-eye"></i> View  </a>

														<hr />
														<a href="#" class="btn btn-success btn-block">  Promote </a>
													</figcaption>
												</figure>
											</div>
											{/* <!-- col.// --> */}

											<div class="col-md-4">
												<figure class="card card-product-grid">
													<div class="img-wrap">
														<img src="/resources/images/items/2.jpg" />
													</div>
													{/* <!-- img-wrap.// --> */}
													<figcaption class="info-wrap">
														<a href="#" class="title mb-2">High Quality Winter PU Rain Jacket with Padding for Men's outdoor</a>
														<div class="price-wrap mb-3">
															<span class="price">$41.00-$50.00</span>
															<small class="text-muted">/per item</small>
														</div>
														{/* <!-- price-wrap.// --> */}
														<a href="#" class="btn btn-outline-primary"> <i class="fa fa-pen"></i> Edit </a>
														<a href="#" class="btn btn-primary"> <i class="fa fa-eye"></i> View  </a>

														<hr />
														<a href="#" class="btn btn-success btn-block">  Promote </a>
													</figcaption>
												</figure>
											</div>
											{/* <!-- col.// --> */}

											<div class="col-md-4">
												<figure class="card card-product-grid">
													<div class="img-wrap">
														<img src="/resources/images/items/1.jpg" />
													</div>
													{/* <!-- img-wrap.// --> */}
													<figcaption class="info-wrap">
														<a href="#" class="title mb-2">Cheap and Best demo clothe with latest Fashion styles for Men</a>
														<div class="price-wrap mb-3">
															<span class="price">$32.00-$40.00</span>
															<small class="text-muted">/per item</small>
														</div>
														{/* <!-- price-wrap.// --> */}
														<a href="#" class="btn btn-outline-primary"> <i class="fa fa-pen"></i> Edit </a>
														<a href="#" class="btn btn-primary"> <i class="fa fa-eye"></i> View  </a>

														<hr />
														<a href="#" class="btn btn-success btn-block">  Promote </a>
													</figcaption>
												</figure>
											</div>
											{/* <!-- col.// --> */}

											<div class="col-md-4">
												<figure class="card card-product-grid">
													<div class="img-wrap">
														<img src="/resources/images/items/4.jpg" />
													</div>
													{/* <!-- img-wrap.// --> */}
													<figcaption class="info-wrap">
														<a href="#" class="title mb-2">Cheap and Best demo clothe with latest Fashion styles for Men</a>
														<div class="price-wrap mb-3">
															<span class="price">$32.00-$40.00</span>
															<small class="text-muted">/per item</small>
														</div>
														{/* <!-- price-wrap.// --> */}
														<a href="#" class="btn btn-outline-primary"> <i class="fa fa-pen"></i> Edit </a>
														<a href="#" class="btn btn-primary"> <i class="fa fa-eye"></i> View  </a>

														<hr />
														<a href="#" class="btn btn-success btn-block">  Promote </a>
													</figcaption>
												</figure>
											</div>
											{/* <!-- col.// --> */}

											<div class="col-md-4">
												<figure class="card card-product-grid">
													<div class="img-wrap">
														<img src="/resources/images/items/5.jpg" />
													</div>
													{/* <!-- img-wrap.// --> */}
													<figcaption class="info-wrap">
														<a href="#" class="title mb-2">Cheap and Best demo clothe with latest Fashion styles for Men</a>
														<div class="price-wrap mb-3">
															<span class="price">$32.00-$40.00</span>
															<small class="text-muted">/per item</small>
														</div>
														{/* <!-- price-wrap.// --> */}
														<a href="#" class="btn btn-outline-primary"> <i class="fa fa-pen"></i> Edit </a>
														<a href="#" class="btn btn-primary"> <i class="fa fa-eye"></i> View  </a>

														<hr />
														<a href="#" class="btn btn-success btn-block">  Promote </a>
													</figcaption>
												</figure>
											</div>
											{/* <!-- col.// --> */}

										</div>
										{/* / <!-- row .//  --> */}

									</div>
									{/* <!-- card-body.// --> */}
								</article>


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

export default Profile_seller;