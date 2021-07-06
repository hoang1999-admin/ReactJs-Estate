import React, { Component } from 'react';
import HomeServices from '../../HomeServices/HomeServices';
import moment from 'moment';
import 'moment/locale/vi' 
class ItemContainer extends Component {
    constructor() {
        super();
        this.state = {
          products: []
        };
    
        this.productService = new HomeServices();
      }
    
      componentDidMount() {
        this.productService.getAllProductTops12().then(response => {
          this.setState({ products: response });
        });
      }
    
      renderProducts = () => {
        return this.state.products.map((product, key) => {
          moment.locale('vi');
          const dd = moment(product.createdatTimestamp).startOf('day').fromNow();
          return (
            <div class="col-xl-2 col-lg-3 col-md-4 col-6" key={key}>
            <div class="card card-sm card-product-grid">
                <a href={`/index=${product.idLong}`} class="img-wrap"> <img src={`/resources/images/items/${product.imageString}`} alt=""/> </a>
                <figcaption class="info-wrap">
                    <h5 style={{fontSize:`15px`}}><a href={`/index=${product.idLong}`} class="title" style={{color:`#004e7f`}}>{`${product.titleString.substring(0, 40)}... `}</a></h5>
                    <div class="price mt-1 "style={{fontWeight:`bold`}} >{product.pricesaleDouble} <sup> . </sup> {product.areaString} m<sup>2</sup></div>
                    <div className="row">
                    <div class=" col-9">{dd}</div>
                    <div class="col-3" style={{fontSize:`22px`}}><a href={`/luu`} title="Bấm để lưu tin" style={{color:`#004e7f`}}><i class="far fa-heart"></i></a></div>
                    </div>
                    {/* <!-- price-wrap.// --> */}
                </figcaption>
            </div>
        </div>
          );
        });
      };
    
    render() {
        return (
            //    {/* <!-- =============== SECTION ITEMS =============== --> */}
            <section class="padding-bottom-sm">

                <header class="section-heading heading-line">
                    <h4 class="title-section text-uppercase">MỤC ĐƯỢC ĐỀ XUẤT</h4>
                </header>
              
                <div class="row row-sm">
                {this.renderProducts()}
                    {/* <!-- col.// --> */}
                   
                </div>
                {/* /<!-- row.// --> */}
            </section>
            // {/* <!-- =============== SECTION ITEMS .//END =============== --> */}

        );
    }
}

export default ItemContainer;