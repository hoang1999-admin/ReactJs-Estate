
import React, { Component } from 'react'
import HomeServiceAdmin from '../../HomeServiceAdmin/HomeServiceAdmin';
import moment from 'moment';
import Home from '../Home/Home';

class UpdateProduct extends Component {
    constructor(props) {
        super(props)
        this.fileInput = React.createRef();
        this.state = {
            categorys: [],
            errors: {},
            // step 2
            id: this.props.match.params.id,
            productidLong: '',
            categoryidLong: '',
            titleString: '',
            descriptionString: '',
            slugString: '',
            metakeyString: '',
            metadescString: '',
            priceDouble: '',
            pricesaleDouble: '',
            discountInteger: '',
            positionString: '',
            directionString: '',
            createdatTimestamp: moment().format(),
            imageString: '',
            areaString: '',
            addressString: '',
            phoneString: '',
            customerString: '',
            roomInteger: '',
            maincontainerBoolean: false,
            dealcontainerBoolean: false,
            container1Boolean: false,
            container2Boolean: false,
            requestcontainerBoolean: false,
            itemcontainerBoolean: false,
            servicecontainerBoolean: false,
            regioncontainerBoolean: false,
            statusString: 1,
            statusString2: 2,

        }
        this.changeProduct_idHandler = this.changeProduct_idHandler.bind(this);
        this.changeCategory_idHandler = this.changeCategory_idHandler.bind(this);
        this.changeTitleHandler = this.changeTitleHandler.bind(this);
        this.changeSlugHandler = this.changeSlugHandler.bind(this);
        this.changeDescriptionHandler = this.changeDescriptionHandler.bind(this);
        this.changeMetakeyHandler = this.changeMetakeyHandler.bind(this);
        this.changeMetadescHandler = this.changeMetadescHandler.bind(this);
        this.changePriceHandler = this.changePriceHandler.bind(this);
        this.changePricesaleHandler = this.changePricesaleHandler.bind(this);
        this.changeDiscountHandler = this.changeDiscountHandler.bind(this);
        this.changePositionHandler = this.changePositionHandler.bind(this);
        this.changeDirectionHandler = this.changeDirectionHandler.bind(this);
        this.changeImageHandler = this.changeImageHandler.bind(this);
        this.changeAreaHandler = this.changeAreaHandler.bind(this);
        this.changeAddressHandler = this.changeAddressHandler.bind(this);
        this.changePhoneHandler = this.changePhoneHandler.bind(this);
        this.changeCustomerHandler = this.changeCustomerHandler.bind(this);
        this.changeMainHandler = this.changeMainHandler.bind(this);
        this.changeDealHandler = this.changeDealHandler.bind(this);
        this.change1Handler = this.change1Handler.bind(this);
        this.change2Handler = this.change2Handler.bind(this);
        this.changeRequestHandler = this.changeRequestHandler.bind(this);
        this.changeServiceHandler = this.changeServiceHandler.bind(this);
        this.changeItemHandler = this.changeItemHandler.bind(this);
        this.changeRegionHandler = this.changeRegionHandler.bind(this);
        this.changeStatusHandler = this.changeStatusHandler.bind(this);

        this.saveProduct = this.saveProduct.bind(this);
        this.productService = new HomeServiceAdmin();
    }
    componentDidMount() {
        this.productService.getCategorys().then(response => {
            this.setState({ categorys: response.data });
        });
        this.productService.getProductById(this.state.id).then((res) => {
            let productdata = res.data;
            this.setState({
                productidLong: productdata.productidLong,
                categoryidLong: productdata.categoryidLong,
                titleString: productdata.titleString,
                descriptionString: productdata.descriptionString,
                slugString: productdata.slugString,
                metakeyString: productdata.metakeyString,
                metadescString: productdata.metadescString,
                priceDouble: productdata.priceDouble,
                pricesaleDouble: productdata.pricesaleDouble,
                discountInteger: productdata.discountInteger,
                positionString: productdata.positionString,
                directionString: productdata.directionString,
                imageString: productdata.imageString,
                areaString: productdata.areaString,
                addressString: productdata.addressString,
                phoneString: productdata.phoneString,
                customerString: productdata.customerString,
                roomInteger: productdata.roomInteger,
                maincontainerBoolean: productdata.maincontainerBoolean,
                dealcontainerBoolean: productdata.dealcontainerBoolean,
                container1Boolean: productdata.container1Boolean,
                container2Boolean: productdata.container2Boolean,
                servicecontainerBoolean: productdata.servicecontainerBoolean,
                requestcontainerBoolean: productdata.requestcontainerBoolean,
                itemcontainerBoolean: productdata.itemcontainerBoolean,
                regioncontainerBoolean: productdata.regioncontainerBoolean,
                statusString: this.state.statusString ? this.state.statusString : this.state.statusString2,


            });
        });
    }
    saveProduct = (e) => {
        e.preventDefault();
        if (this.validateForm()) {
            let product = {
                productidLong: this.state.productidLong,
                categoryidLong: this.state.categoryidLong,
                titleString: this.state.titleString,
                descriptionString: this.state.descriptionString,
                slugString: this.state.slugString,
                metakeyString: this.state.metakeyString,
                metadescString: this.state.metadescString,
                priceDouble: this.state.priceDouble,
                pricesaleDouble: this.state.pricesaleDouble,
                discountInteger: this.state.discountInteger,
                positionString: this.state.positionString,
                directionString: this.state.directionString,
                createdatTimestamp: this.state.createdatTimestamp,
                imageString: this.fileInput.current.files[0].name,
                areaString: this.state.areaString,
                addressString: this.state.addressString,
                phoneString: this.state.phoneString,
                customerString: this.state.customerString,
                roomInteger: this.state.roomInteger,
                maincontainerBoolean: this.state.maincontainerBoolean,
                dealcontainerBoolean: this.state.dealcontainerBoolean,
                container1Boolean: this.state.container1Boolean,
                container2Boolean: this.state.container2Boolean,
                requestcontainerBoolean: this.state.requestcontainerBoolean,
                itemcontainerBoolean: this.state.itemcontainerBoolean,
                servicecontainerBoolean: this.state.servicecontainerBoolean,
                regioncontainerBoolean: this.state.regioncontainerBoolean,
                statusString: this.state.statusString ? this.state.statusString : this.state.statusString2,
            };
            console.log('product => ' + JSON.stringify(product));
            console.log('id => ' + JSON.stringify(this.state.id));
            if (product == null || this.state.id == '') {
                alert('Lưu thất bại');
            } else {
                this.productService.updateProduct(product, this.state.id).then(res => {
                    this.props.history.push('/list-product');
                    alert('Lưu thành công');
                });
            }
        } else {
            alert("Lỗi!!")
        }
    }

