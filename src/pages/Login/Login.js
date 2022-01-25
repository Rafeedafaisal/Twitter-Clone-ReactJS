import "./login.css"
export default function Login(){
    return(
        <div className="container">
<center>
            <div className="mt-4">
               
                <h4 id="twit">Twitter</h4>
                
            
            </div>
            </center>
        <div class="d-flex justify-content-center align-items-center mt-5">
           
               
            
            
    <div class="card">
        {/* <ul class="nav nav-pills mb-3" id="pills-tab" role="tablist">
            <li class="nav-item text-center"> <a class="nav-link active btl" id="pills-home-tab" data-toggle="pill" href="#pills-home" role="tab" aria-controls="pills-home" aria-selected="true">Login</a> </li>
            
        </ul> */}
        <div className="card-title mx-auto">
            <br></br>
            <h5>Login into Twitter</h5>
        </div>
        <div class="tab-content" id="pills-tabContent">
            <div class="tab-pane fade show active" id="pills-home"  aria-labelledby="pills-home-tab">
                <div class="form px-4 pt-5"> 
                <input type="text" name="" class="form-control" placeholder="Email or Phone"/>
                 <input type="text" name="" class="form-control" placeholder="Password"/>
                  <button class="btn btn-dark btn-block">Login</button>
                  <br></br>
                  <a href="">Forgotten password? .</a>
                  <a href="">Sign up for Facebook</a>
                 </div>
            </div>
           
        </div>
    </div>
</div>
</div>
    )
}