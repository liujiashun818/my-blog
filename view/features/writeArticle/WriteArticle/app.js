
import React from 'react';
import { Icon } from 'antd';
import './app.less';
export default class WriteArticleApp extends React.Component {
  
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
      <span className='writeArticle' onClick={()=>{alert('edit')}}>
        <Icon type="edit" />  写文章
      </span> 
    );
  }
}