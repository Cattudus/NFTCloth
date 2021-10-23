import React, {FC, useState} from "react";
import {LayoutContent} from "../Layout";
import {Layout} from "antd";

export const aboutUs: string = "The Spectral Club is a collection of 3333 Spectral NFT Ghosts. Every Spectral is algorithmically generated and completely unique. "
export const aboutUs2: string = "But we don't offer to you just NFTs, with our NFT you can have a special CLOTHES that you can obtain by drops."

export function WhyUs() {
  return (
    <LayoutContent>
    <div style={{paddingTop: '10%'}}>
      <div className="text-header"> NFT CLOTH DROPS?</div>
      <p className="inside-text">Our CLOTH DROPS are something special.</p>
      <div style={{paddingTop: '10px'}}>
        <p className="inside-text">If you are holding our NFT you have chance to drop a special Hoodie, Shirt etc...
          with your NFT that you are holding on it! </p>
      </div>
      <div style={{paddingTop: '10px'}}>
        <p className="inside-text">Every CLOTH will be special and limited. Not everyone can get that drop. Design will
          be on us but anything else depends on your NFT that achieved drop. That means if you are holding NFT that have
          white background you will get white CLOTH. </p>
      </div>
      <div style={{paddingTop: '10px'}}>
        <p className="inside-text">You can get a FREE drop or PAID drop </p>
      </div>
    </div>
    </LayoutContent>
  );
}

export const NFT = () =>{
  let x = 0
  const images = [
    '/NFTs/1.png', '/NFTs/2.png', '/NFTs/3.png', '/NFTs/4.png', '/NFTs/5.png', '/NFTs/6.png'
]

  setInterval(displayNextImage, 650);
  function displayNextImage() {
     if(x > 5){
       x = 0
     }
     if(document.querySelector('.nft')) {
       // @ts-ignore
       document.querySelector('.nft').setAttribute('src', images[x]);
     }
     x++;
  }
  return(
      <img src='/NFTs/1.png' className="nft" alt=""/>
  );
}

export const AboutUs: FC = () => {
  const [picture, setPicture] = useState(1);
  const [nft, setNft] = useState('/NFTs/' + picture + '.png')
  return (
    <div style={{paddingTop: '50px'}}>
    <LayoutContent>
    <div>
      <div className="about-us">
        <div>
          <div className="text-header">👻 The Spectral Club on SOLANA 👻</div>
          <p className="inside-text">{aboutUs}</p>
          <div style={{paddingTop: '10px'}}>
            <p className="inside-text">{aboutUs2}</p>
          </div>
        </div>
        <div className="nft-holder">
          <NFT/>
        </div>
      </div>
      <div style={{paddingTop: '10px'}}>
        <p className="text-header">0.5 SOL
          <span style={{paddingLeft: '5px', paddingRight: '5px'}}>
            <img src="/favicon-96x96.png" style={{height: '30px', width: '30px',marginTop: '-5px'}}/>
          </span>
          = 1 Spectral 👻
        </p>
      </div>
    </div>
    </LayoutContent>
    </div>
  );
}
