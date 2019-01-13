
import React from 'react';
import { Icon } from 'antd';
import './app.less';
export default class NewsApp extends React.Component {
  
  componentDidMount(){
    // let num = {
    //   username: "15801523928",	
    //   password:"1234",
    //   email:"12345@qq.com"
    // }
    // this.props.query(num);
  }
  render() {
    return (
      <span className='news' onClick={()=>{alert('news')}}>
        新闻
      </span> 
    );
  }
}