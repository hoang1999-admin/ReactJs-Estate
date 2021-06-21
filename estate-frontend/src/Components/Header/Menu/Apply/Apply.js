import React, { Component } from 'react';
import HomeServices from '../../../../HomeServices/HomeServices';
import Header from '../../../../Components/Header/Header';
import Footer from '../../../../Components/Footer/Footer';
import Subcribe from '../../../../Components/Subcribe/Subcribe';
class Apply extends Component {

    constructor(props) {
        super(props);
        this.state = {
            category: {},

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
            <div>
                <Header />
                <div className="container">
                    <div class="container">
                        <ol class="breadcrumb py-3 ">
                            <a href="/"><li class="breadcrumb-item">Trang-chu</li></a>
                            <a href="/"><li class="breadcrumb-item active" aria-current="page"> / tuyen-dung</li></a>
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
                <Subcribe />
                <Footer />
            </div>
        );
    }
}

export default Apply;