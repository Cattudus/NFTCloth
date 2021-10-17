
import React, {FC} from 'react';
import {AboutUs, WhyUs} from "../../components/AboutUs/AboutUs";
import {Rarity} from "../../components/Rarity/Rarity";
import {Creators} from "../../components/Creators/Creators";
import {FAQ} from "../../components/FAQ/FAQ";

export const HomeView = () => {
  return (
   <div >
     <AboutUs/>
     <WhyUs/>
     <Rarity/>
     <Creators/>
     <FAQ/>
     <Footer/>
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
