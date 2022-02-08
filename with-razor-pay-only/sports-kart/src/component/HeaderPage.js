import React from "react";
import { GoogleLogin, GoogleLogout } from 'react-google-login';
import { Link } from "react-router-dom";
import './pages/css/login.css'

const clientId = "571723610156-0i3om2lm0vb2t5ssfcrns3h3dhgaiibt.apps.googleusercontent.com";

class HeaderPage extends React.Component{
    constructor(props){
        super(props)
        this.state = {valid:false}
        this.openLoginForm = this.openLoginForm.bind(this)
        this.closeLoginForm = this.closeLoginForm.bind(this)
        this.openSignUpForm = this.openSignUpForm.bind(this)
        this.closeSignUpForm = this.closeSignUpForm.bind(this)

        this.onLoginSuccess = this.onLoginSuccess.bind(this)
        this.onSignoutSuccess = this.onSignoutSuccess.bind(this)
        this.onLoginFailure = this.onLoginFailure.bind(this)
    }

    //[showloginButton, setShowloginButton] = useState(true);
    //const [showlogoutButton, setShowlogoutButton] = useState(false);
    onLoginSuccess = (res) => {
        console.log('Login Success:', res.profileObj);
        setShowloginButton(false);
        setShowlogoutButton(true);
    };

    onLoginFailure = (res) => {
        console.log('Login Failed:', res);
    };

    onSignoutSuccess = () => {
        alert("You have been logged out successfully");
        console.clear();
        setShowloginButton(true);
        setShowlogoutButton(false);
    };

