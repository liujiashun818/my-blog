import React, { Component } from 'react';
import { Collapse, Form, Select, Switch, Row, Button, Col, Checkbox, Radio, Input, Slider } from 'antd';

import './style.less';
// import {
//     Form, Select, InputNumber, Switch, Radio,
//     Slider, Button, Upload, Icon, Rate, Checkbox,
//     Row, Col,
//   } from 'antd';
const Panel = Collapse.Panel;
class Public extends Component {
  constructor(props) {
    super(props);
    this.state = {
      acitve: ['1'],
    };
  }
  submitPublic(e) {
    this.props.savePublicInfo(e);
    // this.changePublic();
  }
  changePublic(e) {
    this.setState({ activeKey: e });
  }
  render() {
    const { activeKey } = this.state; // todo 通过判断是否保存成功再是否关闭
    return (
      <Collapse
        ref={publicDom => this.publicDom = publicDom}
        className={this.props.className}
        onChange={this.changePublic.bind(this)}
        activeKey={activeKey}
      >
        <Panel header="发布" key="1">
          <PublicFromCom submitPublic={this.submitPublic.bind(this)} />
        </Panel>

      </Collapse>
    );
  }
}
export default Public;

class PublicFrom extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  handleSubmit(e) {
    e.preventDefault();
    const _this = this;
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
        _this.props.submitPublic(values);
      }
    });
  }
  render() {
    const { getFieldDecorator } = this.props.form;
    const formItemLayout = {
      labelCol: { span: 24 },
      wrapperCol: { span: 24 },
    };
    return (
      <Form onSubmit={this.handleSubmit.bind(this)}>
        <Form.Item
          {...formItemLayout}
          label={(
            <span className="from-title">文章发布</span>
                    )}
        >
        </Form.Item>

        <Form.Item
          {...formItemLayout}
          label="分类"
        >
          {getFieldDecorator('classify')(<Radio.Group>
            <Radio.Button value="1">html</Radio.Button>
            <Radio.Button value="2">css</Radio.Button>
            <Radio.Button value="3">js</Radio.Button>
            <Radio.Button value="4">其它</Radio.Button>
            <Radio.Button value="5">前端</Radio.Button>
          </Radio.Group>)}
        </Form.Item>

        {/*<Form.Item {...formItemLayout} label="标签">*/}
          {/*{getFieldDecorator('maker', {*/}
                        {/*rules: [{*/}
                        {/*required: this.state.checkNick,*/}
                        {/*message: '标签',*/}
                        {/*}],*/}
                    {/*})(<Input placeholder="请输入一个标签" />)}*/}
        {/*</Form.Item>*/}

        <Form.Item
          wrapperCol={{ span: 12, offset: 6 }}
        >
          <Button type="primary" htmlType="submit">确认并发布</Button>
        </Form.Item>
      </Form>
    );
  }
}
const PublicFromCom = Form.create({ name: 'validate_other' })(PublicFrom);
