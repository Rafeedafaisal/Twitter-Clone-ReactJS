import "./registration.css"
export default function Registration(){
    return(
        <div className="form-bg">
    <div className="container">
        <h4 className="mt-5" id="tt">twitter</h4>
       
        <div className="row ">
            <div className="col-sm-6 offset-3">
              
                <div className="form-container">
                    <h3 className="title">Create a new account</h3>
                    <p className="text-muted">its quick and easy</p>
                 
                    <form>
  <div class="form-row">
    <div class="form-group col-md-6">
    <input className="form-control" type="text" placeholder="First name"/>
    </div>
    <div class="form-group col-md-6">
    <input className="form-control" type="text" placeholder="Surname"/>
    </div>
  </div>
  <div class="form-group">
  <input className="form-control" type="text" placeholder="Mobile Number or Email address"/>
  </div>
  <div class="form-group">
  <input className="form-control" type="password" placeholder="New Password"/>
  </div>

  
  {/* <div class="input-group date" data-provide="datepicker">
    <input type="text" class="form-control"/>
    <div class="input-group-addon">
        <span class="glyphicon glyphicon-th"></span>
    </div>
</div> */}

<div className="d-md-flex justify-content-start align-items-center mb-4 py-2">

                  <h6 className="mb-0 me-4">Gender: </h6>

                  <div className="form-check form-check-inline mb-0 me-4">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="inlineRadioOptions"
                      id="femaleGender"
                      value="option1"
                    />
                    <label className="form-check-label" for="femaleGender">Female</label>
                  </div>

                  <div className="form-check form-check-inline mb-0 me-4">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="inlineRadioOptions"
                      id="maleGender"
                      value="option2"
                    />
                    <label className="form-check-label" for="maleGender">Male</label>
                  </div>

                  <div className="form-check form-check-inline mb-0">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="inlineRadioOptions"
                      id="otherGender"
                      value="option3"
                    />
                    <label className="form-check-label" for="otherGender">Other</label>
                  </div>

                </div>



  {/* <div className="form-row">
    <div className="form-group col-md-6">
      <label for="inputCity">City</label>
      <input type="text" className="form-control" id="inputCity"/>
    </div>
    <div className="form-group col-md-4">
      <label for="inputState">State</label>
      <select id="inputState" className="form-control">
        <option selected>Choose...</option>
        <option>...</option>
      </select>
    </div>
    <div className="form-group col-md-2">
      <label for="inputZip">Zip</label>
      <input type="text" className="form-control" id="inputZip"/>
    </div>
  </div> */}
  <div className="form-group">
    
     <p className="text-muted" id="mut">By clicking Sign Up, you agree to our Terms, Data Policy and Cookie Policy. You may receive SMS notifications from us and can opt out at any time.</p>
      
    
  </div>
  <button type="submit" className="btn btn-success offset-5 ">Sign in</button><br></br>
  <div className="form-row mt-3 mx-auto">
  <p><a href="" >Already Have an Account? Click Here to</a></p>
  </div>
</form>
                   
                </div>
            </div>
            
        </div>
       
    </div>
</div>
    )
}