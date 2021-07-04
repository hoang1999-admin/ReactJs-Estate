import React, { Component } from 'react';
import HomeServiceAdmin from '../../HomeServiceAdmin/HomeServiceAdmin';
import Home from '../Home/Home';

class IndexUser extends Component {
    constructor(props) {
        super(props)

        this.state = {
            
            users: [],
          

        };
        this.adduser = this.adduser.bind(this);
        this.edituser = this.edituser.bind(this);
        this.trashuser = this.trashuser.bind(this);
        this.deleteuser = this.deleteuser.bind(this);
      
        this.userService = new HomeServiceAdmin();
    }
    deleteuser(id) {
        
        this.userService.deleteUser(id).then(res => {
            this.setState({ users: this.state.users.filter(user => user.id !== id) });
            alert('Xóa thành công');
        });
      
    }
    edituser(id) {
        this.props.history.push(`/update-user/index=${id}`);
    }
    componentDidMount() {
        this.userService.getUsers().then(response => {
            this.setState({ users: response.data });
        });
    }

    adduser() {
        this.props.history.push('/add-user');
    }
    trashuser() {
        this.props.history.push('/trash-user');
    }
    renderusers = () => {
        return this.state.users.map((user, key) => {
            return (
                <tr user="row" class="odd" key={key}>
                  
                    <td>
                        <a href="javascript:void(0)">{user.username}</a>
                    </td>
                    <td>
                        <a href="javascript:void(0)">{user.email}</a>
                    </td>
                    <td>
                        <a href="javascript:void(0)">{user.password}</a>
                    </td>
                    <td class="text-center">
                        {
                            user.statusInteger != 2
                                ?
                                <a class="btn btn-success btn-sm" href="javascript:void(0)" user="button">
                                    <i class="fa fa-toggle-on"></i>
                                </a>
                                : <a class="btn btn-danger btn-sm" href="javascript:void(0)" user="button">
                                    <i class="fa fa-toggle-off"></i>
                                </a>

                        }



                        <a class="btn btn-info btn-sm" onClick={() => this.edituser(user.id)} href="javascript:void(0)" user="button">
                            <i class="fas fa-edit"></i>
                        </a>
                        <a class="btn btn-danger btn-sm" onClick={() => this.deleteuser(user.id)} href="javascript:void(0)" user="button">
                            <i class="fas fa-trash-alt"></i>
                        </a>
                    </td>
                    <td class="text-center">{user.id}</td>
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
                            <a class="nav-link" data-widget="pushmenu" href="#" user="button"><i class="fas fa-bars"></i></a>
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
                            <a class="nav-link" data-widget="control-sidebar" data-slide="true" href="#" user="button">
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
                                            <strong class="text-danger">DANH SÁCH THÀNH VIÊN</strong>
                                        </h3>

                                        <div class="card-tools" style={{ float: `right` }}>
                                            <a class="btn btn-sm btn-success" onClick={this.adduser} href="javascript:void(0)"><i class="fas fa-plus"></i> Thêm</a>
                                            <a class="btn btn-sm btn-danger" onClick={this.trashuser} href="javascript:void(0)"><i class="fas fa-trash"></i> Thùng Rác</a>
                                        </div>
                                    </div>
                                    <div class="card-body">
                                        <table class="table table-bordered dataTable no-footer" id="myTable">
                                            <thead>
                                                <tr user="row">
                                                    <th style={{ width: `400px` }} class="sorting" tabindex="0" aria-controls="myTable" rowspan="1" colspan="1" aria-label="Tên loại user: activate to sort column ascending">Tên thành viên</th>
                                                    <th style={{ width: `50px` }} class="sorting" tabindex="0" aria-controls="myTable" rowspan="1" colspan="1" aria-label="Tên loại user: activate to sort column ascending">E-mail</th>
                                                    <th style={{ width: `50px` }} class="sorting" tabindex="0" aria-controls="myTable" rowspan="1" colspan="1" aria-label="Tên loại user: activate to sort column ascending">Mật khẩu</th>
                                                    <th style={{ width: `260px` }} class="text-center sorting" tabindex="0" aria-controls="myTable" rowspan="1" colspan="1" aria-label="Chức năng: activate to sort column ascending">Chức năng</th>
                                                    <th style={{ width: `30px` }} class="text-center sorting" tabindex="0" aria-controls="myTable" rowspan="1" colspan="1" aria-label="ID: activate to sort column ascending">ID</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {this.renderusers()}
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

export default IndexUser