import React, { Component } from 'react';
import HomeServiceAdmin from '../../HomeServiceAdmin/HomeServiceAdmin';
import Home from '../Home/Home';

class TrashSlider extends Component {
    constructor(props) {
        super(props)
        this.state = {
            sliders: []
        };

        this.retrashslider = this.retrashslider.bind(this);
        this.deleteslider = this.deleteslider.bind(this);

        this.sliderService = new HomeServiceAdmin();
    }
    deleteslider(id) {
        this.sliderService.deleteSlider(id).then(res => {
            this.setState({ sliders: this.state.sliders.filter(slider => slider.idLong !== id) });

        });
        alert('Xóa thành công');
    }
    retrashslider(id) {
        this.props.history.push(`/update-slider/index=${id}`);
    }

    componentDidMount() {
        this.sliderService.getSliders().then(response => {
            this.setState({ sliders: response.data });
        });
    }
    cancel() {
        this.props.history.push('/list-slider');
    }
    rendersliders = () => {
        return this.state.sliders.map((slider, key) => {
            return (
                <tr role="row" class="odd" key={key}>
                    <td class="sorting_1">
                        <img src={`/resources/images/items/${slider.imageString}`} class="img-fluid" alt="hinh" />
                    </td>
                    <td>
                        <a href={`/index=${slider.idLong}`}>{slider.titleString}</a>
                    </td>

                    <td class="text-center">
                        <a class="btn btn-info btn-sm" onClick={() => this.retrashslider(slider.idLong)} href="javascript:void(0)" role="button">
                            <i class="fas fa-edit"></i>
                        </a>
                        <a class="btn btn-danger btn-sm" onClick={() => this.deleteslider(slider.idLong)} href="javascript:void(0)" role="button">
                            <i class="fas fa-trash-alt"></i>
                        </a>
                    </td>
                    <td class="text-center">{slider.idLong}</td>
                </tr>
            );
        });
    };
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
                        <div class="content-wrapper my-2">
                            <section class="content">
                                <div class="card">
                                    <div class="card-header">
                                        <h3 class="card-title">
                                            <strong class="text-danger">THÙNG RÁC CỦA SLIDER</strong>
                                        </h3>
                                        <div class="card-tools" style={{ float: `right` }}>
                                            <a class="btn btn-sm btn-danger" onClick={this.cancel.bind(this)} href="javascript:void(0)"><i class="fas fa-times"></i> Thoát</a>
                                        </div>
                                    </div>
                                    <div class="card-body">

                                        <table class="table table-bordered dataTable no-footer" id="myTable">
                                            <thead>
                                                <tr role="row">
                                                    <th style={{ width: `100px` }} class="sorting_asc" tabindex="0" aria-controls="myTable" rowspan="1" colspan="1" aria-sort="ascending" aria-label="Hình ảnh: activate to sort column descending">Hình ảnh</th>
                                                    <th style={{ width: `500px` }} class="sorting" tabindex="0" aria-controls="myTable" rowspan="1" colspan="1" aria-label="Tên loại sản phẩm: activate to sort column ascending">Tên slider</th>
                                                    <th style={{ width: `160px` }} class="text-center sorting" tabindex="0" aria-controls="myTable" rowspan="1" colspan="1" aria-label="Chức năng: activate to sort column ascending">Chức năng</th>
                                                    <th style={{ width: `30px` }} class="text-center sorting" tabindex="0" aria-controls="myTable" rowspan="1" colspan="1" aria-label="ID: activate to sort column ascending">ID</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {/* {this.rendersliders()} */}
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </section>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default TrashSlider