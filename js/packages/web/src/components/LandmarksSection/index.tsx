import { LayoutContent } from '../Layout';
import { Card, List } from 'antd';

export const LandmarksSection = () => {
  const data = [
    {
      title: '25%',
      content: 'Airdrop 5 Specters',
      content2: 'Free drop of 50 hoodies',
      content3: '1% sales donation to community picked charity',
    },
    {
      title: '50%',
      content: 'Airdrop 10 Specters',
      content2: 'Free drop of 100 hoodies',
      content3: '2% sales donation to community picked charity',
    },
    {
      title: '75%',
      content: 'Airdrop 15 Specters',
      content2: 'Free drop of 150 hoodies',
      content3: '3% sales donation to community picked charity',
    },
    {
      title: '100%',
      content: 'Airdrop 20 Specters',
      content2: 'Free drop of 250 hoodies',
      content3: '5% sales donation to community picked charity',
    },
  ];
  return (
    <div
      style={{
        backgroundColor: '#0E0D11',
        paddingBottom: '20px',
        paddingTop: '10px',
      }}
    >
      <LayoutContent>
        <div className="text-header">LANDMARKS</div>
        <div
          className="inside-text"
          style={{ paddingTop: '10px', paddingBottom: '10px' }}
        >
          We've picked some landmarks - once we hit a target through sell
          percentage, our goal will be clear.
        </div>
        <List
          grid={{ gutter: 16, column: 4 }}
          dataSource={data}
          renderItem={item => (
            <List.Item>
              <Card hoverable={true}>
                <div
                  style={{
                    textAlign: 'center',
                    fontWeight: 'bold',
                    fontSize: '30px',
                  }}
                >
                  {item.title}
                </div>
                <div>{item.content}</div>
                <div>{item.content2}</div>
                <div>{item.content3}</div>
              </Card>
            </List.Item>
          )}
        />
      </LayoutContent>
    </div>
  );
};
