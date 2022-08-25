import "./styles/login.css";
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import Spacer from "../components/spacer/spacer";
import { Fsign, Gsign, login } from "../redux/features/authSlice";
import { GoogleLogin } from "react-google-login";
import FacebookLogin from "react-facebook-login";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import Logo from ".././imgs/color-logo.svg";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    error && toast.error(error);
  }, [error]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    const logUser = {
      email,
      password,
    };
    if (email && password) {
      dispatch(login({ logUser, navigate, toast }));
    }
  };

  function responseFacebook(response) {
    console.log(response);
    const result = {
      email: response.email,
      firstName: response.name,
      picture: response.picture.data.url,
      role: "user",
      facebookId: response.userID,
      password: "facebook",
    };
    dispatch(Fsign({ result, navigate, toast }));
  }
  function componentClicked(response) {
    return console.log(response);
  }

  return (
    <div
      style={{
        margin: "4em 2em 0em 2em",
      }}
      className="d-flex justify-content-center align-items-center row"
    >
      <div className=" w-50 login-form">
        {error && <p className="text-danger">{error}</p>}
        <h5 className="card-title">connectez-vous à votre compte</h5>
        <div className=" d-flex card-body">
          <div>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="exampleInputEmail1">Adresse mail</label>
                <input
                  type="email"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="Enter email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="form-group">
                <label htmlFor="exampleInputPassword1">Mot de passe</label>
                <input
                  type="password"
                  className="form-control"
                  id="exampleInputPassword1"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <button type="submit" className="btn btn-primary mt-3 ">
                Connexion
              </button>
              <div>
                <Spacer />
              </div>
            </form>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              marginLeft: "5em",
              gap: "1em",
            }}
          >
            <div
              style={{
                width: "15em",
              }}
            >
              <GoogleLogin
                clientId="211431792070-5mcgq3uike9ok8hjuaq77kglt5mqdebb.apps.googleusercontent.com"
                buttonText="Login with Google"
                onSuccess={(res) => {
                  console.log(res);
                  const {
                    email,
                    givenName,
                    familyName,
                    googleId,
                    role,
                    imageUrl,
                  } = res.profileObj;
                  const { accessToken } = res;
                  const result = {
                    email,
                    googleId,
                    firstName: givenName,
                    lastName: familyName,
                    token: accessToken,
                    password: "google",
                    role: "user",
                    picture: imageUrl,
                  };
                  dispatch(Gsign({ result, navigate, toast }));
                  console.log(result);
                }}
                onFailure={(err) => {
                  console.log(err);
                }}
                cookiePolicy={"single_host_origin"}
              />
            </div>
            <div
              style={{
                width: "11em",
              }}
            >
              <FacebookLogin
                appId="1344499929288305"
                autoLoad={false}
                fields="name,email,picture"
                scope="public_profile"
                onClick={componentClicked}
                callback={responseFacebook}
                render={(renderProps) => (
                  <button
                    style={{ width: "60px" }}
                    onClick={renderProps.onClick}
                    disabled={renderProps.disabled}
                    className="btn btn-primary mt-3"
                  >
                    Facebook
                  </button>
                )}
              />
            </div>
          </div>
        </div>
        <div className="login_link">
          Pas de compte ? <Link to="/register">Inscrivez-vous</Link>
        </div>
      </div>
      <div>
        <img className="logo" src={Logo} alt="" />
        <div className="logo_text_card m-2 ">
          <p>
            De nos jours, nous sommes tous connectés par la technologie et les{" "}
            <br />
            commodités de vente au détail qui changent notre façon de <br />
            travailler, de vivre, de magasiner et de passer notre temps libre{" "}
            <br />
            Chez L'éternelle Des Plantes, nous innovons et évoluons absolument{" "}
            <br />
            pour répondre aux besoins et aux désirs de nos clients, mais <br />
            quelques éléments de base de notre expérience - avec nous depuis{" "}
            <br />
            le début - ne changeront jamais. C'est la promesse d'une qualité,{" "}
            <br />
            d'une sélection et d'un service imbattables qui servent de <br />
            fondement à notre entreprise et qui créent une expérience de <br />
            jardinerie incroyable qui ne peut tout simplement pas être trouvée{" "}
            <br />
            ailleurs.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;
