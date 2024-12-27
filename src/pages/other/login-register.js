import { Container, Row, Col } from "react-bootstrap";
import { LayoutTwo } from "../../components/Layout";
import { BreadcrumbOne } from "../../components/Breadcrumb";
import Anchor from "../../components/anchor";
import { useState } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { loginSuccess } from "../../store/slices/login-Slice";
import { useRouter } from "next/router";

const LoginRegister = () => {
  const [emailLogin, setEmailLogin] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();
  const dispatch = useDispatch();
  const [error, setError] = useState('');
  // const router = useRouter();


  // const handleLogin = async (credentials) => {
  //     dispatch(loginStart());
  //     try {
  //         const response = await authenticateUser(credentials); // Replace with your authentication logic
  //         dispatch(loginSuccess(response));
  //         router.push('/account'); // Navigate to the account page on successful login
  //     } catch (error) {
  //         dispatch(loginFailure(error.message));
  //     }
  // };

  const handleLogin = async () => {
    try {
      console.log('Login successful:', "testlogin");
      const response = await axios.post('http://localhost:8080/api/authen/login', {
        email: emailLogin,
        password
      });

      console.log('Login successful:', response.data.data);
      console.log(response.data.data);
      // const { email, accountId , } = response.data.data;
      const  email  = response.data.data.email;
      const  accountId  = response.data.data.account_id;
      // Dispatch loginSuccess action with email and accountId
      dispatch(loginSuccess({ email, accountId }));
      debugger
      // router.push('/other/my-account');
      // Cookies.set('loggedIn', true);
      // Do something after successful login, like redirecting to another page
    } catch (error) {
      console.error('Login failed:', error);
      setError('Invalid username or password');
    }
  };

  return (
    <LayoutTwo>
      {/* breadcrumb */}
      <BreadcrumbOne
        pageTitle="Customer Login"
        backgroundImage="/assets/images/backgrounds/breadcrumb-bg-2.jpg"
      >
        <ul className="breadcrumb__list">
          <li>
            <Anchor path="/">
              Home
            </Anchor>
          </li>

          <li>Customer Login</li>
        </ul>
      </BreadcrumbOne>
      <div className="login-area space-mt--r130 space-mb--r130">
        <Container>
          <Row>
            <Col lg={6} className="space-mb-mobile-only--50">
              <div className="lezada-form login-form">
                <form>
                  <Row>
                    <Col lg={12}>
                      <div className="section-title--login text-center space-mb--50">
                        <h2 className="space-mb--20">Đăng nhập</h2>
                        <p>Xin vui lòng nhập email , mật khẩu</p>
                        {error && <div style={{ color: 'red' }}>{error}</div>}
                      </div>
                    </Col>
                    <Col lg={12} className="space-mb--60">
                      <input
                        type="text"
                        value={emailLogin}
                        placeholder="Username or email address"
                        onChange={(e) => setEmailLogin(e.target.value)}
                        required
                      />
                      {/* <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          /> */}
                    </Col>
                    <Col lg={12} className="space-mb--60">
                      <input value={password} type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} required />
                      {/* <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          /> */}
                    </Col>
                    <Col lg={12} className="space-mb--30">
                      {/* <button type="button" onClick={handleLogin}>Login
                    </button> */}
                      <button className="lezada-button lezada-button--medium" type="button" onClick={handleLogin}>
                        Đăng nhập
                      </button>
                    </Col>
                    <Col>
                      <input type="checkbox" />{" "}
                      <span className="remember-text">Remember me</span>
                      <a href="#" className="reset-pass-link">
                        Lost your password?
                      </a>
                    </Col>
                  </Row>
                </form>

              </div>
            </Col>
            <Col lg={6}>
              <div className="lezada-form login-form--register">
                <form>
                  <Row>
                    <Col lg={12}>
                      <div className="section-title--login text-center space-mb--50">
                        <h2 className="space-mb--20">Register</h2>
                        <p>If you don’t have an account, register now!</p>
                      </div>
                    </Col>
                    <Col lg={12} className="space-mb--30">
                      <label htmlFor="regEmail">
                        Email Address <span className="required">*</span>{" "}
                      </label>
                      <input type="text" id="regEmail" required />
                    </Col>
                    <Col lg={12} className="space-mb--50">
                      <label htmlFor="regPassword">
                        Password <span className="required">*</span>{" "}
                      </label>
                      <input type="password" id="regPassword" required />
                    </Col>
                    <Col lg={12} className="space-mb--50">
                      <label htmlFor="regPassword">
                        OTP <span className="required">*</span>{" "}
                      </label>
                      <Row><Col><input type="text" id="regPassword" required /> </Col><Col><button>send</button></Col> </Row>
                    </Col>
                    <Col lg={12} className="text-center">
                      <button className="lezada-button lezada-button--medium">
                        register  
                      </button>
                    </Col>
                  </Row>
                </form>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </LayoutTwo>
  );
};

export default LoginRegister;
