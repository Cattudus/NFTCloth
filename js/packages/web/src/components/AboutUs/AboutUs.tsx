import React, { FC, useState } from 'react';
import { LayoutContent } from '../Layout';
import { Layout } from 'antd';
import {Animation} from "../Animations";

export const aboutUs: string =
  'The Spectral Club is a collection of 3333 Spectral NFT Ghosts. Every Spectral is algorithmically generated and completely unique. ';
export const aboutUs2: string =
  "But we don't offer you only NFTs - there is a lot more. Our goal is to create a strong community and deliver the most value to its members.";

export function WhyUs() {
  return (
    <LayoutContent>
      <div style={{ paddingTop: '10%' }}>
        <div className="text-header"> NFT CLOTHES DROPS</div>
        <p className="inside-text">This is something special.</p>
        <div style={{ paddingTop: '10px' }}>
          <p className="inside-text">
            If you are one of our determined NFT holders - you have a chance to
            drop a special clothing (Hoodie, Shirt, etc.) with your Spectral ON
            IT!
          </p>
        </div>
        <div style={{ paddingTop: '10px' }}>
          <p className="inside-text">
            Every piece of clothing will be special and limited - you can be
            sure it's unique. The design completely depends on your NFT - so if
            you are holding Spectral with blue background - you will get blue
            hoodie with your cool looking Spectral.
          </p>
        </div>
        <div style={{ paddingTop: '10px' }}>
          <p className="inside-text">You can get a FREE or PAID drop </p>
        </div>
      </div>
    </LayoutContent>
  );
}

export const NFT = () => {
  let x = 0;
  const images = [
    '/NFTs/1.png',
    '/NFTs/2.png',
    '/NFTs/3.png',
    '/NFTs/4.png',
    '/NFTs/5.png',
    '/NFTs/6.png',
    '/NFTs/7.png',
    '/NFTs/8.png',
    '/NFTs/9.png',
    '/NFTs/10.png',
    '/NFTs/11.png',
  ];

  setInterval(displayNextImage, 650);
  function displayNextImage() {
    if (x > 10) {
      x = 0;
    }
    if (document.querySelector('.nft')) {
      // @ts-ignore
      document.querySelector('.nft').setAttribute('src', images[x]);
    }
    x++;
  }
  return <img src="/NFTs/1.png" className="nft" alt="" />;
};

export const AboutUs: FC = () => {
  const [picture, setPicture] = useState(1);
  const [nft, setNft] = useState('/NFTs/' + picture + '.png');
  return (
    <div style={{ paddingTop: '80px' }}>
      <LayoutContent>
        <div>
          <div className="about-us">
            <div>
              <Animation text="The spectral club"/>
              <p className="inside-text">{aboutUs}</p>
              <div style={{ paddingTop: '10px' }}>
                <p className="inside-text">{aboutUs2}</p>
              </div>
            </div>
            <div className="nft-holder">
              <NFT />
            </div>
          </div>
          <div style={{ paddingTop: '10px' }}>
            <p className="text-header">
              0.5 SOL
              <span style={{ paddingLeft: '5px', paddingRight: '5px' }}>
                <img
                  src="/favicon-96x96.png"
                  style={{ height: '30px', width: '30px', marginTop: '-5px' }}
                />
              </span>
              = 1 Spectral 👻
            </p>
          </div>
        </div>
      </LayoutContent>
    </div>
  );
};
