import React from 'react';
import './App.css';
import Header from './components/header/header.jsx';
import Navbar from './components/navbar/navbar.jsx';
import Profile from './components/profile/profile.jsx';
import Dialogs from './components/dialogs/dialogs.jsx';
import {Route, BrowserRouter, Switch} from 'react-router-dom';

function App(props) {
    let messages = props.messages;
    let dialogs = props.dialogs;
    let callback = props.callback;

    return (
        <BrowserRouter>
            < div className="app-wraper">
                < Header/>
                < Navbar/>
                < div className="app-wraper-content">
                    <Route exact path="/profile" render={(props)=>(<Profile {...props} messages={messages} callback={callback} />)}/>
                    <Route path="/dialogs" render={(props)=> (<Dialogs {...props} messages={messages} dialogs={dialogs} />)}/>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
