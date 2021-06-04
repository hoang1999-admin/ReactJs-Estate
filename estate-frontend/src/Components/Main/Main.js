import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import CategoryAllContainer from '../../Pages/Container/ItemContainer/CategoryAllContainer';
import ContactContainer from '../../Pages/Container/ItemContainer/ContactContainer';
import Listing_gridCategory from '../../Pages/Container/ItemContainer/Listing_gridCategory';
import ProductDetailContainer from '../../Pages/Container/ItemContainer/ProductDetailContainer';
import SearchContainer from '../../Pages/Container/ItemContainer/SearchContainer';

import HomePage from '../../Pages/HomePage';
import Apply from '../Header/Apply/Apply';
import Blog from '../Header/Blog/Blog';
import Cart from '../Header/Cart/Cart';
import CheckoutCart from '../Header/Checkoutcart/Checkoutcart';
import Example from '../Header/Example/Example';
import FengShui from '../Header/FengShui/FengShui';
import Funiture from '../Header/Furniture/Funiture';
import Profile_address from '../Header/Profile/Profile_address';
import Profile_main from '../Header/Profile/Profile_main';
import Profile_orders from '../Header/Profile/Profile_orders';
import Profile_seller from '../Header/Profile/Profile_seller';
import Profile_setting from '../Header/Profile/Profile_setting';
import User_login from '../Header/User/User_login';
import User_register from '../Header/User/User_register';
import Dashboarch from '../../../src/Admin/Dashboarch/Dashboarch';

export default function Main()
{

    return(
        <main>
        <BrowserRouter>
          <Switch>
           <Route path="/" exact component={HomePage}/>
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
           <Route path="/kiem-tra-gio-hang" component={CheckoutCart} />
           <Route path="/Admin" component={Dashboarch} />
          </Switch>
        </BrowserRouter>
      </main>
    );
}