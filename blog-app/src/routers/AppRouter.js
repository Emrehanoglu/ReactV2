import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Header from '../components/Header'
import HomePage from '../components/HomePage'
import BlogListPage from '../components/BlogListPage'
import BlogDetailsPage from '../components/BlogDetailsPage'
import ContactPage from '../components/ContactPage'
import NotFoundPage from '../components/NotFoundPage'

const AppRouter = () => {
  return (
    <BrowserRouter>
        <div>
            <Header></Header> {/* header component */}
            <Switch> {/* sadece 1 tane componentin gözükmesini istediğimiz componentler burada 
            yazılacak, url ile gidilecek componentler, routes ayarı */}
              <Route path="/" component={HomePage} exact></Route>
              {/* exact: / ile karşılaştığı ilk componenti getirdiği için hep HomePage geliyordu,
              exact ile bunun onune gecildi. */}
              <Route path="/blogs" component={BlogListPage} exact></Route>
              {/* exact' i burada da verdim cunku /blogs gorulduğu an BlogListPage' e gidiyor,
              /blogs/:id 'ye gidebilmesi için exact eklenmiş oldu */}
              <Route path="/blogs/:id" component={BlogDetailsPage}></Route>
              <Route path="/contact" component={ContactPage}></Route>
              <Route component={NotFoundPage}></Route>
            </Switch>
        </div>
    </BrowserRouter>
  )
}

export default AppRouter