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
          <Panel header="What are Spooky Spooks?" key="1">
            <p>3333 unique and algorithmically generated spooks - stored with proof of ownership stored on the Solana
              blockchain.</p>
          </Panel>
          <Panel header="What are CLOTH drops?" key="2">
            <p>Each Spooky NFT can drop this. You can then redeem your cloth e.g.(Hoodie, Shirt ...). Sometimes you need to pay for that.  </p>
          </Panel>
          <Panel header="Cloth quality nad gender?" key="3">
            <p>Each cloth will be from the finest quality we will find. We will try to choose unisex clothes or make one for each gender.  </p>
          </Panel>
          <Panel header="How many NFT will be there?" key="4">
            <p>There will be 3333 spooks, but 133 spooks will be kept for promotional purposes. There will never be more
              then 3333 spooks.</p>
          </Panel>
          <Panel header="From how many attributes?" key="5">
            <p>Spooks will be minted from 120 attributes.</p>
          </Panel>
          <Panel header="Will there be a secondary market?" key="6">
            <p>Yes, we will be looking to get listed on DigitalEyes and MagicEden.</p>
          </Panel>
          <Panel header="Is there rarity system?" key="7">
            <p>There are 5 rarity tiers ordered from common, uncommon, rare, epic, legendary </p>
          </Panel>
          <Panel header="How can i know which one is the rarest?" key="8">
            <p>Rarity Sheet will be uploaded after minting finish.</p>
          </Panel>
          <Panel header="How do i get SPOOK?" key="9">
            <p>We will post our mint when it will be ready. Please follow our socials for more information.</p>
          </Panel>
        </Collapse>
      </div>
    </LayoutContent>);
}
