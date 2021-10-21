import React from "react";
import {Collapse} from 'antd';

const {Panel} = Collapse;

export function FAQ() {

  return (
    <div style={{paddingTop: '30px'}} id="FAQ">
      <div className="text-header" style={{paddingBottom: '20px'}}> FAQ</div>
      <Collapse>
        <Panel header="What are Spooky Spooks?" key="1">
          <p>3333 unique and algorithmically generated spooks - stored with proof of ownership stored on the Solana blockchain.</p>
        </Panel>
        <Panel header="How many NFT will be there?" key="2">
          <p>There will be 3333 spooks, but 133 spooks will be kept for promotional purposes. There will never be more then 3333 spooks.</p>
        </Panel>
        <Panel header="From how many attributes?" key="3">
          <p>Spooks will be minted from 120 attributes.</p>
        </Panel>
        <Panel header="How can i know which one is the rarest?" key="4">
          <p>Rarity Sheet will be uploaded after minting finish.</p>
        </Panel>
        <Panel header="How do i get SPOOK?" key="5">
          <p>We will post our mint when it will be ready. Please follow our socials for more information.</p>
        </Panel>
      </Collapse>
    </div>);
}
