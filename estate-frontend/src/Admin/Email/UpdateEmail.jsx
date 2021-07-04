
import React, { Component } from 'react'
import HomeServiceAdmin from '../../HomeServiceAdmin/HomeServiceAdmin';
import Home from '../Home/Home';


class UpdateEmail extends Component {
    constructor(props) {
        super(props)
        this.fileInput = React.createRef();
        this.state = {
            // step 2
            id: this.props.match.params.id,
            emailString: '',
            statusInteger:1,
            statusInteger2:2,
        }
        this.changeEmailHandler = this.changeEmailHandler.bind(this);
      
        this.changeStatusHandler = this.changeStatusHandler.bind(this);
    
        this.saveEmail = this.saveEmail.bind(this);
        this.emailService = new HomeServiceAdmin();
    }
    componentDidMount() {
        this.emailService.getEmailById(this.state.id).then((res) => {
            let emaildata = res.data;
            this.setState({
                emailString: emaildata.emailString,
                statusInteger: this.state.statusInteger ? this.state.statusInteger:this.state.statusInteger2 ,
           
            });
        });
    }
    saveEmail = (e) => {
        e.preventDefault();
        let email = {
            emailString: this.state.emailString,
            statusInteger: this.state.statusInteger ? this.state.statusInteger:this.state.statusInteger2 ,
           

        };
    
       
        console.log('email => ' + JSON.stringify(email));
        console.log('id => ' + JSON.stringify(this.state.id));
        if(email == null || this.state.id == '')
        {
            alert('Lưu thất bại');
        }else
        {
         
            this.emailService.updateEmail(email, this.state.id).then( res => {
                this.props.history.push('/list-email');
                alert('Lưu thành công');
            });
        }
      
    }
   
    changeEmailHandler = (event) => {
        this.setState({ emailString: event.target.value });
    }
    changeStatusHandler = (event) => {
        if(this.state.statusInteger)
        {
            this.setState({ statusInteger: event.target.value });
        }else{
            this.setState({ statusInteger2: event.target.value });
        }
     
      
    }
  
    cancel() {
        this.props.history.push('/list-email');
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
                                                <strong class="text-danger">DANH SÁCH CẬP NHẬT EMAIL</strong>
                                            </h3>
                                            <div class="card-tools" style={{ float: `right` }} >
                                                <button type="submit" onClick={this.saveEmail} class="btn btn-success btn-sm">   <i class="far fa-save"></i> Lưu[Thêm]</button>
                                                <a onClick={this.cancel.bind(this)} class="btn btn-danger btn-sm" href="javascript:void(0)" role="button">
                                                    <i class="fas fa-times"></i> Thoát</a>
                                            </div>
                                        </div>
                                        <div class="card-body">
                                            <div class="row">
                                                <div class="col-6">
                                                  
                                                    <div class="form-group">
                                                        <label for="">Tên email</label>
                                                        <input value={this.state.emailString} onChange={this.changeEmailHandler} type="text" class="form-control" name="emailString" />
                                                    </div>
                                                   

                                                </div>
                                                <div class="col-6">
                                                   
                                                    <div class="form-group">
                                                        <label for="">Trạng thái</label>
                                                        <select class="form-control" name="status" onChange={this.changeStatusHandler}>
                                                            <option value={this.state.statusInteger} name="statusString" >Xuất bản</option>
                                                            <option value={this.state.statusInteger2} name="statusString">Chưa xuất bản</option>
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
export default UpdateEmail
