import React from 'react';
import './App.css';
import Header from './components/header/header.jsx';
import Navbar from './components/navbar/navbar.jsx';
import Profile from './components/profile/profile.jsx';
import Dialogs from './components/dialogs/dialogs.jsx';
import {Route} from 'react-router-dom';

function App(props) {
    let data = props.data;
    let callbacks = props.callbacks;
    let refDialogs = React.createRef();
    return (
        < div className="app-wraper">
            < Header/>
            < Navbar/>
            < div className="app-wraper-content">
                <Route exact path="/profile" render={(props) => (<Profile {...props} data={data.profile.postsData}/>)}/>
                <Route path="/dialogs" render={(props) => (
                    <Dialogs {...props}
                             data={data.dialogs}
                             callbacks={callbacks}
                             ref={refDialogs}
                             refDialogs={refDialogs}
                    />)}
                />
            </div>
        </div>
    );
}

export default App;
