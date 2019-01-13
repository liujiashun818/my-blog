import React from 'react';
import { Provider } from 'react-redux';
import {BrowserRouter } from 'react-router-dom';
import App from '../containers/App/App'

export default class RootDev extends React.Component {
    constructor(props){
        super(props);
        this.state = {
    
        }
    }
    render(){
        return (
             <Provider store={this.props.store}> 
              <BrowserRouter forceRefresh={false}  keyLength={6}>
                  <App />
              </BrowserRouter>
            </Provider>   
        )
    }
}