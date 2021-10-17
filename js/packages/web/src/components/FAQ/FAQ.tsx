import React from "react";
import {Collapse} from 'antd';

const {Panel} = Collapse;

export function FAQ() {

  const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;
  return (
    <div style={{paddingTop: '30px'}}>
      <div className="text-header" style={{paddingBottom: '20px'}}> FAQ</div>
      <Collapse>
        <Panel header="This is panel header 1" key="1">
          <p>{text}</p>
        </Panel>
        <Panel header="This is panel header 2" key="2">
          <p>{text}</p>
        </Panel>
        <Panel header="This is panel header 3" key="3">
          <p>{text}</p>
        </Panel>
      </Collapse>
    </div>);
}
