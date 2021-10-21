
import React, {FC} from 'react';
import {AboutUs, WhyUs} from "../../components/AboutUs/AboutUs";
import {Rarity} from "../../components/Rarity/Rarity";
import {Creators} from "../../components/Creators/Creators";
import {FAQ} from "../../components/FAQ/FAQ";
import {useMeta, useStore} from "@oyster/common";
import {AuctionListView} from "./auctionList";
import {SetupView} from "./setup";
import {RoadMap} from "../../components/RoadMap/RoadMap";
import {ClothingCarousel} from "../../components/ClothingCarousel";

export const HomeView = () => {
  //Remove metaplex title
  const doc = document.querySelector(".ant-layout")
  if(doc){
  console.log( doc.setAttribute('title',''))
  }
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
  return(
    <MainView/>
  );
};
export const MainView = () => {
  return(
    <div >
      <AboutUs/>
      <WhyUs/>
      <ClothingCarousel/>
      {/*<Rarity/>*/}
      <RoadMap/>
      <Creators/>
      <FAQ/>
      <Footer/>
    </div>
  );
}

export const Footer: FC = () =>{
  return(
    <div>
      <div style={{paddingTop: '100px', paddingBottom: '20px'}}>
        <div className='vertical-line'/>
      </div>
      <div className="inside-text" style={{textAlign: "center", paddingBottom: '25px'}}>❤️From the Spooky Spooks Team 👻 </div>
    </div>
  );
}
