import React, { Component } from 'react';

class RequestContainer extends Component {
    render() {
        return (

            // {/* <!-- =============== SECTION REQUEST =============== --> */}

            <section class="padding-bottom">

                <header class="section-heading heading-line">
                    <h4 class="title-section text-uppercase">YÊU CẦU BÁO GIÁ</h4>
                </header>

                <div class="row">
                    <div class="col-md-8">
                        <div class="card-banner banner-quote overlay-gradient" style={{"backgroundimage":"url('/resources/images/items/1619797029-gah22.jpg')"}}>
                            <div class="card-img-overlay white">
                                <h3 class="card-title">Một cách dễ dàng để gửi yêu cầu đến nhà cung cấp</h3>
                                <p class="card-text" style={{maxwidth: `400px`}}>“Cảm giác thoải mái nhất là khi biết rằng bạn đang đứng trên đất của chính bạn. Đất đai là điều duy nhất không thể bay đi. “- Anthony Trollope, tiểu thuyết gia.</p>
                                <a href="#" class="btn btn-primary rounded-pill">Tìm hiểu thêm</a>
                            </div>
                        </div>
                    </div>
                    {/* <!-- col // --> */}
                    <div class="col-md-4">

                        <div class="card card-body">
                            <h4 class="title py-3">Một yêu cầu, nhiều trích dẫn</h4>
                            <form>
                                <div class="form-group">
                                    <input class="form-control" name="" placeholder="Bạn muốn tìm kiếm gì?" type="text" />
                                </div>
                                <div class="form-group">
                                    <div class="input-group">
                                        <input class="form-control" placeholder="Định lượng" name="" type="text" />

                                        <select class="custom-select form-control">
                                            <option>Lô đất</option>
                                            <option>Mảnh đất</option>
                                            <option>Mẫu đất</option>
                                            <option>Hes đất</option>
                                        </select>
                                    </div>
                                </div>
                                <div class="form-group text-muted">
                                    <p>Chọn loại mẫu:</p>
                                    <label class="form-check form-check-inline">
                                        <input class="form-check-input" type="checkbox" value="option1" />
                                        <span class="form-check-label">Yêu cầu giá</span>
                                    </label>
                                    <label class="form-check form-check-inline">
                                        <input class="form-check-input" type="checkbox" value="option2" />
                                        <span class="form-check-label">Yêu cầu một mẫu</span>
                                    </label>
                                </div>
                                <div class="form-group">
                                    <button class="btn btn-warning">Yêu cầu báo giá</button>
                                </div>
                            </form>
                        </div>

                    </div>
                    {/* <!-- col // --> */}
                </div>
                {/* <!-- row // --> */}
            </section>

            // {/* <!-- =============== SECTION REQUEST .//END =============== --> */}


        );
    }
}

export default RequestContainer;