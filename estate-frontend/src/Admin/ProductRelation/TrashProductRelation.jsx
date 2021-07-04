import React, { Component } from 'react';
import HomeServiceAdmin from '../../HomeServiceAdmin/HomeServiceAdmin';
import Home from '../Home/Home';

class TrashProductRelation extends Component {
    constructor(props) {
        super(props)
        this.state = {
            productrelations: []
        };

        this.retrashproductrelation = this.retrashproductrelation.bind(this);
        this.deleteproductrelation = this.deleteproductrelation.bind(this);

        this.productrelationService = new HomeServiceAdmin();
    }
    deleteproductrelation(id) {
        this.productrelationService.deleteProductRelation(id).then(res => {
            this.setState({ productrelations: this.state.productrelations.filter(productrelation => productrelation.idLong !== id) });

        });
        alert('Xóa thành công');
    }
    retrashproductrelation(id) {
        this.props.history.push(`/update-productrelation/index=${id}`);
    }

    componentDidMount() {
        this.productrelationService.getProductRelations().then(response => {
            this.setState({ productrelations: response.data });
        });
    }
    cancel() {
        this.props.history.push('/list-productrelation');
    }
    renderproductrelations = () => {
        return this.state.productrelations.map((productrelation, key) => {
            return (
                <tr role="row" class="odd" key={key}>
                      <td>
                        <a href="javascript:void(0)">{productrelation.productidLong}</a>
                    </td>
                    <td>
                        <a href="javascript:void(0)">{productrelation.productrelationidLong}</a>
                    </td>
                    <td class="text-center">
                        <a class="btn btn-info btn-sm" onClick={() => this.retrashproductrelation(productrelation.idLong)} href="javascript:void(0)" role="button">
                            <i class="fas fa-edit"></i>
                        </a>
                        <a class="btn btn-danger btn-sm" onClick={() => this.deleteproductrelation(productrelation.idLong)} href="javascript:void(0)" role="button">
                            <i class="fas fa-trash-alt"></i>
                        </a>
                    </td>
                    <td class="text-center">{productrelation.idLong}</td>
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
                                            <strong class="text-danger">THÙNG RÁC CỦA SẢN PHẨM LIÊN QUAN</strong>
                                        </h3>
                                        <div class="card-tools" style={{ float: `right` }}>
                                            <a class="btn btn-sm btn-danger" onClick={this.cancel.bind(this)} href="javascript:void(0)"><i class="fas fa-times"></i> Thoát</a>
                                        </div>
                                    </div>
                                    <div class="card-body">

                                        <table class="table table-bordered dataTable no-footer" id="myTable">
                                            <thead>
                                            <tr role="row">
                                                    <th style={{ width: `500px` }} class="sorting" tabindex="0" aria-controls="myTable" rowspan="1" colspan="1" aria-label="Tên loại sản phẩm: activate to sort column ascending">Mã sản phẩm</th>
                                                    <th style={{ width: `500px` }} class="sorting" tabindex="0" aria-controls="myTable" rowspan="1" colspan="1" aria-label="Tên loại sản phẩm: activate to sort column ascending">Mã sản phẩm liên quan</th>
                                                    <th style={{ width: `160px` }} class="text-center sorting" tabindex="0" aria-controls="myTable" rowspan="1" colspan="1" aria-label="Chức năng: activate to sort column ascending">Chức năng</th>
                                                    <th style={{ width: `30px` }} class="text-center sorting" tabindex="0" aria-controls="myTable" rowspan="1" colspan="1" aria-label="ID: activate to sort column ascending">ID</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {/* {this.renderproductrelations()} */}
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

export default TrashProductRelation