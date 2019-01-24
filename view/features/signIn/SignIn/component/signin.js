import React  from 'react';
import {
    Form, Icon, Input, Button, Checkbox,Modal,
  } from 'antd';
export default class Sigin extends React.Component {
    constructor(props){
        super(props);
        this.state={

        }
    }
    componentDidMount(){

    }

   render(){
       const{ title, visible, handleCancel,submit,register } = this.props;
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
             handleSubmit={submit}
             title={title}
             register={register}
             />
        </Modal>
    )
  }
}

class FromComponent extends React.Component {
    constructor(props){
        super(props);
    }
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
          if (!err) {
            console.log('Received values of form: ', values);
            this.props(handleSubmit);
          }
        });
      }
      register = (title) => {
        let value = title === '注册' ? '登录' : '注册';
        this.props.register(value);
      }
      render(){
        const { getFieldDecorator } = this.props.form;
        const {title} = this.props;
        return(
            <Form onSubmit={this.handleSubmit} className="login-form">
            <Form.Item>
              {getFieldDecorator('userName', {
                rules: [{ required: true, message: 'Please input your username!' }],
              })(
                <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Username" />
              )}
            </Form.Item>
            <Form.Item>
              {getFieldDecorator('password', {
                rules: [{ required: true, message: 'Please input your Password!' }],
              })(
                <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="Password" />
              )}
            </Form.Item>
            <Form.Item>
              {getFieldDecorator('remember', {
                valuePropName: 'checked',
                initialValue: true,
              })(
                <Checkbox>Remember me</Checkbox>
              )}
              <a className="login-form-forgot">忘记密码</a>
              <Button type="primary" htmlType="submit" className="login-form-button">
                {title}
              </Button>
              Or <a onClick={this.register.bind(this, title)}>{title === '登录' ? '注册': '登录'}</a>
            </Form.Item>
          </Form>
        )
      }
}
const WrappedNormalLoginForm = Form.create({ name: 'normal_login' })(FromComponent);