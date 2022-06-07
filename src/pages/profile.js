import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";
import { Update, UpdatePass } from "../redux/features/authSlice";
import "./styles/profile.css";
import { userOrder } from "../redux/features/orderSlice";

function Profile() {
  const userShow = useSelector((state) => state.auth.user);
  const order = useSelector((state) => state.order.order);
  console.log(order);
  const userInfo = localStorage.getItem("profile");
  const userData = JSON.parse(userInfo);
  console.log(userData);

  const [user, setUser] = useState({
    picture: userData.picture,
    firstName: userData.firstName,
    lastName: userData.lastName,
    email: userData.email,
    phone: userData.phone,
    address: userData.address,
    phone: userData.phone,
  });
  const [password, setPassword] = useState({
    old: "",
    new: "",
    confirm: "",
  });
  console.log(user);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(userOrder({ toast }));
  }, []);

  const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
    },
  }));

  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    "&:last-child td, &:last-child th": {
      border: 0,
    },
  }));

  function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
  }

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "20px",
      }}
    >
      <div
        className="profile"
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
            src={userData.picture}
            alt="profile_picture"
          />
          <div>
            <h3>
              {userData.firstName} {userData.lastName}
            </h3>
            <p>{userData.email}</p>
            <p>{userData.phone}</p>
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
                placeholder={userData.firstName}
                onChange={(e) =>
                  setUser({ ...user, firstName: e.target.value })
                }
              />

              <label htmlFor="lastName">Last Name</label>
              <input
                type="text"
                className="form-control"
                name="lastName"
                placeholder={userData.lastName}
                onChange={(e) => setUser({ ...user, lastName: e.target.value })}
              />
              <label htmlFor="email">Email address</label>
              <input
                type="email"
                className="form-control"
                name="email"
                value={userData.email}
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
                className="btn btn-primary"
              >
                Update
              </button>
            </div>
          </form>
        </div>
        <div>
          <h3>Change password</h3>

          <label htmlFor="oldPassword">Old password</label>
          <input
            type="password"
            className="form-control"
            name="oldPassword"
            placeholder="Enter your old password"
            onChange={(e) => setPassword({ ...password, old: e.target.value })}
          />
          <label htmlFor="password">Password</label>
          <input
            type="password"
            className="form-control"
            name="password"
            placeholder="Enter password"
            onChange={(e) => setPassword({ ...password, new: e.target.value })}
          />
          <label htmlFor="password">Confirm Password</label>
          <input
            type="password"
            className="form-control"
            name="password"
            placeholder="Enter password"
            onChange={(e) =>
              setPassword({ ...password, confirm: e.target.value })
            }
          />
          <button
            className="btn btn-primary mt-4"
            onClick={() => {
              if (password.new !== password.confirm) {
                toast.error("Password not match");
              } else {
                dispatch(UpdatePass({ password, toast }));
              }
            }}
          >
            {" "}
            Update Password
          </button>
        </div>
      </div>
      {order && (
        <div
          style={{
            margin: "2em 2em 2em 2em",
          }}
        >
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 700 }} aria-label="customized table">
              <TableHead>
                <TableRow>
                  <StyledTableCell>Order (Ids)</StyledTableCell>
                  <StyledTableCell align="right">product list</StyledTableCell>
                  <StyledTableCell align="right">Price(DZD)</StyledTableCell>
                  <StyledTableCell align="right">Status</StyledTableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {order.map((row) => (
                  <StyledTableRow key={row._id}>
                    <StyledTableCell component="th" scope="row">
                      {row._id}
                    </StyledTableCell>
                    <StyledTableCell align="right">
                      {row.products.map((product) => (
                        <div>
                          {`${product.product.title} x ${product.quantity}`}{" "}
                        </div>
                      ))}
                    </StyledTableCell>
                    <StyledTableCell align="right">
                      {row.products.map((product) => (
                        <div>
                          {`${product.product.price * product.quantity}`}{" "}
                        </div>
                      ))}
                    </StyledTableCell>

                    <StyledTableCell align="right">
                      {row.status}
                    </StyledTableCell>
                  </StyledTableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </div>
      )}
    </div>
  );
}

export default Profile;
