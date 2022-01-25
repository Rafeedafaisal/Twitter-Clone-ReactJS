import "./home.css"
import Entertainment from "../../Component/Entertainment/Entertainment"
import Feedbar from "../../Component/Feedbar/Feedbar"
import FeedbarHeader from "../../Component/Feedbarheader/Feedbarheader"
import Header from "../../Component/Header/Header"
import Live from "../../Component/LiveEntertnmnt/live"
import News from "../../Component/News/News"
import Search from "../../Component/Search/Search"
import Showmore from "../../Component/showmore/showmore"
import Sidebar from "../../Component/Sidebar/Sidebar"
import Trending from "../../Component/trendingIndia/trending"
import Wothpn from "../../Component/Wothpn/wothpn"
import { Onlinefriends } from "../../Component/Online Friends/Onlinefriends"
import Widget from "../../Component/Widget/Widget"
export default function Home(){
    return(
        <>
        <Header/>
        <div className="row">
        <div className="col-sm-3 offset-1">  <Sidebar/></div>
        <div className="col-sm-5" id="hom">   <FeedbarHeader/>
         </div>
         <div className="col-sm-3"><Widget/></div>
    </div>
        </>
    )
}