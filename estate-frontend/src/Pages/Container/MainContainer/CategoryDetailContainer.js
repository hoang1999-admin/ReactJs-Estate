import React, { Component } from 'react';
import HomeServices from '../../../HomeServices/HomeServices';

class CategoryDetailContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
          category: {}
        };
    
        this.categoryService = new HomeServices();
      }
    
      componentDidMount() {
        const id = this.props.match.params.id;
    
        this.categoryService.getAllCategorysId(id).then(response => {
          this.setState({ category: response });
        });
      }
    render() {
        const category = this.state.category;
        return (
            // <!-- ========================= SECTION CONTENT ========================= -->
            <section class="section-content padding-y">
            <div class="container">
            
            <nav class="row">
                    <div class="col-md-3">
                        
                        <div class="card card-category">
                          <div class="img-wrap" style={{background: `#ffd7d7`}}>
                              <img src="images/items/1.jpg"/>
                          </div>
                          <div class="card-body">
                            <h4 class="card-title"><a href="#">{category.titleString}</a></h4>
                            <ul class="list-menu">
                                <li><a href="">Unisex T shirts</a></li>
                                <li><a href="">Casual shirts</a></li>
                                <li><a href="">Scherf Ice cream</a></li>
                                <li><a href="">Another category</a></li>
                                <li><a href="">Great items name</a></li>
                                <li><a href="">Great items name</a></li>
                            </ul>
                          </div>
                        </div>
                    </div>
                     {/* <!-- col.// --> */}
                </nav>
                 {/* <!-- row.// --> */}
            
            
            </div>
             {/* <!-- container .//  --> */}
            </section>
            // <!-- ========================= SECTION CONTENT END// ========================= -->
            
            
        );
    }
}

export default CategoryDetailContainer;