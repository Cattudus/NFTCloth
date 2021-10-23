import { HashRouter, Route, Switch } from 'react-router-dom';
import { Providers } from './providers';
import {
  AnalyticsView,
  ArtCreateView,
  ArtistsView,
  ArtistView,
  ArtView,
  ArtworksView,
  AuctionCreateView,
  AuctionView,
  HomeView,
} from './views';
import { AdminView } from './views/admin';
import { BillingView } from './views/auction/billing';
import {Shop} from "./views/shop";
import {AppLayout} from "./components/Layout";

export function Routes() {
  return (
    <>
     <AppLayout>
       <HomeView/>
     </AppLayout>
      {/*<HashRouter basename={'/'}>*/}
      {/*  <Providers>*/}
      {/*    <Switch>*/}
      {/*      <Route exact path="/admin" component={() => <AdminView />} />*/}
      {/*      <Route*/}
      {/*        exact*/}
      {/*        path="/analytics"*/}
      {/*        component={() => <AnalyticsView />}*/}
      {/*      />*/}
      {/*      <Route*/}
      {/*        exact*/}
      {/*        path="/art/create/:step_param?"*/}
      {/*        component={() => <ArtCreateView />}*/}
      {/*      />*/}
      {/*      <Route*/}
      {/*        exact*/}
      {/*        path="/artworks/:id?"*/}
      {/*        component={() => <ArtworksView />}*/}
      {/*      />*/}
      {/*      <Route exact path="/art/:id" component={() => <ArtView />} />*/}
      {/*      <Route exact path="/artists/:id" component={() => <ArtistView />} />*/}
      {/*      <Route exact path="/artists" component={() => <ArtistsView />} />*/}
      {/*      <Route exact path="/shop" component={() => <Shop />} />*/}
      {/*      <Route*/}
      {/*        exact*/}
      {/*        path="/auction/:id/billing"*/}
      {/*        component={() => <BillingView />}*/}
      {/*      />*/}
      {/*      <Route path="/" component={() => <HomeView />} />*/}
      {/*    </Switch>*/}
      {/*  </Providers>*/}
      {/*</HashRouter>*/}
    </>
  );
}