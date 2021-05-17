import React, { Component } from 'react';

class User_login extends Component {
    render() {
        return (
            // <!-- ========================= SECTION CONTENT ========================= -->
            <section class="section-conten padding-y" style={{ minheight: `84vh` }}>

                {/* <!-- ============================ COMPONENT LOGIN   ================================= --> */}
                <div class="card mx-auto" style={{maxwidth: `380px;`},{margintop:`100px;`}}>
                    <div class="card-body">
                        <h4 class="card-title mb-4">Đăng nhập</h4>
                        <form>
                            <a href="#" class="btn btn-facebook btn-block mb-2"> <i class="fab fa-facebook-f"></i> &  Đăng nhập với Facebook</a>
                            <a href="#" class="btn btn-google btn-block mb-4"> <i class="fab fa-google"></i> &  Đăng nhập với Google</a>
                            <div class="form-group">
                                <input name="" class="form-control" placeholder="Username" type="text" />
                            </div>
                            {/* <!-- form-group// --> */}
                            <div class="form-group">
                                <input name="" class="form-control" placeholder="Password" type="password" />
                            </div>
                            {/* <!-- form-group// --> */}

                            <div class="form-group">
                                <a href="#" class="float-right">Quên mật khẩu?</a>
                                <label class="float-left custom-control custom-checkbox"> <input type="checkbox" class="custom-control-input" checked="" /> <div class="custom-control-label"> Nhớ mật khẩu </div> </label>
                            </div>
                            {/* <!-- form-group form-check .// --> */}
                            <div class="form-group">
                                <button type="submit" class="btn btn-primary btn-block"> Đăng nhập </button>
                            </div>
                            {/* <!-- form-group// -->     */}
                        </form>
                    </div>
                    {/* <!-- card-body.// --> */}
                </div>
                {/* <!-- card .// --> */}

                <p class="text-center mt-4">Chưa có tài khoản? <a href={`/dang-ky`}>Đăng ký</a></p>
                <br /><br />
                {/* /<!-- ============================ COMPONENT LOGIN  END.// ================================= --> */}


            </section>
            // <!-- ========================= SECTION CONTENT END// ========================= -->


        );
    }
}

export default User_login;