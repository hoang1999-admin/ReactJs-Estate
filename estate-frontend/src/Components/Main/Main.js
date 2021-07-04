import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import CategoryAllContainer from '../../Pages/Container/ItemContainer/CategoryAllContainer';
import ContactContainer from '../../Pages/Container/ItemContainer/ContactContainer';
import Listing_gridCategory from '../../Pages/Container/ItemContainer/Listing_gridCategory';
import ProductDetailContainer from '../../Pages/Container/ItemContainer/ProductDetailContainer';
import SearchContainer from '../../Pages/Container/ItemContainer/SearchContainer';

import HomePage from '../../Pages/HomePage';
import Apply from '../Header/Menu/Apply/Apply';
import Blog from '../Header/Menu/Blog/Blog';
import Cart from '../Header/Menu/Cart/Cart';
import CheckoutCart from '../Header/Menu/Checkoutcart/Checkoutcart';
import Example from '../Header/Menu/Example/Example';
import FengShui from '../Header/Menu/FengShui/FengShui';
import Funiture from '../Header/Menu/Furniture/Funiture';
import Profile_address from '../Header/Menu/Profile/Profile_address';
import Profile_main from '../Header/Menu/Profile/Profile_main';
import Profile_orders from '../Header/Menu/Profile/Profile_orders';
import Profile_seller from '../Header/Menu/Profile/Profile_seller';
import Profile_setting from '../Header/Menu/Profile/Profile_setting';
import User_login from '../Header/Menu/User/User_login';
import User_register from '../Header/Menu/User/User_register';
import Dashboarch from '../../../src/Admin/Dashboarch/Dashboarch';
import Save from '../Header/Menu/Save/Save';
import Test from '../Header/Menu/test';
import Test2 from '../Header/Menu/test2';
import Test3 from '../Header/Menu/test3';

import BlogDetail from '../Header/Menu/Blog/BlogDetail';
import PageDetail from '../Header/Menu/Blog/PageDetail';
import PostDetail from '../Header/Menu/Blog/PostDetail';


import UpdateProduct from '../../Admin/Product/UpdateProduct';
import CreateProduct from '../../Admin/Product/CreateProduct';
import IndexProduct from '../../Admin/Product/IndexProduct';
import TrashProduct from '../../Admin/Product/TrashProduct';

import IndexCategory from '../../Admin/Category/IndexCategory';
import CreateCategory from '../../Admin/Category/CreateCategory';
import UpdateCategory from '../../Admin/Category/UpdateCategory';
import TrashCategory from '../../Admin/Category/TrashCategory';

import CreateEmail from '../../Admin/Email/CreateEmail';
import IndexEmail from '../../Admin/Email/IndexEmails';
import UpdateEmail from '../../Admin/Email/UpdateEmail';
import TrashEmail from '../../Admin/Email/TrashEmail';

import IndexContact from '../../Admin/Contact/IndexContacts';
import CreateContact from '../../Admin/Contact/CreateContact';
import UpdateContact from '../../Admin/Contact/UpdateContact';
import TrashContact from '../../Admin/Contact/TrashContact';

import IndexSlider from '../../Admin/Slider/IndexSliders';
import CreateSlider from '../../Admin/Slider/CreateSlider';
import UpdateSlider from '../../Admin/Slider/UpdateSlider';
import TrashSlider from '../../Admin/Slider/TrashSlider';

import IndexPhoto from '../../Admin/Photo/IndexPhotos';
import CreatePhoto from '../../Admin/Photo/CreatePhoto';
import UpdatePhoto from '../../Admin/Photo/UpdatePhoto';
import TrashPhoto from '../../Admin/Photo/TrashPhoto';

import IndexArea from '../../Admin/Area/IndexAreas';
import CreateArea from '../../Admin/Area/CreateArea';
import UpdateArea from '../../Admin/Area/UpdateArea';
import TrashArea from '../../Admin/Area/TrashArea';

