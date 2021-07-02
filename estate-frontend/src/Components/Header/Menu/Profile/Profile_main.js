import React, { Component } from "react";
import { Redirect, Router } from 'react-router-dom';
import { connect } from "react-redux";
import { logout } from "../../ActionAuth/Auth";
import { history } from '../../HelperssAuth/History';
import { clearMessage } from "../../ActionAuth/Message";
import Header from '../../../Header/Header';
import Footer from '../../../Footer/Footer';
import Subcribe from '../../../Subcribe/Subcribe';
class Profile_main extends Component {
	constructor(props) {
		super(props);

		this.state = {


			showModeratorBoard: false,
			showAdminBoard: false,
			currentUser: undefined,
		};

		this.logOut = this.logOut.bind(this);
		history.listen((location) => {
			props.dispatch(clearMessage()); // clear message when changing location
		});
	}
	componentDidMount() {
		const user = this.props.user;

		if (user) {
			this.setState({
				currentUser: user,
				showModeratorBoard: user.roles.includes("ROLE_MODERATOR"),
				showAdminBoard: user.roles.includes("ROLE_ADMIN"),
			});
		}
	}
	logOut() {
		this.props.dispatch(logout());
	}

	render() {
		const { user: currentUser } = this.props;

		if (!currentUser) {
			return <Redirect to="/dang-nhap" />;
		}
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
									<a class="list-group-item active" href={`/thong-tin-ca-nhan`}> Tổng quan về tài khoản </a>
									<a class="list-group-item" href={`/dia-chi-cua-toi`}> Địa chỉ của tôi</a>
									<a class="list-group-item" href={`/don-dat-hang-cua-toi`}> Đơn đặt hàng của tôi </a>
									<a class="list-group-item" href={`/san-pham-yeu-thich`}> Sản phẩm yêu thích </a>
									<a class="list-group-item" href={`/cac-mat-hang-ban-chay`}> Các mặt hàng bán chạy </a>
									<a class="list-group-item" href={`/cai-dat`}> Cài đặt </a>
									<Router history={history}>
										<a onClick={this.logOut} class="list-group-item" href={`/`}> Đăng xuất </a>
									</Router>
								</nav>
							</aside>
							{/* <!-- col.// --> */}
							<main class="col-md-9">

								<article class="card mb-3">
									<div class="card-body">

										<figure class="icontext">
											<div class="icon">
												<img class="rounded-circle img-sm border" src="//ssl.gstatic.com/accounts/ui/avatar_2x.png" />
											</div>
											<div class="text">
												<strong> {currentUser.username} </strong> <br />
												<p class="mb-2"> {currentUser.email} </p>
												<a href="/cai-dat" class="btn btn-light btn-sm">Chỉnh sửa</a>
											</div>
										</figure>
										<hr />
										<p>
											<i class="fa fa-map-marker text-muted"></i> &nbsp; Địa chỉ :
											<br />
											114/67 Dương Quảng Hàm, P.5, Q.gv, TP.HCM &nbsp;
											<a href="/cai-dat" class="btn btn-light btn-sm"> Chỉnh sửa </a>
										</p>


{/* 
										<article class="card-group card-stat">
											<figure class="card bg">
												<div class="p-3">
													<h4 class="title">38</h4>
													<span>Orders</span>
												</div>
											</figure>
											<figure class="card bg">
												<div class="p-3">
													<h4 class="title">5</h4>
													<span>Wishlists</span>
												</div>
											</figure>
											<figure class="card bg">
												<div class="p-3">
													<h4 class="title">12</h4>
													<span>Awaiting delivery</span>
												</div>
											</figure>
											<figure class="card bg">
												<div class="p-3">
													<h4 class="title">50</h4>
													<span>Delivered items</span>
												</div>
											</figure>
										</article>
 */}

									</div>
									{/* <!-- card-body .// --> */}
								</article>
								{/* <!-- card.// --> */}
{/* 
								<article class="card  mb-3">
									<div class="card-body">
										<h5 class="card-title mb-4">Recent orders </h5>

										<div class="row">
											<div class="col-md-6">
												<figure class="itemside  mb-3">
													<div class="aside"><img src="/resources/images/items/1.jpg" class="border img-sm" /></div>
													<figcaption class="info">
														<time class="text-muted"><i class="fa fa-calendar-alt"></i> 12.09.2019</time>
														<p>Great book name goes here </p>
														<span class="text-success">Order confirmed </span>
													</figcaption>
												</figure>
											</div>
										
											<div class="col-md-6">
												<figure class="itemside  mb-3">
													<div class="aside"><img src="/resources/images/items/2.jpg" class="border img-sm" /></div>
													<figcaption class="info">
														<time class="text-muted"><i class="fa fa-calendar-alt"></i> 12.09.2019</time>
														<p>How to be rich</p>
														<span class="text-success">Departured</span>
													</figcaption>
												</figure>
											</div>
										
											<div class="col-md-6">
												<figure class="itemside mb-3">
													<div class="aside"><img src="/resources/images/items/3.jpg" class="border img-sm" /></div>
													<figcaption class="info">
														<time class="text-muted"><i class="fa fa-calendar-alt"></i> 12.09.2019</time>
														<p>Harry Potter book </p>
														<span class="text-success">Shipped  </span>
													</figcaption>
												</figure>
											</div>
										
										</div>
										

										<a href="#" class="btn btn-outline-primary btn-block"> See all orders <i class="fa fa-chevron-down"></i>  </a>
									</div>
								
								</article>
								 */}

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
function mapStateToProps(state) {
	const { user } = state.auth;
	return {
		user,
	};
}

export default connect(mapStateToProps)(Profile_main);
