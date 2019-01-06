
import React from 'react';
import { Card } from 'antd';
import './app.less';
export default class BaseInfo extends React.Component {
  
  componentDidMount(){

  }
  render() {
    return (
      <Card className='baseInfo' title="基本信息" bordered={false}>
         基本信息
      </Card>
    );
  }
}