import IndexProductRelations from '../../Admin/ProductRelation/IndexProductRelations';
import CreateProductRelation from '../../Admin/ProductRelation/CreateProductRelation';
import UpdateProductRelation from '../../Admin/ProductRelation/UpdateProductRelation';
import TrashProductRelation from '../../Admin/ProductRelation/TrashProductRelation';

import IndexRequest from '../../Admin/Request/IndexRequests';
import CreateRequest from '../../Admin/Request/CreateRequest';
import UpdateRequest from '../../Admin/Request/UpdateRequest';
import TrashRequest from '../../Admin/Request/TrashRequest';

import IndexRole from '../../Admin/Role/IndexRoles';
import CreateRole from '../../Admin/Role/CreateRole';
import UpdateRole from '../../Admin/Role/UpdateRole';
import TrashRole from '../../Admin/Role/TrashRole';

import IndexUser from '../../Admin/User/IndexUsers';
import CreateUser from '../../Admin/User/CreateUser';
import UpdateUser from '../../Admin/User/UpdateUser';
import TrashUser from '../../Admin/User/TrashUser';

import IndexUserRole from '../../Admin/User_Role/IndexUserRoles';
import CreateUserRole from '../../Admin/User_Role/CreateUserRole';
import Updateuserrole from '../../Admin/User_Role/UpdateUserRole';
import TrashUserRole from '../../Admin/User_Role/TrashUserRole';

import IndexBlog from '../../Admin/Blog/IndexBlog';
import CreateBlog from '../../Admin/Blog/CreateBlog';
import UpdateBlog from '../../Admin/Blog/UpdateBlog';
import TrashBlog from '../../Admin/Blog/TrashBlog';

import IndexPage from '../../Admin/Page/IndexPage';
import CreatePage from '../../Admin/Page/CreatePage';
import UpdatePage from '../../Admin/Page/UpdatePage';
import TrashPage from '../../Admin/Page/TrashPage';

import IndexPost from '../../Admin/Post/IndexPost';
import CreatePost from '../../Admin/Post/CreatePost';
import UpdatePost from '../../Admin/Post/UpdatePost';
import TrashPost from '../../Admin/Post/TrashPost';




