import { ob } from "../../dummyarray";
import Entertainment from "../Entertainment/Entertainment";
import Live from "../LiveEntertnmnt/live";
import News from "../News/News";
import { Onlinefriends } from "../Online Friends/Onlinefriends";
import Search from "../Search/Search";
import Showmore from "../showmore/showmore";
import Trending from "../trendingIndia/trending";
import Wothpn from "../Wothpn/wothpn";
import "./widget.css"


export default function Widget({profile}){
    const Homewidget=()=>{
        return(
            <div id="allwid">
        
            <div id="widdiv">
             <div className="row mb-4">
             <div className="col">
             <Wothpn/>
             </div></div>
             <div className="row">
             <div className="col">
             <News/>   
             </div></div>
             <div className="row">
             <div className="col">
                 <Entertainment/>
             </div></div>
             <div className="row">
         <div className="col">
                 <Trending/>
             </div></div>
             <div className="row">
             <div className="col">
                 <Live/>
                 </div></div>
                 <div className="row">
                 <div className="col">
                     <Showmore/>
                 </div> </div>
          </div>
            </div>
        )
    }
    const Profilewidget=()=>{
        return(
          
            <div className="row">
             <div className="col">
             {
                 ob.map((u,i)=>(
                     <Onlinefriends key={i} user={u}/>
        ))
             } 
             </div></div>
            
        )
    }
    // return(
    // <div id="allwid">
    //     <div id="divsearch">
    //         <div className="row mb-4">
    //             <div className="col">
    //             <Search/>
    //         </div>
    //         </div></div>

    //         <div id="widdiv">
    //         <div className="row mb-4">
    //         <div className="col">
    //         <Wothpn/>
    //         </div></div>
    //         <div className="row">
    //         <div className="col">
    //         <News/>   
    //         </div></div>
    //         <div className="row">
    //         <div className="col">
    //             <Entertainment/>
    //         </div></div>
    //         <div className="row">
    //         <div className="col">
    //             <Trending/>
    //         </div></div>
    //         <div className="row">
    //         <div className="col">
    //             <Live/>
    //             </div></div>
    //             <div className="row">
    //             <div className="col">
    //                 <Showmore/>
    //             </div> </div>
    //      </div>
         
    //      </div>
         
    // )
    return(
        <div>
              <div id="allwid">
        <div id="divsearch">
            <div className="row mb-4">
                <div className="col">
                <Search/>
            </div>
            </div></div>
            {
                profile?<Profilewidget/>:<Homewidget/>
            }
        </div>
        </div>
    )
}