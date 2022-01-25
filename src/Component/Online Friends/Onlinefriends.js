import "./onlinefriends.css"

export function Onlinefriends({user}){
    return(
        <div className="container">
            <div className="row mt-3">
                
                </div>
                {/* <div className="row mt-3"> */}
                 <img src={user.img} id="online"/> <i class="fa fa-circle" aria-hidden="true" id="on"></i>&nbsp;<span>{user.name}</span><br></br>
                {/* <i class="fa fa-circle" aria-hidden="true" id="on"></i> <img src="https://c.stocksy.com/a/JT7300/z9/743709.jpg?1549975127" id="online"/> &nbsp;<span> jiya</span><br></br>
                <i class="fa fa-circle" aria-hidden="true" id="on"></i> <img src="https://th.bing.com/th/id/OIP.jryuUgIHWL-1FVD2ww8oWgHaHa?w=180&h=180&c=7&r=0&o=5&pid=1.7" id="online"/> &nbsp;<span> Saasha</span><br></br>
                <i class="fa fa-circle" aria-hidden="true" id="on"></i> <img src="https://th.bing.com/th/id/OIP.Qtx1LFZU409UVe1jfmB7ZAHaJQ?w=144&h=180&c=7&r=0&o=5&pid=1.7" id="online"/> &nbsp;<span> joyal</span><br></br>
                <i class="fa fa-circle" aria-hidden="true" id="on"></i> <img src="https://th.bing.com/th?q=Pretty+Girl+Side+Profile&w=120&h=120&c=1&rs=1&qlt=90&cb=1&pid=InlineBlock&mkt=en-IN&cc=IN&setlang=en&adlt=moderate&t=1&mw=247" id="online"/> &nbsp;<span> Toua</span><br></br>
                <i class="fa fa-circle" aria-hidden="true" id="on"></i> <img src="https://th.bing.com/th/id/OIP.QVMM2UDR8RNepSaTM1a8fQHaIa?w=180&h=203&c=7&r=0&o=5&pid=1.7" id="online"/> &nbsp;<span> Aizera</span> */}
                {/* </div> */}
        </div>    
        )
}