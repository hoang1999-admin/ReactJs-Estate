import React, { Component } from 'react'
import HomeServiceAdmin from '../../HomeServiceAdmin/HomeServiceAdmin';
import moment from 'moment';
import Home from '../Home/Home';
class CreateRole extends Component {
    constructor(props) {
        super(props)
        this.fileInput = React.createRef();
        this.state = {
            roles: [],
            // step 2
            id: this.props.match.params.id,
            name: '',
            status:1,
            status2:2,
        }
        this.changeNameHandler = this.changeNameHandler.bind(this);
      
        this.changeStatusHandler = this.changeStatusHandler.bind(this);

        this.saverole = this.saverole.bind(this);
        this.roleService = new HomeServiceAdmin();
    }
    saverole = (e) => {
        e.preventDefault();


        let role = {
            name: this.state.name,
            status: this.state.status ? this.state.status:this.state.status2 ,
           


        };
        console.log('role => ' + JSON.stringify(role));

        // step 5
        if (role == '') {
            alert('Lưu thất bại');
        } else {
            
            this.roleService.createRole(role).then(res => {
                this.props.history.push('/list-role');
                alert('Lưu thành công ');
            });
        }


    }
    changeNameHandler = (event) => {
        this.setState({ name: event.target.value });
    }
   
    changeStatusHandler = (event) => {
        if(this.state.status)
        {
            this.setState({ status: event.target.value });
        }else{
            this.setState({ status2: event.target.value });
        }
    }

    cancel() {
        this.props.history.push('/list-role');
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
                        <form name="form1" action="index.php?option=role&cat=process" method="post">
                            <div class="content-wrapper" >
                                <section class="content">
                                    <div class="card">
                                        <div class="card-header">
                                            <h3 class="card-title">
                                                <strong class="text-danger">DANH SÁCH THÊM VAI TRÒ</strong>
                                            </h3>
                                            <div class="card-tools" style={{ float: `right` }} >
                                                <button type="submit" onClick={this.saverole} class="btn btn-success btn-sm">   <i class="far fa-save"></i> Lưu[Thêm]</button>
                                                <a onClick={this.cancel.bind(this)} class="btn btn-danger btn-sm" href="javascript:void(0)" role="button">
                                                    <i class="fas fa-times"></i> Thoát</a>
                                            </div>
                                        </div>
                                        <div class="card-body">
                                            <div class="row">
                                                <div class="col-6">
                                                 
                                                    <div class="form-group">
                                                        <label for="">Tên vai trò</label>
                                                        <input value={this.state.name} onChange={this.changeNameHandler} type="text" class="form-control" name="name" placeholder=" Tên vai trò" />
                                                    </div>
                                                    
                                                </div>
                                                <div class="col-6">
                                                    
                                                    <div class="form-group">
                                                        <label for="">Trạng thái</label>
                                                        <select class="form-control" name="status"  onChange={this.changeStatusHandler}>
                                                            <option value={this.state.status} name="statusString">Xuất bản</option>
                                                            <option value={this.state.status2} name="statusString">Chưa xuất bản</option>
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

export default CreateRole
