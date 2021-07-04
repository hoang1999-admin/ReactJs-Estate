import moment from 'moment';
import React, { Component } from 'react'
import HomeServiceAdmin from '../../HomeServiceAdmin/HomeServiceAdmin';
import Home from '../Home/Home';


class UpdateRequest extends Component {
    constructor(props) {
        super(props)
        this.fileInput = React.createRef();
        this.state = {
            // step 2
            id: this.props.match.params.id,
            titleString: '',
            searchString: '',
            qualityInteger: '',
            priceBoolean: false,
            acreBoolean: false,
            statusInteger: 1,
            statusInteger2: 2,

        }
        this.changeTitleHandler = this.changeTitleHandler.bind(this);
        this.changeSearchHandler = this.changeSearchHandler.bind(this);
        this.changeQualityHandler = this.changeQualityHandler.bind(this);
        this.changePriceHandler = this.changePriceHandler.bind(this);
        this.changeAcreHandler = this.changeAcreHandler.bind(this);
        this.changeStatusHandler = this.changeStatusHandler.bind(this);
        this.saverequest = this.saverequest.bind(this);
        this.requestService = new HomeServiceAdmin();
    }
    componentDidMount() {
        this.requestService.getRequestById(this.state.id).then((res) => {
            let requestdata = res.data;
            this.setState({
                titleString: requestdata.titleString,
                searchString: requestdata.searchString,
                qualityInteger: requestdata.qualityInteger,
                priceBoolean: requestdata.priceBoolean,
                acreBoolean: requestdata.acreBoolean,
                statusString: this.state.statusString ? this.state.statusString : this.state.statusString2,


            });
        });
    }
    saverequest = (e) => {
        e.preventDefault();


        let request = {
            titleString: this.state.titleString,
            searchString: this.state.searchString,
            qualityInteger: this.state.qualityInteger,
            priceBoolean: this.state.priceBoolean,
            acreBoolean: this.state.acreBoolean,
            statusInteger: this.state.statusInteger ? this.state.statusInteger : this.state.statusInteger2,

        };


        console.log('request => ' + JSON.stringify(request));
        console.log('id => ' + JSON.stringify(this.state.id));
        if (request == null || this.state.id == '') {
            alert('Lưu thất bại');
        } else {
            this.requestService.updateRequest(request, this.state.id).then(res => {
                this.props.history.push('/list-request');
                alert('Lưu thành công');
            });
        }

    }

    changeTitleHandler = (event) => {
        this.setState({ titleString: event.target.value });
    }
    changeQualityHandler = (event) => {
        this.setState({ qualityInteger: event.target.value });
    }
    changeSearchHandler = (event) => {
        this.setState({ searchString: event.target.value });
    }

    changePriceHandler = (event) => {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
        this.setState({ [name]: value });
    }
    changeAcreHandler = (event) => {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
        this.setState({ [name]: value });
    }
    changeStatusHandler = (event) => {
        if (this.state.statusInteger) {
            this.setState({ statusInteger: event.target.value });
        } else {
            this.setState({ statusInteger2: event.target.value });
        }
    }
    cancel() {
        this.props.history.push('/list-request');
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
                                                <strong class="text-danger">DANH SÁCH CẬP NHẬT YÊU CẦU</strong>
                                            </h3>
                                            <div class="card-tools" style={{ float: `right` }} >
                                                <button type="submit" onClick={this.saverequest} class="btn btn-success btn-sm">   <i class="far fa-save"></i> Lưu[Thêm]</button>
                                                <a onClick={this.cancel.bind(this)} class="btn btn-danger btn-sm" href="javascript:void(0)" role="button">
                                                    <i class="fas fa-times"></i> Thoát</a>
                                            </div>
                                        </div>
                                        <div class="card-body">
                                            <div class="row">
                                                <div class="col-6">

                                                    <div class="form-group">
                                                        <label for="">Tên yêu cầu</label>
                                                        <input value={this.state.titleString} onChange={this.changeTitleHandler} type="text" class="form-control" name="titleString" placeholder=" Tên yêu cầu" />
                                                    </div>
                                                    <div class="form-group">
                                                        <label for="">Tìm kiếm</label>
                                                        <input value={this.state.searchString} onChange={this.changeSearchHandler} type="text" class="form-control" name="searchString" placeholder="Vd: đất đai v.v.v " />
                                                    </div>

                                                    <p>Chọn loại quyền truy cập:</p>
                                                    <div className="row">
                                                        <div className="col-6">

                                                            <div class="form-group text-muted">

                                                                <label class="form-check form-check-inline" >
                                                                    <input class="form-check-input" type="checkbox" name="acreBoolean" value="option1" ref="fieldPrice" checked={this.state.acreBoolean} onChange={this.changeAcreHandler} />
                                                                    <span class="form-check-label">Diện tích</span>
                                                                </label>

                                                            </div>
                                                            <div class="form-group text-muted">

                                                                <label class="form-check form-check-inline" >
                                                                    <input class="form-check-input" type="checkbox" name="priceBoolean" value="option1" ref="fieldPrice" checked={this.state.priceBoolean} onChange={this.changePriceHandler} />
                                                                    <span class="form-check-label"> Giá</span>
                                                                </label>

                                                            </div>

                                                        </div>
                                                    </div>


                                                </div>
                                                <div class="col-6">
                                                    <div class="form-group">
                                                        <label for="">Số lượng</label>
                                                        <input value={this.state.qualityInteger} onChange={this.changeQualityHandler} type="number" class="form-control" name="qualityInteger" placeholder=" vd: 1" />
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
export default UpdateRequest
