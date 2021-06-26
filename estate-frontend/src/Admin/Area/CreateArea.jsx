import React, { Component } from 'react'
import HomeServiceAdmin from '../../HomeServiceAdmin/HomeServiceAdmin';

class CreateArea extends Component {
    constructor(props) {
        super(props)
        this.fileInput = React.createRef();
        this.state = {
            areas: [],
            // step 2
            id: this.props.match.params.id,
            titleString: '',
            imageString: '',
            productidLong: '',
            statusInteger: 1,
            statusInteger2: 2,
        }

        this.changeTitleHandler = this.changeTitleHandler.bind(this);
        this.changeImageHandler = this.changeImageHandler.bind(this);
        this.changeStatusHandler = this.changeStatusHandler.bind(this);
        this.changeProductidHandler = this.changeProductidHandler.bind(this);

        this.savearea = this.savearea.bind(this);
        this.areaService = new HomeServiceAdmin();
    }
    savearea = (e) => {
        e.preventDefault();
        let area = {
            titleString: this.state.titleString,
            imageString: this.fileInput.current.files[0].name,
            productidLong: this.state.productidLong,
            statusInteger: this.state.statusInteger ? this.state.statusInteger : this.state.statusInteger2,

        };
        console.log('area => ' + JSON.stringify(area));

        // step 5
        if (area === null) {
            alert('Lưu thất bại');
        } else {
            this.areaService.createArea(area).then(res => {
                this.props.history.push('/list-area');
                alert('Lưu thành công ');
            });
        }


    }

    changeTitleHandler = (event) => {
        this.setState({ titleString: event.target.value });
    }
    
    changeProductidHandler = (event) => {
        this.setState({ productidLong: event.target.value });
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
        this.props.history.push('/list-area');
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
                        <form name="form1" method="post">
                            <div class="content-wrapper" >
                                <section class="content">
                                    <div class="card">
                                        <div class="card-header">
                                            <h3 class="card-title">
                                                <strong class="text-danger">DANH SÁCH THÊM QUỐC GIA</strong>
                                            </h3>
                                            <div class="card-tools" style={{ float: `right` }} >
                                                <button type="submit" onClick={this.savearea} class="btn btn-success btn-sm">   <i class="far fa-save"></i> Lưu[Thêm]</button>
                                                <a onClick={this.cancel.bind(this)} class="btn btn-danger btn-sm" href="javascript:void(0)" role="button">
                                                    <i class="fas fa-times"></i> Thoát</a>
                                            </div>
                                        </div>
                                        <div class="card-body">
                                        <div class="row">
                                                <div class="col-6">

                                                    <div class="form-group">
                                                        <label for="">Tên quốc gia</label>
                                                        <input value={this.state.titleString} onChange={this.changeTitleHandler} type="text" class="form-control" name="titleString" placeholder=" Tên quốc gia" />
                                                    </div>
                                                    <div class="form-group">
                                                        <label for="">Mã sản phẩm</label>
                                                        <input value={this.state.productidLong} onChange={this.changeProductidHandler} type="number" class="form-control" name="productidLong" placeholder="Mã sản phẩm" />
                                                    </div>
                                                </div>
                                                <div class="col-6">
                                                   
                                                    <div class="form-group">
                                                        <label for="img">Hình ảnh</label>
                                                        <input id="img" ref={this.fileInput} type="file" accept="image/*" class="form-control" name="image" rows="3"></input>
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

export default CreateArea
