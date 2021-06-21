import React, { Component } from "react";
import { isEmail } from "validator";
import { connect } from "react-redux";
import { register } from "../../Components/Header/ActionAuth/Auth";

const required = (value) => {
    if (!value) {
        return (
            <div className="alert alert-danger" role="alert">
                Trường này là bắt buộc!
            </div>
        );
    }
};

const email = (value) => {
    if (!isEmail(value)) {
        return (
            <div className="alert alert-danger" role="alert">
                Đây không phải là một email hợp lệ.
            </div>
        );
    }
};

const vusername = (value) => {
    if (value.length < 3 || value.length > 20) {
        return (
            <div className="alert alert-danger" role="alert">
                Tên người dùng phải có từ 3 đến 20 ký tự.
            </div>
        );
    }
};

const vpassword = (value) => {
    if (value.length < 6 || value.length > 40) {
        return (
            <div className="alert alert-danger" role="alert">
                Mật khẩu phải có từ 6 đến 40 ký tự.
            </div>
        );
    }
};

class CreateUser extends Component {
    constructor(props) {
        super(props);
        this.handleRegister = this.handleRegister.bind(this);
        this.onChangeUsername = this.onChangeUsername.bind(this);
        this.onChangeEmail = this.onChangeEmail.bind(this);
        this.onChangePassword = this.onChangePassword.bind(this);
   
        this.state = {
            username: "",
            email: "",
            password: "",
        
            successful: false,
        };
    }

    onChangeUsername(e) {
        this.setState({
            username: e.target.value,
        });
    }

    onChangeEmail(e) {
        this.setState({
            email: e.target.value,
        });
    }

    onChangePassword(e) {
        this.setState({
            password: e.target.value,
        });
    }
   
    handleRegister(e) {
        e.preventDefault();

        this.setState({
            successful: false,
        });
        const { history } = this.props;
            this.props
                .dispatch(
                    register(this.state.username, this.state.email, this.state.password)
                )
                .then(() => {
                    this.setState({
                        successful: true,

                    });
                    alert("Thành Công");
                    history.push("/list-user");
                })
                .catch(() => {
                    this.setState({
                        successful: false,
                    });
                });
       
    }
    cancel() {
        this.props.history.push('/list-user');
    }

    render() {
      
        return (
            <div class="wrapper">
                {/* <!-- Navbar --> */}
                <nav class="main-header navbar navbar-expand navbar-white navbar-light">
                    {/* <!-- Left navbar links --> */}
                    <ul class="navbar-nav">
                        <li class="nav-item">
                            <a class="nav-link" data-widget="pushmenu" href="#" user="button"><i class="fas fa-bars"></i></a>
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
                            <a class="nav-link" data-widget="control-sidebar" data-slide="true" href="#" user="button">
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
                        <form>
                            <div class="content-wrapper" >
                                <section class="content">
                                    <div class="card">
                                        <div class="card-header">
                                            <h3 class="card-title">
                                                <strong class="text-danger">DANH SÁCH THÊM THÀNH VIÊN</strong>
                                            </h3>
                                            <div class="card-tools" style={{ float: `right` }} >
                                                <button type="submit" onClick={this.handleRegister}
                                                  
                                                    class="btn btn-success btn-sm">   <i class="far fa-save"></i> Lưu[Thêm]</button>
                                                <a onClick={this.cancel.bind(this)} class="btn btn-danger btn-sm" href="javascript:void(0)" user="button">
                                                    <i class="fas fa-times"></i> Thoát</a>
                                            </div>
                                        </div>
                                        <div class="card-body">
                                            {!this.state.successful && (
                                                <div class="row">

                                                    <div class="col-6">

                                                        <div className="form-group">
                                                            <label htmlFor="username">Tên</label>
                                                            <input
                                                                type="text"
                                                                className="form-control"
                                                                name="username"
                                                                value={this.state.username}
                                                                onChange={this.onChangeUsername}
                                                                validations={[required, vusername]}
                                                                placeholder=" Tên của bạn. "
                                                            />
                                                        </div>

                                                        <div className="form-group">
                                                            <label htmlFor="email">E-mail</label>
                                                            <input
                                                                type="text"
                                                                className="form-control"
                                                                name="email"
                                                                value={this.state.email}
                                                                onChange={this.onChangeEmail}
                                                                validations={[required, email]}
                                                                placeholder=" abc@gmail.com "
                                                            />
                                                        </div>

                                                    </div>
                                                    <div class="col-6">
                                                        <div class="form-group">
                                                            <label htmlFor="password">Mật khẩu</label>
                                                            <input
                                                                type="password"
                                                                className="form-control"
                                                                name="password"
                                                                value={this.state.password}
                                                                onChange={this.onChangePassword}
                                                                validations={[required, vpassword]}
                                                                placeholder=" ******** "
                                                            />
                                                        </div>

                                                    </div>
                                                </div>
                                            )}
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
function mapStateToProps(state) {
    const { message } = state.message;
    return {
        message,
    };
}

export default connect(mapStateToProps)(CreateUser);

