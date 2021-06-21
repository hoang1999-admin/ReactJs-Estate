import React, { Component } from 'react';
import HomeServiceAdmin from '../../HomeServiceAdmin/HomeServiceAdmin';


class TrashRole extends Component {
    constructor(props) {
        super(props)
        this.state = {
            roles: []
        };
       
        this.retrashrole = this.retrashrole.bind(this);
        this.deleterole = this.deleterole.bind(this);

        this.roleService = new HomeServiceAdmin();
    }
    deleterole(id) {
        this.roleService.deleteRole(id).then(res => {
            this.setState({ roles: this.state.roles.filter(role => role.idLong !== id) });

        });
        alert('Xóa thành công');
    }
    retrashrole(id) {
        this.props.history.push(`/update-role/index=${id}`);
    }

    componentDidMount() {
        this.roleService.getRoles().then(response => {
            this.setState({ roles: response.data });
        });
    }
    cancel() {
        this.props.history.push('/list-role');
    }
    renderroles = () => {
        return this.state.roles.map((role, key) => {
            return (
                <tr role="row" class="odd" key={key}>
                  
                    <td>
                        <a href="javascript:void(0)">{role.name}</a>
                    </td>

                    <td class="text-center">
                        {
                            role.status != 2
                                ?
                                <a class="btn btn-success btn-sm" href="javascript:void(0)" role="button">
                                    <i class="fa fa-toggle-on"></i>
                                </a>
                                : <a class="btn btn-danger btn-sm" href="javascript:void(0)" role="button">
                                    <i class="fa fa-toggle-off"></i>
                                </a>

                        }



                        <a class="btn btn-info btn-sm" onClick={() => this.editrole(role.id)} href="javascript:void(0)" role="button">
                            <i class="fas fa-edit"></i>
                        </a>
                        <a class="btn btn-danger btn-sm" onClick={() => this.deleterole(role.id)} href="javascript:void(0)" role="button">
                            <i class="fas fa-trash-alt"></i>
                        </a>
                    </td>
                    <td class="text-center">{role.id}</td>
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
                                    <li class="list-group-item list-group-item-action"><a href="/list-role">Vai trò</a></li>
                                    <li class="list-group-item list-group-item-action"><a href="/list-userrole">Vai trò và thành viên</a></li>
                                    <li class="list-group-item list-group-item-action"><a href="/list-user">Thành viên</a></li>
                                </ul>
                        </div>
                    </div>
                    <div className="col-9">
                        <div class="content-wrapper my-2">
                            <section class="content">
                                <div class="card">
                                    <div class="card-header">
                                        <h3 class="card-title">
                                            <strong class="text-danger">THÙNG RÁC CỦA role</strong>
                                        </h3>
                                        <div class="card-tools" style={{ float: `right` }}>
                                            <a class="btn btn-sm btn-danger" onClick={this.cancel.bind(this)}  href="javascript:void(0)"><i class="fas fa-times"></i> Thoát</a>
                                        </div>
                                    </div>
                                    <div class="card-body">

                                        <table class="table table-bordered dataTable no-footer" id="myTable">
                                            <thead>
                                            <tr role="row">
                                                    <th style={{ width: `500px` }} class="sorting" tabindex="0" aria-controls="myTable" rowspan="1" colspan="1" aria-label="Tên loại role: activate to sort column ascending">Tên vai trò</th>
                                                    <th style={{ width: `160px` }} class="text-center sorting" tabindex="0" aria-controls="myTable" rowspan="1" colspan="1" aria-label="Chức năng: activate to sort column ascending">Chức năng</th>
                                                    <th style={{ width: `30px` }} class="text-center sorting" tabindex="0" aria-controls="myTable" rowspan="1" colspan="1" aria-label="ID: activate to sort column ascending">ID</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {/* {this.renderroles()} */}
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

export default TrashRole