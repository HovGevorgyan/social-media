import React, {useState} from 'react';
import {Provider} from 'react-redux';
import store from './redux/store';
import './App.css';
import Products from "./components/Products";
import Posts from "./components/Posts";
import Test from "./components/Test";

const App = () => {
    window.store = store;
    const [isVisible, setVisible] = useState(true);

    return (
        <Provider store={store}>
            <div className="App">
                {/*<Users*/}
                {/*    isVisible={isVisible}*/}
                {/*    setVisible={setVisible}*/}
                {/*/>*/}
                <Test/>
                <Products
                    isVisible={isVisible}
                />
                <Posts
                    isVisible={isVisible}
                />
            </div>
        </Provider>
    );
};

export default App;
