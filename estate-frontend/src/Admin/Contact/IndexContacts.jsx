import React, { Component } from 'react';
import HomeServiceAdmin from '../../HomeServiceAdmin/HomeServiceAdmin';
import Home from '../Home/Home';


class IndexContact extends Component {
    constructor(props) {
        super(props)

        this.state = {
            
            contacts: [],
          

        };
        this.addcontact = this.addcontact.bind(this);
        this.editcontact = this.editcontact.bind(this);
        this.trashcontact = this.trashcontact.bind(this);
        this.deletecontact = this.deletecontact.bind(this);
      
        this.contactService = new HomeServiceAdmin();
    }
    deletecontact(id) {
        this.contactService.deleteContact(id).then(res => {
            if(this.setState({ contacts: this.state.contacts.filter(contact => contact.idLong !== id) }))
            {
                 alert('Xóa thất bại');
            }else{
                alert('Xóa thành công');
            }
           
        });
      
    }
    editcontact(id) {
        this.props.history.push(`/update-contact/index=${id}`);
    }
    componentDidMount() {
        this.contactService.getContacts().then(response => {
            this.setState({ contacts: response.data });
        });
    }

    addcontact() {
        this.props.history.push('/add-contact');
    }
    trashcontact() {
        this.props.history.push('/trash-contact');
    }
    rendercontacts = () => {
        return this.state.contacts.map((contact, key) => {
            return (
                <tr role="row" class="odd" key={key}>
                     <td>
                        <a href="javascript:void(0)">{contact.fullnameString}</a>
                    </td>
                    <td>
                        <a href="javascript:void(0)">{contact.emailString}</a>
                    </td>
                    <td>
                        <a href="javascript:void(0)">{contact.phoneString}</a>
                    </td>
                    <td>
                        <a href="javascript:void(0)">{contact.detailString}</a>
                    </td>
                    <td class="text-center">
                        {
                            contact.statusInteger != 2
                                ?
                                <a class="btn btn-success btn-sm" href="javascript:void(0)" role="button">
                                    <i class="fa fa-toggle-on"></i>
                                </a>
                                : <a class="btn btn-danger btn-sm" href="javascript:void(0)" role="button">
                                    <i class="fa fa-toggle-off"></i>
                                </a>

                        }



                        <a class="btn btn-info btn-sm" onClick={() => this.editcontact(contact.idLong)} href="javascript:void(0)" role="button">
                            <i class="fas fa-edit"></i>
                        </a>
                        <a class="btn btn-danger btn-sm" onClick={() => this.deletecontact(contact.idLong)} href="javascript:void(0)" role="button">
                            <i class="fas fa-trash-alt"></i>
                        </a>
                    </td>
                    <td class="text-center">{contact.idLong}</td>
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
                                            <strong class="text-danger">DANH SÁCH LIÊN HỆ</strong>
                                        </h3>

                                        <div class="card-tools" style={{ float: `right` }}>
                                            <a class="btn btn-sm btn-success" onClick={this.addcontact} href="javascript:void(0)"><i class="fas fa-plus"></i> Thêm</a>
                                            <a class="btn btn-sm btn-danger" onClick={this.trashcontact} href="javascript:void(0)"><i class="fas fa-trash"></i> Thùng Rác</a>
                                        </div>
                                    </div>
                                    <div class="card-body">
                                        <table class="table table-bordered dataTable no-footer" id="myTable">
                                            <thead>
                                                <tr role="row">
                                                    <th style={{ width: `300px` }} class="sorting" tabindex="0" aria-controls="myTable" rowspan="1" colspan="1" aria-label="Tên liên hệ: activate to sort column ascending">Tên liên hệ</th>
                                                    <th style={{ width: `300px` }} class="sorting" tabindex="0" aria-controls="myTable" rowspan="1" colspan="1" aria-label="Email: activate to sort column ascending">E-mail</th>
                                                    <th style={{ width: `200px` }} class="sorting" tabindex="0" aria-controls="myTable" rowspan="1" colspan="1" aria-label="số điện thoại: activate to sort column ascending">Số điện thoại</th>
                                                    <th style={{ width: `200px` }} class="sorting" tabindex="0" aria-controls="myTable" rowspan="1" colspan="1" aria-label="chi tiết: activate to sort column ascending">Chi tiết</th>
                                                    <th style={{ width: `160px` }} class="text-center sorting" tabindex="0" aria-controls="myTable" rowspan="1" colspan="1" aria-label="Chức năng: activate to sort column ascending">Chức năng</th>
                                                    <th style={{ width: `30px` }} class="text-center sorting" tabindex="0" aria-controls="myTable" rowspan="1" colspan="1" aria-label="ID: activate to sort column ascending">ID</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {this.rendercontacts()}
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

export default IndexContact