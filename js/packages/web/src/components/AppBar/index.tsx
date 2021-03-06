import React, {useMemo} from 'react';
import {Link} from 'react-router-dom';
import {Button, Dropdown, Layout, Menu} from 'antd';
import {ConnectButton, CurrentUserBadge} from '@oyster/common';
import {useWallet} from '@solana/wallet-adapter-react';
import {InstagramOutlined, MenuOutlined, TwitterOutlined} from '@ant-design/icons';
import {LayoutContent} from "../Layout";
import useWindowDimensions from "../../utils/layout";

// For one single page
export const SmallBar = () => {
  return (
    <Dropdown
      arrow
      placement="bottomLeft"
      trigger={['click']}
      overlay={
        <Menu>
          <Menu.Item>
            <Button className="app-btn" href="#RoadMap">RoadMap</Button>
          </Menu.Item>
          <Menu.Item>
            <Button className="app-btn" href="#Creators">Creators</Button>
          </Menu.Item>
          <Menu.Item>
            <Button className="app-btn" href="#FAQ">FAQ</Button>
          </Menu.Item>
          <Menu.Item>
            <Link to={`/howTo`}>
              <Button className="app-btn">How To</Button>
            </Link>
          </Menu.Item>
        </Menu>
      }
    >
      <MenuOutlined style={{fontSize: '1.4rem'}}/>
    </Dropdown>
  );
}

export const AppBar = () => {
  const {connected} = useWallet();
  const {width} = useWindowDimensions();

  function disabled() {
    if (width < 800) {
      return 'disable'
    } else {
      return ''
    }
  }


  return (
    <LayoutContent>
      <div className="single-app-bar">
        <div className="app-navigation small-nav">
          <div style={{paddingRight: "15px", paddingLeft: "8px"}} className="nft-div">
            <img src="/NFTs/1.png" className="bar-nft" alt=""/>
          </div>
          <div>The Spectral Club</div>
          <div className="flex-item">
            <div className="horizontal-line"/>
          </div>
          <div className="small-nav">
            <SmallBar/>
          </div>
        </div>


        <div className="app-navigation big-nav">
          <div style={{paddingRight: "15px", paddingLeft: "8px"}}>
            <img src="/NFTs/1.png" className="bar-nft" alt=""/>
          </div>
          <div>
            <Button className="app-btn" href="#">The Spectral Club</Button></div>
          <div className="flex-item">
            <div className="horizontal-line"/>
          </div>
          <div>
            <Button className="app-btn" href="#RoadMap">RoadMap</Button>
          </div>
          <div>
            <Button className="app-btn" href="#Creators">Creators</Button>
          </div>
          <div>
            <Button className="app-btn" href="#FAQ">FAQ</Button>
          </div>
          <div>
            <Link to={`/howTo`}>
              <Button className="app-btn">How To</Button>
            </Link>
          </div>
        </div>
        {connected ?
          <div className={disabled()} style={{paddingLeft: '100px'}}>
            {/*<CurrentUserBadge/>*/}
            <Link to={`/artworks`}>
              <Button className="app-btn">My Profile</Button>
            </Link>
          </div>
          :
          <div className={disabled()} style={{paddingLeft: '100px'}}>
            <ConnectButton type="primary" allowWalletChange/>
          </div>
        }
        <div className="socials">
          <div className="flex-item">
            <a href="https://twitter.com/TheSpectralClub" target="_blank" rel="noopener noreferrer">
              <TwitterOutlined style={{fontSize: '25px'}}/>
            </a>
          </div>
          <div className="flex-item">
            <a href="https://discord.gg/npsNdxZQne" target="_blank" rel="noopener noreferrer">
              <i style={{fontSize: '25px'}} className="fab fa-discord"/>
            </a>
          </div>
          <div className="flex-item">
            <a href="https://www.instagram.com/thespectralclub/" target="_blank" rel="noopener noreferrer">
              <InstagramOutlined style={{fontSize: '25px'}}/>
            </a>
          </div>
        </div>
      </div>
    </LayoutContent>
  );
}

// For Wallet connect etc...
// const UserActions = () => {
//   const { publicKey } = useWallet();
//   const { whitelistedCreatorsByCreator, store } = useMeta();
//   const pubkey = publicKey?.toBase58() || '';
//
//   const canCreate = useMemo(() => {
//     return (
//       store?.info?.public ||
//       whitelistedCreatorsByCreator[pubkey]?.info?.activated
//     );
//   }, [pubkey, whitelistedCreatorsByCreator, store]);
//
//   return (
//     <>
//       {store && (
//         <>
//           {/* <Link to={`#`}>
//             <Button className="app-btn">Bids</Button>
//           </Link> */}
//         </>
//       )}
//     </>
//   );
// };
//
// const DefaultActions = ({ vertical = false }: { vertical?: boolean }) => {
//   const { connected } = useWallet();
//   return (
//     <div
//       style={{
//         display: 'flex',
//         flexDirection: vertical ? 'column' : 'row',
//       }}
//     >
//       <Link to={`/`}>
//         <Button className="app-btn">Home</Button>
//       </Link>
//       <Link to={`/artworks`} hidden={!connected}>
//         <Button className="app-btn">
//           {connected ? 'My Profile' : 'My Profile'}
//         </Button>
//       </Link>
//       <Link to={`/shop`} hidden={!connected}>
//         <Button className="app-btn">
//           {connected ? 'Shop' : ''}
//         </Button>
//       </Link>
//     </div>
//   );
// };
//
// const MetaplexMenu = () => {
//   const { width } = useWindowDimensions();
//   const { connected } = useWallet();
//
//   if (width < 768)
//     return (
//       <>
//         <Dropdown
//           arrow
//           placement="bottomLeft"
//           trigger={['click']}
//           overlay={
//             <Menu>
//               <Menu.Item>
//                 <Link to={`/`}>
//                   <Button className="app-btn">Home</Button>
//                 </Link>
//               </Menu.Item>
//               <Menu.Item hidden={!connected}>
//                 <Link to={`/artworks`} hidden={!connected}>
//                   <Button className="app-btn" hidden={!connected}>
//                     {connected ? 'My Profile' : ''}
//                   </Button>
//                 </Link>
//               </Menu.Item>
//               <Menu.Item hidden={!connected}>
//                 <Link to={`/shop`} hidden={!connected}>
//                   <Button className="app-btn" hidden={!connected}>
//                     {connected ? 'Shop' : ''}
//                   </Button>
//                 </Link>
//               </Menu.Item>
//             </Menu>
//           }
//         >
//           <MenuOutlined style={{ fontSize: '1.4rem' }} />
//         </Dropdown>
//       </>
//     );
//
//   return <DefaultActions />;
// };

// export const AppBar = () => {
//   const { connected } = useWallet();
//
//   return (
//     <>
//       <div className="app-left app-bar-box">
//         {window.location.hash !== '#/analytics' && <Notifications />}
//         <div className="divider" />
//         <MetaplexMenu />
//       </div>
//       {connected ? (
//         <div className="app-right app-bar-box">
//           <UserActions />
//           <CurrentUserBadge
//             showBalance={true}
//             showAddress={false}
//             iconSize={24}
//           />
//         </div>
//       ) : (
//         <ConnectButton type="primary" allowWalletChange />
//       )}
//     </>
//   );
// };