export default function Main() {
  return (
    <main>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/loai-san-pham/index=:id" component={CategoryAllContainer} />
          <Route path="/tuyen-dung/index=:id" component={Apply} />
          <Route path="/noi-va-ngoai-that/index=:id" component={Funiture} />
          <Route path="/phong-thuy/index=:id" component={FengShui} />
          <Route path="/tin-tuc/index=:id" component={Blog} />
          <Route path="/du-an/index=:id" component={Example} />
          <Route path="/loai-san-pham" component={CategoryAllContainer} />.
          <Route path="/danh-sach" component={Listing_gridCategory} />
          <Route path="/index=:id" component={ProductDetailContainer} />
          <Route path="/thong-tin-ca-nhan" component={Profile_main} />
          <Route path="/dia-chi-cua-toi" component={Profile_address} />
          <Route path="/don-dat-hang-cua-toi" component={Profile_orders} />
          <Route path="/cac-mat-hang-ban-chay" component={Profile_seller} />
          <Route path="/cai-dat" component={Profile_setting} />
          <Route path="/email" component={Profile_main} />
          <Route path="/email/index=:id" component={Profile_main} />
          <Route path="/dang-nhap" component={User_login} />
          <Route path="/dang-ky" component={User_register} />
          <Route path="/lien-he" component={ContactContainer} />
          <Route path="/tim-kiem" component={SearchContainer} />
          <Route path="/gio-hang" component={Cart} />
          <Route path="/luu" component={Save} />
          <Route path="/kiem-tra-gio-hang" component={CheckoutCart} />
          <Route path="/Admin" component={Dashboarch} />
          <Route path="/test" component={Test} />
          <Route path="/test2" component={Test2} />
          <Route path="/test3" component={Test3} />
          <Route path="/chi-tiet/index=:id" component={BlogDetail} />
          <Route path="/chi-tiet-trang/index=:id" component={PageDetail} />
          <Route path="/chi-tiet-bai-viet/index=:id" component={PostDetail} />
          <Route path="/tin-tuc" component={Blog} />

          {/*  Admin */}

          {/* Product */}
          <Route path="/update-product/index=:id" component={UpdateProduct} />
          <Route path="/add-product" component={CreateProduct} />
          <Route path="/list-product" component={IndexProduct} />
          <Route path="/trash-product" component={TrashProduct} />

          {/* Category */}
          <Route path="/list-category" component={IndexCategory} />
          <Route path="/add-category" component={CreateCategory} />
          <Route path="/update-category/index=:id" component={UpdateCategory} />
          <Route path="/trash-category" component={TrashCategory} />
          {/* Email */}
          <Route path="/list-email" component={IndexEmail} />
          <Route path="/add-email" component={CreateEmail} />
          <Route path="/update-email/index=:id" component={UpdateEmail} />
          <Route path="/trash-email" component={TrashEmail} />
          {/* Contact */}
          <Route path="/list-contact" component={IndexContact} />
          <Route path="/add-contact" component={CreateContact} />
          <Route path="/update-contact/index=:id" component={UpdateContact} />
          <Route path="/trash-contact" component={TrashContact} />
          {/* Slider */}
          <Route path="/list-slider" component={IndexSlider} />
          <Route path="/add-slider" component={CreateSlider} />
          <Route path="/update-slider/index=:id" component={UpdateSlider} />
          <Route path="/trash-slider" component={TrashSlider} />
          {/* Photo */}
          <Route path="/list-photo" component={IndexPhoto} />
          <Route path="/add-photo" component={CreatePhoto} />
          <Route path="/update-photo/index=:id" component={UpdatePhoto} />
          <Route path="/trash-photo" component={TrashPhoto} />
          {/* Area */}
          <Route path="/list-area" component={IndexArea} />
          <Route path="/add-area" component={CreateArea} />
          <Route path="/update-area/index=:id" component={UpdateArea} />
          <Route path="/trash-area" component={TrashArea} />
          {/* ProductRelation */}
          <Route path="/list-productrelation" component={IndexProductRelations} />
          <Route path="/add-productrelation" component={CreateProductRelation} />
          <Route path="/update-productrelation/index=:id" component={UpdateProductRelation} />
          <Route path="/trash-productrelation" component={TrashProductRelation} />
          {/* Request */}
          <Route path="/list-request" component={IndexRequest} />
          <Route path="/add-request" component={CreateRequest} />
          <Route path="/update-request/index=:id" component={UpdateRequest} />
          <Route path="/trash-request" component={TrashRequest} />
          {/* User */}
          <Route path="/list-user" component={IndexUser} />
          <Route path="/add-user" component={CreateUser} />
          <Route path="/update-user/index=:id" component={UpdateUser} />
          <Route path="/trash-user" component={TrashUser} />
          {/* Role */}
          <Route path="/list-role" component={IndexRole} />
          <Route path="/add-role" component={CreateRole} />
          <Route path="/update-role/index=:id" component={UpdateRole} />
          <Route path="/trash-role" component={TrashRole} />
          {/* User_Role */}
          <Route path="/list-userrole" component={IndexUserRole} />
          <Route path="/add-userrole" component={CreateUserRole} />
          <Route path="/update-userrole/index=:id" component={Updateuserrole} />
          <Route path="/trash-userrole" component={TrashUserRole} />
           {/* Blog*/}
           <Route path="/list-blog" component={IndexBlog} />
          <Route path="/add-blog" component={CreateBlog} />
          <Route path="/update-blog/index=:id" component={UpdateBlog} />
          <Route path="/trash-blog" component={TrashBlog} />
           {/* Post */}
           <Route path="/list-post" component={IndexPost} />
          <Route path="/add-post" component={CreatePost} />
          <Route path="/update-post/index=:id" component={UpdatePost} />
          <Route path="/trash-post" component={TrashPost} />
           {/* Page */}
           <Route path="/list-page" component={IndexPage} />
          <Route path="/add-page" component={CreatePage} />
          <Route path="/update-page/index=:id" component={UpdatePage} />
          <Route path="/trash-page" component={TrashPage} />
        </Switch>
      </BrowserRouter>
    </main>
  );
}