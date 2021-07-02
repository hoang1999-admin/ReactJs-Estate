import React, { Component } from 'react';
import HomeServices from '../../../HomeServices/HomeServices';
import NumberFormat from 'react-number-format';
import axios from "axios";
import Header from '../../../Components/Header/Header';
import Footer from '../../../Components/Footer/Footer';
import Subcribe from '../../../Components/Subcribe/Subcribe';
import Accep from '../../../Components/Accep/Accep';
import moment from 'moment';
class Listing_gridCategory extends Component {

	constructor(props) {
		super(props);
		this.state = {
			search: '',
			product: [],
			filters: [],
			productss: [],
			currentPage: 1,
			productsPerPage: 12,
			names: '',
			checked: false,
			// price
			minValue: 1000000,
			maxValue: 10000000000,
			step: 1000,
			firstValue: null,
			secondValue: null,
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

		this.searchSpace = this.searchSpace.bind(this);
		this.handleChangedong = this.handleChangedong.bind(this);
        this.handleChangetay = this.handleChangetay.bind(this);
        this.handleChangenam = this.handleChangenam.bind(this);
        this.handleChangebac = this.handleChangebac.bind(this);
        this.filterless50 = this.filterless50.bind(this);
        this.filterthan50 = this.filterthan50.bind(this);
        this.filterless100 = this.filterless100.bind(this);
        this.filterthan100 = this.filterthan100.bind(this);
		this.handleChangePosition = this.handleChangePosition.bind(this);
		this.sortByPriceAsc = this.sortByPriceAsc.bind(this);
		this.sortByPriceDesc = this.sortByPriceDesc.bind(this);
		this.refreshPage = this.refreshPage.bind(this);
		this.handlePrice = this.handlePrice.bind(this);

	}
	fetchURL(currentPage) {
		currentPage -= 1;
		axios.get(`http://localhost:8080/api/v1/products?page=${currentPage}&size=${this.state.productsPerPage}`)
			.then(response => response.data)
			.then((data) => {
				this.setState({
					product: data.content,
					filters: data.content,
					totalPages: data.totalPages,
					totalElements: data.totalElements,
					currentPage: data.number + 1,
				});
			})
	}
	componentDidMount() {
		this.fetchURL(this.state.currentPage);
	}
	componentWillMount() {
		this.setState({ firstValue: this.state.minValue, secondValue: this.state.maxValue });
	}
	changePage = (event) => {
		let targetPage = parseInt(event.target.value);
		this.fetchURL(targetPage);
		this.setState({
			[event.target.name]: targetPage
		});
	};
	firstPage = () => {
		let firstPage = 1;
		if (this.state.currentPage > firstPage) {
			this.fetchURL(firstPage);
		}
	};
	prevPage = () => {
		let prevPage = 1;
		if (this.state.currentPage > prevPage) {
			this.fetchURL(this.state.currentPage -= prevPage);
		}
	};
	lastPage = () => {
		let condition = Math.ceil(this.state.totalElements / this.state.productsPerPage);
		if (this.state.currentPage < condition) {
			this.fetchURL(condition);
		}
	};
	nextPage = () => {
		if (this.state.currentPage < Math.ceil(this.state.totalElements / this.state.productsPerPage)) {
			this.fetchURL(this.state.currentPage += 1);
		}
	};
	searchSpace = (event) => {
		let keyword = event.target.value;
		this.setState({ search: keyword })
	}
	sortByPriceAsc = () => {
		let sortedProductsAsc;
		sortedProductsAsc = this.state.product.sort((a, b) => {
			return parseInt(a.pricesaleDouble) - parseInt(b.pricesaleDouble);
		})
		this.setState({
			filters: sortedProductsAsc
		})
	}


	sortByPriceDesc = () => {
		let sortedProductsDsc;
		sortedProductsDsc = this.state.product.sort((a, b) => {
			return parseInt(b.pricesaleDouble) - parseInt(a.pricesaleDouble);
		})
		this.setState({
			filters: sortedProductsDsc
		})
	}
	refreshPage() {
		window.location.reload();
	}
	handlePrice(name, event) {
		//We set the state value depending on input that is clicked
		if (name === "second") {
			let newValue = parseInt(this.state.firstValue) + parseInt(this.state.step);
			//The second value can't be lower than the first value
			if (parseInt(this.state.secondValue) > parseInt(newValue)) {
				this.setState({ secondValue: event.target.value });
			}


		} else {
			//The first value can't be greater than the second value
			if (parseInt(this.state.firstValue) < parseInt(this.state.secondValue)) {
				this.setState({ firstValue: event.target.value });
			}

		}
		const filter = this.state.product.filter((products) => products.pricesaleDouble <= this.state.firstValue);
		console.log(filter);
		this.setState({ filters: filter, checked: true });
	}
	handleChangePosition = e => {
		const { name, value } = e.target;

		this.setState({
			[name]: value
		});
		const filter = this.state.product.filter(
			(products) => products.positionString.toLowerCase().includes(value.toLowerCase())
		);
		console.log(filter);
		this.setState({ filters: filter, checked: true });
	}
	handleChangedong = (event) => {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
        this.setState({ [name]: value });
        if (this.state.checked === false) {
           
                const filter = this.state.product.filter((products) => products.directionString.includes("Đông"));
                console.log(filter);
                this.setState({ filters: filter, checked: true });
           
        }
        if (this.state.checked === true) {
           
                this.setState({ product: this.state.product, checked: false });
          
        }
    };

    handleChangetay = (event) => {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
        this.setState({ [name]: value });
        if (this.state.checked === false) {
           
                const filter = this.state.product.filter((products) => products.directionString.includes("Tây"));
                console.log(filter);
                this.setState({ filters: filter, checked: true });
          
        }
        if (this.state.checked === true) {
          
                this.setState({ product: this.state.product, checked: false });
            
        }
    };

    handleChangenam = (event) => {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
        this.setState({ [name]: value });
        if (this.state.checked === false) {
         
                const filter = this.state.product.filter((products) => products.directionString.includes("Nam"));
                console.log(filter);
                this.setState({ filters: filter, checked: true });
         
        }
        if (this.state.checked === true) {
         
                this.setState({ product: this.state.product, checked: false });
         
        }
    };

    handleChangebac = (event) => {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
        this.setState({ [name]: value });
        if (this.state.checked === false) {
           
                const filter = this.state.product.filter((products) => products.directionString.includes("Bắc"));
                console.log(filter);
                this.setState({ filters: filter, checked: true });
          
        }
        if (this.state.checked === true) {
           
                this.setState({ product: this.state.product, checked: false });
          
        }
    };

	filterless50 = (event) => {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
        this.setState({ [name]: value });
        if (this.state.checked === false) {
         
                const filter = this.state.product.filter(
                    (products) => products.areaString < 50
                );
                console.log(filter);
                this.setState({ filters: filter, checked: true });
          
        }
        if (this.state.checked === true) {
            
                this.setState({ product: this.state.product, checked: false });
           
        }
    }
    filterthan50 = (event) => {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
        this.setState({ [name]: value });
        if (this.state.checked === false) {
          
                const filter = this.state.product.filter(
                    (products) => products.areaString > 50
                );
                console.log(filter);
                this.setState({ filters: filter, checked: true });
         
        }
        if (this.state.checked === true) {
           
                this.setState({ product: this.state.product, checked: false });
          
        }
    }
    filterless100 = (event) => {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
        this.setState({ [name]: value });
        if (this.state.checked === false) {
          
                const filter = this.state.product.filter(
                    (products) => products.areaString < 100
                );
                console.log(filter);
                this.setState({ filters: filter, checked: true });
           
        }
        if (this.state.checked === true) {
           
                this.setState({ product: this.state.product, checked: false });
            
        }
    }
    filterthan100 = (event) => {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
        this.setState({ [name]: value });
        if (this.state.checked === false) {
           
                const filter = this.state.product.filter(
                    (products) => products.areaString > 100
                );
                console.log(filter);
                this.setState({ filters: filter, checked: true });
           
        }
        if (this.state.checked === true) {
           
                this.setState({ product: this.state.product, checked: false });
        
        }
    }
	renderproduct = () => {
		if (this.state.checked == false) {
			return this.state.product.filter((products) => {
				if (this.state.search == null) {
					return products
				} else if (products.titleString.toLowerCase().includes(this.state.search.toLowerCase())) {
					return products
				} else if (products.directionString.toLowerCase().includes(this.state.search.toLowerCase())) {
					return products
				} else if (products.areaString.toLowerCase().includes(this.state.search.toLowerCase())) {
					return products
				} else if (products.productidLong.toLowerCase().includes(this.state.search.toLowerCase())) {
					return products
				} else if (products.positionString.toLowerCase().includes(this.state.search.toLowerCase())) {
					return products
				} else if (products.pricesaleDouble <= this.state.price) {
					return products
				}

			}).map((products, key) => {
				const dd = moment(products.createdatTimestamp).format("LLLL");
				return (
					<div class="col-md-3" key={key} >
						<figure class="card card-product-grid" style={{ height: `850px` }} >
							<div class="img-wrap">
								{/* <span class="badge badge-danger"> Mới </span> */}
								<img src={`/resources/images/items/${products.imageString}`} />
							</div>
							{/* <!-- img-wrap.// --> */}
							<figcaption class="info-wrap" >
								<a href={`/index=${products.idLong}`} class="h4 title mb-2 ">{products.titleString}</a>
								<h6 ><i className="fas fa-history" style={{ color: `green` }}></i> {dd}</h6>
								<div class="price-wrap">
									{/* <span class="h5 price" style={{ color: `red` }}>Giá: <NumberFormat value={products.priceDouble} displayType={'text'} thousandSeparator={true} /></span> */}
									<span class="h5 price" style={{ color: `red` }}>Giá: {products.pricesaleDouble.toLocaleString('vi-VN')} VNĐ</span>

									<small class="text-muted"> / Sản phẩm</small>
								</div>
								{/* <!-- price-wrap.// --> */}

								{/* <p class="mb-2"> 2 Pieces  <small class="text-muted">(Min Order)</small></p>
							 */}
								<p class="text-muted ">{`${products.descriptionString.substring(0, 80)}... `} <a title={products.descriptionString} href={`/index=${products.idLong}`}> Đọc thêm</a></p>

								<hr />

								<p class="mb-3">
									<span class="tag"> <i class="fa fa-check"></i> Xác nhận </span>
									<span class="tag"> Mã: {products.productidLong} </span>
									<span class="tag"> Số điện thoại: {products.phoneString} </span>
									<span class="tag"> Chủ đầu tư: {products.customerString} </span>
									<span class="tag"> Vị trí: {products.positionString} </span>
									<span class="tag"> Số phòng: {products.roomInteger} phòng </span>
									<span class="tag"> Hướng: {products.directionString} </span>
									<span class="tag"> Diện tích: {products.areaString} m<sup>2</sup></span>
								</p>
								<a href={`lien-he`} class="btn btn-outline-primary "> <i class="fa fa-envelope"></i> Liên hệ nhà cung cấp </a>

							</figcaption>


						</figure>


					</div>

				);
			});

		}
		if (this.state.checked == true) {
			return this.state.filters.filter((products) => {
				if (this.state.search == null) {
					return products
				} else if (products.titleString.toLowerCase().includes(this.state.search.toLowerCase())) {
					return products
				} else if (products.directionString.toLowerCase().includes(this.state.search.toLowerCase())) {
					return products
				} else if (products.areaString.toLowerCase().includes(this.state.search.toLowerCase())) {
					return products
				} else if (products.productidLong.toLowerCase().includes(this.state.search.toLowerCase())) {
					return products
				} else if (products.positionString.toLowerCase().includes(this.state.search.toLowerCase())) {
					return products
				} else if (products.pricesaleDouble <= this.state.price) {
					return products
				}

			}).map((products, key) => {
				const dd = moment(products.createdatTimestamp).format("LLLL");
				return (
					<div class="col-md-3" key={key} >
						<figure class="card card-product-grid" style={{ height: `850px` }} >
							<div class="img-wrap">
								{/* <span class="badge badge-danger"> Mới </span> */}
								<img src={`/resources/images/items/${products.imageString}`} />
							</div>
							{/* <!-- img-wrap.// --> */}
							<figcaption class="info-wrap" >
								<a href={`/index=${products.idLong}`} class="h4 title mb-2 ">{products.titleString}</a>
								<h6 ><i className="fas fa-history" style={{ color: `green` }}></i> {dd}</h6>
								<div class="price-wrap">
									{/* <span class="h5 price" style={{ color: `red` }}>Giá: <NumberFormat value={products.priceDouble} displayType={'text'} thousandSeparator={true} /></span> */}
									<span class="h5 price" style={{ color: `red` }}>Giá: {products.pricesaleDouble.toLocaleString('vi-VN')} VNĐ</span>

									<small class="text-muted"> / Sản phẩm</small>
								</div>
								{/* <!-- price-wrap.// --> */}

								{/* <p class="mb-2"> 2 Pieces  <small class="text-muted">(Min Order)</small></p>
							 */}
								<p class="text-muted ">{`${products.descriptionString.substring(0, 80)}... `} <a title={products.descriptionString} href={`/index=${products.idLong}`}> Đọc thêm</a></p>

								<hr />

								<p class="mb-3">
									<span class="tag"> <i class="fa fa-check"></i> Xác nhận </span>
									<span class="tag"> Mã: {products.productidLong} </span>
									<span class="tag"> Số điện thoại: {products.phoneString} </span>
									<span class="tag"> Chủ đầu tư: {products.customerString} </span>
									<span class="tag"> Vị trí: {products.positionString} </span>
									<span class="tag"> Số phòng: {products.roomInteger} phòng </span>
									<span class="tag"> Hướng: {products.directionString} </span>
									<span class="tag"> Diện tích: {products.areaString} m<sup>2</sup></span>
								</p>
								<a href={`lien-he`} class="btn btn-outline-primary "> <i class="fa fa-envelope"></i> Liên hệ nhà cung cấp </a>

							</figcaption>


						</figure>


					</div>

				);
			});
		}
	}
	render() {
		const { currentPage, totalPages, totalElements } = this.state;
		var n = this.state.product.length;

		var dong = this.state.product.filter((products) => products.directionString.includes("Đông")).length;
		var tay = this.state.product.filter((products) => products.directionString.includes("Tây")).length;
		var nam = this.state.product.filter((products) => products.directionString.includes("Nam")).length;
		var bac = this.state.product.filter((products) => products.directionString.includes("Bắc")).length;

		var less50 = this.state.product.filter((products) => products.areaString < 50).length;
		var than50 = this.state.product.filter((products) => products.areaString > 50).length;
		var less100 = this.state.product.filter((products) => products.areaString < 100).length;
		var than100 = this.state.product.filter((products) => products.areaString > 100).length;

		var QQM = this.state.product.filter((products) => products.positionString.includes("Mỹ")).length;
		var QQN = this.state.product.filter((products) => products.positionString.includes("Nga")).length;
		var QQVN = this.state.product.filter((products) => products.positionString.includes("Việt Nam")).length;
		var QQTQ = this.state.product.filter((products) => products.positionString.includes("Trung Quốc")).length;
		var QQNB = this.state.product.filter((products) => products.positionString.includes("Nhật Bản")).length;
		var QQHQ = this.state.product.filter((products) => products.positionString.includes("Hàn Quốc")).length;

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
											<li class="breadcrumb-item"><a href={`danh-sach`}>danh-sach</a></li>

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
													{/* <label class="form-check">
														<input type="radio" name="myfilter" class="form-check-input" /> Nhà cung cấp tốt </label>
													<label class="form-check">
														<input type="radio" name="myfilter" class="form-check-input" /> Nhà cung cấp tốt nhất</label>
													<label class="form-check">
														<input type="radio" name="myfilter" class="form-check-input" /> Nhà cung cấp mới</label> */}
														ĐANG CẬP NHẬT
												</div>
												{/* <!-- dropdown-menu.// --> */}
											</li>
											<li class="list-inline-item mr-3 dropdown">
												<a href="#" class="dropdown-toggle" data-toggle="dropdown">  Quốc gia </a>
												<div class="dropdown-menu p-3">
												<b className="badge badge-pill badge-light float-right">{QQM}</b>
													<label class="form-check" checked={this.state.checked} onChange={this.handleChangePosition}>
														<input type="radio" name="Mỹ" value="Mỹ" className="form-check-input" />
														Mỹ
													</label>
													<b className="badge badge-pill badge-light float-right">{QQN}</b>
													<label class="form-check" checked={this.state.checked} onChange={this.handleChangePosition}>
														<input type="radio" name="Nga" value="Nga" className="form-check-input" />
														Nga
													</label>
													<b className="badge badge-pill badge-light float-right">{QQVN}</b>
													<label class="form-check" checked={this.state.checked} onChange={this.handleChangePosition}>
														<input type="radio" name="Việt Nam" value="Việt Nam" className="form-check-input" />
														Việt Nam
													</label>
													<b className="badge badge-pill badge-light float-right">{QQTQ}</b>
													<label class="form-check" checked={this.state.checked} onChange={this.handleChangePosition}>
														<input type="radio" name="Trung Quốc" value="Trung Quốc" className="form-check-input" />
														Trung Quốc
													</label>
													<b className="badge badge-pill badge-light float-right">{QQNB}</b>
													<label class="form-check" checked={this.state.checked} onChange={this.handleChangePosition}>
														<input type="radio" name="Nhật Bản" value="Nhật Bản" className="form-check-input" />
														Nhật Bản
													</label>
													<b className="badge badge-pill badge-light float-right">{QQHQ}</b>
													<label class="form-check" checked={this.state.checked} onChange={this.handleChangePosition}>
														<input type="radio" name="Hàn Quốc" value="Hàn Quốc" className="form-check-input" />
														Hàn Quốc
													</label>
												</div>
												{/* <!-- dropdown-menu.// --> */}
											</li>
											<li class="list-inline-item mr-3 dropdown">
												<a href="#" class="dropdown-toggle" data-toggle="dropdown">Hướng</a>
												<div class="dropdown-menu p-3">
													<b className="badge badge-pill badge-light float-right">{dong}</b>
													<label class="form-check" checked={this.state.checked} onChange={this.handleChangedong}>
														<input type="checkbox" class="form-check-input" name="Đông" />Đông
													</label>
													<b className="badge badge-pill badge-light float-right">{tay}</b>
													<label class="form-check" checked={this.state.checked} onChange={this.handleChangetay}>
														<input type="checkbox" class="form-check-input" name="Tây" />Tây
													</label>
													<b className="badge badge-pill badge-light float-right">{nam}</b>
													<label class="form-check" checked={this.state.checked} onChange={this.handleChangenam}>
														<input type="checkbox" class="form-check-input" name="Nam" />Nam
													</label>
													<b className="badge badge-pill badge-light float-right">{bac}</b>
													<label class="form-check" checked={this.state.checked} onChange={this.handleChangebac}>
														<input type="checkbox" class="form-check-input" name="Bắc" />Bắc
													</label>
												</div>
											</li>

											<li class="list-inline-item mr-3 dropdown">
												<a href="#" class="dropdown-toggle" data-toggle="dropdown">Diện tích</a>
												<div class="dropdown-menu p-3">
													<b className="badge badge-pill badge-light float-right">{less50}</b>
													<label class="form-check" checked={this.state.checked} onChange={this.filterless50}>
														<input type="checkbox" class="form-check-input"  /><i className="fas fa-angle-left"></i> 50 m<sup>2</sup>
													</label>
													<b className="badge badge-pill badge-light float-right">{than50}</b>
													<label class="form-check" checked={this.state.checked} onChange={this.filterthan50}>
														<input type="checkbox" class="form-check-input" /><i className="fas fa-angle-right"></i> 50 m<sup>2</sup>
													</label>
													<b className="badge badge-pill badge-light float-right">{less100}</b>
													<label class="form-check" checked={this.state.checked} onChange={this.filterless100}>
														<input type="checkbox" class="form-check-input"  /><i className="fas fa-angle-left"></i> 100 m<sup>2</sup>
													</label>
													<b className="badge badge-pill badge-light float-right">{than100}</b>
													<label class="form-check" checked={this.state.checked} onChange={this.filterthan100}>
														<input type="checkbox" class="form-check-input" /><i className="fas fa-angle-right"></i> 100 m<sup>2</sup>
													</label>

												</div>
											</li>
											<li class="list-inline-item mr-3">
												<div class="form-inline">
													<label class="mr-2">Giá</label>
													<input class="form-control form-control-sm " style={{ width: `100%` }, { cursor: `pointer` }} type="range" value={this.state.firstValue} min={this.state.minValue} max={this.state.maxValue} step={this.state.step} onChange={this.handlePrice.bind(this, "first")} />
													<b className=" badge badge-pill badge-light mt-3"><NumberFormat value={this.state.firstValue} displayType={'text'} thousandSeparator={true} /></b>
												</div>
											</li>
											{/* <li class="list-inline-item mr-3">
												<label class="custom-control mt-1 custom-checkbox">
													<input type="checkbox" class="custom-control-input" />
													<div class="custom-control-label">Sẵn sàng cuộc gặp
													</div>
												</label>
											</li> */}
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
								<strong className="mr-md-auto"> <i className="far fa-hand-point-right" style={{ color: `green` }}> </i> {n} / {totalElements} Sản phẩm </strong>

								<input title="Nhập sản phẩm cần tìm kiếm..." className="mr-2 form-control" style={{ width: `400px` }} type="text" placeholder="Nhập sản phẩm cần tìm kiếm..." onChange={(e) => this.searchSpace(e)} />
								<button title="Làm mới" className="mr-2 form-control" onClick={() => this.refreshPage()} >
									Làm mới
								</button>
								<button title=" Giá giảm dần" className="mr-2 form-control" onClick={this.sortByPriceDesc}>
									Giá giảm dần
								</button>
								<button title=" Giá tăng dần" className="mr-2 form-control" onClick={this.sortByPriceAsc}>
									Giá tăng dần
								</button>
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