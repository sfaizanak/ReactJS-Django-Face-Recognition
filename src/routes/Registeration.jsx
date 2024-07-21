import { useLocation } from "react-router-dom";

const Registeration = () => {
  const { pathname } = useLocation();
  const isGuardRegisterPage = "/guard-register" == pathname;
  document.title = `${isGuardRegisterPage ? "Guard" : "Emp"} Register`;
  return (
    <section className="center mb-5">
      <div className="details">
        <div className="recentOrders">
          <div className="container1">
            <form encType="multipart/form-data">
              <div className="form-row">
                <div className="form-group col-md-6">
                  <label htmlFor="username">User-ID</label>
                  <input
                    type="text"
                    className="form-control"
                    id="username"
                    placeholder="User-id"
                    required
                    name="username"
                    autoComplete="username"
                    disabled={isGuardRegisterPage}
                  />
                  <br />
                  <p className="alert alert-danger">message </p>
                </div>
                <div className="form-group col-md-6">
                  <label htmlFor="inputPassword4">Password</label>
                  <input
                    type="password"
                    className="form-control"
                    id="inputPassword4"
                    placeholder="Password"
                    required
                    name="password"
                  />
                </div>
              </div>
              <div className="form-row">
                <div className="form-group col-md-4">
                  <label htmlFor="inputFirstName">First Name</label>
                  <input
                    type="text"
                    className="form-control"
                    id="inputFirstName"
                    placeholder="First Name"
                    required
                    name="firstName"
                  />
                </div>
                <div className="form-group col-md-4">
                  <label htmlFor="inputMiddleName">Middle Name</label>
                  <input
                    type="text"
                    className="form-control"
                    id="inputMiddleName"
                    placeholder="Middle Name"
                    name="middleName"
                  />
                </div>
                <div className="form-group col-md-4">
                  <label htmlFor="inputLastName">Last Name</label>
                  <input
                    type="text"
                    className="form-control"
                    id="inputLastName"
                    placeholder="Last Name"
                    required
                    name="lastName"
                  />
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="inputEmail">Email</label>
                <input
                  type="email"
                  className="form-control"
                  id="inputEmail"
                  placeholder="Email addr..."
                  required
                  name="email"
                  autoComplete="email"
                />
              </div>
              <div className="form-group">
                <label htmlFor="inputCollegeName">Org Name</label>
                {!isGuardRegisterPage ? (
                  <select
                    name="collegeName"
                    className="form-control"
                    required
                    id="inputCollegeName"
                  >
                    <option value="">Org Names</option>
                  </select>
                ) : (
                  <input
                    type="text"
                    className="form-control"
                    disabled
                    value="org name"
                    name="collegeName"
                  />
                )}
              </div>
              <div className="form-row">
                <div className="form-group col-md-6">
                  <label htmlFor="inputDepartment">Department</label>
                  <select
                    name="dept"
                    className="form-control"
                    required
                    id="inputDepartment"
                  >
                    <option value="">Select Department</option>
                    <option value="Computer Science">Computer Science</option>
                    <option value="Computer Application">
                      Computer Application
                    </option>
                    <option value="Science">Science</option>
                    <option value="Commerce">Commerce</option>
                    <option value="Arts">Arts</option>
                  </select>
                </div>
                {isGuardRegisterPage ? (
                  <div className="form-group col-md-6">
                    <label htmlFor="inputYear">Guard Level</label>
                    <select
                      name="year"
                      className="form-control"
                      required
                      id="inputYear"
                    >
                      <option value="">Select</option>
                      <option value="Head">Head</option>
                      <option value="Senior">Senior</option>
                      <option value="Junior">Junior</option>
                    </select>
                  </div>
                ) : (
                  <div className="form-group col-md-6">
                    <label htmlFor="inputDesignation">Designation</label>
                    <select
                      name="desg"
                      className="form-control"
                      id="inputDesignation"
                      required
                    >
                      <option value="">Select Degination</option>
                      <option value="Professor">Professor</option>
                      <option value="Non-Teaching">Non-Teaching</option>
                      <option value="Bouncer">Bouncer</option>
                    </select>
                  </div>
                )}
              </div>
              <div className="form-group">
                <label htmlFor="inputPhoneNumber">Phone No</label>
                <input
                  type="number"
                  className="form-control"
                  id="inputPhoneNumber"
                  placeholder="Mobile no..."
                  required
                  name="mobile"
                />
              </div>
              <div className="form-group">
                <label htmlFor="inputAddress">Address</label>
                <textarea
                  type="text"
                  className="form-control"
                  id="inputAddress"
                  placeholder="1234 Main St"
                  required
                  name="addr"
                  rows={3}
                ></textarea>
              </div>
              <div className="form-row">
                <div className="form-group col-md-6">
                  <label htmlFor="inputCity">City</label>
                  <input
                    type="text"
                    className="form-control"
                    id="inputCity"
                    required
                    name="city"
                    placeholder="city"
                  />
                </div>
                <div className="form-group col-md-6">
                  <label htmlFor="inputImage">Image</label>
                  <input
                    type="file"
                    className="form-control"
                    id="inputImage"
                    required
                    name="img"
                    accept=".jpg"
                  />
                  <br />
                  <p className="alert alert-danger"> imgMessage </p>
                </div>
              </div>
              <button type="submit" className="btn btn-primary ml-5">
                Register
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Registeration;
