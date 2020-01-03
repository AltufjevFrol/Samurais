import React from 'react';
import './App.css';
import Header from './components/header/header.jsx';
import Navbar from './components/navbar/navbar.jsx';
import Profile from './components/profile/profile.jsx';
import Dialogs from './components/dialogs/dialogs.jsx';
import {Route, BrowserRouter} from 'react-router-dom';

function App() {
    return (
        <BrowserRouter>
            < div className="app-wraper">
                < Header/>
                < Navbar/>
                < div className="app-wraper-content">
                    <Route exact path="/profile" component={Profile}/>
                    <Route path="/dialogs" component={Dialogs}/>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
