import { LayoutContent } from '../Layout';

export const HauntedVillage = () => {
  return (
    <div
      style={{
        backgroundColor: '#313037',
        paddingBottom: '20px',
        paddingTop: '10px',
      }}
    >
      <LayoutContent>
        <div className="text-header">HAUNTED VILLAGE</div>
        <div className="inside-text" style={{ paddingTop: '10px' }}>
          {' '}
          Do you want to scare some villagers? You have a unique opportunity
          with our Haunted Village.
        </div>
        <div className="inside-text" style={{ paddingTop: '10px' }}>
          Everyone has it's own village with inhabitants and ability to put up
          to 3 Specters in to this village to scare them. In this haunted time
          you will earn our COIN.
        </div>
        <div className="inside-text" style={{ paddingTop: '10px' }}>
          Your SPECTER will determine your APY based on rarity - the more rare
          your Specter is = the more coin it will generate. Also keep in mind
          that you can't scare inhabitants all day long, your Specters needs
          some rest.
        </div>
        <div className="inside-text" style={{ paddingTop: '10px' }}>
          If you scared a decent amount of inhabitants - you can spend your
          coins in our special SHOP.
        </div>
        <div>
          <img
            style={{ height: '400px', width: '100%', objectFit: 'cover' }}
            alt="example"
            src="/img/spectralTest.svg"
          />
        </div>
      </LayoutContent>
    </div>
  );
};
