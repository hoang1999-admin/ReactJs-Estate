import React, { Component } from 'react'
import HomeServiceAdmin from '../../HomeServiceAdmin/HomeServiceAdmin';
import moment from 'moment';
import Home from '../Home/Home';
class CreatePost extends Component {
    constructor(props) {
        super(props)
        this.fileInput = React.createRef();
        this.state = {
            posts: [],
            errors: {},
            // step 2
            id: this.props.match.params.id,
           
            categoryidLong: '',
            titleString: '',
            descriptionString: '',
            slugString: '',
            createdatTimestamp: moment().format(),
            imageString: '',
            image1String: '',
            image2String: '',
            image3String: '',
            description1String: '',
            description2String: '',
            description3String:'',
            statusString: 1,
            statusString2: 2,
        }
     
        this.changeCategory_idHandler = this.changeCategory_idHandler.bind(this);
        this.changeTitleHandler = this.changeTitleHandler.bind(this);
        this.changeSlugHandler = this.changeSlugHandler.bind(this);
        this.changeDescriptionHandler = this.changeDescriptionHandler.bind(this);
        this.changeDescription1Handler = this.changeDescription1Handler.bind(this);
        this.changeDescription2Handler = this.changeDescription2Handler.bind(this);
        this.changeDescription3Handler = this.changeDescription3Handler.bind(this);
        this.changeImageHandler = this.changeImageHandler.bind(this);
        this.changeImage1Handler = this.changeImage1Handler.bind(this);
        this.changeImage2Handler = this.changeImage2Handler.bind(this);
        this.changeImage3Handler = this.changeImage3Handler.bind(this);
        this.changeStatusHandler = this.changeStatusHandler.bind(this);

        this.savepost = this.savepost.bind(this);
        this.postService = new HomeServiceAdmin();
    }
    componentDidMount() {
        this.postService.getPosts().then(response => {
            this.setState({ posts: response.data });
        });
    }
    savepost = (e) => {
        e.preventDefault();
        if (this.validateForm()) {

        let post = {
        
            categoryidLong: this.state.categoryidLong,
            titleString: this.state.titleString,
            descriptionString: this.state.descriptionString,
            description1String: this.state.description1String,
            description2String: this.state.description2String,
            description3String: this.state.description3String,
            slugString: this.state.slugString,
           
            createdatTimestamp: this.state.createdatTimestamp,
            imageString: this.fileInput.current.files[0].name,
            image1String: this.fileInput.current.files[0].name,
            image2String: this.fileInput.current.files[0].name,
            image3String: this.fileInput.current.files[0].name,
           
            statusString: this.state.statusString ? this.state.statusString : this.state.statusString2,



        };
        console.log('post => ' + JSON.stringify(post));

        // step 5
        if (post == '') {
            alert('Lưu thất bại');
        } else {
            this.postService.createPost(post).then(res => {
                this.props.history.push('/list-post');
                alert('Lưu thành công ');
            });
        }
    }else
    {
        alert("Lỗi!!")
    }

    }
    changepost_idHandler = (event) => {
        this.setState({ postidLong: event.target.value });
    }
    changeCategory_idHandler = (event) => {
        this.setState({ categoryidLong: event.target.value });
    }
    changeTitleHandler = (event) => {
        this.setState({ titleString: event.target.value });
    }
    changeSlugHandler = (event) => {
        this.setState({ slugString: event.target.value });
    }
    changeDescriptionHandler = (event) => {
        this.setState({ descriptionString: event.target.value });
    }
    changeDescription1Handler = (event) => {
        this.setState({ description1String: event.target.value });
    }
    changeDescription2Handler = (event) => {
        this.setState({ description2String: event.target.value });
    }
    changeDescription3Handler = (event) => {
        this.setState({ description3String: event.target.value });
    }
    changeImageHandler = (event) => {
        if (event.target.files && event.target.files[0]) {
            let reader = new FileReader();
            reader.onload = (e) => {
              this.setState({imageString: e.target.result});
            };
            reader.readAsDataURL(event.target.files[0]);
          }
    }
    changeImage3Handler = (event) => {
        if (event.target.files && event.target.files[0]) {
            let reader = new FileReader();
            reader.onload = (e) => {
              this.setState({image3String: e.target.result});
            };
            reader.readAsDataURL(event.target.files[0]);
          }
    }
    changeImage1Handler = (event) => {
        if (event.target.files && event.target.files[0]) {
            let reader = new FileReader();
            reader.onload = (e) => {
              this.setState({image1String: e.target.result});
            };
            reader.readAsDataURL(event.target.files[0]);
          }
    }
    changeImage2Handler = (event) => {
        if (event.target.files && event.target.files[0]) {
            let reader = new FileReader();
            reader.onload = (e) => {
              this.setState({image2String: e.target.result});
            };
            reader.readAsDataURL(event.target.files[0]);
          }
    }
    changeStatusHandler = (event) => {
        if (this.state.statusString) {
            this.setState({ statusString: event.target.value });
        } else {
            this.setState({ statusString2: event.target.value });
        }
    }
    cancel() {
        this.props.history.push('/list-post');
    }
    validateForm() {

       
        let fieldscategoryidLong = this.state.categoryidLong;
        let fieldstitleString = this.state.titleString;
        let fieldsslugString = this.state.slugString;
       
        let fieldsfileInput = this.state.imageString;
      
        let errors = {};
        let formIsValid = true;

     
        if (!fieldscategoryidLong) {
            formIsValid = false;
            errors["categoryidLong"] = "*Vui lòng nhập mã loại sản phẩm.";
        } else if (typeof fieldscategoryidLong !== "undefined" && !fieldscategoryidLong === false) {
            if (!fieldscategoryidLong.match(/[0-9]/)) {
                formIsValid = false;
                errors['categoryidLong'] = "*Vui lòng chỉ nhập bảng chữ số.";
            }
        }

        if (!fieldstitleString) {
            formIsValid = false;
            errors["titleString"] = "*Vui lòng nhập tên.";
        }

        if (!fieldsslugString) {
            formIsValid = false;
            errors["slugString"] = "*Vui lòng nhập tên gạch nối.";
        }
     
        if (!fieldsfileInput) {
            formIsValid = false;
            errors["fileInput"] = "*Vui lòng chọn hình ảnh.";
        }
     
        this.setState({
            errors: errors
        });
        return formIsValid;


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
                        <form name="form1" action="index.php?option=post&cat=process" method="post">
                            <div class="content-wrapper" >
                                <section class="content">
                                    <div class="card">
                                        <div class="card-header">
                                            <h3 class="card-title">
                                                <strong class="text-danger">DANH SÁCH THÊM TIN TỨC</strong>
                                            </h3>
                                            <div class="card-tools" style={{ float: `right` }} >
                                                <button type="submit" onClick={this.savepost} class="btn btn-success btn-sm">   <i class="far fa-save"></i> Lưu[Thêm]</button>
                                                <a onClick={this.cancel.bind(this)} class="btn btn-danger btn-sm" href="javascript:void(0)" role="button">
                                                    <i class="fas fa-times"></i> Thoát</a>
                                            </div>
                                        </div>
                                        <div class="card-body">
                                            <div class="row">
                                                <div class="col-6">
                                                   
                                                    <div class="form-group">
                                                        <label for="">Loại tin tức</label>
                                                        <input name="categoryidLong" value={this.state.categoryidLong} onChange={this.changeCategory_idHandler} type="number" min="1" class="form-control" name="categoryidLong" placeholder="vd: 1" />
                                                        <span style={{ color: "red" }}>{this.state.errors.categoryidLong}</span>
                                                    </div>
                                                    <div class="form-group">
                                                        <label for="">Tên tin tức</label>
                                                        <input name="titleString" value={this.state.titleString} onChange={this.changeTitleHandler} type="text" class="form-control" name="titleString" placeholder=" Tên sản phẩm" />
                                                        <span style={{ color: "red" }}>{this.state.errors.titleString}</span>
                                                    </div>
                                                    <div class="form-group">
                                                        <label for="">Tên gạch nối</label>
                                                        <input name="slugString" value={this.state.slugString} onChange={this.changeSlugHandler} type="text" class="form-control" name="slugString" placeholder=" ten-san-pham" />
                                                        <span style={{ color: "red" }}>{this.state.errors.slugString}</span>
                                                    </div>
                                                    <div class="form-group">
                                                        <label for="">Mô tả sản phẩm</label>
                                                        <textarea value={this.state.descriptionString} onChange={this.changeDescriptionHandler} class="form-control" name="descriptionString" rows="3"></textarea>
                                                    </div>
                                                    <div class="form-group">
                                                        <label for="">Mô tả sản phẩm 1</label>
                                                        <textarea value={this.state.description1String} onChange={this.changeDescription1Handler} class="form-control" name="description1String" rows="3"></textarea>
                                                    </div>
                                                    <div class="form-group">
                                                        <label for="">Mô tả sản phẩm 2</label>
                                                        <textarea value={this.state.description2String} onChange={this.changeDescription2Handler} class="form-control" name="description2String" rows="3"></textarea>
                                                    </div>
                                                    <div class="form-group">
                                                        <label for="">Mô tả sản phẩm 3</label>
                                                        <textarea value={this.state.description3String} onChange={this.changeDescription3Handler} class="form-control" name="description3String" rows="3"></textarea>
                                                    </div>
                                                    
                                                </div>
                                                <div class="col-6">
                                                    
                                                    <div class="form-group">
                                                        <label for="img">Hình ảnh</label>
                                                        <input name="fileInput" id="img" ref={this.fileInput} onChange={this.changeImageHandler} type="file" accept="image/*" class="form-control" rows="3"></input>
                                                        <span style={{ color: "red" }}>{this.state.errors.fileInput}</span>
                                                    </div>
                                                    <div class="form-group">
                                                        <label for="img">Hình ảnh 1</label>
                                                        <input name="fileInput" id="img" ref={this.fileInput} onChange={this.changeImage1Handler} type="file" accept="image/*" class="form-control" rows="3"></input>
                                                        <span style={{ color: "red" }}>{this.state.errors.fileInput}</span>
                                                    </div>
                                                    <div class="form-group">
                                                        <label for="img">Hình ảnh 2 </label>
                                                        <input name="fileInput" id="img" ref={this.fileInput} onChange={this.changeImage2Handler} type="file" accept="image/*" class="form-control" rows="3"></input>
                                                        <span style={{ color: "red" }}>{this.state.errors.fileInput}</span>
                                                    </div>
                                                    <div class="form-group">
                                                        <label for="img">Hình ảnh 3</label>
                                                        <input name="fileInput" id="img" ref={this.fileInput} onChange={this.changeImage3Handler} type="file" accept="image/*" class="form-control" rows="3"></input>
                                                        <span style={{ color: "red" }}>{this.state.errors.fileInput}</span>
                                                    </div>
                                                    <div class="form-group">
                                                        <label for="">Trạng thái</label>
                                                        <select class="form-control" name="status" onChange={this.changeStatusHandler}>
                                                            <option value={this.state.statusString} name="statusString">Xuất bản</option>
                                                            <option value={this.state.statusString2} name="statusString">Chưa xuất bản</option>
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

export default CreatePost
