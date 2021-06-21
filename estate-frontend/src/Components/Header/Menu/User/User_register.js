import React, { Component } from "react";
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";
import { isEmail } from "validator";

import { connect } from "react-redux";
import { register } from "../../ActionAuth/Auth";
import Header from '../../../Header/Header';
import Footer from '../../../Footer/Footer';
import Subcribe from '../../../Subcribe/Subcribe';

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

class User_register extends Component {
    constructor(props) {
        super(props);
        this.handleRegister = this.handleRegister.bind(this);
        this.onChangeUsername = this.onChangeUsername.bind(this);
        this.onChangeEmail = this.onChangeEmail.bind(this);
        this.onChangePassword = this.onChangePassword.bind(this);
        this.onChangeRePassword = this.onChangeRePassword.bind(this);
        this.state = {
            username: "",
            email: "",
            password: "",
            respassword: "",
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
    onChangeRePassword(e) {
        this.setState({
            respassword: e.target.value,
        });
    }
    handleRegister(e) {
        e.preventDefault();

        this.setState({
            successful: false,
        });

        this.form.validateAll();

        if (this.state.password != this.state.respassword) {
            alert("Mật khẩu không trùng khớp");
            this.setState({
                successful: false,
            });
            return (
                <div className="alert alert-danger" role="alert">
                    Mật khẩu không trùng khớp
                </div>
            );
        }
        if (this.checkBtn.context._errors.length === 0) {
            this.props
                .dispatch(
                    register(this.state.username, this.state.email, this.state.password)
                )
                .then(() => {
                    this.setState({
                        successful: true,

                    });
                    alert("Thành Công");
                    window.location.reload();
                })
                .catch(() => {
                    this.setState({
                        successful: false,
                    });
                });
        }
    }

    render() {
        const { message } = this.props;

        return (
            <div>
                <Header />
                <section class="section-content">
                    <div class="container border-bottom mt-4 ">
                        <div class="row justify-content-md-center ">
                            <div class="col-lg-5 col-md-6  bg-white  mt-3 mb-5">
                                <h4 class="card-title mb-4"> Đăng ký </h4>
                                <img
                                    src="//ssl.gstatic.com/accounts/ui/avatar_2x.png"
                                    alt="profile-img"
                                    className="profile-img-card" style={{ marginLeft: `180px` }}
                                />

                                <Form
                                    onSubmit={this.handleRegister}
                                    ref={(c) => {
                                        this.form = c;
                                    }}
                                >
                                    {!this.state.successful && (
                                        <div>
                                            <div className="form-group">
                                                <label htmlFor="username">Tên</label>
                                                <Input
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
                                                <Input
                                                    type="text"
                                                    className="form-control"
                                                    name="email"
                                                    value={this.state.email}
                                                    onChange={this.onChangeEmail}
                                                    validations={[required, email]}
                                                    placeholder=" abc@gmail.com "
                                                />
                                            </div>

                                            <div className="form-group">
                                                <label htmlFor="password">Mật khẩu</label>
                                                <Input
                                                    type="password"
                                                    className="form-control"
                                                    name="password"
                                                    value={this.state.password}
                                                    onChange={this.onChangePassword}
                                                    validations={[required, vpassword]}
                                                    placeholder=" ******** "
                                                />
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="password">Nhập lại mật khẩu</label>
                                                <Input
                                                    type="password"
                                                    className="form-control"
                                                    name="password"
                                                    value={this.state.respassword}
                                                    onChange={this.onChangeRePassword}
                                                    validations={[required, vpassword]}
                                                    placeholder=" ******** "
                                                />
                                            </div>
                                            <div className="form-group">
                                                <button className="btn btn-primary btn-block">Đăng ký</button>
                                            </div>
                                        </div>
                                    )}

                                    {message && (
                                        <div className="form-group">
                                            <div className={this.state.successful ? "alert alert-success" : "alert alert-danger"} role="alert">
                                                {message}
                                            </div>
                                        </div>
                                    )}
                                    <CheckButton
                                        style={{ display: "none" }}
                                        ref={(c) => {
                                            this.checkBtn = c;
                                        }}
                                    />
                                </Form>
                                <hr />
                                <p class="text-center">Bạn có tài khoản? <a href={`/dang-nhap`}>Đăng nhập</a></p>
                                <br />
                            </div>
                        </div>
                    </div>
                </section>
                <Subcribe />
                <Footer />
            </div>
        );
    }
}

function mapStateToProps(state) {
    const { message } = state.message;
    return {
        message,
    };
}

export default connect(mapStateToProps)(User_register);
