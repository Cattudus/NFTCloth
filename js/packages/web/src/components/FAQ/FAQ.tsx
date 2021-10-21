import React from "react";
import {Collapse} from 'antd';

const {Panel} = Collapse;

export function FAQ() {

  return (
    <div style={{paddingTop: '30px'}} id="FAQ">
      <div className="text-header" style={{paddingBottom: '20px'}}> FAQ</div>
      <Collapse>
        <Panel header="This is panel header 1" key="1">
          <p>dasd</p>
        </Panel>
        <Panel header="This is panel header 2" key="2">
          <p>asdas</p>
        </Panel>
        <Panel header="This is panel header 3" key="3">
          <p>asdas</p>
        </Panel>
      </Collapse>
    </div>);
}
