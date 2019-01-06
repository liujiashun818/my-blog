
import React from 'react';
import { Icon } from 'antd';
import './app.less';
export default class TopicApp extends React.Component {
  
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
      <span className='topic' onClick={()=>{alert('topic')}}>
        话题
      </span> 
    );
  }
}