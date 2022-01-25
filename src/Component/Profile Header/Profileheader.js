import "./profileheader.css"
export default function Profileheader(){
    return(
        <div className="container mt-4"><br></br>
           
        <div className="row ">
            <div className="col-sm-12">
        <h4>RAFEEDA<i class="fa fa-lock" aria-hidden="true"></i></h4>
        <span className="text-muted">0 Tweets</span>
        </div>
        </div>
        <div className="row">
            <div className="col-sm-12">
         <div id="rr">

         </div>
        <img src="https://lh3.googleusercontent.com/HzQsaaK-klakDb-3cS_qOpTQ8wkjr_kRjl7z_wFct_H8tRhx9fZYSBjZ3-xH9stvILfYaQY9Sw1s8jaioIQIqKVhqdsZ6eaGBQ=w960-rj-nu-e365" id="propic"></img>
        <button className="btn pull-right mt-3">Edit profile</button>
        <h5>RAFEEDA<i class="fa fa-lock" aria-hidden="true"></i></h5>
        <span className="text-muted">@Rafeeda</span>
        <p>student</p>
        <span className="text-muted"><i class="fa fa-map-marker" aria-hidden="true"> vatakara</i> <i class="fa fa-birthday-cake" aria-hidden="true">  Born july 30,1998 </i> <i class="fa fa-calendar" aria-hidden="true"> joined August 2017</i></span><br></br>
        <b>22</b><span className="text-muted"> Following</span>&nbsp;&nbsp;
        <b> 0</b><span className="text-muted"> Followers</span>
        </div>
        </div>
       <hr></hr>
    </div>
    )
}