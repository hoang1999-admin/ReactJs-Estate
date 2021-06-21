import React, { Component } from 'react';
import HomeServiceAdmin from '../../HomeServiceAdmin/HomeServiceAdmin';


class IndexArea extends Component {
    constructor(props) {
        super(props)

        this.state = {
            
            areas: [],
          

        };
        this.addarea = this.addarea.bind(this);
        this.editarea = this.editarea.bind(this);
        this.trasharea = this.trasharea.bind(this);
        this.deletearea = this.deletearea.bind(this);
      
        this.areaService = new HomeServiceAdmin();
    }
    deletearea(id) {
        
        this.areaService.deleteArea(id).then(res => {
            this.setState({ areas: this.state.areas.filter(area => area.idLong !== id) });
            alert('Xóa thành công');
        });
      
    }
    editarea(id) {
        this.props.history.push(`/update-area/index=${id}`);
    }
    componentDidMount() {
        this.areaService.getAreas().then(response => {
            this.setState({ areas: response.data });
        });
    }

    addarea() {
        this.props.history.push('/add-area');
    }
    trasharea() {
        this.props.history.push('/trash-area');
    }
    renderareas = () => {
        return this.state.areas.map((area, key) => {
            return (
                <tr role="row" class="odd" key={key}>
                    <td class="sorting_1">
                        <img src={`/resources/images/icons/flags/${area.imageString}`} class="img-fluid" alt="hinh" />
                    </td>
                    <td>
                        <a href={`/index=${area.idLong}`}>{area.titleString}</a>
                    </td>

                    <td class="text-center">
                        {
                            area.statusInteger != 2
                                ?
                                <a class="btn btn-success btn-sm" href="javascript:void(0)" role="button">
                                    <i class="fa fa-toggle-on"></i>
                                </a>
                                : <a class="btn btn-danger btn-sm" href="javascript:void(0)" role="button">
                                    <i class="fa fa-toggle-off"></i>
                                </a>

                        }



                        <a class="btn btn-info btn-sm" onClick={() => this.editarea(area.idLong)} href="javascript:void(0)" role="button">
                            <i class="fas fa-edit"></i>
                        </a>
                        <a class="btn btn-danger btn-sm" onClick={() => this.deletearea(area.idLong)} href="javascript:void(0)" role="button">
                            <i class="fas fa-trash-alt"></i>
                        </a>
                    </td>
                    <td class="text-center">{area.idLong}</td>
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
                        <div class="content-wrapper">
                            <section class="content">
                                <div class="card">
                                    <div class="card-header">
                                        <h3 class="card-title">
                                            <strong class="text-danger">DANH SÁCH QUỐC GIA</strong>
                                        </h3>

                                        <div class="card-tools" style={{ float: `right` }}>
                                            <a class="btn btn-sm btn-success" onClick={this.addarea} href="javascript:void(0)"><i class="fas fa-plus"></i> Thêm</a>
                                            <a class="btn btn-sm btn-danger" onClick={this.trasharea} href="javascript:void(0)"><i class="fas fa-trash"></i> Thùng Rác</a>
                                        </div>
                                    </div>
                                    <div class="card-body">
                                        <table class="table table-bordered dataTable no-footer" id="myTable">
                                            <thead>
                                                <tr role="row">
                                                    <th style={{ width: `100px` }} class="sorting_asc" tabindex="0" aria-controls="myTable" rowspan="1" colspan="1" aria-sort="ascending" aria-label="Hình ảnh: activate to sort column descending">Hình ảnh</th>
                                                    <th style={{ width: `500px` }} class="sorting" tabindex="0" aria-controls="myTable" rowspan="1" colspan="1" aria-label="Tên loại sản phẩm: activate to sort column ascending">Tên quốc gia</th>
                                                    <th style={{ width: `160px` }} class="text-center sorting" tabindex="0" aria-controls="myTable" rowspan="1" colspan="1" aria-label="Chức năng: activate to sort column ascending">Chức năng</th>
                                                    <th style={{ width: `30px` }} class="text-center sorting" tabindex="0" aria-controls="myTable" rowspan="1" colspan="1" aria-label="ID: activate to sort column ascending">ID</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {this.renderareas()}
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

export default IndexArea