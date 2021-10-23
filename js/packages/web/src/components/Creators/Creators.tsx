import {LayoutContent} from "../Layout";
import React from "react";

interface worker{
  name: string,
  position: string,
  about: string
}
export const workers: worker[] = [{about: 'Webs are life',name:'Spectral Jedi', position: 'Web Developer' }, {about: 'UI makes web',name:'Spectral Poltergeist', position: 'Artist / UI|UX' }, {about: 'Loves shit coins',name:'Spectral phantom', position: 'Backend Developer' }, {about: 'Spectral Club!',name:'Haunted Spectral', position: 'Marketing - Socials' }]


export function Creators(){
    return(
      <div style={{paddingBottom: '30px'}}>
      <LayoutContent>
        <div id="Creators">
            <div className="text-header" style={{paddingTop: '30px', paddingBottom: '20px'}}>
                Our Creators
            </div>
            <div className="creator-grid">
                <div className="creator-info">
                    <img src="/NFTs/4.png" className="creator-logo" alt=""/>
                    <div className="pos-text">{workers[0].name}</div>
                    <div className="pos-text">{workers[0].position}</div>
                    <div className="pos-text">{workers[0].about}</div>
                </div>
                <div className="creator-info">
                    <img src="/NFTs/3.png" className="creator-logo" alt=""/>
                    <div className="pos-text">{workers[1].name}</div>
                    <div className="pos-text">{workers[1].position}</div>
                    <div className="pos-textt">{workers[1].about}</div>
                </div>
                <div className="creator-info">
                    <img src="/NFTs/2.png" className="creator-logo" alt=""/>
                    <div className="pos-text">{workers[2].name}</div>
                    <div className="pos-text">{workers[2].position}</div>
                    <div className="pos-text">{workers[2].about}</div>
                </div>
                <div className="creator-info">
                    <img src="/NFTs/6.png" className="creator-logo" alt=""/>
                    <div className="pos-text">{workers[3].name}</div>
                    <div className="pos-text">{workers[3].position}</div>
                    <div className="pos-text">{workers[3].about}</div>
                </div>
            </div>
        </div>
      </LayoutContent>
      </div>
    );
}
