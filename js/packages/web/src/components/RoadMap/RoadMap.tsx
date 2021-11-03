import {CheckCircleFilled, CloseSquareFilled} from '@ant-design/icons';
import {LayoutContent} from '../Layout';
import React from 'react';
import {Parallax} from 'rc-scroll-anim';

export const RoadMap = () => {
  return (
    <LayoutContent>
      <div id="RoadMap">
        <div className="text-header" style={{paddingTop: '30px'}}>
          RoadMap
        </div>
        <section id="cd-timeline" className="rm-container">
          <div className="cd-timeline-block">
            <div className="cd-timeline-img cd-picture"></div>
            <Parallax
              animation={{x: 0, opacity: 1, playScale: [0.3, 0.7]}}
              style={{transform: 'translateX(-100px)', opacity: 0}}
              className="code-box-shape"
            >
              <div className="cd-timeline-content">
                <h2>Phase 0</h2>
                <p>
                  {' '}
                  <CheckCircleFilled
                    style={{color: 'green', paddingRight: '10px'}}
                  />
                  Prepare NFTs, website, socials
                </p>
                <p>
                  {' '}
                  <CheckCircleFilled
                    style={{color: 'green', paddingRight: '10px'}}
                  />
                  Launch The Spectral Club website
                </p>
                <p>
                  {' '}
                  <CheckCircleFilled
                    style={{color: 'green', paddingRight: '10px'}}
                  />
                  Start sampling hoodies and find the best quality ones
                  (Already sampled few but still no good ones)
                </p>
              </div>
            </Parallax>
          </div>

          <div className="cd-timeline-block">
            <div className="cd-timeline-img cd-movie"></div>
            <Parallax
              animation={{x: 0, opacity: 1, playScale: [0.3, 0.7]}}
              style={{transform: 'translateX(100px)', opacity: 0}}
              className="code-box-shape"
            >
              <div className="cd-timeline-content">
                <h2>Phase 1</h2>
                <p>
                  {' '}
                  <CheckCircleFilled
                    style={{color: 'green', paddingRight: '10px'}}
                  />{' '}
                  Discord Giveaways!
                </p>
                <p>
                  {' '}
                  <CloseSquareFilled
                    style={{color: 'red', paddingRight: '10px'}}
                  />{' '}
                  First partnerships - will announce on twitter and discord
                </p>
                <p>
                  {' '}
                  <CloseSquareFilled
                    style={{color: 'red', paddingRight: '10px'}}
                  />{' '}
                  Pre-verification on third party marketplaces
                </p>
              </div>
            </Parallax>
          </div>

          <div className="cd-timeline-block">
            <div className="cd-timeline-img cd-movie"></div>
            <Parallax
              animation={{x: 0, opacity: 1, playScale: [0.3, 0.7]}}
              style={{transform: 'translateX(-100px)', opacity: 0}}
              className="code-box-shape"
            >
              <div className="cd-timeline-content">
                <h2>Phase 2 - Minting 24.11 20:00 CET</h2>
                <p>
                  {' '}
                  <CloseSquareFilled
                    style={{color: 'red', paddingRight: '10px'}}
                  />{' '}
                  Start Mint 24.11 20:00 CET
                </p>
                <p>
                  {' '}
                  <CloseSquareFilled
                    style={{color: 'red', paddingRight: '10px'}}
                  />{' '}
                  Get verified on marketplaces
                </p>
                <p>
                  {' '}
                  <CloseSquareFilled
                    style={{color: 'red', paddingRight: '10px'}}
                  />{' '}
                  Start first hoodie drops
                </p>
                <p>
                  {' '}
                  <CloseSquareFilled
                    style={{color: 'red', paddingRight: '10px'}}
                  />{' '}
                  Launch clothes shop section
                </p>
                <p>
                  {' '}
                  <CloseSquareFilled
                    style={{color: 'red', paddingRight: '10px'}}
                  />{' '}
                  Announce more details about Haunted Village
                </p>
              </div>
            </Parallax>
          </div>

          <div className="cd-timeline-block">
            <div className="cd-timeline-img cd-picture"></div>
            <Parallax
              animation={{x: 0, opacity: 1, playScale: [0.3, 0.7]}}
              style={{transform: 'translateX(100px)', opacity: 0}}
              className="code-box-shape"
            >
              <div className="cd-timeline-content">
                <h2>Phase 3</h2>
                <p>
                  {' '}
                  <CloseSquareFilled
                    style={{color: 'red', paddingRight: '10px'}}
                  />{' '}
                  Launch our own coin
                </p>
                <p>
                  {' '}
                  <CloseSquareFilled
                    style={{color: 'red', paddingRight: '10px'}}
                  />{' '}
                  Launch Haunted Village
                </p>
                <p>
                  {' '}
                  <CloseSquareFilled
                    style={{color: 'red', paddingRight: '10px'}}
                  />{' '}
                  Announce extended roadmap
                </p>
              </div>
            </Parallax>
          </div>
        </section>
      </div>
    </LayoutContent>
  );
};
