import React, { Component } from 'react';
import HomeServices from '../../HomeServices/HomeServices';

class ItemContainer extends Component {
    constructor() {
        super();
        this.state = {
          products: []
        };
    
        this.productService = new HomeServices();
      }
    
      componentDidMount() {
        this.productService.getAllProducts().then(response => {
          this.setState({ products: response });
        });
      }
    
      renderProducts = () => {
        return this.state.products.map((product, key) => {
          return (
            <div class="col-xl-2 col-lg-3 col-md-4 col-6" key={key}>
            <div class="card card-sm card-product-grid">
                <a href={`/index=${product.idLong}`} class="img-wrap"> <img src={`/resources/images/items/${product.imageString}`} /> </a>
                <figcaption class="info-wrap">
                    <h5><a href={`/index=${product.idLong}`} class="title">{product.titleString}</a></h5>
                    <div class="price mt-1" style={{color:`red`}}> Giá: {product.pricesaleDouble.toLocaleString('vi-VN')} VND</div>
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