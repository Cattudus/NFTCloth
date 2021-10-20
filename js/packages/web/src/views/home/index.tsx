
import React, {FC} from 'react';
import {AboutUs, WhyUs} from "../../components/AboutUs/AboutUs";
import {Rarity} from "../../components/Rarity/Rarity";
import {Creators} from "../../components/Creators/Creators";
import {FAQ} from "../../components/FAQ/FAQ";
import {useMeta, useStore} from "@oyster/common";
import {AuctionListView} from "./auctionList";
import {SetupView} from "./setup";
import {RoadMap} from "../../components/RoadMap/RoadMap";

export const HomeView = () => {
  // const doc = document.querySelectorAll(".ant-layout")
  // console.log( doc[0] )
  // doc[0].attributes[1].value =''
  const { isLoading, store } = useMeta();
  const { isConfigured } = useStore();

  const showAuctions = (store && isConfigured) || isLoading;

  return (
    <div>
      {showAuctions ?  <div >
        <AboutUs/>
        <WhyUs/>
        <Rarity/>
        <RoadMap/>
        <Creators/>
        <FAQ/>
        <Footer/>
      </div> : <SetupView />}
      </div>
  );
};

export const Footer: FC = () =>{
  return(
    <div>
      <div style={{paddingTop: '100px', paddingBottom: '20px'}}>
        <div className='vertical-line'/>
      </div>
      <div className="inside-text" style={{textAlign: "center", paddingBottom: '25px'}}>❤️From the Company Name Team 🔥 </div>
    </div>
  );
}
