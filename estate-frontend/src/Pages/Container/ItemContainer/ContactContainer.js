import React, { Component } from 'react';
import moment from 'moment';
import HomeServices from '../../../HomeServices/HomeServices';
import Header from '../../../Components/Header/Header';
import Footer from '../../../Components/Footer/Footer';
import Subcribe from '../../../Components/Subcribe/Subcribe';
class ContactContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            contact: [],
            errors: {},
            titleString: '',
            fullnameString: '',
            emailString: '',
            phoneString: '',
            imageString: '',
            detailString: '',
            createdatTimestamp: moment().format(),
            statusInteger: 1,
        };
        this.handleChangeemailString = this.handleChangeemailString.bind(this);
        this.handleChangefullnameString = this.handleChangefullnameString.bind(this);
        this.handleChangephoneString = this.handleChangephoneString.bind(this);
        this.handleChangedetailString = this.handleChangedetailString.bind(this);

        this.handleSubmit = this.handleSubmit.bind(this);
        this.contactService = new HomeServices();

    }

    componentDidMount() {
        this.contactService.getContacts().then(response => {
            this.setState({ products: response });
        });
    }
    handleChangeemailString = (event) => {
        this.setState({ emailString: event.target.value });
    }
    handleChangefullnameString = (event) => {
        this.setState({ fullnameString: event.target.value });
    }
    handleChangephoneString = (event) => {
        this.setState({ phoneString: event.target.value });
    }
    handleChangedetailString = (event) => {
        this.setState({ detailString: event.target.value });
    }
    validateForm() {

        let fieldsfullname = this.state.fullnameString;
        let fieldsphone = this.state.phoneString;
        let fieldsemail = this.state.emailString;
        let errors = {};
        let formIsValid = true;
  
        if (!fieldsfullname) {
          formIsValid = false;
          errors['fullnameString'] = "*Vui lòng nhập tên của bạn.";
        }else if (typeof fieldsfullname !== "undefined" && !fieldsfullname === false) {
          if (!fieldsfullname.match(/[A-Z]\s\D+/gi)) {
            formIsValid = false;
            errors['fullnameString'] = "*Vui lòng chỉ nhập bảng chữ cái.";
          }
        }
  
        if (!fieldsemail) {
          formIsValid = false;
          errors["emailString"] = "*Vui lòng nhập email của bạn.";
        }else if (typeof fieldsemail !== "undefined") {
          //regular expression for email validation
          var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
          if (!pattern.test(fieldsemail)) {
            formIsValid = false;
            errors["emailString"] = "*Vui lòng nhập email hợp lệ.";
          }
        }
  
        if (!fieldsphone) {
          formIsValid = false;
          errors["phoneString"] = "*Vui lòng nhập số điện thoại của bạn.";
        }else if (typeof fieldsphone !== "undefined") {
          if (!fieldsphone.match(/^[0-9]{10}$/)) {
            formIsValid = false;
            errors["phoneString"] = "*Vui lòng nhập số điện thoại hợp lệ.";
          }
         
        }
  
        this.setState({
          errors: errors
        });
        return formIsValid;
  
  
      }
    handleSubmit = (event) => {
        event.preventDefault();
        if (this.validateForm()) {
       
        alert('Lưu thành công : ' + "\n Tên: " + this.state.fullnameString + "\n Số điện thoại: " + this.state.phoneString + "\n E-mail: " + this.state.emailString + "\n Nội dung: " + this.state.detailString + "\n");
        let contact = { titleString: this.state.titleString, fullnameString: this.state.fullnameString, emailString: this.state.emailString, phoneString: this.state.phoneString, imageString: this.state.imageString, detailString: this.state.detailString, createdatTimestamp: this.state.createdatTimestamp, statusInteger: this.state.statusInteger };
        console.log('contact => ' + JSON.stringify(contact));
        this.contactService.createContact(contact).then(res => {
            this.props.history.push('/loai-san-pham?All')

        });
        this.refs.fieldName.value = "";
        this.refs.fieldPhone.value = "";
        this.refs.fieldEmail.value = "";
        this.refs.fieldDetail.value = "";
    }else
    {
        alert("Lỗi!!")
    }
    }
    render() {
        return (

            <div>
                <Header />
                <section class="section-content">
                    <div class="container border-bottom mt-4 ">
                        <div class="row justify-content-md-center ">
                            <div class="col-lg-5 col-md-6  bg-white mt-3 mb-5">
                                <h4 class="card-title mb-4">Liên hệ</h4>
                                <form>
                                    <div class="form-group">
                                        <label>Họ và tên *</label>
                                        <input name="fullnameString" ref="fieldName" value={this.state.fullnameString} onChange={this.handleChangefullnameString} type="text" class="form-control" placeholder="VD: Ngô Đình Hoàng" />
                                        <span style={{color: "red"}}>{this.state.errors.fullnameString}</span>
                                    </div>
                                    <div class="form-group">
                                        <label>Số điện thoại *</label>
                                        <input name="phoneString" ref="fieldPhone" value={this.state.phoneString} onChange={this.handleChangephoneString} type="text" class="form-control" placeholder="VD: 0865323068 " min="0" maxLength="11" />
                                        <span style={{color: "red"}}>{this.state.errors.phoneString}</span>
                                    </div>
                                    <div class="form-group">
                                        <label>E-mail *</label>
                                        <input name="emailString" ref="fieldEmail" value={this.state.emailString} onChange={this.handleChangeemailString} type="text" class="form-control" placeholder="VD: ngodinhhoang1999@gmail.com" />
                                        <span style={{color: "red"}}>{this.state.errors.emailString}</span>
                                    </div>

                                    <div class="form-group">
                                        <label>Lời nhắn</label>
                                        <textarea ref="fieldDetail" value={this.state.detailString} onChange={this.handleChangedetailString} class="form-control" defaultValue="Tôi có quan tâm tới sản phẩm này." rows="5"></textarea>

                                    </div>

                                    <button class="btn btn-primary btn-block" onClick={this.handleSubmit} >Giử</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </section>
                <Subcribe />
                <Footer />
            </div>
        );
    }
}

export default ContactContainer;