import React, { Component } from 'react';
import HomeServices from '../../../HomeServices/HomeServices';

class Example extends Component {
  
    constructor(props) {
        super(props);
        this.state = {
            category:{},
          
        };
     
        this.categoryService = new HomeServices();
    }
    componentDidMount() {
        const id = this.props.match.params.id;
        this.categoryService.getAllCategorysId(id).then((res) => {
            this.setState({ category: res });
        });
       
    }
    render() {
        const category = this.state.category;
        return (
            <div className="container">
            <div class="container">
                <ol class="breadcrumb py-3 ">
                    <a href="/"><li class="breadcrumb-item">Trang-chu</li></a>
                    <a href="/"><li class="breadcrumb-item active" aria-current="page"> / du-an</li></a>
                    <a href="/"><li class="breadcrumb-item active" aria-current="page"> / {category.slugString}</li></a>
                  
                </ol>
            </div>
        
            <div className="row">
                <div className="col-lg-9">
                <h1>ĐANG CẬP NHẬT</h1>

                </div>
                <div className="col-lg-3">
                
                </div>
            </div>
        </div>
        );
    }
}

export default Example;