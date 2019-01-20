

import { Icon } from 'antd';
import './app.less';
import React,{ Component} from 'react';

import HeaderComponent from '../../../components/header/index.js';
import Topic from './topic/Topic';

import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom';

export default class DetailApp extends Component{
    render(){
        return (
            <div className='detail' >

            <HeaderComponent/>
              <Link to='/detail'> 详情 </Link>
                 
                {/* <ul>
                    <li>
                        <Link to={`${this.props.match.url}/rendering`}>
                            使用 React 渲染
                        </Link>
                    </li>
                    <li>
                        <Link to={`${this.props.match.url}/components`}>
                            组件
                        </Link>
                    </li>
                    <li>
                        <Link to={`${this.props.match.url}/props-v-state`}>
                            属性 v. 状态
                        </Link>
                    </li>
                </ul>

                <Route path={`${this.props.match.url}/:topicId`} component={Topic}/>
                <Route exact path={this.props.match.url} render={() => (
                    <h3>请选择一个主题。</h3>
                )}/> */}
            </div>
        )
    }
}