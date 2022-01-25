import Feedbar from "../Feedbar/Feedbar"
import "./feedbarheader.css"
export default function FeedbarHeader(){
    return(
        <>
        <div id="feed" className="">
        <div className="row mt-4">
        <br></br>
<div className="col mt-4">
<br></br>

    <img src="https://www.groom.com/wp-content/uploads/2017/09/AndrewSalek-Raham-003-1024x683.jpg" alt="Card image cap"id="im1"/>


<span class=" text-muted" id="wot"> What is Happening?</span>
</div>
        </div><br></br>
        <div className="row">
        <i class="fa fa-picture-o" aria-hidden="true" id="ii"></i>
        <i class="fa fa-smile-o" aria-hidden="true" id="ii"></i>
        <i class="fa fa-calendar-o" aria-hidden="true" id="ii"></i>
        <i class="fa fa-map-marker" aria-hidden="true" id="ii"></i>
        <button className="btn btn-primary d-flex justify-content-lg-end" id="bb">Tweet</button>
        </div>
        <hr></hr>
        </div>
        <Feedbar/>
        </>
        
    )
}