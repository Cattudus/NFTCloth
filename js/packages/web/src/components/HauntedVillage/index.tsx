import {LayoutContent} from "../Layout";


export const HauntedVillage = () => {
  return (
    <div style={{backgroundColor: '#0a0a0a', paddingBottom: '20px', paddingTop: '10px'}}>
      <LayoutContent>
        <div className="text-header">
          Haunted Village
        </div>
        <div className="inside-text" style={{paddingTop: '10px'}}> Haunted Village will be farm where you will be able
          to farm our coin.
        </div>
        <div className="inside-text" style={{paddingTop: '10px'}}> For that coin you will be able to buy our clothes in
          shop with your spooks in village on it.
        </div>
        <div className="inside-text" style={{paddingTop: '10px'}}>
          Your SPOOKS will determine your APY based on rarity, each user Village can obtain max 3 SPOOKS. Only one
          village for one wallet. If you buy our clothes 50% of the coins will be burned.
        </div>
      </LayoutContent>
    </div>
  );
}
