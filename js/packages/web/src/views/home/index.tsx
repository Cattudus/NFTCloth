import React, { FC } from 'react';
import { AboutUs, WhyUs } from '../../components/AboutUs/AboutUs';
import { Rarity } from '../../components/Rarity/Rarity';
import { Creators } from '../../components/Creators/Creators';
import { FAQ } from '../../components/FAQ/FAQ';
import { useMeta, useStore } from '@oyster/common';
import { AuctionListView } from './auctionList';
import { SetupView } from './setup';
import { RoadMap } from '../../components/RoadMap/RoadMap';
import { ClothingCarousel } from '../../components/ClothingCarousel';
import { LayoutContent } from '../../components/Layout';
import { HauntedVillage } from '../../components/HauntedVillage';
import { SpectralShopSection } from '../../components/SpectralShopSection';
import { LandmarksSection } from '../../components/LandmarksSection';
import {UpOutlined} from "@ant-design/icons";

export const HomeView = () => {
  // const { isLoading, store } = useMeta();
  // const { isConfigured } = useStore();
  //
  // const showAuctions = (store && isConfigured) || isLoading;
  //
  // return (
  //   <div>
  //     {showAuctions ? <MainView/> : <SetupView />}
  //     </div>
  // );
  return <MainView />;
};
export const MainView = () => {
  let mybutton = document.getElementById("myBtn");
  window.onscroll = function() {scrollFunction()};

  function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      if(mybutton != null) {
        mybutton.style.display = "block";
      }
    } else {
      if(mybutton != null){
      mybutton.style.display = "none";
      }
    }
    mybutton = document.getElementById("myBtn");
  }

  function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }
  return (
    <div>
      <AboutUs />
      <WhyUs />
      {/*<ClothingCarousel />*/}
      {/*<Rarity/>*/}
      <HauntedVillage />
      <SpectralShopSection />
      <RoadMap />
      <LandmarksSection />
      <Creators />
      <FAQ />
      <Footer />
      <button onClick={topFunction} id="myBtn" title="Go to top"><UpOutlined /></button>
    </div>
  );
};

export const Footer: FC = () => {
  return (
    <LayoutContent>
      <div>
        <div style={{ paddingTop: '100px', paddingBottom: '20px' }}>
          <div className="vertical-line" />
        </div>
        <div
          className="inside-text"
          style={{ textAlign: 'center', paddingBottom: '25px' }}
        >
          ❤️From the The Spectral Club Team 👻
        </div>
      </div>
    </LayoutContent>
  );
};