    openSignUpForm(){
        document.getElementById("lssignupform").style.display = "block";
    }
    closeSignUpForm(){
        document.getElementById("lssignupform").style.display = "none";
    }
    openLoginForm(){
        document.getElementById("lsloginform").style.display = "block";
    }
    closeLoginForm(){
        document.getElementById("lsloginform").style.display = "none";
    }
    render(){
        let block1;
        if (this.state.valid) {
              block1 = <ul className="nav justify-content-end">
                    <li className="nav-item">
                        <p className="nav-link active" aria-current="page" href="#">
                            <svg width="24" height="24" viewBox="0 0 70 70" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g clipPath="url(#clip0_1_16)">
                                <path d="M0 10.769V13.4614H21.5385V16.1537H5.38462V18.846H0V21.5383H18.8462V24.2306H5.38462V26.9229H0V29.6152H16.1538V32.3075H5.38462V34.9998H0V37.6921H13.4615V40.3844H5.38462V51.1537C5.38462 52.769 6.46154 53.846 8.07692 53.846H10.7692C11.3077 49.269 15.3462 45.516 20.1923 45.516C25.0385 45.516 29.0769 48.9998 29.6154 53.846H37.6923C39.3077 53.846 40.3846 52.769 40.3846 51.1537V13.4614C40.3846 11.846 39.3077 10.769 37.6923 10.769H0ZM45.7692 21.5383C44.1538 21.5383 43.0769 22.6152 43.0769 24.2306V51.1537C43.0769 52.4998 44.1538 53.846 45.7692 53.846C46.3077 49.269 50.3462 45.516 55.1923 45.516C60.0385 45.516 64.0769 48.9998 64.6154 53.846H67.3077C68.9231 53.846 70 52.769 70 51.1537V37.6921C70 35.269 67.8112 32.3075 67.8112 32.3075L61.9231 24.2306C60.5769 22.6152 59.7692 21.5383 57.8846 21.5383H45.7692ZM51.1538 26.9229H57.6315C58.17 26.9229 58.7273 27.429 58.7273 27.429L64.3623 35.2529C64.9008 36.0606 65.4581 36.9006 65.4581 37.439H51.1538V26.9229ZM20.1923 48.9675C18.5429 48.9732 16.9627 49.6307 15.7962 50.7968C14.6296 51.9628 13.9714 53.5428 13.965 55.1921C13.9707 56.842 14.6286 58.4226 15.7952 59.5892C16.9618 60.7558 18.5425 61.4137 20.1923 61.4194C21.8421 61.4137 23.4228 60.7558 24.5894 59.5892C25.756 58.4226 26.4139 56.842 26.4196 55.1921C26.4139 53.5423 25.756 51.9616 24.5894 50.795C23.4228 49.6284 21.8421 48.9705 20.1923 48.9648V48.9675ZM55.1923 48.9675C53.5429 48.9732 51.9627 49.6307 50.7962 50.7968C49.6296 51.9628 48.9714 53.5428 48.965 55.1921C48.9707 56.842 49.6286 58.4226 50.7952 59.5892C51.9618 60.7558 53.5425 61.4137 55.1923 61.4194C56.8421 61.4137 58.4228 60.7558 59.5894 59.5892C60.756 58.4226 61.4139 56.842 61.4196 55.1921C61.4139 53.5423 60.756 51.9616 59.5894 50.795C58.4228 49.6284 56.8421 48.9705 55.1923 48.9648V48.9675Z" fill="black"/>
                                </g>
                                <defs>
                                <clipPath id="clip0_1_16">
                                <rect width="70" height="70" fill="white"/>
                                </clipPath>
                                </defs>
                            </svg>                
                        </p>
                    </li>
                    <Link to="/wishlist"><li className="nav-item">
                    <p className="nav-link" href="#">
                        <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" style={{marginLeft:"-15", marginRight:"-10"}} width="24" fill="#363636"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg>
                    </p>
                    </li></Link>
                    <Link to="/cart"><li className="nav-item">
                    <p className="nav-link" href="#">
                    <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" style={{marginLeft:"-10", marginRight:"-10"}} fill="#363636"><path d="M0 0h24v24H0z" fill="none"/><path d="M7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zM1 2v2h2l3.6 7.59-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h12v-2H7.42c-.14 0-.25-.11-.25-.25l.03-.12.9-1.63h7.45c.75 0 1.41-.41 1.75-1.03l3.58-6.49c.08-.14.12-.31.12-.48 0-.55-.45-1-1-1H5.21l-.94-2H1zm16 16c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2z"/></svg>
                    </p>
                    </li></Link>
                    <Link to="/profile"><li className="nav-item">
                    <p className="nav-link" href="#">
                        <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" style={{marginLeft:"-10", marginRight:"-10"}} fill="#363636"><path d="M0 0h24v24H0z" fill="none"/><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z"/></svg>
                    </p>
                    </li>
                    </Link>    
                        </ul>
   
        }else{
            block1 =  <ul className="nav justify-content-end">
                        <li className="nav-item">
                        <p className="nav-link" href="#">
                            <button className="headsignin"
                                onClick={
                                    this.openLoginForm
                                }
                            >Sign In</button>
                        </p></li>
                        <li className="nav-item">
                        <p className="nav-link" href="#">
                            <button className="headsignup" style={{zIndex:1}}
                                onClick={
                                    this.openSignUpForm
                                }
                            >Sign Up</button>
                        </p></li>
                    </ul>
        }
        return(
          <div>
            <div style={{position:"fixed", zIndex: 1, width:100+"%"}}>
                <nav  className="navbar navbar-expand-lg navbar-light bg-light heder1">
                <div className="container-fluid">
                    <Link to="/" style={{textDecoration:'none'}}><p className="navbar-brand logo" href="#">SPORTHUB</p></Link>
                    <ul className="nav justify-content-center">
                        <li className="nav-item">
                            <input type="text" className="searchinput" placeholder="Search Product like bat, ball, football"/>
                        </li>
                        <li className="nav-item">
                        <button className="searchbutton">
                            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#363636"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/></svg>
                        </button>
                        </li>
                    </ul>
                    {/* block */ }
                    {block1}
                </div>
                </nav>
                <ul className="nav lrm justify-content-center">
                    <li className="nav-item">
                    <a className="nav-link sublist">Customer Services</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link sublist active" href="#">Cricket</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link sublist" href="#">Football</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link sublist" href="#">Best Sellers</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link sublist" href="#">Today's Deals</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link sublist" href="#">Prime</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link sublist">Gloves</a>
                    </li>
                </ul>
            </div>
            <div id="lsloginform">
                <FormHeader title="Login" method1={this.closeLoginForm} />
                <Form />
                <OtherMethods />
            </div>
            <div id="lssignupform">
                <FormHeader title="Sign Up" method1={this.closeSignUpForm} />
                <SForm />
                <OtherMethods />
            </div>
          </div>
        );
    }
}
const FormHeader = props => (
    <div>
        <div style={{width:100+"%", textAlign:"end", paddingRight:10}}>
            <button className="lsclose"
                onClick={
                    props.method1
                }
            ><p style={{fontSize:10}}>&#x2717;</p></button>
        </div>
        <h2 id="lsheaderTitle">{props.title}</h2>
    </div>
);


