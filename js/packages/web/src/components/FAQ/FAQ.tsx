import React from "react";
import {Collapse} from 'antd';
import {LayoutContent} from "../Layout";

const {Panel} = Collapse;

export function FAQ() {

  return (
    <LayoutContent>
      <div style={{paddingTop: '30px'}} id="FAQ">
        <div className="text-header" style={{paddingBottom: '20px'}}> FAQ</div>
        <Collapse>
          <Panel style={{fontSize:'18px'}} header="What is The Spectral Club?" key="1">
            <p style={{fontSize:'15px', color: 'white'}}>3333 unique and algorithmically generated specters that you will be able to have them on clothes.</p>
          </Panel>
          <Panel style={{fontSize:'18px'}} header="What are CLOTHES drops?" key="2">
            <p style={{fontSize:'15px', color: 'white'}}>Each Spectre NFT can drop this. You can then redeem your clothes e.g.(Hoodie, Shirt ...). There will be free drops or paid drops.  </p>
          </Panel>
          <Panel style={{fontSize:'18px'}} header="Clothing quality and type?" key="3">
            <p style={{fontSize:'15px', color: 'white'}}>Each clothing will be from the finest quality we will find. We will try to choose unisex clothes or make one for each gender.  </p>
          </Panel>
          <Panel style={{fontSize:'18px'}} header="How many NFT will be there?" key="4">
            <p style={{fontSize:'15px', color: 'white'}}>There will be 3333 spectres, but 133 spectres will be kept for promotional purposes. There will never be more
              then 3333 spectres.</p>
          </Panel>
          <Panel style={{fontSize:'18px'}} header="From how many attributes?" key="5">
            <p style={{fontSize:'15px', color: 'white'}}>Spectres will be minted from 120 attributes.</p>
          </Panel>
          <Panel style={{fontSize:'18px'}} header="Will there be a secondary market?" key="6">
            <p style={{fontSize:'15px', color: 'white'}}>Yes, we will be looking to get listed on DigitalEyes and MagicEden.</p>
          </Panel>
          <Panel style={{fontSize:'18px'}} header="Is there rarity system?" key="7">
            <p style={{fontSize:'15px', color: 'white'}}>There are 5 rarity tiers ordered from common, uncommon, rare, epic, legendary </p>
          </Panel>
          <Panel style={{fontSize:'18px'}} header="How can i know which one is the rarest?" key="8">
            <p style={{fontSize:'15px', color: 'white'}}>Rarity Sheet will be uploaded after minting finish.</p>
          </Panel>
          <Panel style={{fontSize:'18px'}} header="How do i get SPECTRE?" key="9">
            <p style={{fontSize:'15px', color: 'white'}}>Mint will be on 24. November at 20:00 CET </p>
          </Panel>
        </Collapse>
      </div>
    </LayoutContent>);
}
