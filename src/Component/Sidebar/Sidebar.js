import { Onlinefriends } from '../Online Friends/Onlinefriends'
import './sidebar.css'
import { ob } from '../../dummyarray';

export default function Sidebar(){
    return(
        <div id='sidediv' className='mt-5'>
            
            <i className="fa fa-twitter fa-2x " aria-hidden="true" style={{color:"	#1DA1F2"}}></i><br></br>
            <i className="fa fa-home" aria-hidden="true"></i><span>Home</span><br></br>
            <i className="fa fa-hashtag" aria-hidden="true"></i><span>Explore</span><br></br>
            <i className="fa fa-bell-o" aria-hidden="true"></i><span>Notifications</span><br></br>
            <i className="fa fa-envelope-o" aria-hidden="true"></i><span>Messages</span><br></br>
            <i className="fa fa-bookmark-o" aria-hidden="true"></i><span>Bookmarks</span><br></br>
            <i className="fa fa-list-alt" aria-hidden="true"></i><span>List</span><br></br>
            <i className="fa fa-user-o" aria-hidden="true"></i><span>Profile</span><br></br>
            <i className="fa fa-ellipsis-h" aria-hidden="true" id='more'></i><span>More</span><br></br>
            <h6>Online Friends</h6>
            {
                ob.map((u,i)=>(
                 <Onlinefriends key={i} user={u} />
    ))
            
            }
            
        </div>
    )
    }
     