import React  from 'react';
import {
    Form, Icon, Input, Button, Checkbox,Modal,
  } from 'antd';
import './style.less';

export default class Sigin extends React.Component {
    constructor(props){
        super(props);
        this.state={

        }
    }
    componentDidMount(){

    }
    otherSignIn = (event) => {
      // event.cancelBubble = true || event.stopPropagation();

      alert(event);
    }
   render(){
       const{ title, visible, handleCancel,handleOk,register } = this.props;
    //    submit
    return(
        <Modal
            width={320}
            title={title}
            visible={visible}
            // confirmLoading={confirmLoading}
            onCancel={handleCancel}
            footer={null}
            destroyOnClose={false}
        >
            <WrappedNormalLoginForm 
              handleOk={handleOk}
              title={title}
              register={register}
            />
             <footer className='signIn-footer'>
              <p>第三方账号登录:</p>
              <p className='other-signIn'> 
                  <Icon className='other-signIn-flex' onClick={this.otherSignIn.bind(this, 'github')} type="github"/> 
                  <Icon className='other-signIn-flex' onClick={this.otherSignIn.bind(this, 'weibo-circle')} type="weibo-circle"/>
                  <Icon className='other-signIn-flex' onClick={this.otherSignIn.bind(this, 'wechat')} type="wechat"/> 
                  <Icon className='other-signIn-flex' onClick={this.otherSignIn.bind(this, 'qq')} type="qq"/>
                </p>
             </footer>


        </Modal>
    )
  }
}

class FromComponent extends React.Component {
    constructor(props){
        super(props);
    }
    handleSubmit = (e) => {
      const _this = this;
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
          if (!err) {
            _this.props.handleOk(values);
          }
        });
      }
      register = (title) => {
        let value = title === '注册' ? '登录' : '注册';
        this.props.register(value);
      }
      forgetPsd = () => {
        alert('忘记密码');
      } 
      render(){
        const { getFieldDecorator } = this.props.form;
        const {title} = this.props;
        return(
            <Form onSubmit={this.handleSubmit} className="login-form">
              <Form.Item>
                {getFieldDecorator('username', {
                  rules: [{ required: true, message: '请输入用户名!' }],
                })(
                  <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="请输入用户名" />
                )}
              </Form.Item>
              {
                title === '注册' &&
                <Form.Item>
                  {getFieldDecorator('phone', {
                    rules: [{ required: true, message: '请输入手机号!' }],
                  })(
                    <Input prefix={<Icon type="phone" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="请输入手机号" />
                  )}
                </Form.Item>
              }
             {
               title === '注册' &&
                <Form.Item>
                  {getFieldDecorator('email', {
                    rules: [{ required: false, message: '请输入邮箱!' }],
                  })(
                    <Input prefix={<Icon type="mail" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="请输入邮箱" />
                  )}
                </Form.Item>
              }

              <Form.Item>
                {getFieldDecorator('password', {
                  rules: [{ required: true, message: '请输入密码!' }],
                })(
                  <Input.Password  prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="请输入密码（不小于6位）" />
                )}
              </Form.Item>

                <Button style={{width: '100%'}} type="primary" htmlType="submit" className="login-form-button">
                  {title}
                </Button>

              <Form.Item>
              <p className = 'is-have-account' >
                {
                  title === '注册' 
                  ?<a onClick={this.register.bind(this, '注册')}>已有账号登录</a>
                  :
                  <span>
                    <span className='left'>没有账号？<a onClick={this.register.bind(this, '登录')}>注册</a></span> 
                    <a className='right' onClick={this.forgetPsd}>忘记密码</a>
                  </span>
                }
               </p>
              </Form.Item>


          </Form>
        )
      }
}
const WrappedNormalLoginForm = Form.create({ name: 'normal_login' })(FromComponent);