import React, { Component } from 'react';
import HomeServices from '../../../HomeServices/HomeServices';
import NumberFormat from 'react-number-format';
import axios from "axios";
class Listing_gridCategory extends Component {

	constructor(props) {
		super(props);
		this.state = {
			category: {},
			search: '',
			categorys: [],
			categorybyproduct: [],
			product: [],
			currentPage: 1,
			productsPerPage: 6,

		};

		this.categoryService = new HomeServices();
		this.productService = new HomeServices();
		this.categoryproductService = new HomeServices();
		this.countproductService = new HomeServices();
	}

	componentDidMount() {

		const id = this.props.match.params.id;

		if (id == null) {


			axios.get("http://localhost:8080/api/v1/products?pageNumber=" + this.state.currentPage + "&pageSize=" + this.state.productsPerPage)
				.then(response => response.data)
				.then((data) => {
					this.setState({
						product: data.content,
						totalPages: data.totalPages,
						totalElements: data.totalElements,
						currentPage: data.number + 1
					});
				});

		} else {
			this.categoryproductService.getAllProductByCategory(id).then(response => {
				this.setState({ categorybyproduct: response });
			});
		}
		this.categoryService.getAllCategorysId(id).then(response => {
			this.setState({ category: response });
		});
		this.categoryService.getAllCategorys().then(response => {
			this.setState({ categorys: response });
		});


	}
	changePage = (event) => {
		let targetPage = parseInt(event.target.value);
		this.setState({
			[event.target.name]: targetPage
		});
	};
	prevPage = () => {
		let prevPage = 1;
		if (this.state.currentPage > prevPage) {

			this.state.currentPage -= prevPage;

		}
	};
	nextPage = () => {
		if (this.state.currentPage < Math.ceil(this.state.totalElements / this.state.productsPerPage)) {

			this.state.currentPage += 1;

		}
	};


	rendercategory = () => {
		return this.state.categorys.map((categorys, key) => {
			return (
				<ul class="list-menu" key={key}>
					<li><a href={`/loai-san-pham/index=${categorys.idLong}`}>{categorys.titleString}</a></li>
				</ul>
			);
		});
	}

