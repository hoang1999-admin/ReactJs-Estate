import React, { Component } from 'react'
import HomeServices from '../../HomeServices/HomeServices';
class Subcribe extends Component {
    constructor(props) {
        super(props);
        this.state = {
           
            statusIteger: 1,
            emailString: ''
        };
    
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.emailService = new HomeServices();
      }
    
      handleChange = (event) => {
        this.setState({emailString: event.target.value});
      }
    
      handleSubmit = (event) =>{
        event.preventDefault();
        alert('Lưu thành công : ' + this.state.emailString);
        let email = {emailString: this.state.emailString,statusInteger:this.state.statusIteger};
        console.log('email => ' + JSON.stringify(email));
        this.emailService.createEmail(email).then(res =>{
           
           
        });
        this.refs.fieldEmail.value="";
      }
render()
{
    return (
        // <!-- ========================= SECTION SUBSCRIBE  ========================= -->
        <section class="section-subscribe padding-y-lg">
            <div class="container">

                <p class="pb-2 text-center text-white">Cung cấp các xu hướng sản phẩm mới nhất và tin tức ngành đến hộp thư đến của bạn</p>

                <div class="row justify-content-md-center">
                    <div class="col-lg-5 col-md-6">
                        <form class="form-row" >
                            <div class="col-md-8 col-7">
                                <input class="form-control border-0" ref="fieldEmail"value={this.state.emailString} onChange={this.handleChange} name="value" placeholder="Email của bạn" type="email"  />
                            </div>
                            {/* <!-- col.// --> */}
                            <div class="col-md-4 col-5">
                                <button  type="submit" defaultValue="Reset" class="btn btn-block btn-warning" onClick={this.handleSubmit}> <i class="fa fa-envelope"></i> Đăng Ký </button>
                            
                            </div>
                            {/* <!-- col.// --> */}
                        </form>
                        <small class="form-text text-white-50">Chúng tôi sẽ không bao giờ chia sẻ địa chỉ email của bạn với bên thứ ba.</small>
                    </div>
                    {/* <!-- col-md-6.// --> */}
                </div>


            </div>
        </section>
        // <!-- ========================= SECTION SUBSCRIBE END// ========================= -->

    );
  }
}
export default Subcribe