import React from 'react';
import { Collapse } from 'antd';
import { LayoutContent } from '../Layout';

const { Panel } = Collapse;

export function FAQ() {
  return (
    <LayoutContent>
      <div style={{ paddingTop: '30px' }} id="FAQ">
        <div className="text-header" style={{ paddingBottom: '20px' }}>
          {' '}
          FAQ
        </div>
        <Collapse>
          <Panel
            style={{ fontSize: '18px' }}
            header="What is The Spectral Club?"
            key="1"
          >
            <p style={{ fontSize: '15px', color: 'white' }}>
              3333 unique and algorithmically generated Specters that you can
              have on your cool looking hoodie. But not only that - we are
              mostly a great community that tries to deliver the most value to
              its members.
            </p>
          </Panel>
          <Panel
            style={{ fontSize: '18px' }}
            header="What are CLOTHES drops?"
            key="2"
          >
            <p style={{ fontSize: '15px', color: 'white' }}>
              If you are Spectre NFT holder you have a chance to drop special
              and limited clothes. You can make sure that every piece of
              clothing is unique. There will be free and also paid drops.
            </p>
          </Panel>
          <Panel
            style={{ fontSize: '18px' }}
            header="Clothing quality?"
            key="3"
          >
            <p style={{ fontSize: '15px', color: 'white' }}>
              We strive for the great customer satisfaction so each piece of
              clothing is made from the finest fabric. We rely on quality so
              every clothing has a sewn-in NFT. Check our cozy hoodies on
              Twitter or Instagram.
            </p>
          </Panel>
          <Panel
            style={{ fontSize: '18px' }}
            header="What is Haunted Village?"
            key="4"
          >
            <p style={{ fontSize: '15px', color: 'white' }}>
              It's a place where you can put your Specters and scare some
              inhabitants. By doing that - you will earn our coin. The more rare
              your Specter is - the more you earn. You can then spend it in our
              shop or just keep it.
            </p>
          </Panel>
          <Panel
            style={{ fontSize: '18px' }}
            header="How many NFT will be there?"
            key="5"
          >
            <p style={{ fontSize: '15px', color: 'white' }}>
              There will be 3333 Spectres - 133 spectres will be kept for
              promotional and marketing purposes, 700 specters for whitelisted members. There will never be more than
              3333 Specters.
            </p>
          </Panel>
          <Panel
            style={{ fontSize: '18px' }}
            header="From how many attributes?"
            key="6"
          >
            <p style={{ fontSize: '15px', color: 'white' }}>
              Spectres will be minted from 120 attributes.
            </p>
          </Panel>
          <Panel
            style={{ fontSize: '18px' }}
            header="Will there be a secondary market?"
            key="7"
          >
            <p style={{ fontSize: '15px', color: 'white' }}>
              Yes, we are going to be listed on MagicEden and DigitalEyes. In
              later stage on more markets.
            </p>
          </Panel>
          <Panel
            style={{ fontSize: '18px' }}
            header="Is there a rarity system?"
            key="8"
          >
            <p style={{ fontSize: '15px', color: 'white' }}>
              There are 5 rarity tiers ordered from common, uncommon, rare,
              epic, legendary.
            </p>
          </Panel>
          <Panel
            style={{ fontSize: '18px' }}
            header="How can I know which one is the rarest?"
            key="9"
          >
            <p style={{ fontSize: '15px', color: 'white' }}>
              Rarity Sheet will be uploaded after minting finish.
            </p>
          </Panel>
          <Panel
            style={{ fontSize: '18px' }}
            header="How do I get a SPECTRE?"
            key="10"
          >
            <p style={{ fontSize: '15px', color: 'white' }}>
              Mint will be on 24. November at 20:00 CET{' '}
            </p>
          </Panel>
          <Panel
            style={{ fontSize: '18px' }}
            header="How can i get whitelisted?"
            key="11"
          >
            <p style={{ fontSize: '15px', color: 'white' }}>
              If you want to get whitelisted you need to win giveaway or be in between our 350 top Discord active members.
            </p>
          </Panel>
        </Collapse>
      </div>
    </LayoutContent>
  );
}
