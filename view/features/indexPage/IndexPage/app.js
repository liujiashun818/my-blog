
import React from 'react';
import { Tabs } from 'antd';

const TabPane = Tabs.TabPane;

import ListApp  from '../component/list.js';
import './app.less';
import { from } from 'array-flatten';
export default class IndexPageApp extends React.Component {
  
  componentDidMount(){

  }
  render() {
    return (
      <div className="indexPage">
      <Tabs type="card">
        <TabPane tab="最新" key="1">
            <ListApp />
        </TabPane>
        <TabPane tab="html" key="2">
          <p>html</p>
          
        </TabPane>
        <TabPane tab="css" key="3">
          <p>css</p>
        </TabPane>
        <TabPane tab="javaScript" key="4">
           javaScript
        </TabPane>
        <TabPane tab="react" key="5">
           react
        </TabPane>
        <TabPane tab="nodeJs" key="6">
          nodeJs
        </TabPane>
        <TabPane tab="mongdb" key="7">
          mongdb
        </TabPane>
        <TabPane tab="git" key="8">
          git
        </TabPane>
      </Tabs>
    </div>
    );
  }
}