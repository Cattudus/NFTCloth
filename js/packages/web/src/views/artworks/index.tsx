import React, { useEffect, useState } from 'react';
import { ArtCard } from '../../components/ArtCard';
import { Layout, Row, Col, Tabs } from 'antd';
import Masonry from 'react-masonry-css';
import { Link } from 'react-router-dom';
import { useCreatorArts, useUserArts } from '../../hooks';
import { useMeta } from '../../contexts';
import { CardLoader } from '../../components/MyLoader';
import { useWallet } from '@solana/wallet-adapter-react';
import {LayoutContent} from "../../components/Layout";

const { TabPane } = Tabs;

const { Content } = Layout;

export enum ArtworkViewState {
  Metaplex = '0',
  Owned = '1',
  Created = '2',
}

export const ArtworksView = () => {
  const { connected, publicKey } = useWallet();
  const ownedMetadata = useUserArts();
  const createdMetadata = useCreatorArts(publicKey?.toBase58() || '');
  const { metadata, isLoading, pullAllMetadata, storeIndexer } = useMeta();
  const [activeKey, setActiveKey] = useState(ArtworkViewState.Metaplex);
  const breakpointColumnsObj = {
    default: 4,
    1100: 3,
    700: 2,
    500: 1,
  };

  const items =
    activeKey === ArtworkViewState.Owned
      ? ownedMetadata.map(m => m.metadata)
      : activeKey === ArtworkViewState.Created
      ? createdMetadata
      : metadata;

  useEffect(() => {
    if (connected) {
      setActiveKey(ArtworkViewState.Owned);
    } else {
      setActiveKey(ArtworkViewState.Metaplex);
    }
  }, [connected, setActiveKey]);

  const artworkGrid = (
    <Masonry
      breakpointCols={breakpointColumnsObj}
      className="my-masonry-grid"
      columnClassName="my-masonry-grid_column"
    >
      {!isLoading
        ? items.map((m, idx) => {
            const id = m.pubkey;
            return (
              <Link to={`/art/${id}`} key={idx}>
                <ArtCard
                  key={id}
                  pubkey={m.pubkey}
                  preview={false}
                  height={250}
                  width={250}
                />
              </Link>
            );
          })
        : [...Array(10)].map((_, idx) => <CardLoader key={idx} />)}
    </Masonry>
  );

  //function NoNFT(){
    //if(!isLoading && storeIndexer.length ===0){
    //return(<div className="inside-text">You dont have any NFT's</div>);
   // }
   // return (<div/>);
  //}

  return (
    <div style={{ margin: 0, paddingTop: 80 }}>
    <LayoutContent style={{ margin: 0, paddingTop: 80 }}>
      <Content style={{ display: 'flex', flexWrap: 'wrap' }}>
        <Col style={{ width: '100%', marginTop: 10 }}>
          <Row>
            <Tabs
              activeKey={activeKey}
              onTabClick={key => setActiveKey(key as ArtworkViewState)}
            >
              <TabPane
                tab={<span className="tab-title">My Drops</span>}
                key={ArtworkViewState.Metaplex}
              >
                <div className="inside-text">This tabs will work after mint!</div>
              </TabPane>
              {connected && (
                <TabPane
                  tab={<span className="tab-title">Owned NFT</span>}
                  key={ArtworkViewState.Owned}
                >
                  {/*{artworkGrid}*/}
                  <div className="inside-text">This tabs will work after mint!</div>
                </TabPane>
              )}
              {connected && (
                <TabPane
                  tab={<span className="tab-title">My Orders</span>}
                  key={ArtworkViewState.Created}
                >
                  <div className="inside-text">This tabs will work after mint!</div>
                </TabPane>
              )}
            </Tabs>
          </Row>
        </Col>
      </Content>
    </LayoutContent>
    </div>
  );
};
