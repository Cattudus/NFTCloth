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
          <Panel style={{fontSize:'18px'}} header="What are The Spectral Club?" key="1">
            <p style={{fontSize:'15px', color: 'white'}}>3333 unique and algorithmically generated spectral - stored with proof of ownership stored on the Solana
              blockchain.</p>
          </Panel>
          <Panel style={{fontSize:'18px'}} header="What are CLOTH drops?" key="2">
            <p style={{fontSize:'15px', color: 'white'}}>Each Spectral NFT can drop this. You can then redeem your cloth e.g.(Hoodie, Shirt ...). Sometimes you need to pay for that.  </p>
          </Panel>
          <Panel style={{fontSize:'18px'}} header="Cloth quality nad gender?" key="3">
            <p style={{fontSize:'15px', color: 'white'}}>Each cloth will be from the finest quality we will find. We will try to choose unisex clothes or make one for each gender.  </p>
          </Panel>
          <Panel style={{fontSize:'18px'}} header="How many NFT will be there?" key="4">
            <p style={{fontSize:'15px', color: 'white'}}>There will be 3333 spectral, but 133 spectrals will be kept for promotional purposes. There will never be more
              then 3333 spectrals.</p>
          </Panel>
          <Panel style={{fontSize:'18px'}} header="From how many attributes?" key="5">
            <p style={{fontSize:'15px', color: 'white'}}>Spectrals will be minted from 120 attributes.</p>
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
          <Panel style={{fontSize:'18px'}} header="How do i get SPECTRAL?" key="9">
            <p style={{fontSize:'15px', color: 'white'}}>We will post our mint when it will be ready. Please follow our socials for more information.</p>
          </Panel>
        </Collapse>
      </div>
    </LayoutContent>);
}