	renderproductbycategory = () => {

		return this.state.categorybyproduct.map((products, key) => {
			return (
				<article class="card card-product-list" key={key}>

					<div class="row no-gutters">
						<aside class="col-md-3">
							<a href={`/index=${products.idLong}`} class="img-wrap" style={{ width: `100%` }}>
								<span class="badge badge-danger"> NEW </span>
								<img src={`/resources/images/items/${products.imageString}`} />
							</a>
						</aside>
						{/* <!-- col.// --> */}
						<div class="col-md-6">
							<div class="info-main">
								<a href={`/index=${products.idLong}`} class="h5 title">{products.titleString}</a>
								<div class="rating-wrap mb-2">
									<ul class="rating-stars">
										<li style={{ width: `100%` }} class="stars-active">
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
									<div class="label-rating">9/10</div>
								</div>
								{/* <!-- rating-wrap.// --> */}

								<p class="mb-3">
									<span class="tag"> <i class="fa fa-check"></i> Có sẵn</span>
									<span class="tag"> {products.roomInteger} phòng </span>
									{/* <span class="tag"> 80 lượt xem </span> */}
									{/* <span class="tag"> Russia </span> */}
								</p>
								<p>
									{`${products.descriptionString.substring(0, 115)}... `}<a href={`/index=${products.idLong}`}> Đọc thêm</a>
								</p>
							</div>
							{/* <!-- info-main.// --> */}
						</div>
						{/* <!-- col.// --> */}
						<aside class="col-sm-3">
							<div class="info-aside">
								<div class="price-wrap">
									<span class="h5 price" style={{ color: `red` }}>Giá: <NumberFormat value={products.priceDouble} displayType={'text'} thousandSeparator={true} /></span>
									<small class="text-muted">/sản phẩm</small>
								</div>
								{/* <!-- price-wrap.// --> */}
								{/* <small class="text-warning">Paid shipping</small>

                                <p class="text-muted mt-3">Grand textile Co</p> */}
								<p class="mt-3">
									<a href={`/lien-he`} class="btn btn-outline-primary"> <i class="fa fa-envelope"></i> Liên hệ </a>
									<a href={`/luu`} class="btn btn-light"><i class="fa fa-heart"></i> Lưu </a>
								</p>


							</div>
							{/* <!-- info-aside.// --> */}
						</aside>
						{/* <!-- col.// --> */}
					</div>
					{/* <!-- row.// --> */}
				</article>
				// {/* <!-- card-product .// --> */}
			);
		});
	}
	renderproduct = () => {
		return this.state.product.map((products, key) => {
			return (
				<div class="col-md-3" key={key}>
					<figure class="card card-product-grid">
						<div class="img-wrap">
							<span class="badge badge-danger"> Mới </span>
							<img src={`/resources/images/items/${products.imageString}`} />
						</div>
						{/* <!-- img-wrap.// --> */}
						<figcaption class="info-wrap">
							<a href={`/index=${products.idLong}`} class="title mb-2">{products.titleString}</a>
							<div class="price-wrap">
							<span class="h5 price" style={{ color: `red` }}>Giá: <NumberFormat value={products.priceDouble} displayType={'text'} thousandSeparator={true} /></span>
								<small class="text-muted">/Sản phẩm</small>
							</div>
							{/* <!-- price-wrap.// --> */}

							{/* <p class="mb-2"> 2 Pieces  <small class="text-muted">(Min Order)</small></p>
						 */}
							<p class="text-muted ">{`${products.descriptionString.substring(0, 115)}... `}<a href={`/index=${products.idLong}`}> Đọc thêm</a></p>

							<hr />

							<p class="mb-3">
								<span class="tag"> <i class="fa fa-check"></i> Xác nhận</span>
								<span class="tag"> Số điện thoại: {products.phoneString} </span>
								<span class="tag"> 23 Đã xem </span>
								<span class="tag"> Số phòng: {products.roomInteger} </span>
							</p>

							<label class="custom-control mb-3 custom-checkbox">
								<input type="checkbox" class="custom-control-input" />
								
							</label>

							<a href={`lien-he`} class="btn btn-outline-primary"> <i class="fa fa-envelope"></i> Liên hệ nhà cung cấp </a>

						</figcaption>
					</figure>
				</div>

			);
		});
	}
	render() {
		const { currentPage, totalPages } = this.state;
		const category = this.state.category;
		const id = this.props.match.params.id;
		if (id == null) {
			var n = this.state.product.length;

		} else {
			var n = this.state.categorybyproduct.length;

		}
		return (

			// <!-- ========================= SECTION CONTENT ========================= -->
			<section class="section-content padding-y">
				<div class="container">


					{/* <!-- ============================  FILTER TOP  ================================= --> */}
					<div class="card mb-3">
						<div class="card-body">
							<div class="row">
								<div class="col-md-2"> Bạn đang ở đây: </div>
								{/* <!-- col.// --> */}
								<nav class="col-md-8">
									<ol class="breadcrumb">
										<li class="breadcrumb-item"><a href={`/`}>trang-chu</a></li>
										<li class="breadcrumb-item"><a href={`loai-san-pham?All`}>loai-san-pham</a></li>
										<li class="breadcrumb-item"><a href="#">{category.titleString}</a></li>
										
									</ol>
								</nav>
								{/* <!-- col.// --> */}
							</div>
							{/* <!-- row.// --> */}
							<hr />
							<div class="row">
								<div class="col-md-2">Bộ lọc</div>
								{/* <!-- col.// --> */}
								<div class="col-md-10">
									<ul class="list-inline">
										<li class="list-inline-item mr-3 dropdown"><a href="#" class="dropdown-toggle" data-toggle="dropdown">Loại nhà cung cấp</a>
											<div class="dropdown-menu p-3" style={{ maxwidth: `400px;` }}>
												<label class="form-check">
													<input type="radio" name="myfilter" class="form-check-input" /> Nhà cung cấp tốt </label>
												<label class="form-check">
													<input type="radio" name="myfilter" class="form-check-input" /> Nhà cung cấp tốt nhất</label>
												<label class="form-check">
													<input type="radio" name="myfilter" class="form-check-input" /> Nhà cung cấp mới</label>
											</div>
											{/* <!-- dropdown-menu.// --> */}
										</li>
										<li class="list-inline-item mr-3 dropdown">
											<a href="#" class="dropdown-toggle" data-toggle="dropdown">  Quốc gia </a>
											<div class="dropdown-menu p-3">
												<label class="form-check"> 	 <input type="checkbox" class="form-check-input" /> Trung Quốc   </label>
												<label class="form-check">   	 <input type="checkbox" class="form-check-input" /> Nhật      </label>
												<label class="form-check">    <input type="checkbox" class="form-check-input" /> Uzbekistan  </label>
												<label class="form-check">  <input type="checkbox" class="form-check-input" /> Nga     </label>
											</div>
											{/* <!-- dropdown-menu.// --> */}
										</li>
										<li class="list-inline-item mr-3 dropdown">
											<a href="#" class="dropdown-toggle" data-toggle="dropdown">Đặc điểm</a>
											<div class="dropdown-menu">
												<a href="" class="dropdown-item">Anti backterial</a>
												<a href="" class="dropdown-item">With buttons</a>
												<a href="" class="dropdown-item">Extra safety</a>
											</div>
										</li>
										
										<li class="list-inline-item mr-3"><a href="#">Kích thước</a></li>
										<li class="list-inline-item mr-3">
											<div class="form-inline">
												<label class="mr-2">Giá</label>
												<input class="form-control form-control-sm" placeholder="Thấp" min="0" type="number" />
												<span class="px-2"> - </span>
												<input class="form-control form-control-sm" placeholder="Cao" min ="0"type="number" />
												<button type="submit" class="btn btn-sm btn-light ml-2">Ok</button>
											</div>
										</li>
										<li class="list-inline-item mr-3">
											<label class="custom-control mt-1 custom-checkbox">
												<input type="checkbox" class="custom-control-input" />
												<div class="custom-control-label">Sẵn sàng cuộc gặp
			  </div>
											</label>
										</li>
									</ul>
								</div>
								{/* <!-- col.// --> */}
							</div>
							{/* <!-- row.// --> */}
						</div>
						{/* <!-- card-body .// --> */}
					</div>
					{/* <!-- card.// --> */}
					{/* <!-- ============================ FILTER TOP END.// ================================= --> */}

					<header class="mb-3">
						<div class="form-inline">
							<strong class="mr-md-auto">{n} Sản phẩm </strong>
							<select class="mr-2 form-control">
								<option>Mới nhất</option>
								<option>Xu hướng</option>
								<option>Phổ biến nhất</option>
								<option>Rẻ nhất</option>
							</select>
							<div class="btn-group">
								<a href={`/danh-sach`} class="btn btn-light" data-toggle="tooltip" title="List view">
									<i class="fa fa-bars"></i></a>
								<a href={`loai-san-pham?All`} class="btn btn-light active" data-toggle="tooltip" title="Grid view">
									<i class="fa fa-th"></i></a>
							</div>
						</div>
					</header>
					{/* <!-- sect-heading --> */}

					<div class="row">
						{this.renderproduct()}
					</div>
					{/* <!-- row end.// --> */}


					<nav class="mb-4" aria-label="Page navigation sample">
						<ul class="pagination">
							<li class="page-item " disabled={currentPage === 0 ? true : false} onClick={this.prevPage}><a class="page-link" href="#">Previous</a></li>

							<li class="page-item active" name="currentPage" value={currentPage}
								onChange={this.changePage}><a class="page-link" href="#">{currentPage}</a></li>

							<li class="page-item" disabled={currentPage === totalPages ? true : false} onClick={this.nextPage}><a class="page-link" href="#">Next</a></li>
						</ul>
					</nav>
                            Showing Page {currentPage} of {totalPages}


					<div class="box text-center">
						<p>Bạn đã tìm thấy những gì bạn đang tìm kiếm?</p>
						<a href="" class="btn btn-light">Yes</a>
						<a href="" class="btn btn-light">No</a>
					</div>

				</div>
				{/* <!-- container .//  --> */}
			</section>
			// {/* <!-- ========================= SECTION CONTENT END// ========================= --> */}


		);
	}
}


export default Listing_gridCategory;