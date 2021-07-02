import React, { Component } from 'react'
import HomeServiceAdmin from '../../HomeServiceAdmin/HomeServiceAdmin';
import moment from 'moment';
import Home from '../Home/Home';
class CreateBlog extends Component {
    constructor(props) {
        super(props)
        this.fileInput = React.createRef();
        this.state = {
            Blogs: [],
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
            positionString: '',
            createdatTimestamp: moment().format(),
            imageString: '',
            areaString: '',
            addressString: '',
            phoneString: '',
            customerString: '',
            statusString: 1,
            statusString2: 2,
        }
        this.changeBlog_idHandler = this.changeBlog_idHandler.bind(this);
        this.changeCategory_idHandler = this.changeCategory_idHandler.bind(this);
        this.changeTitleHandler = this.changeTitleHandler.bind(this);
        this.changeSlugHandler = this.changeSlugHandler.bind(this);
        this.changeDescriptionHandler = this.changeDescriptionHandler.bind(this);
        this.changeMetakeyHandler = this.changeMetakeyHandler.bind(this);
        this.changeMetadescHandler = this.changeMetadescHandler.bind(this);
        this.changePriceHandler = this.changePriceHandler.bind(this);
        this.changePositionHandler = this.changePositionHandler.bind(this);
        this.changeImageHandler = this.changeImageHandler.bind(this);
        this.changeAreaHandler = this.changeAreaHandler.bind(this);
        this.changeAddressHandler = this.changeAddressHandler.bind(this);
        this.changePhoneHandler = this.changePhoneHandler.bind(this);
        this.changeCustomerHandler = this.changeCustomerHandler.bind(this);
        this.changeStatusHandler = this.changeStatusHandler.bind(this);

        this.saveBlog = this.saveBlog.bind(this);
        this.BlogService = new HomeServiceAdmin();
    }
    componentDidMount() {
        this.BlogService.getBlogs().then(response => {
            this.setState({ Blogs: response.data });
        });
    }
    saveBlog = (e) => {
        e.preventDefault();
        if (this.validateForm()) {

            let Blog = {
                productidLong: this.state.productidLong,
                categoryidLong: this.state.categoryidLong,
                titleString: this.state.titleString,
                descriptionString: this.state.descriptionString,
                slugString: this.state.slugString,
                metakeyString: this.state.metakeyString,
                metadescString: this.state.metadescString,
                priceDouble: this.state.priceDouble,
           
                positionString: this.state.positionString,
              
                createdatTimestamp: this.state.createdatTimestamp,
                imageString: this.fileInput.current.files[0].name,
                areaString: this.state.areaString,
                addressString: this.state.addressString,
                phoneString: this.state.phoneString,
                customerString: this.state.customerString,
               
                statusString: this.state.statusString ? this.state.statusString : this.state.statusString2,



            };
            console.log('Blog => ' + JSON.stringify(Blog));

            // step 5
            if (Blog == '') {
                alert('Lưu thất bại');
            } else {
                this.BlogService.createBlog(Blog).then(res => {
                    this.props.history.push('/list-blog');
                    alert('Lưu thành công ');
                });
            }
        } else {
            alert("Lỗi!!")
        }

    }
    changeBlog_idHandler = (event) => {
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

    changePositionHandler = (event) => {
        this.setState({ positionString: event.target.value });
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
    changeStatusHandler = (event) => {
        if (this.state.statusString) {
            this.setState({ statusString: event.target.value });
        } else {
            this.setState({ statusString2: event.target.value });
        }
    }
    cancel() {
        this.props.history.push('/list-blog');
    }
    validateForm() {

        let fieldsproductidLong = this.state.productidLong;
        let fieldscategoryidLong = this.state.categoryidLong;
        let fieldstitleString = this.state.titleString;
        let fieldsslugString = this.state.slugString;
        let fieldspriceDouble = this.state.priceDouble;

        let fieldspositionString = this.state.positionString;

        let fieldsfileInput = this.state.imageString;
        let fieldsareaString = this.state.areaString;
        let fieldsaddressString = this.state.addressString;
        let fieldsphoneString = this.state.phoneString;
        let fieldscustomerString = this.state.customerString;

        let errors = {};
        let formIsValid = true;

        if (!fieldsproductidLong) {
            formIsValid = false;
            errors['productidLong'] = "*Vui lòng nhập mã sản phẩm.";
        }

        if (!fieldscategoryidLong) {
            formIsValid = false;
            errors["categoryidLong"] = "*Vui lòng nhập mã loại sản phẩm.";
        } else if (typeof fieldscategoryidLong !== "undefined" && !fieldscategoryidLong === false) {
            if (!fieldscategoryidLong.match(/[0-9]/)) {
                formIsValid = false;
                errors['categoryidLong'] = "*Vui lòng chỉ nhập bảng chữ số.";
            }
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
        } else if (typeof fieldspriceDouble !== "undefined" && !fieldspriceDouble === false) {
            if (!fieldspriceDouble.match(/[0-9]/)) {
                formIsValid = false;
                errors['priceDouble'] = "*Vui lòng chỉ nhập bảng chữ số.";
            }
        }

        if (!fieldspositionString) {
            formIsValid = false;
            errors["positionString"] = "*Vui lòng nhập vị trí.";
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
        } else if (typeof fieldsphoneString !== "undefined") {
            if (!fieldsphoneString.match(/^[0-9]{10}$/)) {
                formIsValid = false;
                errors["phoneString"] = "*Vui lòng nhập số điện thoại hợp lệ.";
            }

        }
        if (!fieldscustomerString) {
            formIsValid = false;
            errors["customerString"] = "*Vui lòng nhập chủ đầu tư.";
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
                            <Home />
                        </div>
                    </div>
                    <div className="col-9">
                        <form name="form1" method="post">
                            <div class="content-wrapper" >
                                <section class="content">
                                    <div class="card">
                                        <div class="card-header">
                                            <h3 class="card-title">
                                                <strong class="text-danger">DANH SÁCH THÊM BLOG</strong>
                                            </h3>
                                            <div class="card-tools" style={{ float: `right` }} >
                                                <button type="submit" onClick={this.saveBlog} class="btn btn-success btn-sm">   <i class="far fa-save"></i> Lưu[Thêm]</button>
                                                <a onClick={this.cancel.bind(this)} class="btn btn-danger btn-sm" href="javascript:void(0)" role="button">
                                                    <i class="fas fa-times"></i> Thoát</a>
                                            </div>
                                        </div>
                                        < div class="card-body">
                                            <div class="row">
                                                <div class="col-6">
                                                    <div class="form-group">
                                                        <label for="">Mã blog</label>
                                                        <input name="BlogidString" value={this.state.productidLong} onChange={this.changeBlog_idHandler} type="text" class="form-control" name="productidLong" placeholder="vd: BDHDSF23" />
                                                        <span style={{ color: "red" }}>{this.state.errors.productidLong}</span>
                                                    </div>
                                                    <div class="form-group">
                                                        <label for="">Loại blog</label>
                                                        <input name="categoryidLong" value={this.state.categoryidLong} onChange={this.changeCategory_idHandler} type="number" min="1" class="form-control" name="categoryidLong" placeholder="vd: 1" />
                                                        <span style={{ color: "red" }}>{this.state.errors.categoryidLong}</span>
                                                    </div>
                                                    <div class="form-group">
                                                        <label for="">Tên blog</label>
                                                        <input name="titleString" value={this.state.titleString} onChange={this.changeTitleHandler} type="text" class="form-control" name="titleString" placeholder=" Tên sản phẩm" />
                                                        <span style={{ color: "red" }}>{this.state.errors.titleString}</span>
                                                    </div>
                                                    <div class="form-group">
                                                        <label for="">Tên gạch nối</label>
                                                        <input name="slugString" value={this.state.slugString} onChange={this.changeSlugHandler} type="text" class="form-control" name="slugString" placeholder=" ten-san-pham" />
                                                        <span style={{ color: "red" }}>{this.state.errors.slugString}</span>
                                                    </div>
                                                    <div class="form-group">
                                                        <label for="">Mô tả blog</label>
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

                                                </div>
                                                <div class="col-6">
                                                    <div class="form-group">
                                                        <label for="">Giá</label>
                                                        <input name="priceDouble" value={this.state.priceDouble} onChange={this.changePriceHandler} type="text" class="form-control" name="priceDouble" />
                                                        <span style={{ color: "red" }}>{this.state.errors.priceDouble}</span>
                                                    </div>

                                                    <div class="form-group">
                                                        <label for="">Vị trí</label>
                                                        <input name="positionString" value={this.state.positionString} onChange={this.changePositionHandler} type="text" class="form-control" name="positionString" rows="3"></input>
                                                        <span style={{ color: "red" }}>{this.state.errors.positionString}</span>
                                                    </div>

                                                    <div class="form-group">
                                                        <label for="img">Hình ảnh</label>
                                                        <input name="fileInput" id="img" ref={this.fileInput} onChange={this.changeImageHandler} type="file" accept="image/*" class="form-control" rows="3"></input>
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
                </div >

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
            </div >

        )
    }
}

export default CreateBlog
