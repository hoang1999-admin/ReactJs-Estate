import React from 'react'
import { Switch, Route, BrowserRouter } from "react-router-dom";
import ProductDetailContainer from '../../Pages/Container/ItemContainer/ProductDetailContainer';
import CategoryDetailContainer from '../../Pages/Container/MainContainer/CategoryDetailContainer';
import HomePage from '../../Pages/HomePage';
import UserPage from '../../Pages/userPage';
export default function Main()
{

    return(
        <main>
        <BrowserRouter>
          <Switch>
           <Route path="/" exact component={HomePage}/>
           <Route path="/users/:id" component={UserPage} />
           <Route path="/loai-san-pham/:id" component={CategoryDetailContainer} />
           <Route path="/index=:id" component={ProductDetailContainer} />
          </Switch>
        </BrowserRouter>
      </main>
    );
}