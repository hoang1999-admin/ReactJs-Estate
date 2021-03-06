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
                alert('L??u th???t b???i');
            } else {
                this.BlogService.createBlog(Blog).then(res => {
                    this.props.history.push('/list-blog');
                    alert('L??u th??nh c??ng ');
                });
            }
        } else {
            alert("L???i!!")
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
            errors['productidLong'] = "*Vui l??ng nh???p m?? s???n ph???m.";
        }

        if (!fieldscategoryidLong) {
            formIsValid = false;
            errors["categoryidLong"] = "*Vui l??ng nh???p m?? lo???i s???n ph???m.";
        } else if (typeof fieldscategoryidLong !== "undefined" && !fieldscategoryidLong === false) {
            if (!fieldscategoryidLong.match(/[0-9]/)) {
                formIsValid = false;
                errors['categoryidLong'] = "*Vui l??ng ch??? nh???p b???ng ch??? s???.";
            }
        }

        if (!fieldstitleString) {
            formIsValid = false;
            errors["titleString"] = "*Vui l??ng nh???p t??n.";
        }

        if (!fieldsslugString) {
            formIsValid = false;
            errors["slugString"] = "*Vui l??ng nh???p t??n g???ch n???i.";
        }
        if (!fieldspriceDouble) {
            formIsValid = false;
            errors["priceDouble"] = "*Vui l??ng nh???p gi?? .";
        } else if (typeof fieldspriceDouble !== "undefined" && !fieldspriceDouble === false) {
            if (!fieldspriceDouble.match(/[0-9]/)) {
                formIsValid = false;
                errors['priceDouble'] = "*Vui l??ng ch??? nh???p b???ng ch??? s???.";
            }
        }

        if (!fieldspositionString) {
            formIsValid = false;
            errors["positionString"] = "*Vui l??ng nh???p v??? tr??.";
        }

        if (!fieldsfileInput) {
            formIsValid = false;
            errors["fileInput"] = "*Vui l??ng ch???n h??nh ???nh.";
        }
        if (!fieldsareaString) {
            formIsValid = false;
            errors["areaString"] = "*Vui l??ng nh???p khu v???c .";
        }
        if (!fieldsaddressString) {
            formIsValid = false;
            errors["addressString"] = "*Vui l??ng nh???p ?????a ch???.";
        }
        if (!fieldsphoneString) {
            formIsValid = false;
            errors["phoneString"] = "*Vui l??ng nh???p s??? ??i???n tho???i.";
        } else if (typeof fieldsphoneString !== "undefined") {
            if (!fieldsphoneString.match(/^[0-9]{10}$/)) {
                formIsValid = false;
                errors["phoneString"] = "*Vui l??ng nh???p s??? ??i???n tho???i h???p l???.";
            }

        }
        if (!fieldscustomerString) {
            formIsValid = false;
            errors["customerString"] = "*Vui l??ng nh???p ch??? ?????u t??.";
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
                            <a href="/Admin" class="nav-link">Trang ch???</a>
                        </li>
                        <li class="nav-item d-none d-sm-inline-block">
                            <a href="/lien-he" class="nav-link">Li??n h???</a>
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
                                                <strong class="text-danger">DANH S??CH TH??M BLOG</strong>
                                            </h3>
                                            <div class="card-tools" style={{ float: `right` }} >
                                                <button type="submit" onClick={this.saveBlog} class="btn btn-success btn-sm">   <i class="far fa-save"></i> L??u[Th??m]</button>
                                                <a onClick={this.cancel.bind(this)} class="btn btn-danger btn-sm" href="javascript:void(0)" role="button">
                                                    <i class="fas fa-times"></i> Tho??t</a>
                                            </div>
                                        </div>
                                        < div class="card-body">
                                            <div class="row">
                                                <div class="col-6">
                                                    <div class="form-group">
                                                        <label for="">M?? blog</label>
                                                        <input name="BlogidString" value={this.state.productidLong} onChange={this.changeBlog_idHandler} type="text" class="form-control" name="productidLong" placeholder="vd: BDHDSF23" />
                                                        <span style={{ color: "red" }}>{this.state.errors.productidLong}</span>
                                                    </div>
                                                    <div class="form-group">
                                                        <label for="">Lo???i blog</label>
                                                        <input name="categoryidLong" value={this.state.categoryidLong} onChange={this.changeCategory_idHandler} type="number" min="1" class="form-control" name="categoryidLong" placeholder="vd: 1" />
                                                        <span style={{ color: "red" }}>{this.state.errors.categoryidLong}</span>
                                                    </div>
                                                    <div class="form-group">
                                                        <label for="">T??n blog</label>
                                                        <input name="titleString" value={this.state.titleString} onChange={this.changeTitleHandler} type="text" class="form-control" name="titleString" placeholder=" T??n s???n ph???m" />
                                                        <span style={{ color: "red" }}>{this.state.errors.titleString}</span>
                                                    </div>
                                                    <div class="form-group">
                                                        <label for="">T??n g???ch n???i</label>
                                                        <input name="slugString" value={this.state.slugString} onChange={this.changeSlugHandler} type="text" class="form-control" name="slugString" placeholder=" ten-san-pham" />
                                                        <span style={{ color: "red" }}>{this.state.errors.slugString}</span>
                                                    </div>
                                                    <div class="form-group">
                                                        <label for="">M?? t??? blog</label>
                                                        <textarea value={this.state.descriptionString} onChange={this.changeDescriptionHandler} class="form-control" name="descriptionString" rows="3"></textarea>
                                                    </div>
                                                    <div class="form-group">
                                                        <label for="">T??? kh??a</label>
                                                        <textarea value={this.state.metakeyString} onChange={this.changeMetakeyHandler} class="form-control" name="metakeyString" rows="3"></textarea>
                                                    </div>
                                                    <div class="form-group">
                                                        <label for="">T??? kh??a m?? t???</label>
                                                        <textarea value={this.state.metadescString} onChange={this.changeMetadescHandler} class="form-control" name="metadescString" rows="3"></textarea>
                                                    </div>

                                                </div>
                                                <div class="col-6">
                                                    <div class="form-group">
                                                        <label for="">Gi??</label>
                                                        <input name="priceDouble" value={this.state.priceDouble} onChange={this.changePriceHandler} type="text" class="form-control" name="priceDouble" />
                                                        <span style={{ color: "red" }}>{this.state.errors.priceDouble}</span>
                                                    </div>

                                                    <div class="form-group">
                                                        <label for="">V??? tr??</label>
                                                        <input name="positionString" value={this.state.positionString} onChange={this.changePositionHandler} type="text" class="form-control" name="positionString" rows="3"></input>
                                                        <span style={{ color: "red" }}>{this.state.errors.positionString}</span>
                                                    </div>

                                                    <div class="form-group">
                                                        <label for="img">H??nh ???nh</label>
                                                        <input name="fileInput" id="img" ref={this.fileInput} onChange={this.changeImageHandler} type="file" accept="image/*" class="form-control" rows="3"></input>
                                                        <span style={{ color: "red" }}>{this.state.errors.fileInput}</span>
                                                    </div>
                                                    <div class="form-group">
                                                        <label for="">Khu v???c</label>
                                                        <input name="areaString" value={this.state.areaString} onChange={this.changeAreaHandler} type="text" class="form-control" name="areaString" rows="3"></input>
                                                        <span style={{ color: "red" }}>{this.state.errors.areaString}</span>
                                                    </div>
                                                    <div class="form-group">
                                                        <label for="">?????a ch???</label>
                                                        <input name="addressString" value={this.state.addressString} onChange={this.changeAddressHandler} type="text" class="form-control" name="addressString" rows="3"></input>
                                                        <span style={{ color: "red" }}>{this.state.errors.addressString}</span>
                                                    </div>
                                                    <div class="form-group">
                                                        <label for="">??i???n tho???i</label>
                                                        <input name="phoneString" value={this.state.phoneString} onChange={this.changePhoneHandler} type="text" class="form-control" min="1" name="phoneString" rows="3"></input>
                                                        <span style={{ color: "red" }}>{this.state.errors.phoneString}</span>
                                                    </div>
                                                    <div class="form-group">
                                                        <label for="">Ch??? ?????u t??</label>
                                                        <input name="customerString" value={this.state.customerString} onChange={this.changeCustomerHandler} name="customerString" class="form-control" name="metakey" rows="3"></input>
                                                        <span style={{ color: "red" }}>{this.state.errors.customerString}</span>
                                                    </div>

                                                    <div class="form-group">
                                                        <label for="">Tr???ng th??i</label>
                                                        <select class="form-control" name="status" onChange={this.changeStatusHandler}>
                                                            <option value={this.state.statusString} name="statusString">Xu???t b???n</option>
                                                            <option value={this.state.statusString2} name="statusString">Ch??a xu???t b???n</option>
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
