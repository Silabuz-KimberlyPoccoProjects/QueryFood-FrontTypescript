import React from "react";



function FormLogin(){
 return (
   <>
   <body>
     <div className="reservation-form">
         <h2 className="">Login Form</h2>
         <form>
           <div className="reservation-form">
             <label htmlFor="exampleInputEmail1" className="form-label">Email: </label>
            
             <input type="email" className="form-control border border-primary" id="" aria-describedby=""></input>
           </div>
           <div className="reservation-form ">
             <label htmlFor="exampleInputPassword1" className="form-label">Password: </label>
             <input type="password" className="form-control border border-primary" id="exampleInputPassword1"></input>
           </div>
           <p className="small"><a className="text-primary" href="#forgotpassword">Forgot password?</a></p>
           <div className="d-grid">
            <button
                  className="action-button"
                  // onClick={ handleLogin }
            >Login
            </button>
           </div>
         </form> 
          

      </div>
   </body>
</>


 )
}

export default FormLogin;