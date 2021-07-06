import React, { Component } from 'react';
import HomeServices from '../../../HomeServices/HomeServices';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import moment from 'moment';
import 'moment/locale/vi' 
class NewController extends Component {
    constructor(props) {
        super(props)

        this.state = {
            post11: [],
            page10: [],
            post10: [],
            page9: [],
            post9: [],
            page8: [],
            post8: [],
            page7: [],

        }
        this.post = new HomeServices();
    }

    componentDidMount() {
        this.post.getAllPosts8().then(response => {
            this.setState({ post8: response });
        });
        this.post.getAllPages7().then(response => {
            this.setState({ page7: response });
        });
        this.post.getAllPosts9().then(response => {
            this.setState({ post9: response });
        });
        this.post.getAllPages8().then(response => {
            this.setState({ page8: response });
        });
        this.post.getAllPosts10().then(response => {
            this.setState({ post10: response });
        });
        this.post.getAllPages9().then(response => {
            this.setState({ page9: response });
        });
        this.post.getAllPosts11().then(response => {
            this.setState({ post11: response });
        });
        this.post.getAllPages10().then(response => {
            this.setState({ page10: response });
        });
    }
    renderpost8 = () => {
        return this.state.post8.map((post, key) => {
            moment.locale('vi');
            const dd = moment(post.createdatTimestamp).startOf('day').fromNow();
            return (
                <div className="row " key={key}>
                    <div className="col-12">
                        <a href={`/chi-tiet-bai-viet/index=${post.idLong}`}><img src={`/resources/images/posts/${post.imageString}`} width="500px" height="300px" alt="" /></a>
                    </div>
                    <h3 className="ml-2 font-weight-bold"><a title={post.titleString} href={`/chi-tiet-bai-viet/index=${post.idLong}`}>{post.titleString}</a></h3>
                    <h6 className="ml-2 font-weight-bold"><a title={post.createdatTimestamp} href={`/chi-tiet-bai-viet/index=${post.idLong}`}> <i class="far fa-clock"></i> {dd}</a></h6>
                </div>
            );
        });

    }
    renderpage7 = () => {
        return this.state.page7.map((page, key) => {
            return (
                <ul >
                    <li className=" mb-2" key={key} style={{ fontSize: `18px` }}>
                        <a href={`/chi-tiet-trang/index=${page.idLong}`}>{page.titleString}</a>
                    </li><hr />
                </ul>
            );
        });
    }

    renderpost9 = () => {
        return this.state.post9.map((post, key) => {
            moment.locale('vi');
            const dd = moment(post.createdatTimestamp).startOf('day').fromNow();
            return (
                <div className="row " key={key}>
                    <div className="col-12">
                        <a href={`/chi-tiet-bai-viet/index=${post.idLong}`}><img src={`/resources/images/posts/${post.imageString}`} width="500px" height="300px" alt="" /></a>
                    </div>
                    <h3 className="ml-2 font-weight-bold"><a title={post.titleString} href={`/chi-tiet-bai-viet/index=${post.idLong}`}>{post.titleString}</a></h3>
                    <h6 className="ml-2 font-weight-bold"><a title={post.createdatTimestamp} href={`/chi-tiet-bai-viet/index=${post.idLong}`}> <i class="far fa-clock"></i> {dd}</a></h6>
                </div>
            );
        });

    }
    renderpage8 = () => {
        return this.state.page8.map((page, key) => {
            return (
                <ul >
                    <li className=" mb-2" key={key} style={{ fontSize: `18px` }}>
                        <a href={`/chi-tiet-trang/index=${page.idLong}`}>{page.titleString}</a>
                    </li><hr />
                </ul>
            );
        });
    }

    renderpost10 = () => {
        return this.state.post10.map((post, key) => {
            moment.locale('vi');
            const dd = moment(post.createdatTimestamp).startOf('day').fromNow();
            return (
                <div className="row " key={key}>
                    <div className="col-12">
                        <a href={`/chi-tiet-bai-viet/index=${post.idLong}`}><img src={`/resources/images/posts/${post.imageString}`} width="500px" height="300px" alt="" /></a>
                    </div>
                    <h3 className="ml-2 font-weight-bold"><a title={post.titleString} href={`/chi-tiet-bai-viet/index=${post.idLong}`}>{post.titleString}</a></h3>
                    <h6 className="ml-2 font-weight-bold"><a title={post.createdatTimestamp} href={`/chi-tiet-bai-viet/index=${post.idLong}`}> <i class="far fa-clock"></i> {dd}</a></h6>
                </div>
            );
        });

    }
    renderpage9 = () => {
        return this.state.page9.map((page, key) => {
            return (
                <ul >
                    <li className=" mb-2" key={key} style={{ fontSize: `18px` }}>
                        <a href={`/chi-tiet-trang/index=${page.idLong}`}>{page.titleString}</a>
                    </li><hr />
                </ul>
            );
        });
    }

