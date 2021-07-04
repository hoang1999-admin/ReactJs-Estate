import React, { Component } from 'react';
import HomeServiceAdmin from '../../HomeServiceAdmin/HomeServiceAdmin';
import Home from '../Home/Home';

class IndexRequest extends Component {
    constructor(props) {
        super(props)

        this.state = {
            
            requests: [],
          

        };
        this.addrequest = this.addrequest.bind(this);
        this.editrequest = this.editrequest.bind(this);
        this.trashrequest = this.trashrequest.bind(this);
        this.deleterequest = this.deleterequest.bind(this);
      
        this.requestService = new HomeServiceAdmin();
    }
    deleterequest(id) {
        
        this.requestService.deleteRequest(id).then(res => {
            this.setState({ requests: this.state.requests.filter(request => request.idLong !== id) });
            alert('Xóa thành công');
        });
      
    }
    editrequest(id) {
        this.props.history.push(`/update-request/index=${id}`);
    }
    componentDidMount() {
        this.requestService.getRequests().then(response => {
            this.setState({ requests: response.data });
        });
    }

    addrequest() {
        this.props.history.push('/add-request');
    }
    trashrequest() {
        this.props.history.push('/trash-request');
    }
    renderrequests = () => {
        return this.state.requests.map((request, key) => {
            return (
                <tr role="row" class="odd" key={key}>
                  
                    <td>
                        <a href={`/index=${request.idLong}`}>{request.titleString}</a>
                    </td>
                    <td>
                        <a href="javascript:void(0)">{request.searchString}</a>
                    </td>
                    <td>
                        <a href="javascript:void(0)">{request.qualityInteger}</a>
                    </td>
                  
                    <td class="text-center">
                        {
                            request.statusInteger != 2
                                ?
                                <a class="btn btn-success btn-sm" href="javascript:void(0)" role="button">
                                    <i class="fa fa-toggle-on"></i>
                                </a>
                                : <a class="btn btn-danger btn-sm" href="javascript:void(0)" role="button">
                                    <i class="fa fa-toggle-off"></i>
                                </a>

                        }



                        <a class="btn btn-info btn-sm" onClick={() => this.editrequest(request.idLong)} href="javascript:void(0)" role="button">
                            <i class="fas fa-edit"></i>
                        </a>
                        <a class="btn btn-danger btn-sm" onClick={() => this.deleterequest(request.idLong)} href="javascript:void(0)" role="button">
                            <i class="fas fa-trash-alt"></i>
                        </a>
                    </td>
                    <td class="text-center">{request.idLong}</td>
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
                        <div class="content-wrapper">
                            <section class="content">
                                <div class="card">
                                    <div class="card-header">
                                        <h3 class="card-title">
                                            <strong class="text-danger">DANH SÁCH YÊU CẦU</strong>
                                        </h3>

                                        <div class="card-tools" style={{ float: `right` }}>
                                            <a class="btn btn-sm btn-success" onClick={this.addrequest} href="javascript:void(0)"><i class="fas fa-plus"></i> Thêm</a>
                                            <a class="btn btn-sm btn-danger" onClick={this.trashrequest} href="javascript:void(0)"><i class="fas fa-trash"></i> Thùng Rác</a>
                                        </div>
                                    </div>
                                    <div class="card-body">
                                        <table class="table table-bordered dataTable no-footer" id="myTable">
                                            <thead>
                                                <tr role="row">
                                                    <th style={{ width: `500px` }} class="sorting" tabindex="0" aria-controls="myTable" rowspan="1" colspan="1" aria-label="Tên loại sản phẩm: activate to sort column ascending">Tên yêu cầu</th>
                                                    <th style={{ width: `160px` }} class="text-center sorting" tabindex="0" aria-controls="myTable" rowspan="1" colspan="1" aria-label="Chức năng: activate to sort column ascending">Tìm kiếm</th>
                                                    <th style={{ width: `160px` }} class="text-center sorting" tabindex="0" aria-controls="myTable" rowspan="1" colspan="1" aria-label="Chức năng: activate to sort column ascending">Diện tích</th>
                                                    <th style={{ width: `30px` }} class="text-center sorting" tabindex="0" aria-controls="myTable" rowspan="1" colspan="1" aria-label="ID: activate to sort column ascending">ID</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {this.renderrequests()}
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </section>
                        </div>
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

        );
    }
}

export default IndexRequest