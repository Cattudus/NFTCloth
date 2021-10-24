import { LayoutContent } from '../Layout';

export const SpectralShopSection = () => {
  return (
    <div
      style={{
        backgroundColor: '#0E0D11',
        paddingBottom: '20px',
        paddingTop: '10px',
      }}
    >
      <LayoutContent>
        <div className="text-header">SPECTRAL SHOP</div>
        <div className="inside-text" style={{ paddingTop: '10px' }}>
          {' '}
          Spectral shop is dedicated to spend your haunted coins. It offers{':'}
        </div>
        <div className="inside-text" style={{ paddingTop: '10px' }}>
          Scare potions
          <ul>
            <li>
              If you are not happy with performance of your Specters - you will
              be able to buy 'Scare potions' that will boost your scariness.
            </li>
          </ul>
          Clothes
          <ul>
            <li>
              You will be able to buy special clothes with Specters from your
              village.
            </li>
          </ul>
        </div>
        <div>
          <img
            style={{ height: '400px', width: '100%', objectFit: 'cover' }}
            alt="example"
            src="/img/spectralShopCover.svg"
          />
        </div>
      </LayoutContent>
    </div>
  );
};
