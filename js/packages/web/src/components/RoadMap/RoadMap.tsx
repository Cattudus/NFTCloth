import {CheckCircleFilled, CloseSquareFilled} from "@ant-design/icons";
import {LayoutContent} from "../Layout";
import React from "react";

export const RoadMap = () => {
  return(
    <LayoutContent>
    <div id="RoadMap">
      <div className="text-header" style={{paddingTop: "30px"}}>RoadMap</div>
      <section id="cd-timeline" className="rm-container">
        <div className="cd-timeline-block">
          <div className="cd-timeline-img cd-picture">
          </div>

          <div className="cd-timeline-content">
            <h2>October</h2>
            <p> <CheckCircleFilled style={{color: "green", paddingRight: '10px'}} />Create The Spectral Club</p>
            <p> <CheckCircleFilled style={{color: "green", paddingRight: '10px'}} />Launch The Spectral Club website</p>
            <p> <CheckCircleFilled style={{color: "green", paddingRight: '10px'}} />Create socials</p>
            <p>   <CloseSquareFilled style={{color: "red", paddingRight: '10px'}} />Get first clothes</p>
            <p>   <CloseSquareFilled style={{color: "red", paddingRight: '10px'}} />Launch my profile section</p>
          </div>
        </div>

        <div className="cd-timeline-block">
          <div className="cd-timeline-img cd-movie">
          </div>

          <div className="cd-timeline-content">
            <h2>November</h2>
            <p>   <CloseSquareFilled style={{color: "red", paddingRight: '10px'}} /> Discord Giveaways!</p>
            <p>   <CloseSquareFilled style={{color: "red", paddingRight: '10px'}} /> Start Mint</p>
            <p>   <CloseSquareFilled style={{color: "red", paddingRight: '10px'}} /> Get verified on marketplaces</p>
            <p>   <CloseSquareFilled style={{color: "red", paddingRight: '10px'}} /> Start first drops</p>
            <p>   <CloseSquareFilled style={{color: "red", paddingRight: '10px'}} /> Launch cloth shop section</p>
          </div>
        </div>

        <div className="cd-timeline-block">
          <div className="cd-timeline-img cd-picture">
          </div>

          <div className="cd-timeline-content">
            <h2>December</h2>
            <p>   <CloseSquareFilled style={{color: "red", paddingRight: '10px'}} /> Launch own coin</p>
            <p>   <CloseSquareFilled style={{color: "red", paddingRight: '10px'}} /> Launch Haunted Village</p>
          </div>
        </div>


      </section>
    </div>
    </LayoutContent>
  );
}
