

// export default SignIn =({}) => {
//   <span className='signIn-box' >
//       <span onClick={()=>{alert('登录')}}>登录</span>
//       <span onClick={()=>{alert('注册')}}>注册</span>
//   </span>
// }



import React from 'react';
import { Button, Modal } from 'antd';
import './app.less';
export default class SignApp extends React.Component {
  constructor(props){
    super(props);
    this.state={
      ModalText: 'Content of the modal',
      visible: false,
      confirmLoading: false,
    }
  }
  register(type){
    console.log('type',type);
    if(type === 'sign'){
  
    }else{

    }
    this.setState({
      visible: true,
    });
  }
  handleOk(){
    this.setState({
      ModalText: 'The modal will be closed after two seconds',
      confirmLoading: true,
    });
    setTimeout(() => {
      this.setState({
        visible: false,
        confirmLoading: false,
      });
    }, 2000);
  }
  handleCancel(){ 
    this.setState({
      visible: false,
    });
  }
  render() {
    const { visible, confirmLoading, ModalText } = this.state;
    return (
      <span className='signIn-box' >
            <Button  className='sign' onClick={this.register.bind(this,'sign')}>
              登录
            </Button>
            <Button type="primary" 
              className='register'
              onClick={this.register.bind(this,'register')}
            >
              注册
            </Button>
        <Modal
          title="Title"
          visible={visible}
          onOk={this.handleOk.bind(this)}
          confirmLoading={confirmLoading}
          onCancel={this.handleCancel.bind(this)}
        >
          <p>{ModalText}</p>
        </Modal>
      </span>
    );
  }
}