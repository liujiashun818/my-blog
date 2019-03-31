
import React from 'react';
import { Card, Calendar } from 'antd';
import './app.less';
export default class BaseInfo extends React.Component {
  
  componentDidMount(){

  }

  render() {
    return (
      <Card className='baseInfo' title={this.props.title} bordered={false}>
        <Calendar fullscreen={false} />
      </Card>
    );
  }
}