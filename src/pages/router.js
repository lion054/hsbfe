import Home01 from "./Home01";
import Home02 from "./Home02";
import Marketo from './Marketo'
import Creator from './Creator'
import ItemDetails from './ItemDetails'
import Blog from './Blog'
import BlogDetails from './BlogDetails'
import ConnectWallet from './ConnectWallet'
import CreateItem from './CreateItem'
import Namez from './Namez'
import Povo from './Povo'
import Groupa from './Groupa'

const routes = [
    { path: '/', component: <Home01 />},
    { path: '/home-02', component: <Home02 />},
    { path: '/Marketo', component: <Marketo />},
    { path: '/creator', component: <Creator />},
    { path: '/item-details', component: <ItemDetails />},
    { path: '/blog', component: <Blog />},
    { path: '/blog-details', component: <BlogDetails />},
    { path: '/connect-wallet', component: <ConnectWallet />},
    { path: '/create-item', component: <CreateItem />},
    { path: '/namez', component: <Namez />},
    { path: '/povo', component: <Povo />},
    { path: '/groupa', component: <Groupa />},
]

export default routes;