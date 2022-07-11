import HomeOne from "./HomeOne";
import AboutOne from "./AboutOne";
import ComingSoon from "./ComingSoon";
import Community from "./Community";
import Page404 from "./404";
import RoadMapOne from "./RoadMapOne";
import RoadMapTwo from "./RoadMapTwo";
import NftItem from "./NftItem";
import NftItemDetails from "./NftItemDetails";
import TeamDetail from "./TeamDetail";


const routes = [
  { path: '/', component: <HomeOne />},
  { path: '/about-v1', component: <AboutOne />},
  { path: '/coming-soon', component: <ComingSoon />},
  { path: '/community', component: <Community />},
  { path: '/404', component: <Page404 />},
  { path: '/road-map-v1', component: <RoadMapOne />},
  { path: '/account', component: <RoadMapTwo />},
  { path: '/nft-item', component: <NftItem />},
  { path: '/nft-item-details', component: <NftItemDetails />},
  { path: '/team-details', component: <TeamDetail />},

]

export default routes;