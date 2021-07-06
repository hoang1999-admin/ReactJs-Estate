import React, { Component } from 'react';
import HomeServices from '../../HomeServices/HomeServices';
class DealContainer extends Component {
  constructor() {
    super();
    this.state = {
      products: []
    };

    this.productService = new HomeServices();
  }

  componentDidMount() {
    this.productService.getAllProductsSale().then(response => {
      this.setState({ products: response });
    });
  }

  renderproducts = () => {
    return this.state.products.map((product, key) => {
      return (
        <div class="col-md col-6 " key={key}>
          <figure class="card-product-grid card-sm" title={`${product.titleString}`}>
            <a href={`/index=${product.idLong}`} class="img-wrap">
              <img src={`/resources/images/items/${product.imageString}`} alt=""/>
            </a>
            <div class="text-wrap p-3">
            <h5 style={{fontSize:`15px`}} ><a href={`/index=${product.idLong}`} class="title" style={{color:`#004e7f`}}>{`${product.titleString.substring(0, 40)}... `}</a></h5>
            <div class="price mt-1 "style={{fontWeight:`bold`}} >{product.pricesaleDouble} <sup> . </sup> {product.areaString} m<sup>2</sup></div>
            </div>
          </figure>
        </div>

      );
    });
  };

  render() {
    return (

      // {/* <!-- =============== SECTION DEAL =============== --> */}
      <section class="padding-bottom">
        <div class="card card-deal">
          <div class="col-heading content-body">
            <header class="section-heading">
              <h3 class="section-title">Ưu đãi và đặt hàng</h3>
              <p>Nhanh Lên Ưu Đãi Có Hạn!!!</p>
            </header>
            {/* <!-- sect-heading --> */}
            
                <div class="timer">
                  <div> <span class="num" id="ngay"></span> <small>Ngày</small></div>
                  <div> <span class="num" id="gio"></span> <small>Giờ</small></div>
                  <div> <span class="num" id="phut"></span> <small>Phút</small></div>
                  <div> <span class="num" id="giay"></span> <small>Giây</small></div>
                </div>
               <br/>
                 <div class="num test text-center" style={{borderRadius:`10px 10px 10px 10px`}} id="hetthoigian"></div>
           
          </div>
          {/* <!-- col.// --> */}
          <div class="row no-gutters items-wrap">
            {this.renderproducts()}
            {/* <!-- col.// --> */}

          </div>
        </div>
        
      </section>
      // {/* <!-- =============== SECTION DEAL // END =============== --> */}

    );
  }
}

export default DealContainer;