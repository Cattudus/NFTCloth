import React from 'react';
import { Layout } from 'antd';

import { LABELS } from '../../constants';
import { AppBar } from '../AppBar';
import useWindowDimensions from '../../utils/layout';

const { Header, Content } = Layout;

const paddingForLayout = (width: number) => {
  if (width <= 768) return '5px 10px';
};

export const LayoutContent = React.memo((props: any) => {
  const { width } = useWindowDimensions();
  return(
  <Layout style={{
    padding: paddingForLayout(width),
    maxWidth: 1000,
  }}>
    {props.children}
  </Layout>
  );
});

export const AppLayout = React.memo((props: any) => {
  const { width } = useWindowDimensions();

  return (
    <>
      <Layout
      >
        <Header className="App-Bar">
          <AppBar />
        </Header>
        <Content style={{ overflow: 'scroll', paddingBottom: 50 }}>
          {props.children}
        </Content>
      </Layout>
    </>
  );
});
