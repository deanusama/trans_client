import logo from '../../assets/img/logo.png'
import googleImg from '../../assets/img/social-icons/google.svg'
import facebookImg from '../../assets/img/social-icons/facebook.svg'

const Register = () => {
    return (

        <div className="register-container full-height sm-p-t-30">
            <div className="d-flex justify-content-center flex-column full-height">
                <img src={logo} alt="logo" data-src="assets/img/logo.png" data-src-retina="assets/img/logo_2x.png" width={78} height={22} />
                <h3>Create your account</h3>
                <div className="social-register-container">
                    <button className="social-register">
                        <img src={googleImg} alt="google login icon" />
                        google
                    </button>
                    <button className="social-register">
                        <img src={facebookImg} alt="facebook login icon" />
                        Facebook
                    </button>
                </div>
                <div className="register-saperation" style={{ marginBottom: 5 }}>or with email and password</div>
                <form id="form-register" className="p-t-15" role="form" action="https://pages.revox.io/dashboard/latest/html/casual/index.html">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="form-group form-group-default">
                                <label>First Name</label>
                                <input type="text" name="fname" placeholder="John" className="form-control" required />
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="form-group form-group-default">
                                <label>Last Names</label>
                                <input type="text" name="lname" placeholder="Smith" className="form-control" required />
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            <div className="form-group form-group-default">
                                <label>Pages User name</label>
                                <input type="text" name="uname" placeholder="yourname.pages.com (this can be changed later)" className="form-control" required />
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            <div className="form-group form-group-default">
                                <label>Password</label>
                                <input type="password" name="pass" placeholder="Minimum of 4 Charactors" className="form-control" required />
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            <div className="form-group form-group-default">
                                <label>Email</label>
                                <input type="email" name="email" placeholder="We will send loging details to you" className="form-control" required />
                            </div>
                        </div>
                    </div>
                    <div className="row m-t-10">
                        <div className="col-lg-6">
                            <p><small>I agree to the <a href="#" className="text-info">Pages Terms</a> and <a href="#" className="text-info">Privacy</a>.</small></p>
                        </div>
                        <div className="col-lg-6 text-right">
                            <a href="#" className="text-info small">Help? Contact Support</a>
                        </div>
                    </div>
                    <button aria-label className="btn btn-primary btn-cons m-t-10" type="submit">Create a new
                        account</button>
                </form>
            </div>
        </div>
    )
}

export default Register