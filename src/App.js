import React, {useState} from 'react';
import {Provider} from 'react-redux';
import store from './redux/store';
import './App.css';
import Content from './components/Content';
import Tabs from "./components/Tabs";

const App = () => {
    window.store = store;
    const [tab, setTab] = useState('users');

    return (
        <Provider store={store}>
            <div className='App'>
                <Tabs
                    tab={tab}
                    setTab={setTab}
                />

                <Content
                    tab={tab}
                />
            </div>
        </Provider>
    );
};

export default App;
