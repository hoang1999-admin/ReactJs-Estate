import React, { Component } from 'react'
import HomeServiceAdmin from '../../HomeServiceAdmin/HomeServiceAdmin';
import Home from '../Home/Home';
class CreateProductRelation extends Component {
    constructor(props) {
        super(props)
        this.fileInput = React.createRef();
        this.state = {
            productrelations: [],
            // step 2
            id: this.props.match.params.id,
            productrelationidLong: '',
            productidLong: '',
            statusInteger: 1,
            statusInteger2: 2,
        }

      
        this.changeStatusHandler = this.changeStatusHandler.bind(this);
        this.changeProductidHandler = this.changeProductidHandler.bind(this);
        this.changeProductrelationidHandler = this.changeProductrelationidHandler.bind(this);
        this.saveproductrelation = this.saveproductrelation.bind(this);
        this.productrelationService = new HomeServiceAdmin();
    }
    saveproductrelation = (e) => {
        e.preventDefault();
        let productrelation = {
            productrelationidLong: this.state.productrelationidLong,
            productidLong: this.state.productidLong,
            statusInteger: this.state.statusInteger ? this.state.statusInteger : this.state.statusInteger2,

        };
        console.log('productrelation => ' + JSON.stringify(productrelation));

        // step 5
        if (productrelation == '') {
            alert('Lưu thất bại');
        } else {
            this.productrelationService.createProductRelation(productrelation).then(res => {
                this.props.history.push('/list-productrelation');
                alert('Lưu thành công ');
            });
        }


    }

    
    changeProductidHandler = (event) => {
        this.setState({ productidLong: event.target.value });
    }
    changeProductrelationidHandler = (event) => {
        this.setState({ productrelationidLong: event.target.value });
    }
    changeStatusHandler = (event) => {
        if (this.state.statusInteger) {
            this.setState({ statusInteger: event.target.value });
        } else {
            this.setState({ statusInteger2: event.target.value });
        }
    }
    cancel() {
        this.props.history.push('/list-productrelation');
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
                           <Home/>
                        </div>
                    </div>
                    <div className="col-9">
                        <form name="form1" method="post">
                            <div class="content-wrapper" >
                                <section class="content">
                                    <div class="card">
                                        <div class="card-header">
                                            <h3 class="card-title">
                                                <strong class="text-danger">DANH SÁCH THÊM SẢN PHẨM LIÊN QUAN</strong>
                                            </h3>
                                            <div class="card-tools" style={{ float: `right` }} >
                                                <button type="submit" onClick={this.saveproductrelation} class="btn btn-success btn-sm">   <i class="far fa-save"></i> Lưu[Thêm]</button>
                                                <a onClick={this.cancel.bind(this)} class="btn btn-danger btn-sm" href="javascript:void(0)" role="button">
                                                    <i class="fas fa-times"></i> Thoát</a>
                                            </div>
                                        </div>
                                        <div class="card-body">
                                        <div class="row">
                                                <div class="col-6">

                                                  
                                                    <div class="form-group">
                                                        <label for="">Mã sản phẩm</label>
                                                        <input value={this.state.productidLong} onChange={this.changeProductidHandler} type="number" class="form-control" name="productidLong" placeholder="Mã sản phẩm" />
                                                    </div>
                                                    <div class="form-group">
                                                        <label for="">Mã sản phẩm liên quan</label>
                                                        <input value={this.state.productrelationidLong} onChange={this.changeProductrelationidHandler} type="number" class="form-control" name="productrelationidLong" placeholder="Mã sản phẩm" />
                                                    </div>
                                                </div>
                                                <div class="col-6">
                                                   

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

export default CreateProductRelation
