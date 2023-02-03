
function FormLogin(){
 return (
   <>
   <body>
     <div className="reservation-form">
       <div className="">
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
           <p className="small"><a className="text-primary" href="forget-password.html">Forgot password?</a></p>
           <div className="d-grid">
             <button className="redirect-button:hover" type="submit">Login</button>
           </div>
         </form>
         <div className="mt-3">
           <p className="mb-0  text-center">Don't have an account? <a href="signup.html"
             className="text-primary fw-bold">Sign
             Up</a></p>
         </div>
       </div>
     </div>
   </body>
</>


 )
}

export default FormLogin;