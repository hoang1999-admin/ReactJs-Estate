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
          errors['fullnameString'] = "*Vui l??ng nh???p t??n c???a b???n.";
        }else if (typeof fieldsfullname !== "undefined" && !fieldsfullname === false) {
          if (!fieldsfullname.match(/[A-Z]\s\D+/gi)) {
            formIsValid = false;
            errors['fullnameString'] = "*Vui l??ng ch??? nh???p b???ng ch??? c??i.";
          }
        }
  
        if (!fieldsemail) {
          formIsValid = false;
          errors["emailString"] = "*Vui l??ng nh???p email c???a b???n.";
        }else if (typeof fieldsemail !== "undefined") {
          //regular expression for email validation
          var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
          if (!pattern.test(fieldsemail)) {
            formIsValid = false;
            errors["emailString"] = "*Vui l??ng nh???p email h???p l???.";
          }
        }
  
        if (!fieldsphone) {
          formIsValid = false;
          errors["phoneString"] = "*Vui l??ng nh???p s??? ??i???n tho???i c???a b???n.";
        }else if (typeof fieldsphone !== "undefined") {
          if (!fieldsphone.match(/^[0-9]{10}$/)) {
            formIsValid = false;
            errors["phoneString"] = "*Vui l??ng nh???p s??? ??i???n tho???i h???p l???.";
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
       
        alert('L??u th??nh c??ng : ' + "\n T??n: " + this.state.fullnameString + "\n S??? ??i???n tho???i: " + this.state.phoneString + "\n E-mail: " + this.state.emailString + "\n N???i dung: " + this.state.detailString + "\n");
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
        alert("L???i!!")
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
                                <h4 class="card-title mb-4">Li??n h???</h4>
                                <form>
                                    <div class="form-group">
                                        <label>H??? v?? t??n *</label>
                                        <input name="fullnameString" ref="fieldName" value={this.state.fullnameString} onChange={this.handleChangefullnameString} type="text" class="form-control" placeholder="VD: Ng?? ????nh Ho??ng" />
                                        <span style={{color: "red"}}>{this.state.errors.fullnameString}</span>
                                    </div>
                                    <div class="form-group">
                                        <label>S??? ??i???n tho???i *</label>
                                        <input name="phoneString" ref="fieldPhone" value={this.state.phoneString} onChange={this.handleChangephoneString} type="text" class="form-control" placeholder="VD: 0865323068 " min="0" maxLength="11" />
                                        <span style={{color: "red"}}>{this.state.errors.phoneString}</span>
                                    </div>
                                    <div class="form-group">
                                        <label>E-mail *</label>
                                        <input name="emailString" ref="fieldEmail" value={this.state.emailString} onChange={this.handleChangeemailString} type="text" class="form-control" placeholder="VD: ngodinhhoang1999@gmail.com" />
                                        <span style={{color: "red"}}>{this.state.errors.emailString}</span>
                                    </div>

                                    <div class="form-group">
                                        <label>L???i nh???n</label>
                                        <textarea ref="fieldDetail" value={this.state.detailString} onChange={this.handleChangedetailString} class="form-control" defaultValue="T??i c?? quan t??m t???i s???n ph???m n??y." rows="5"></textarea>

                                    </div>

                                    <button class="btn btn-primary btn-block" onClick={this.handleSubmit} >Gi???</button>
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