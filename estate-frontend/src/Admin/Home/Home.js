import React, { Component } from 'react';
import { connect } from "react-redux";
import { logout } from "../../Components/Header/ActionAuth/Auth";
import { clearMessage } from "../../Components/Header/ActionAuth/Message";
import { Router } from "react-router-dom";
import { history } from '../../Components/Header/HelperssAuth/History';
class Home extends Component {
    constructor(props) {
        super(props);

        this.state = {
           
            currentUser: undefined,
        };
     
        this.logOut = this.logOut.bind(this);

        history.listen((location) => {
            props.dispatch(clearMessage()); // clear message when changing location
        });
    }
    componentDidMount() {
        const user = this.props.user;

        if (user) {
            this.setState({
                currentUser: user

            });
        }
    }
    logOut() {
        this.props.dispatch(logout());
    }
    render() {
        return (
            <ul>
            <li class="list-group-item list-group-item-action"><a href="/list-product">Sản phẩm</a></li>
            <li class="list-group-item list-group-item-action"><a href="/list-category">Loại sản phẩm</a></li>
            <li class="list-group-item list-group-item-action"><a href="/list-email">E-mail</a></li>
            <li class="list-group-item list-group-item-action"><a href="/list-contact">Liên hệ</a></li>
            <li class="list-group-item list-group-item-action"><a href="/list-slider">Slider</a></li>
            <li class="list-group-item list-group-item-action"><a href="/list-photo">Hình ảnh</a></li>
            <li class="list-group-item list-group-item-action"><a href="/list-area">Khu vực</a></li>
            <li class="list-group-item list-group-item-action"><a href="/list-productrelation">Sản phẩm liên quan</a></li>
            <li class="list-group-item list-group-item-action"><a href="/list-request">Yêu cầu</a></li>
            <li class="list-group-item list-group-item-action"><a href="/list-blog">Blog</a></li>
            <li class="list-group-item list-group-item-action"><a href="/list-post">Tin tức</a></li>
            <li class="list-group-item list-group-item-action"><a href="/list-page">bài viết</a></li>
            <li class="list-group-item list-group-item-action"><a href="/list-role">Vai trò</a></li>
            <li class="list-group-item list-group-item-action"><a href="/list-userrole">Vai trò và thành viên</a></li>
            <li class="list-group-item list-group-item-action"><a href="/list-user">Thành viên</a></li>
            <li class="list-group-item list-group-item-action" onClick={this.logOut}><a href="/">Đăng xuất</a></li>
        </ul>
        );
    }
}
function mapStateToProps(state) {
    const { user } = state.auth;
    return {
        user,
    };
}


export default connect(mapStateToProps)(Home);
