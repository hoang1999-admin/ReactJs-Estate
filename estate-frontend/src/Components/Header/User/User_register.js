import React, { Component } from 'react';

class User_register extends Component {
    render() {
        return (

            // <!-- ========================= SECTION CONTENT ========================= -->
            <section class="section-content padding-y">

                {/* <!-- ============================ COMPONENT REGISTER   ================================= --> */}
                <div class="card mx-auto" style={{maxwidth:`520px; `},{margintop:`40px;`}}>
                    <article class="card-body">
                        <header class="mb-4"><h4 class="card-title">Đăng ký</h4></header>
                        <form>
                            <div class="form-row">
                                <div class="col form-group">
                                    <label>Tên</label>
                                    <input type="text" class="form-control" placeholder="" />
                                </div>
                                {/* <!-- form-group end.// --> */}
                                <div class="col form-group">
                                    <label>Họ</label>
                                    <input type="text" class="form-control" placeholder="" />
                                </div>
                                {/* <!-- form-group end.// --> */}
                            </div>
                            {/* <!-- form-row end.// --> */}
                            <div class="form-group">
                                <label>E-mail</label>
                                <input type="email" class="form-control" placeholder="" />
                                <small class="form-text text-muted">Chúng tôi sẽ không bao giờ chia sẻ email của bạn với bất kỳ ai khác.</small>
                            </div>
                            {/* <!-- form-group end.// --> */}
                            <div class="form-group">
                                <label class="custom-control custom-radio custom-control-inline">
                                    <input class="custom-control-input" checked="" type="radio" name="gender" value="option1" />
                                    <span class="custom-control-label"> Nam </span>
                                </label>
                                <label class="custom-control custom-radio custom-control-inline">
                                    <input class="custom-control-input" type="radio" name="gender" value="option2" />
                                    <span class="custom-control-label"> Nữ </span>
                                </label>
                            </div>
                            {/* <!-- form-group end.// --> */}
                            <div class="form-row">
                                <div class="form-group col-md-6">
                                    <label>Thành phố</label>
                                    <input type="text" class="form-control" />
                                </div>
                                {/* <!-- form-group end.// --> */}
                                <div class="form-group col-md-6">
                                    <label>Quốc gia</label>
                                    <select id="inputState" class="form-control">
                                        <option> Chọn...</option>
                                        <option>Nga</option>
                                        <option>Hoa Kì</option>
                                       
                                        <option>Ấn Độ</option>
                                        <option>Trung Quốc</option>
                                    </select>
                                </div>
                                {/* <!-- form-group end.// --> */}
                            </div>
                            {/* <!-- form-row.// --> */}
                            <div class="form-row">
                                <div class="form-group col-md-6">
                                    <label>Tạo mật khẩu</label>
                                    <input class="form-control" type="password" />
                                </div>
                                {/* <!-- form-group end.// -->  */}
                                <div class="form-group col-md-6">
                                    <label>Lặp lại mật khẩu</label>
                                    <input class="form-control" type="password" />
                                </div>
                                {/* <!-- form-group end.// -->   */}
                            </div>
                            <div class="form-group">
                                <button type="submit" class="btn btn-primary btn-block"> Đăng ký  </button>
                            </div>
                            {/* <!-- form-group// -->       */}
                            <div class="form-group">
                                <label class="custom-control custom-checkbox"> <input type="checkbox" class="custom-control-input" checked="" /> <div class="custom-control-label">Tôi đồng ý với <a href="#">các điều khoản và điều kiện</a>  </div> </label>
                            </div>
                            {/* <!-- form-group end.// -->            */}
                        </form>
                    </article>
                    {/* <!-- card-body.// --> */}
                </div>
                {/* <!-- card .// --> */}
                <p class="text-center mt-4">Có tài khoản? <a href={`/dang-nhap`}>Đăng nhập</a></p>
                <br /><br />
                {/* <!-- ============================ COMPONENT REGISTER  END.// ================================= --> */}


            </section>
            // {/* <!-- ========================= SECTION CONTENT END// ========================= --> */}

        );
    }
}

export default User_register;