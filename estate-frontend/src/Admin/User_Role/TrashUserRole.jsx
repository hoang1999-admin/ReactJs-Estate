import React, { Component } from 'react';
import HomeServiceAdmin from '../../HomeServiceAdmin/HomeServiceAdmin';
import Home from '../Home/Home';

class TrashUserRole extends Component {
    constructor(props) {
        super(props)
        this.state = {
            userroles: []
        };

        this.retrashuserrole = this.retrashuserrole.bind(this);
        this.deleteuserrole = this.deleteuserrole.bind(this);

        this.userroleService = new HomeServiceAdmin();
    }
    deleteuserrole(id) {
        this.userroleService.deleteUserRole(id).then(res => {
            this.setState({ userroles: this.state.userroles.filter(userrole => userrole.idLong !== id) });

        });
        alert('Xóa thành công');
    }
    retrashuserrole(id) {
        this.props.history.push(`/update-userrole/index=${id}`);
    }

    componentDidMount() {
        this.userroleService.getUserRoles().then(response => {
            this.setState({ userroles: response.data });
        });
    }
    cancel() {
        this.props.history.push('/list-userrole');
    }
    renderuserroles = () => {
        return this.state.userroles.map((userrole, key) => {
            return (
                <tr userrole="row" class="odd" key={key}>

                    <td>
                        <a href="javascript:void(0)">{userrole.userid}</a>
                    </td>
                    <td>
                        <a href="javascript:void(0)">{userrole.roleid}</a>
                    </td>
                    <td class="text-center">
                        {
                            userrole.status != 2
                                ?
                                <a class="btn btn-success btn-sm" href="javascript:void(0)" userrole="button">
                                    <i class="fa fa-toggle-on"></i>
                                </a>
                                : <a class="btn btn-danger btn-sm" href="javascript:void(0)" userrole="button">
                                    <i class="fa fa-toggle-off"></i>
                                </a>

                        }



                        <a class="btn btn-info btn-sm" onClick={() => this.edituserrole(userrole.id)} href="javascript:void(0)" userrole="button">
                            <i class="fas fa-edit"></i>
                        </a>
                        <a class="btn btn-danger btn-sm" onClick={() => this.deleteuserrole(userrole.id)} href="javascript:void(0)" userrole="button">
                            <i class="fas fa-trash-alt"></i>
                        </a>
                    </td>
                    <td class="text-center">{userrole.id}</td>
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
                            <a class="nav-link" data-widget="pushmenu" href="#" userrole="button"><i class="fas fa-bars"></i></a>
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
                            <a class="nav-link" data-widget="control-sidebar" data-slide="true" href="#" userrole="button">
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
                                            <strong class="text-danger">THÙNG RÁC CỦA VAI TRÒ VÀ THÀNH VIÊN</strong>
                                        </h3>
                                        <div class="card-tools" style={{ float: `right` }}>
                                            <a class="btn btn-sm btn-danger" onClick={this.cancel.bind(this)} href="javascript:void(0)"><i class="fas fa-times"></i> Thoát</a>
                                        </div>
                                    </div>
                                    <div class="card-body">

                                        <table class="table table-bordered dataTable no-footer" id="myTable">
                                            <thead>
                                                <tr userrole="row">
                                                    <th style={{ width: `500px` }} class="sorting" tabindex="0" aria-controls="myTable" rowspan="1" colspan="1" aria-label="Tên loại userrole: activate to sort column ascending">Mã thành viên</th>
                                                    <th style={{ width: `500px` }} class="sorting" tabindex="0" aria-controls="myTable" rowspan="1" colspan="1" aria-label="Tên loại userrole: activate to sort column ascending">Mã vai trò</th>
                                                    <th style={{ width: `160px` }} class="text-center sorting" tabindex="0" aria-controls="myTable" rowspan="1" colspan="1" aria-label="Chức năng: activate to sort column ascending">Chức năng</th>
                                                    <th style={{ width: `30px` }} class="text-center sorting" tabindex="0" aria-controls="myTable" rowspan="1" colspan="1" aria-label="ID: activate to sort column ascending">ID</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {/* {this.renderuserroles()} */}
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

export default TrashUserRole