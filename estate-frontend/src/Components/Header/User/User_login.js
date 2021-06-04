import React, { Component } from "react";
import { Redirect } from 'react-router-dom';

import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";

import { connect } from "react-redux";
import { login } from "../ActionAuth/Auth";

const required = (value) => {
  if (!value) {
    return (
      <div className="alert alert-danger" role="alert">
        Trường này là bắt buộc!
      </div>
    );
  }
};

class User_login extends Component {
  constructor(props) {
    super(props);
    this.handleLogin = this.handleLogin.bind(this);
    this.onChangeUsername = this.onChangeUsername.bind(this);
    this.onChangePassword = this.onChangePassword.bind(this);

    this.state = {
      username: "",
      password: "",
      loading: false,
    };
  }

  onChangeUsername(e) {
    this.setState({
      username: e.target.value,
    });
  }

  onChangePassword(e) {
    this.setState({
      password: e.target.value,
    });
  }

  handleLogin(e) {
    e.preventDefault();

    this.setState({
      loading: true,
    });

    this.form.validateAll();

    const { dispatch, history } = this.props;

    if (this.checkBtn.context._errors.length === 0) {
      dispatch(login(this.state.username, this.state.password))
        .then(() => {
          history.push("/thong-tin-ca-nhan");
          window.location.reload();
        })
        .catch(() => {
          this.setState({
            loading: false
          });
        });
    } else {
      this.setState({
        loading: false,
      });
    }
  }

  render() {
    const { isLoggedIn, message } = this.props;

    if (isLoggedIn) {
      return <Redirect to="/thong-tin-ca-nhan" />;
    }

    return (
      <section class="section-content">
        <div class="container border-bottom mt-4 ">
          <div class="row justify-content-md-center ">
            <div class="col-lg-5 col-md-6  bg-white mt-3 mb-5">
              <h4 class="card-title mb-4">Đăng nhập</h4>

              <a href="#" class=" btn btn-facebook btn-block mb-2"> <i class="fab fa-facebook-f"></i>  Đăng nhập với Facebook</a>
              <a href="#" class=" btn btn-google btn-block mb-4"> <i class="fab fa-google"></i>   Đăng nhập với Google</a>
              <Form
                onSubmit={this.handleLogin}
                ref={(c) => {
                  this.form = c;
                }}
              >
                <div className="form-group">
                  <label htmlFor="username">Tên</label>
                  <Input
                    type="text"
                    className="form-control"
                    name="username"
                    value={this.state.username}
                    onChange={this.onChangeUsername}
                    validations={[required]}
                    placeholder=" Tên của bạn. "
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="password">Mật Khẩu</label>
                  <Input
                    type="password"
                    className="form-control"
                    name="password"
                    value={this.state.password}
                    onChange={this.onChangePassword}
                    validations={[required]}
                    placeholder="******"
                  />
                </div>
                <div class="form-group">
                  <input type="checkbox" id="brand1" value="" />
                  <label for="brand1" className="ml-3"> Nhớ mật khẩu</label>
                </div>

                <div className="form-group">
                  <button
                    className="btn btn-primary btn-block"
                    disabled={this.state.loading}
                  >
                    {this.state.loading && (
                      <span className="spinner-border spinner-border-sm"></span>
                    )}
                    <span>Đăng Nhập</span>
                  </button>
                </div>

                {message && (
                  <div className="form-group">
                    <div className="alert alert-danger" role="alert">
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
              <p class="text-center"><a class="float-right" href="#"> Quên mật khẩu </a> Bạn chưa có tài khoản? <a href={`/dang-ky`}> Đăng ký</a></p>
             <br/>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

function mapStateToProps(state) {
  const { isLoggedIn } = state.auth;
  const { message } = state.message;
  return {
    isLoggedIn,
    message
  };
}

export default connect(mapStateToProps)(User_login);
