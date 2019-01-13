
import React from 'react';
import { Icon } from 'antd';
import { Link } from 'react-router-dom';
import './app.less';
export default class WriteArticleApp extends React.Component {
  constructor(props){
      super(props);
  }
  // }
  componentDidMount(){
    // let num = {
    //   username: "15801523928",	
    //   password:"1234",
    //   email:"12345@qq.com"
    // }
    // this.props.query(num);
  }
  openEditorPage(){
    // console.log(this.routerObj, 'oooo');
    // let routerObj = this.props.routerObj;
    // console.log('ddd',routerObj)
    // routerObj.history.push('./editor');
  }
  render() { 
    return (
      <span className='writeArticle' onClick={this.openEditorPage.bind(this)}>
        <Link to='/editor'><Icon type="edit" />写文章</Link>
      </span> 
    );
  }
}