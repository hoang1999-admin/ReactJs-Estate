import React, { Component } from 'react'
import HomeServiceAdmin from '../../HomeServiceAdmin/HomeServiceAdmin';
import moment from 'moment';

class CreateContact extends Component {
    constructor(props) {
        super(props)
        this.fileInput = React.createRef();
        this.state = {
            contacts: [],
            // step 2
            id: this.props.match.params.id,
            fullnameString: '',
            emailString: '',
            titleString: '',
            phoneString: '',
            detailString: '',
            imageString: '',
            createdatTimestamp: moment().format(),
            statusInteger: 1,
            statusInteger2: 2,
        }
        this.changeTitleHandler = this.changeTitleHandler.bind(this);
        this.changeFullnameHandler = this.changeFullnameHandler.bind(this);
        this.changeEmailHandler = this.changeEmailHandler.bind(this);
        this.changePhoneHandler = this.changePhoneHandler.bind(this);
        this.changeDetailHandler = this.changeDetailHandler.bind(this);
        this.changeImageHandler = this.changeImageHandler.bind(this);
        this.changeStatusHandler = this.changeStatusHandler.bind(this);

        this.savecontact = this.savecontact.bind(this);
        this.contactService = new HomeServiceAdmin();
    }
    savecontact = (e) => {
        e.preventDefault();


        let contact = {

            fullnameString: this.state.fullnameString,
            emailString: this.state.emailString,
            titleString: this.state.titleString,
            phoneString: this.state.phoneString,
            detailString: this.state.detailString,
            imageString: this.state.imageString,
            createdatTimestamp: this.state.createdatTimestamp,
            statusInteger: this.state.statusInteger ? this.state.statusInteger : this.state.statusInteger2,

        };

        console.log('contact => ' + JSON.stringify(contact));
        if (contact == '') {
            alert('Lưu thất bại!!');
        } else {
            this.contactService.createContact(contact).then(res => {
                this.props.history.push('/list-contact');
                alert('Lưu thành công');
            });
        }


    }
    changeTitleHandler = (event) => {
        this.setState({ titleString: event.target.value });
    }
    changeFullnameHandler = (event) => {
        this.setState({ fullnameString: event.target.value });
    }
    changeEmailHandler = (event) => {
        this.setState({ emailString: event.target.value });
    }

    changePhoneHandler = (event) => {
        this.setState({ phoneString: event.target.value });
    }
    changeDetailHandler = (event) => {
        this.setState({ detailString: event.target.value });
    }
    changeImageHandler = (event) => {
        this.setState({ imageString: event.target.value });
    }

    changeStatusHandler = (event) => {
        if (this.state.statusInteger) {
            this.setState({ statusInteger: event.target.value });
        } else {
            this.setState({ statusInteger2: event.target.value });
        }
    }
    cancel() {
        this.props.history.push('/list-contact');
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
                            <ul>
                                    <li class="list-group-item list-group-item-action"><a href="/list-product">Sản phẩm</a></li>
                                    <li class="list-group-item list-group-item-action"><a href="/list-category">Loại sản phẩm</a></li>
                                    <li class="list-group-item list-group-item-action"><a href="/list-email">E-mail</a></li>
                                    <li class="list-group-item list-group-item-action"><a href="/list-contact">Liên hệ</a></li>
                                    <li class="list-group-item list-group-item-action"><a href="/list-slider">slider</a></li>
                                    <li class="list-group-item list-group-item-action"><a href="/list-photo">Hình ảnh</a></li>
                                    <li class="list-group-item list-group-item-action"><a href="/list-area">Khu vực</a></li>
                                    <li class="list-group-item list-group-item-action"><a href="/list-productrelation">Sản phẩm liên quan</a></li>
                                    <li class="list-group-item list-group-item-action"><a href="/list-request">Yêu cầu</a></li>
                                    <li class="list-group-item list-group-item-action"><a href="/list-role">Vai trò thành viên</a></li>
                                    <li class="list-group-item list-group-item-action"><a href="/list-user">Thành viên</a></li>
                                </ul>
                        </div>
                    </div>
                    <div className="col-9">
                        <form name="form1" action="index.php?option=contact&cat=process" method="post">
                            <div class="content-wrapper" >
                                <section class="content">
                                    <div class="card">
                                        <div class="card-header">
                                            <h3 class="card-title">
                                                <strong class="text-danger">DANH SÁCH THÊM LOẠI SẢN PHẨM</strong>
                                            </h3>
                                            <div class="card-tools" style={{ float: `right` }} >
                                                <button type="submit" onClick={this.savecontact} class="btn btn-success btn-sm">   <i class="far fa-save"></i> Lưu[Thêm]</button>
                                                <a onClick={this.cancel.bind(this)} class="btn btn-danger btn-sm" href="javascript:void(0)" role="button">
                                                    <i class="fas fa-times"></i> Thoát</a>
                                            </div>
                                        </div>
                                        <div class="card-body">
                                            <div class="row">
                                                <div class="col-6">

                                                    <div class="form-group">
                                                        <label for="">Tên</label>
                                                        <input value={this.state.fullnameString} onChange={this.changeFullnameHandler} type="text" class="form-control" name="fullnameString" placeholder=" Tên" />
                                                    </div>
                                                    <div class="form-group">
                                                        <label for="">E-mail</label>
                                                        <input value={this.state.emailString} onChange={this.changeEmailHandler} type="text" class="form-control" name="emailString" placeholder="Email của bạn." />
                                                    </div>
                                                    <div class="form-group">
                                                        <label for="">Số điện thoại</label>
                                                        <input value={this.state.phoneString} onChange={this.changePhoneHandler} type="text" class="form-control" name="phoneString" placeholder=" 1" />
                                                    </div>

                                                </div>
                                                <div class="col-6">
                                                    <div class="form-group">
                                                        <label for="">Chi tiết</label>
                                                        <textarea value={this.state.detailString} onChange={this.changeDetailHandler} class="form-control" name="detailString" rows="3"></textarea>
                                                    </div>

                                                    <div class="form-group">
                                                        <label for="">Trạng thái</label>
                                                        <select class="form-control" name="status" onChange={this.changeStatusHandler}>
                                                            <option value={this.state.statusInteger} name="statusInteger">Xuất bản</option>
                                                            <option value={this.state.statusInteger2} name="statusInteger">Chưa xuất bản</option>
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

export default CreateContact
