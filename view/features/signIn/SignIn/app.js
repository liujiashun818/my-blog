

// export default SignIn =({}) => {
//   <span className='signIn-box' >
//       <span onClick={()=>{alert('登录')}}>登录</span>
//       <span onClick={()=>{alert('注册')}}>注册</span>
//   </span>
// }


import React from 'react';
import { Button, Modal } from 'antd';
import Sigin from './component/signin';
import AvatarComponent from '../../../components/avatar';
import './app.less';

export default class SignApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ModalText: 'Content of the modal',
      visible: false,
      confirmLoading: false,
    };
  }
  register = (type) => {
    console.log('type', type);
    // if(type === 'sign'){
    //   this.setState({title:type});
    // }else{

    // }
    this.setState({
      title: type,
      visible: true,
    });
  }
  handleOk = (value) => {
    const _this = this;
    // this.setState({
    //   ModalText: 'The modal will be closed after two seconds',
    //   confirmLoading: true,
    // });
    // setTimeout(() => {
    //   this.setState({
    //     visible: false,
    //     confirmLoading: false,
    //   });
    // }, 2000);
    if (this.state.title === '登录') {
      _this.props.userSigin(value);
    } else {
      _this.props.userRegirst(value);
    }
  }
  handleCancel = () => {
    this.setState({
      visible: false,
    });
  }
  render() {
    const {
      visible, title, confirmLoading, ModalText,
    } = this.state;
    const { signOut } = this.props;
    // console.log('valsssssssue', this.props);
    const user_id = window.sessionStorage.getItem('user_id');
    console.log('user_id??', user_id);
    return (
      <span className="signIn-box" >
        {
          (user_id !== 'undefined')
              ? <AvatarComponent signOut={signOut} />
              : <span>
                  <Button className="sign" onClick={this.register.bind(this, '登录')}>
                  登录
                  </Button>
                  <Button
                    type="primary"
                    className="register"
                    onClick={this.register.bind(this, '注册')}
                  >
                  注册
                  </Button>
                      <Sigin
                          title={title}
                          visible={visible}
                          handleCancel={this.handleCancel}
                          handleOk={this.handleOk}
                          register={this.register}
                      />
                </span>
          }

      </span>
    );
  }
}
