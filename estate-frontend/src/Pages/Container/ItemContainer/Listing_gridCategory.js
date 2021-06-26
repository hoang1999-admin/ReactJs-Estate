import React, { Component } from 'react';
import HomeServices from '../../../HomeServices/HomeServices';
import NumberFormat from 'react-number-format';
import axios from "axios";
import Header from '../../../Components/Header/Header';
import Footer from '../../../Components/Footer/Footer';
import Subcribe from '../../../Components/Subcribe/Subcribe';
import Accep from '../../../Components/Accep/Accep';
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
			productsPerPage: 8,

		};

		this.categoryService = new HomeServices();
		this.productService = new HomeServices();
		this.categoryproductService = new HomeServices();
		this.countproductService = new HomeServices();

		this.changePage = this.changePage.bind(this);
        this.prevPage = this.prevPage.bind(this);
        this.nextPage = this.nextPage.bind(this);
        this.firstPage = this.firstPage.bind(this);
        this.lastPage = this.lastPage.bind(this);
        this.fetchURL = this.fetchURL.bind(this);
        this.fetchURLCategoryId = this.fetchURLCategoryId.bind(this);
	}
	fetchURL(currentPage) {
        currentPage -= 1;
        axios.get(`http://localhost:8080/api/v1/products?page=${currentPage}&size=${this.state.productsPerPage}`)
            .then(response => response.data)
            .then((data) => {
                this.setState({
                    product: data.content,
                    totalPages: data.totalPages,
                    totalElements: data.totalElements,
                    currentPage: data.number + 1,
					isLoading: false,
                });
            }) .catch(error => this.setState({ error, isLoading: false }));
    }
    fetchURLCategoryId(currentPage) {
        currentPage -= 1;
        axios.get(`http://localhost:8080/api/v1/productbycategory/index=${this.state.id}?page=${currentPage}&size=${this.state.productsPerPage}`)
            .then(response => response.data)
            .then((data) => {
                this.setState({
                    categorybyproduct: data.content,
                    totalPages: data.totalPages,
                    totalElements: data.totalElements,
                    currentPage: data.number + 1,

                });
            });
      
    }
	componentDidMount() {

		const id = this.props.match.params.id;

		if (id == null) {
			this.fetchURL(this.state.currentPage);
		} else {
			this.fetchURLCategoryId(this.state.currentPage);
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
        this.fetchURL(targetPage);
        this.fetchURLCategoryId(targetPage);
		this.setState({
			[event.target.name]: targetPage
		});
	};
    firstPage = () => {
		let firstPage = 1;
		if (this.state.currentPage > firstPage) {

		this.fetchURL(firstPage);
        this.fetchURLCategoryId(firstPage);
		}
	};
	prevPage = () => {
		let prevPage = 1;
		if (this.state.currentPage > prevPage) {

		this.fetchURL(this.state.currentPage -= prevPage);
        this.fetchURLCategoryId(this.state.currentPage -= prevPage);
		}
	};
    lastPage = () => {
		let condition = Math.ceil(this.state.totalElements / this.state.productsPerPage);
		if (this.state.currentPage < condition) {

		this.fetchURL(condition);
        this.fetchURLCategoryId(condition);
		}
	};
	nextPage = () => {
		if (this.state.currentPage < Math.ceil(this.state.totalElements / this.state.productsPerPage)) {

			this.fetchURL(this.state.currentPage += 1);
            this.fetchURLCategoryId(this.state.currentPage += 1);
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
								{/* <span class="h5 price" style={{ color: `red` }}>Giá: <NumberFormat value={products.priceDouble} displayType={'text'} thousandSeparator={true} /></span> */}
								<span class="h5 price" style={{ color: `red` }}>Giá: {products.pricesaleDouble.toLocaleString('vi-VN')} VNĐ</span>

								<small class="text-muted">/Sản phẩm</small>
							</div>
							{/* <!-- price-wrap.// --> */}

							{/* <p class="mb-2"> 2 Pieces  <small class="text-muted">(Min Order)</small></p>
						 */}
							<p class="text-muted ">{`${products.descriptionString.substring(0, 100)}... `}<a href={`/index=${products.idLong}`}> Đọc thêm</a></p>

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
		const { currentPage, totalPages,totalElements ,product} = this.state;
		const category = this.state.category;
		const id = this.props.match.params.id;
		if (id == null) {
			var n = this.state.product.length;

		} else {
			var n = this.state.categorybyproduct.length;

		}
		let onResetArray = () => {
			this.setState({ product:this.state.product})
			//console.log(autos)
		  }
		let filterDong = () => {
			const fordDongs = product.filter((products) => products.directionString.includes("D"));
			// const fordAutos = autoData.filter( (auto) => auto.title.includes("Ford"));
	
			this.setState({ product: fordDongs });
		}
		let filterTay = () => {
			const fordTays = product.filter((products) => products.directionString.includes("T"));
			// const fordAutos = autoData.filter( (auto) => auto.title.includes("Ford"));
	
			this.setState({ product: fordTays });
		}
		let filterNam = () => {
			const fordNams = product.filter((products) => products.directionString.includes("N"));
			// const fordAutos = autoData.filter( (auto) => auto.title.includes("Ford"));
	
			this.setState({ product: fordNams });
		}
		let filterBac = () => {
			const fordBacs = product.filter((products) => products.directionString.includes("B"));
			// const fordAutos = autoData.filter( (auto) => auto.title.includes("Ford"));
	
			this.setState({ product: fordBacs });
		}
		return (
			<div>
				<Header />
				{/* // <!-- ========================= SECTION CONTENT ========================= --> */}
				<section class="section-content padding-y">
					<div class="container">


						{/* <!-- ============================  FILTER TOP  ================================= --> */}
						<div class="card mb-3">
							<div class="card-body">
								<div class="row">
									<div class="col-md-2"><i class="fas fa-house-damage"></i> Bạn đang ở đây: </div>
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
									<div class="col-md-2"> <i class="fas fa-filter"></i> Bộ lọc</div>
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
												<a href="#" class="dropdown-toggle" data-toggle="dropdown">Hướng</a>
												<div class="dropdown-menu">
													<a href="javascript:void(0)" class="dropdown-item" onClick={filterDong}>Đông</a>
													<a href="javascript:void(0)" class="dropdown-item" onClick={filterTay}>Tây</a>
													<a href="javascript:void(0)" class="dropdown-item" onClick={filterNam}>Nam</a>
													<a href="javascript:void(0)" class="dropdown-item" onClick={filterBac}>Bắc</a>
												</div>
											</li>

											<li class="list-inline-item mr-3"><a href="#">Kích thước</a></li>
											<li class="list-inline-item mr-3">
												<div class="form-inline">
													<label class="mr-2">Giá</label>
													<input class="form-control form-control-sm" placeholder="Thấp" min="0" type="number" />
													<span class="px-2"> - </span>
													<input class="form-control form-control-sm" placeholder="Cao" min="0" type="number" />
													<button type="submit" class="btn btn-sm btn-light ml-2"onClick={onResetArray}>Reset</button>
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
								<strong class="mr-md-auto"> <i class="far fa-hand-point-right"> </i> {n} / {totalElements} Sản phẩm </strong>
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
								<li class="page-item " disabled={currentPage === 1 ? true : false} onClick={this.firstPage}><a class="page-link" href="#"><i class="fas fa-angle-double-left"></i></a></li>
								<li class="page-item " disabled={currentPage === 1 ? true : false} onClick={this.prevPage}><a class="page-link" href="#"><i class="fas fa-angle-left"></i></a></li>

								<li class="page-item active" name="currentPage" value={currentPage}
									onChange={this.changePage}><a class="page-link" href="#">{currentPage}</a></li>

								<li class="page-item" disabled={currentPage === totalPages ? true : false} onClick={this.nextPage}><a class="page-link" href="#"><i class="fas fa-angle-right"></i></a></li>
								<li class="page-item" disabled={currentPage === totalPages ? true : false} onClick={this.lastPage}><a class="page-link" href="#"><i class="fas fa-angle-double-right"></i></a></li>

							</ul>
						</nav>
						Trang: {currentPage} / {totalPages} Tổng số trang.

						<Accep />

					</div>
					{/* <!-- container .//  --> */}
				</section>
				{/* // <!-- ========================= SECTION CONTENT END// ========================= --> */}

				<Subcribe />
				<Footer />
			</div>
		);
	}
}


export default Listing_gridCategory;