    changeProduct_idHandler = (event) => {
        this.setState({ productidLong: event.target.value });
    }
    changeCategory_idHandler = (event) => {
        this.setState({ categoryidLong: event.target.value });
    }
    changeTitleHandler = (event) => {
        this.setState({ titleString: event.target.value });
    }
    changeSlugHandler = (event) => {
        this.setState({ slugString: event.target.value });
    }
    changeDescriptionHandler = (event) => {
        this.setState({ descriptionString: event.target.value });
    }

    changeMetakeyHandler = (event) => {
        this.setState({ metakeyString: event.target.value });
    }
    changeMetadescHandler = (event) => {
        this.setState({ metadescString: event.target.value });
    }
    changePriceHandler = (event) => {
        this.setState({ priceDouble: event.target.value });
    }
    changePricesaleHandler = (event) => {
        this.setState({ pricesaleDouble: event.target.value });
    }
    changeDiscountHandler = (event) => {
        this.setState({ discountInteger: event.target.value });
    }
    changePositionHandler = (event) => {
        this.setState({ positionString: event.target.value });
    }

    changeDirectionHandler = (event) => {
        this.setState({ directionString: event.target.value });
    }
    changeImageHandler = (event) => {
        if (event.target.files && event.target.files[0]) {
            let reader = new FileReader();
            reader.onload = (e) => {
                this.setState({ imageString: e.target.result });
            };
            reader.readAsDataURL(event.target.files[0]);
        }
    }
    changeAreaHandler = (event) => {
        this.setState({ areaString: event.target.value });
    }
    changeAddressHandler = (event) => {
        this.setState({ addressString: event.target.value });
    }
    changePhoneHandler = (event) => {
        this.setState({ phoneString: event.target.value });
    }
    changeCustomerHandler = (event) => {
        this.setState({ customerString: event.target.value });
    }
    changeRoomHandler = (event) => {
        this.setState({ roomInteger: event.target.value });
    }
    changeMainHandler = (event) => {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
        this.setState({ [name]: value });
    }
    changeDealHandler = (event) => {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
        this.setState({ [name]: value });
    }
    change1Handler = (event) => {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
        this.setState({ [name]: value });
    }
    change2Handler = (event) => {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
        this.setState({ [name]: value });
    }
    changeServiceHandler = (event) => {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
        this.setState({ [name]: value });
    }
    changeRequestHandler = (event) => {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
        this.setState({ [name]: value });
    }
    changeItemHandler = (event) => {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
        this.setState({ [name]: value });
    }
    changeRegionHandler = (event) => {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
        this.setState({ [name]: value });
    }
    changeStatusHandler = (event) => {
        if (this.state.statusString) {
            this.setState({ statusString: event.target.value });
        } else {
            this.setState({ statusString2: event.target.value });
        }
    }
    rendercategorys = () => {
        return this.state.categorys.map((category, key) => {
            return (
                <option key={key} value={category.idLong}>{category.titleString}</option>


            );
        });
    };
    cancel() {
        this.props.history.push('/list-product');
    }
    validateForm() {

        let fieldsproductidLong = this.state.productidLong;
        let fieldscategoryidLong = this.state.categoryidLong;
        let fieldstitleString = this.state.titleString;
        let fieldsslugString = this.state.slugString;
        let fieldspriceDouble = this.state.priceDouble;
        let fieldspricesaleDouble = this.state.pricesaleDouble;
        let fieldsdiscountInteger = this.state.discountInteger;
        let fieldspositionString = this.state.positionString;
        let fieldsdirectionString = this.state.directionString;
        let fieldsfileInput = this.state.imageString;
        let fieldsareaString = this.state.areaString;
        let fieldsaddressString = this.state.addressString;
        let fieldsphoneString = this.state.phoneString;
        let fieldscustomerString = this.state.customerString;
        let fieldsroomInteger = this.state.roomInteger;
        let errors = {};
        let formIsValid = true;

        if (!fieldsproductidLong) {
            formIsValid = false;
            errors['productidLong'] = "*Vui lòng nhập mã sản phẩm.";
        }

        if (!fieldscategoryidLong) {
            formIsValid = false;
            errors["categoryidLong"] = "*Vui lòng chọn mã loại sản phẩm.";
        }
        if (!fieldstitleString) {
            formIsValid = false;
            errors["titleString"] = "*Vui lòng nhập tên.";
        }

        if (!fieldsslugString) {
            formIsValid = false;
            errors["slugString"] = "*Vui lòng nhập tên gạch nối.";
        }
        if (!fieldspriceDouble) {
            formIsValid = false;
            errors["priceDouble"] = "*Vui lòng nhập giá .";
        }
        if (!fieldspricesaleDouble) {
            formIsValid = false;
            errors["pricesaleDouble"] = "*Vui lòng nhập giá giảm.";
        }
        if (!fieldsdiscountInteger) {
            formIsValid = false;
            errors["discountInteger"] = "*Vui lòng nhập số phần trăm giảm.";
        }
        if (!fieldspositionString) {
            formIsValid = false;
            errors["positionString"] = "*Vui lòng nhập vị trí.";
        }
        if (!fieldsdirectionString) {
            formIsValid = false;
            errors["directionString"] = "*Vui lòng nhập hướng.";
        }
        if (!fieldsfileInput) {
            formIsValid = false;
            errors["fileInput"] = "*Vui lòng chọn hình ảnh.";
        }
        if (!fieldsareaString) {
            formIsValid = false;
            errors["areaString"] = "*Vui lòng nhập khu vực .";
        }
        if (!fieldsaddressString) {
            formIsValid = false;
            errors["addressString"] = "*Vui lòng nhập địa chỉ.";
        }
        if (!fieldsphoneString) {
            formIsValid = false;
            errors["phoneString"] = "*Vui lòng nhập số điện thoại.";
        }
        if (!fieldscustomerString) {
            formIsValid = false;
            errors["customerString"] = "*Vui lòng nhập chủ đầu tư.";
        }
        if (!fieldsroomInteger) {
            formIsValid = false;
            errors["roomInteger"] = "*Vui lòng nhập số phòng.";
        }

        this.setState({
            errors: errors
        });
        return formIsValid;


    }
    render() {

        return (
            <div class="wrapper">
                {/* <!-- Navbar --> */}
                <nav class="main-header navbar navbar-expand navbar-white navbar-light">
                    {/* <!-- Left navbar links --> */}
                    <ul class="navbar-nav">
                        <li class="nav-item">
                            <a class="nav-link" data-widget="pushmenu" href="#" role="button"><i class="fas fa-bars"></i></a>
                        </li>
                        <li class="nav-item d-none d-sm-inline-block">
                            <a href="/Admin" class="nav-link">Trang chủ</a>
                        </li>
                        <li class="nav-item d-none d-sm-inline-block">
                            <a href="/lien-he" class="nav-link">Liên hệ</a>
                        </li>
                    </ul>

                    {/* <!-- SEARCH FORM --> */}
                    <form class="form-inline ml-3">
                        <div class="input-group input-group-sm">
                            <input class="form-control form-control-navbar" type="search" placeholder="Search" aria-label="Search" />
                            <div class="input-group-append">
                                <button class="btn btn-navbar" type="submit">
                                    <i class="fas fa-search"></i>
                                </button>
                            </div>
                        </div>
                    </form>

                    {/* <!-- Right navbar links --> */}
                    <ul class="navbar-nav ml-auto">
                        <li class="nav-item">
                            <a class="nav-link" data-widget="control-sidebar" data-slide="true" href="#" role="button">
                                <i class="fas fa-th-large"></i>
                            </a>
                        </li>
                    </ul>
                </nav>
                {/* <!-- Main Sidebar Container --> */}
                <div className="row">
                    <div className="col-3">
                        <div class="list-group">
                           <Home/>
                        </div>
                    </div>
                    <div className="col-9">
                        <form name="form1" method="post">
                            <div class="content-wrapper" >
                                <section class="content">
                                    <div class="card">
                                        <div class="card-header">
                                            <h3 class="card-title">
                                                <strong class="text-danger">DANH SÁCH CẬP NHẬT SẢN PHẨM</strong>
                                            </h3>
                                            <div class="card-tools" style={{ float: `right` }} >
                                                <button type="submit" onClick={this.saveProduct} class="btn btn-success btn-sm">   <i class="far fa-save"></i> Lưu[Thêm]</button>
                                                <a onClick={this.cancel.bind(this)} class="btn btn-danger btn-sm" href="javascript:void(0)" role="button">
                                                    <i class="fas fa-times"></i> Thoát</a>
                                            </div>
                                        </div>
                                        <div class="card-body">
                                            <div class="row">
                                                <div class="col-6">
                                                    <div class="form-group">
                                                        <label for="">Mã sản phẩm</label>
                                                        <input name="productidString" value={this.state.productidLong} onChange={this.changeProduct_idHandler} type="text" class="form-control" name="productidLong" placeholder="vd: BDHDSF23" />
                                                        <span style={{ color: "red" }}>{this.state.errors.productidLong}</span>
                                                    </div>
                                                    <div class="form-group">
                                                        <label for="">Loại sản phẩm</label>
                                                        <select name="categoryidLong" class="custom-select form-control" ref="fieldTittle" value={this.state.categoryidLong} onChange={this.changeCategory_idHandler}>
                                                            <option>Chọn</option>
                                                            {this.rendercategorys()}
                                                        </select>
                                                        <span style={{ color: "red" }}>{this.state.errors.categoryidLong}</span>
                                                    </div>
                                                    <div class="form-group">
                                                        <label for="">Tên sản phẩm</label>
                                                        <input name="titleString" value={this.state.titleString} onChange={this.changeTitleHandler} type="text" class="form-control" name="titleString" placeholder=" Tên sản phẩm" />
                                                        <span style={{ color: "red" }}>{this.state.errors.titleString}</span>
                                                    </div>
                                                    <div class="form-group">
                                                        <label for="">Tên gạch nối</label>
                                                        <input name="slugString" value={this.state.slugString} onChange={this.changeSlugHandler} type="text" class="form-control" name="slugString" placeholder=" ten-san-pham" />
                                                        <span style={{ color: "red" }}>{this.state.errors.slugString}</span>
                                                    </div>
                                                    <div class="form-group">
                                                        <label for="">Mô tả sản phẩm</label>
                                                        <textarea value={this.state.descriptionString} onChange={this.changeDescriptionHandler} class="form-control" name="descriptionString" rows="3"></textarea>
                                                    </div>
                                                    <div class="form-group">
                                                        <label for="">Từ khóa</label>
                                                        <textarea value={this.state.metakeyString} onChange={this.changeMetakeyHandler} class="form-control" name="metakeyString" rows="3"></textarea>
                                                    </div>
                                                    <div class="form-group">
                                                        <label for="">Từ khóa mô tả</label>
                                                        <textarea value={this.state.metadescString} onChange={this.changeMetadescHandler} class="form-control" name="metadescString" rows="3"></textarea>
                                                    </div>
                                                    <p>Chọn loại quyền truy cập:</p>
                                                    <div className="row">
                                                        <div className="col-6">
                                                            <div class="form-group text-muted">

                                                                <label class="form-check form-check-inline" >
                                                                    <input class="form-check-input" type="checkbox" name="maincontainerBoolean" value="option1" ref="fieldPrice" checked={this.state.maincontainerBoolean} onChange={this.changeMainHandler} />
                                                                    <span class="form-check-label">Main Container</span>
                                                                </label>

                                                            </div>
                                                            <div class="form-group text-muted">

                                                                <label class="form-check form-check-inline" >
                                                                    <input class="form-check-input" type="checkbox" name="dealcontainerBoolean" value="option1" ref="fieldPrice" checked={this.state.dealcontainerBoolean} onChange={this.changeDealHandler} />
                                                                    <span class="form-check-label"> Deal Container</span>
                                                                </label>

                                                            </div>
                                                            <div class="form-group text-muted">

                                                                <label class="form-check form-check-inline" >
                                                                    <input class="form-check-input" type="checkbox" name="container1Boolean" value="option1" ref="fieldPrice" checked={this.state.container1Boolean} onChange={this.change1Handler} />
                                                                    <span class="form-check-label">Container 1</span>
                                                                </label>

                                                            </div>  <div class="form-group text-muted">

                                                                <label class="form-check form-check-inline" >
                                                                    <input class="form-check-input" type="checkbox" name="container2Boolean" value="option1" ref="fieldPrice" checked={this.state.container2Boolean} onChange={this.change2Handler} />
                                                                    <span class="form-check-label">Container 2</span>
                                                                </label>

                                                            </div>


                                                        </div>
                                                        <div className="col-6">
                                                            <div class="form-group text-muted">

                                                                <label class="form-check form-check-inline" >
                                                                    <input class="form-check-input" type="checkbox" name="servicecontainerBoolean" value="option1" ref="fieldPrice" checked={this.state.servicecontainerBoolean} onChange={this.changeServiceHandler} />
                                                                    <span class="form-check-label">Service Container</span>
                                                                </label>

                                                            </div>
                                                            <div class="form-group text-muted">

                                                                <label class="form-check form-check-inline" >
                                                                    <input class="form-check-input" type="checkbox" name="requestcontainerBoolean" value="option1" ref="fieldPrice" checked={this.state.requestcontainerBoolean} onChange={this.changeRequestHandler} />
                                                                    <span class="form-check-label">Request Container</span>
                                                                </label>

                                                            </div>
                                                            <div class="form-group text-muted">

                                                                <label class="form-check form-check-inline" >
                                                                    <input class="form-check-input" type="checkbox" name="itemcontainerBoolean" value="option1" ref="fieldPrice" checked={this.state.itemcontainerBoolean} onChange={this.changeItemHandler} />
                                                                    <span class="form-check-label">Item Container</span>
                                                                </label>

                                                            </div>
                                                            <div class="form-group text-muted">

                                                                <label class="form-check form-check-inline" >
                                                                    <input class="form-check-input" type="checkbox" name="regioncontainerBoolean" value="option1" ref="fieldPrice" checked={this.state.regioncontainerBoolean} onChange={this.changeRegionHandler} />
                                                                    <span class="form-check-label">Region Container</span>
                                                                </label>

                                                            </div>
                                                        </div>
                                                    </div>


                                                </div>
                                                <div class="col-6">
                                                    <div class="form-group">
                                                        <label for="">Giá</label>
                                                        <input name="priceDouble" value={this.state.priceDouble} onChange={this.changePriceHandler} type="text" class="form-control" name="priceDouble" />
                                                        <span style={{ color: "red" }}>{this.state.errors.priceDouble}</span>
                                                    </div>
                                                    <div class="form-group">
                                                        <label for="">Giá giảm</label>
                                                        <input name="pricesaleDouble" value={this.state.pricesaleDouble} onChange={this.changePricesaleHandler} type="text" class="form-control" name="pricesaleDouble" />
                                                        <span style={{ color: "red" }}>{this.state.errors.pricesaleDouble}</span>
                                                    </div>
                                                    <div class="form-group">
                                                        <label for="">Phần trăm giảm</label>
                                                        <input name="discountInteger" value={this.state.discountInteger} onChange={this.changeDiscountHandler} type="number" min="1" class="form-control" name="discountInteger" />
                                                        <span style={{ color: "red" }}>{this.state.errors.discountInteger}</span>
                                                    </div>
                                                    <div class="form-group">
                                                        <label for="">Vị trí</label>
                                                        <input name="positionString" value={this.state.positionString} onChange={this.changePositionHandler} type="text" class="form-control" name="positionString" rows="3"></input>
                                                        <span style={{ color: "red" }}>{this.state.errors.positionString}</span>
                                                    </div>
                                                    <div class="form-group">
                                                        <label for="">Hướng</label>
                                                        <input name="directionString" value={this.state.directionString} onChange={this.changeDirectionHandler} type="text" class="form-control" name="directionString" rows="3"></input>
                                                        <span style={{ color: "red" }}>{this.state.errors.directionString}</span>
                                                    </div>
                                                    <div class="form-group">
                                                        <label for="img">Hình ảnh
                                                            <img style={{ marginLeft: `300px` }} title={`/resources/images/items/${this.state.imageString}`} src={`/resources/images/items/${this.state.imageString}`} width="100px" height="100px" />
                                                        </label>
                                                        <input name="fileInput" id="img" ref={this.fileInput} onChange={this.changeImageHandler} type="file" accept="image/*" class="form-control"/>
                                                        <span style={{ color: "red" }}>{this.state.errors.fileInput}</span>

                                                    </div>
                                                    <div class="form-group">
                                                        <label for="">Khu vực</label>
                                                        <input name="areaString" value={this.state.areaString} onChange={this.changeAreaHandler} type="text" class="form-control" name="areaString" rows="3"></input>
                                                        <span style={{ color: "red" }}>{this.state.errors.areaString}</span>
                                                    </div>
                                                    <div class="form-group">
                                                        <label for="">Địa chỉ</label>
                                                        <input name="addressString" value={this.state.addressString} onChange={this.changeAddressHandler} type="text" class="form-control" name="addressString" rows="3"></input>
                                                        <span style={{ color: "red" }}>{this.state.errors.addressString}</span>
                                                    </div>
                                                    <div class="form-group">
                                                        <label for="">Điện thoại</label>
                                                        <input name="phoneString" value={this.state.phoneString} onChange={this.changePhoneHandler} type="text" class="form-control" min="1" name="phoneString" rows="3"></input>
                                                        <span style={{ color: "red" }}>{this.state.errors.phoneString}</span>
                                                    </div>
                                                    <div class="form-group">
                                                        <label for="">Chủ đầu tư</label>
                                                        <input name="customerString" value={this.state.customerString} onChange={this.changeCustomerHandler} name="customerString" class="form-control" name="metakey" rows="3"></input>
                                                        <span style={{ color: "red" }}>{this.state.errors.customerString}</span>
                                                    </div>
                                                    <div class="form-group">
                                                        <label for="">Số Phòng</label>
                                                        <input name="roomInteger" value={this.state.roomInteger} onChange={this.changeRoomHandler} type="number" min="1" class="form-control" name="roomInteger" rows="3"></input>
                                                        <span style={{ color: "red" }}>{this.state.errors.roomInteger}</span>
                                                    </div>
                                                    <div class="form-group">
                                                        <label for="">Trạng thái</label>
                                                        <select class="form-control" name="status" onChange={this.changeStatusHandler}>
                                                            <option value={this.state.statusString} name="statusString">Xuất bản</option>
                                                            <option value={this.state.statusString2} name="statusString">Chưa xuất bản</option>
                                                        </select>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </section>
                            </div>
                        </form>
                    </div>
                </div>

                <footer class="main-footer">
                    <div class="float-right d-none d-sm-block">
                        <b>Version</b> 3.0.4
                    </div>
                    <strong>Copyright & ngo dinh hoang ; 2020-2021 <a href="http://adminlte.io">AdminLTE.io</a>.</strong> All rights
                    reserved.
                </footer>

                {/* <!-- Control Sidebar --> */}
                <aside class="control-sidebar control-sidebar-dark">
                    {/* <!-- Control sidebar content goes here --> */}
                </aside>
                {/* <!-- /.control-sidebar --> */}
            </div>

        )
    }
}
export default UpdateProduct
