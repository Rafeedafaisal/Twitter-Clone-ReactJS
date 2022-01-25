import Header from "../../Component/Header/Header"
import Search from "../../Component/Search/Search"
import Sidebar from "../../Component/Sidebar/Sidebar"
import "./profile.css"
import { post } from "../../dummyarray"
import Postprofile from "../../Component/Postprofile/postprofile"
import Profileheader from "../../Component/Profile Header/Profileheader"
import Widget from "../../Component/Widget/Widget"
export default function Profile(){
    return(<>
     <div className="row">
         <div className="col-sm-12">
    <Header/>
    </div>
    </div>
    <div className="row">
    <div className="col-sm-3 offset-1">  <Sidebar/></div>
    <div className="col-sm-5" id="hom"> 
     <Profileheader/>
    
     

       <div className="row"><div className="col "><center>
           <button className="btn btn-primary mb-4">Share</button></center>
         { post.map((data)=>(
 <Postprofile key={data.id} details={data}/>
         ))
         
         }
       </div>
       
      </div>

       </div>
       <div className="col-sm-3"><Widget profile/></div>
       </div>
       </>
    )
}