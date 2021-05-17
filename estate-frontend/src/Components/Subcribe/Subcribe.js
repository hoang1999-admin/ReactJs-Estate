import React, { Component } from 'react'
import HomeServices from '../../HomeServices/HomeServices';
class Subcribe extends Component {
    constructor(props) {
        super(props)

        this.state = {
            // step 2
          
          statusInteger:1,
            emailString: ''
        }
        this.saveEmail = this.saveEmail.bind(this);
        this.emailService = new HomeServices();
    }
    

    saveEmail = (e) => {
        e.preventDefault();
        let email = {
            statusInteger:this.state.statusInteger,
             emailString: this.state.emailString};
        console.log('email => ' + JSON.stringify(email));

        // step 5
       
          this.emailService.createEmail(email).then(res =>{
            this.props.history.push('/')
            });
        
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
                                <input class="form-control border-0" name="emailString" placeholder="Email của bạn" type="email"  />
                            </div>
                            {/* <!-- col.// --> */}
                            <div class="col-md-4 col-5">
                                <button  type="submit" class="btn btn-block btn-warning" onClick={this.saveEmail}> <i class="fa fa-envelope"></i> Đăng Ký </button>
                            
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