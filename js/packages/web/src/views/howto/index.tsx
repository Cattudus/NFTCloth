import {AppLayout, LayoutContent} from "../../components/Layout";
import {Layout} from "antd";


export const HowTo = () => {
  return (
    <div style={{paddingTop: '100px'}}>
      <LayoutContent>
        <div>
          <div className="text-header">
            How to MINT our NFT?
          </div>
          <div className="inside-text">
            1. At first you need to download phantom wallet to your browser (chrome, brave, firefox, edge)
            <div>
              Download link - <a href="https://phantom.app/">Phantom</a>
            </div>
          </div>
          <div style={{paddingTop: '30px'}}>
            <div className="inside-text">
              2. After adding it you need to create new wallet. Save your secret phrase! You can lost your wallet if you
              don't save it!
            </div>
          </div>
          <div style={{paddingTop: '30px'}}>
            <div className="inside-text">
              3. You need to add funds to your wallet. Copy your phantom wallet address (Click on wallet name to copy
              it)
              .
              <div>
                <img style={{height: '300px', width: '270px', objectFit: "contain"}} src="/HowTo/phantom.png"/>
              </div>
            </div>
          </div>
          <div style={{paddingTop: '30px'}}>
            <div className="inside-text">
              4. Go to Binance or somewhere where you have your crypto. On Binance go to your wallet (Fiat & Spot). Find
              SOLANA and select withdraw.
            </div>
          </div>
          <div style={{paddingTop: '30px'}}>
            <div className="inside-text">
              5. Into address paste your phantom wallet address that we copied before. In network choose solana network!
              For our NFT you will need 0.66 + fee. So send approx. 0.68 SOL. Then you can click withdraw.
            </div>
          </div>
          <div style={{paddingTop: '30px'}}>
            <div className="inside-text">
              6. Now wait 1-2 minutes and you should see your SOL in phantom wallet. Then you need to wait for our mint
              site that we will announce before mint! There will be button to connect your wallet after connecting there
              will be mint. After clicking on mint button you will have to approve that transaction. If you get message
              that you successfully minted our nft you are done and you will see it in your wallet.
            </div>
          </div>
        </div>
      </LayoutContent>
    </div>
  )
}
