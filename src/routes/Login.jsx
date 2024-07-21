import { Link, useLocation } from "react-router-dom";
const Login = () => {
  const { pathname } = useLocation();
  const userType =
    "/org-login" == pathname
      ? "Org "
      : "/emp-login" == pathname
      ? "Emp "
      : "Guard ";

  document.title = `${userType}Login`;
  return (
    <div class="center">
      <div class="details">
        <div class="recentOrders">
          <div class="container1">
            <main>
              <form class="px-4 py-3" method="post">
                <div class="form-group">
                  <label for="exampleDropdownFormEmail1">
                    {userType} username
                  </label>
                  <input
                    type="text"
                    class="form-control"
                    id="exampleDropdownFormEmail1"
                    placeholder="username"
                    name="username"
                    required
                    autocomplete="username"
                  />
                </div>
                <div class="form-group">
                  <label for="exampleDropdownFormPassword1">Password</label>
                  <input
                    type="password"
                    class="form-control"
                    id="exampleDropdownFormPassword1"
                    placeholder="password"
                    name="password"
                    required
                  />
                </div>
                <p class="alert alert-danger">message</p>
                {"/emp-login" == pathname ? (
                  <div class="form-group">
                    <Link to="/emp-register">Register</Link>
                  </div>
                ) : "/org-login" == pathname ? (
                  <div class="form-group">
                    <Link to="/guard-login">Guard Login</Link>
                  </div>
                ) : (
                  ""
                )}
                <button type="submit" class="btn btn-primary px-4 submit">
                  Sign in
                </button>
              </form>
            </main>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
