import "./feedbar.css"
export default function Feedbar(){
    return(
        <div id="feed">
       
        <div className="mx-auto">
       
        {/* <div className="col "> */}
            <center>
            <h6 id="show" className="">Show 2 Tweets</h6></center>
            {/* </div> */}
       </div>
        <hr></hr>
        
        <div>
           
            <img  src="https://1847884116.rsc.cdn77.org/tamil/home/suryakumaryadhav13032021m.jpg" alt="Card image cap" id="im1"/>
            <span>Surya Kumar Yadav</span><img src="https://webstockreview.net/images/twitter-verified-png.png" id="im2"/>
            <span className="text-muted">@surya_14kumar.19h</span>

            <div className="card mx-auto">
  <h6 className="card-title">Glad to meet surya bro..</h6>
  <img className="card-img-top"src="https://pbs.twimg.com/media/FIaSktJVkAAk1hm?format=jpg&name=large"/>
  <div className="card-body">
    <p className="card-text"></p>
  </div>
</div>
            
            
           
        
        </div>
        
        <div id="icon">
       
        <i className="fa fa-comment-o mr-4" aria-hidden="true" ></i>
       
        <i className="fa fa-retweet mr-4" aria-hidden="true"></i>
        <i className="fa fa-heart-o mr-4" aria-hidden="true" ></i>
        <i className="fa fa-share-square-o" aria-hidden="true"></i>
        
        </div>
        

        </div>
        
    )

}