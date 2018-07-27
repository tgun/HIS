import React from 'react';
import './App.css';

import {BrowserRouter, Route, Switch} from 'react-router-dom'

import IndexPage from './Pages/page_index';
import AboutPage from './Pages/page_about';
import ReviewsPage from './Pages/page_reviews';
import ServicesPage from './Pages/page_services';
import ContactPage from './Pages/page_contact';
import FaqPage from './Pages/page_faq';
import BookingPage from './Pages/page_book';

import Footer from './Components/footer';

const App = () => {
    return (
        <div className="off-canvas-content" data-off-canvas-content>
            <BrowserRouter>
                <Switch>
                    <Route path="/services" component={ServicesPage}/>
                    <Route path="/contact" component={ContactPage}/>
                    <Route path="/reviews" component={ReviewsPage}/>
                    <Route path="/about" component={AboutPage}/>
                    <Route path="/booking" component={BookingPage}/>
                    <Route path="/faq" component={FaqPage}/>
                    <Route path="/" component={IndexPage}/>
                </Switch>
            </BrowserRouter>
            <Footer/>
        </div>
    );
};

export default App;
