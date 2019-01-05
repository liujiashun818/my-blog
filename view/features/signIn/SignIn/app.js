
// import React, { Component, PropTypes } from 'react'
// import { Icon } from 'antd';
// import './app.less';

// export default SignIn =({}) => {
//   <span className='signIn-box' >
//       <span onClick={()=>{alert('登录')}}>登录</span>
//       <span onClick={()=>{alert('注册')}}>注册</span>
//   </span>
// }



import React from 'react';
import './app.less';
export default class SearchApp extends React.Component {

  render() {
    return (
      <span className='signIn-box' >
            <span onClick={()=>{alert('登录')}}>登录</span>
              <span className='line'></span>
             <span onClick={()=>{alert('注册')}}>注册</span>
      </span>
    );
  }
}