const Form = props => (
   <div>
     <FormInput description="Username" placeholder="Enter your username" type="text" />
     <FormInput description="Password" placeholder="Enter your password" type="password"/>
     <FormButton title="Log in"/>
   </div>
);
const SForm = props => (
    <div>
        <FormInput description="Username" placeholder="Enter your username" type="text" />
        <FormInput description="Password" placeholder="Enter your password" type="password"/>
        <FormInput description="Confirm Password" placeholder="Enter your password" type="password"/>
        <FormButton title="Sign Up"/>
    </div>
 );

const FormButton = props => (
  <div id="lsbutton" className="lsrow">
    <button>{props.title}</button>
  </div>
);

const FormInput = props => (
  <div className="lsrow">
    <p className="lslabel1">{props.description}</p>
    <input type={props.type} placeholder={props.placeholder}/>
  </div>  
);

const OtherMethods = props => (
  <div id="lsalternativeLogin">
      <p className="lsorsigninwith">or SignIn with </p>
    <div id="lsiconGroup">
      <Facebook />
      <Twitter />
      <Google />
    </div>
  </div>
);

const Facebook = props => (
  <a href="#" id="lsfacebookIcon"><svg fill="#000000" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 30 30" width="23px" height="23px">    <path d="M15,3C8.373,3,3,8.373,3,15c0,6.016,4.432,10.984,10.206,11.852V18.18h-2.969v-3.154h2.969v-2.099c0-3.475,1.693-5,4.581-5 c1.383,0,2.115,0.103,2.461,0.149v2.753h-1.97c-1.226,0-1.654,1.163-1.654,2.473v1.724h3.593L19.73,18.18h-3.106v8.697 C22.481,26.083,27,21.075,27,15C27,8.373,21.627,3,15,3z"/></svg></a>
);

const Twitter = props => (
  <a href="#" id="lstwitterIcon"><svg fill="#000000" xmlns="http://www.w3.org/2000/svg"  style={{marginLeft:-10}} viewBox="0 0 50 50" width="20px" height="20px"><path d="M 50.0625 10.4375 C 48.214844 11.257813 46.234375 11.808594 44.152344 12.058594 C 46.277344 10.785156 47.910156 8.769531 48.675781 6.371094 C 46.691406 7.546875 44.484375 8.402344 42.144531 8.863281 C 40.269531 6.863281 37.597656 5.617188 34.640625 5.617188 C 28.960938 5.617188 24.355469 10.21875 24.355469 15.898438 C 24.355469 16.703125 24.449219 17.488281 24.625 18.242188 C 16.078125 17.8125 8.503906 13.71875 3.429688 7.496094 C 2.542969 9.019531 2.039063 10.785156 2.039063 12.667969 C 2.039063 16.234375 3.851563 19.382813 6.613281 21.230469 C 4.925781 21.175781 3.339844 20.710938 1.953125 19.941406 C 1.953125 19.984375 1.953125 20.027344 1.953125 20.070313 C 1.953125 25.054688 5.5 29.207031 10.199219 30.15625 C 9.339844 30.390625 8.429688 30.515625 7.492188 30.515625 C 6.828125 30.515625 6.183594 30.453125 5.554688 30.328125 C 6.867188 34.410156 10.664063 37.390625 15.160156 37.472656 C 11.644531 40.230469 7.210938 41.871094 2.390625 41.871094 C 1.558594 41.871094 0.742188 41.824219 -0.0585938 41.726563 C 4.488281 44.648438 9.894531 46.347656 15.703125 46.347656 C 34.617188 46.347656 44.960938 30.679688 44.960938 17.09375 C 44.960938 16.648438 44.949219 16.199219 44.933594 15.761719 C 46.941406 14.3125 48.683594 12.5 50.0625 10.4375 Z"/></svg></a>
);

const Google = props => (
<GoogleLogin
                    clientId={clientId}
                    buttonText="Sign In"
                    onSuccess={props.onLoginSuccess}
                    onFailure={props.onLoginFailure}
                    cookiePolicy={'single_host_origin'}
                    isSignedIn={true}
                />);

export default HeaderPage;