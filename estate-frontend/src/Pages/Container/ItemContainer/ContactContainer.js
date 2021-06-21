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
    handleSubmit = (event) => {
        event.preventDefault();
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
                                        <label>Họ và tên</label>
                                        <input ref="fieldName" value={this.state.fullnameString} onChange={this.handleChangefullnameString} type="text" class="form-control" placeholder="VD: Ngô Đình Hoàng" />
                                    </div>
                                    <div class="form-group">
                                        <label>Số điện thoại</label>
                                        <input ref="fieldPhone" value={this.state.phoneString} onChange={this.handleChangephoneString} type="text" class="form-control" placeholder="VD: 0865323068 " min="0" maxLength="11" />
                                    </div>
                                    <div class="form-group">
                                        <label>E-mail</label>
                                        <input ref="fieldEmail" value={this.state.emailString} onChange={this.handleChangeemailString} type="email" class="form-control" placeholder="VD: ngodinhhoang1999@gmail.com" />
                                    </div>

                                    <div class="form-group">
                                        <label>Lời nhắn </label>
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