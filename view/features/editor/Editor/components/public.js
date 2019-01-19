import React, {Component} from 'react';
import {Collapse, Avatar,Badge, Card, Input, Button,Dropdown,Icon } from 'antd';
const Panel = Collapse.Panel;

import './style.less';
class Public extends Component {
    constructor(props){
        super(props);
        this.state = {

        }
    }
    render(){
        return(
                <Collapse className={this.props.className}>
                    <Panel header="发布" key="1">
                    <p>dfghjjjjjjjjjjjj</p>
                    </Panel>
                
                </Collapse>
        )
    }
}
export default Public;