import React from 'react';
import { Provider } from 'react-redux';
import PropTypes from 'prop-types';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import { ConnectedRouter } from 'react-router-redux';
import App from '../containers/App/App'

// function getRouteConfig(Container, routes, contextPath) {
//     console.log('routesConfig',routes)
//     const children = []; // children component list
//     const renderRoute = (item, routeContextPath) => {
//       let newContextPath;
//       if (/^\//.test(item.path)) {
//         newContextPath = item.path;
//       } else {
//         newContextPath = `${routeContextPath}/${item.path}`;
//       }
//       newContextPath = newContextPath.replace(/\/+/g, '/');
//       if (item.component && item.childRoutes) {
//         children.push(getRouteConfig(item.component, item.childRoutes, newContextPath));
//       } else if (item.component) {
//         children.push(<Route key={newContextPath} component={item.component} path={newContextPath} exact />);
//       } else if (item.childRoutes) {
//         item.childRoutes.forEach(r => renderRoute(r, newContextPath));
//       }
//     };
  
//     routes.forEach(item => renderRoute(item, contextPath));
//     if (!Container) return <Switch>{children}</Switch>;
//     return (   
//         <Container key={contextPath}>
//             <Switch>{children}</Switch>
//         </Container>
//     );
//   }

export default class RootDev extends React.Component {
    constructor(props){
        super(props);
        this.state = {
    
        }
    }
    render(){
        // const children = getRouteConfig(null,this.props.routeConfig,'/')
        return (
             <Provider store={this.props.store}> 
              <BrowserRouter
                  forceRefresh={false}
                  keyLength={6}
             >
                  <App />
                  {/* {children} */}
              </BrowserRouter>
            </Provider>   
        )
    }
}