    renderpost11 = () => {
        return this.state.post11.map((post, key) => {
            moment.locale('vi');
            const dd = moment(post.createdatTimestamp).startOf('day').fromNow();
            return (
                <div className="row " key={key}>
                    <div className="col-12">
                        <a href={`/chi-tiet-bai-viet/index=${post.idLong}`}><img src={`/resources/images/posts/${post.imageString}`} width="500px" height="300px" alt="" /></a>
                    </div>
                    <h3 className="ml-2 font-weight-bold"><a title={post.titleString} href={`/chi-tiet-bai-viet/index=${post.idLong}`}>{post.titleString}</a></h3>
                    <h6 className="ml-2 font-weight-bold"><a title={post.createdatTimestamp} href={`/chi-tiet-bai-viet/index=${post.idLong}`}> <i class="far fa-clock"></i> {dd}</a></h6>
                </div>
            );
        });

    }
    renderpage10 = () => {
        return this.state.page10.map((page, key) => {
            return (
                <ul >
                    <li className=" mb-2" key={key} style={{ fontSize: `18px` }}>
                        <a href={`/chi-tiet-trang/index=${page.idLong}`}>{page.titleString}</a>
                    </li><hr />
                </ul>
            );
        });
    }

    render() {
        return (
            <div>
                <ul class="nav nav-tabs" id="myTab" role="tablist">
                    <li class="nav-item" role="presentation">
                        <a class="nav-link active" id="home-tab" data-toggle="tab" href="#home" role="tab" aria-controls="home" aria-selected="true"><h4 class="title-section text-uppercase">Tin Nổi Bật</h4></a>
                    </li>
                    <li class="nav-item" role="presentation">
                        <a class="nav-link" id="profile-tab" data-toggle="tab" href="#profile" role="tab" aria-controls="profile" aria-selected="false"><h4 class="title-section text-uppercase">Tin Tức</h4></a>
                    </li>
                    <li class="nav-item" role="presentation">
                        <a class="nav-link" id="contact-tab" data-toggle="tab" href="#contact" role="tab" aria-controls="contact" aria-selected="false"><h4 class="title-section text-uppercase">Tư Vấn</h4></a>
                    </li>
                    <li class="nav-item" role="presentation">
                        <a class="nav-link" id="fend-tab" data-toggle="tab" href="#fend" role="tab" aria-controls="fend" aria-selected="false"><h4 class="title-section text-uppercase">Phong Thủy</h4></a>
                    </li>
                    <a class=" float-right test2" href={`/tin-tuc`}> Xem thêm tin tức <i class="fas fa-arrow-right"></i> </a>
                </ul>

                <div class="tab-content ml-5" id="myTabContent">
                    <div class="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                        <div className="row" style={{ width: `1100px` }}>
                            <div className="col-6 mt-3" >
                                {this.renderpost8()}
                            </div>
                            <div className="col-6 mt-3">
                                {this.renderpage7()}
                            </div>
                        </div>
                    </div>
                    <div class="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">
                        <div className="row" style={{ width: `1100px` }}>
                            <div className="col-6 mt-3" >
                                {this.renderpost9()}
                            </div>
                            <div className="col-6 mt-3">
                                {this.renderpage8()}
                            </div>
                        </div>
                    </div>
                    <div class="tab-pane fade" id="contact" role="tabpanel" aria-labelledby="contact-tab">
                        <div className="row" style={{ width: `1100px` }}>
                            <div className="col-6 mt-3" >
                                {this.renderpost10()}
                            </div>
                            <div className="col-6 mt-3">
                                {this.renderpage9()}
                            </div>
                        </div>
                    </div>
                    <div class="tab-pane fade" id="fend" role="tabpanel" aria-labelledby="fend-tab">
                        <div className="row" style={{ width: `1100px` }}>
                            <div className="col-6 mt-3" >
                                {this.renderpost11()}
                            </div>
                            <div className="col-6 mt-3">
                                {this.renderpage10()}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}


export default NewController;