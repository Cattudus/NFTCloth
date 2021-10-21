import React, {useState} from "react";
export const aboutUs: string = "Spooky Spooks is a collection of 3333 Spooky NFT Ghosts. Every Spook is algorithmically generated and completely unique. "
export const aboutUs2: string = "But we don't offer to you just NFTs, with our NFT you can have a special CLOTHES that you can obtain by drops."

export function WhyUs(){
    return(
        <div style={{paddingTop: '10%'}}>
            <div className="text-header"> NFT CLOTH DROPS?</div>
            <text className="inside-text">Our CLOTH DROPS are something special.</text>
          <div style={{paddingTop: '10px'}} >
            <text className="inside-text">If you are holding our NFT you have chance to drop a special Hoodie, Shirt etc... with your NFT that you are holding on it! </text>
          </div>
          <div style={{paddingTop: '10px'}} >
            <text className="inside-text">Every CLOTH will be special and limited. Not everyone can get that drop. Design will be on us but anything else depends on your NFT that achieved drop. That means if you are holding NFT that have white background you will get white CLOTH.  </text>
          </div>
          <div style={{paddingTop: '10px'}} >
            <text className="inside-text">You can get a FREE drop or PAID drop  </text>
          </div>
        </div>
    );
}

export function AboutUs() {
    const [picture, setPicture] = useState(1);
    const [nft, setNft] = useState('/NFTs/'+ picture+ '.png')
   const changeImg = () =>{
        setPicture(picture + 1);
        if (picture === 3 ){
            setPicture( 1);
        }
        setNft('/NFTs/'+ picture+ '.png')
        return undefined;
    }
        return (
       <div>
         <div className="about-us">
           <div>
             <div className="text-header">The spookiest Spooks on SOLANA</div>
             <text className="inside-text">{aboutUs}</text>
             <div style={{paddingTop: '10px'}} >
               <text className="inside-text">{aboutUs2}</text>
             </div>
           </div>
           <div className="nft-holder">
             <img src={nft} className="nft"  alt=""/>
           </div>
         </div>
         <div style={{paddingTop: '10px'}} >
           <text className="text-header">1 SOL = 1 SPOOKY SPOOK</text>
         </div>
       </div>
        );
}
