import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";
import { Update } from "../redux/features/authSlice";

function Profile() {
  const userShow = useSelector((state) => state.auth.user);

  const [user, setUser] = useState({
    picture: userShow.picture,
    firstName: userShow.firstName,
    lastName: userShow.lastName,
    email: userShow.email,
    phone: userShow.phone,
    address: userShow.address,
    phone: userShow.phone,
  });
  console.log(user);

  const dispatch = useDispatch();

  return (
    <div
      style={{
        marginTop: "4em",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-around",
      }}
    >
      <div>
        <img
          style={{ maxWidth: "200px", borderRadius: "50%" }}
          src={userShow.picture}
          alt="profile_picture"
        />
        <div>
          <h3>
            {userShow.firstName} {userShow.lastName}
          </h3>
          <p>{userShow.email}</p>
          <p>{userShow.phone}</p>
        </div>
      </div>
      <div>
        <h3>Update your informations</h3>
        <form>
          <div className="form-group">
            <label htmlFor="firstName">First Name</label>
            <input
              type="text"
              className="form-control"
              name="firstName"
              placeholder={userShow.firstName}
              onChange={(e) => setUser({ ...user, firstName: e.target.value })}
            />

            <label htmlFor="lastName">Last Name</label>
            <input
              type="text"
              className="form-control"
              name="lastName"
              placeholder={userShow.lastName}
              onChange={(e) => setUser({ ...user, lastName: e.target.value })}
            />
            <label htmlFor="email">Email address</label>
            <input
              type="email"
              className="form-control"
              name="email"
              value={userShow.email}
              disabled
            />
            <label htmlFor="phoneNumber">Phone number</label>
            <PhoneInput
              country={"DZ"}
              placeholder="+213"
              onChange={(e) => {
                setUser({ ...user, phone: e });
              }}
            />
            <br />
            <button
              onClick={() => {
                dispatch(Update({ user, toast }));
              }}
              type="submit"
              className="btn btn-primary"
            >
              Update
            </button>
          </div>
        </form>
      </div>
      <div>
        <h3>Change password</h3>
        <label htmlFor="password">Password</label>
        <input
          type="password"
          className="form-control"
          name="password"
          placeholder="Enter password"
          onChange={(e) => setUser({ ...user, password: e.target.value })}
        />
        <label htmlFor="password">Confirm Password</label>
        <input
          type="password"
          className="form-control"
          name="password"
          placeholder="Enter password"
          onChange={(e) =>
            setUser({ ...user, confirmPassword: e.target.value })
          }
        />
      </div>
    </div>
  );
}

export default Profile;
