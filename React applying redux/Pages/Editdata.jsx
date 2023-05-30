import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
import { getsingledata, updatedata } from "../features/user/action";
import { toast } from "react-toastify";

const Editdata = () => {
  const [formvalue, setFormvalue] = useState({
    name: "",
    email: "",
    password: "",
    mobile: "",
  });

  const dispatch = useDispatch();

  const { userid } = useParams();
  console.log(userid);

  const { user } = useSelector((state) => state.user);
  console.log(user);

  useEffect(() => {
    dispatch(getsingledata(userid));
  }, []);

  useEffect(() => {
    if (user) {
      setFormvalue({ ...user });
    }
  }, [user]);

  const navigate = useNavigate();

  //   console.log(formvalue);

  const onchange = (e) => {
    setFormvalue({
      ...formvalue,
      [e.target.name]: e.target.value,
    });
  };

  const validate = () => {
    let result = true;
    if (formvalue.name === "" || formvalue.name === null) {
      toast.error("Name field is required");
      result = false;
      return result;
    }

    if (formvalue.email === "" || formvalue.email === null) {
      toast.error("Email field is required");
      result = false;
      return result;
    }

    if (formvalue.password === "" || formvalue.password === null) {
      toast.error("Password field is required");
      result = false;
      return result;
    }

    if (formvalue.mobile === "" || formvalue.mobile === null) {
      toast.error("Mobile field is required");
      result = false;
      return result;
    }

    return result;
  };

  const onsubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      dispatch(updatedata(userid, formvalue));
      setFormvalue({
        name: "",
        email: "",
        password: "",
        mobile: "",
      });
      toast.success("Update success");
      navigate("/");
    }
  };

  console.log("render editdata");
  return (
    <>
      <div className="container mt-5">
        <h3 className="float-start">Editdata</h3>
        <Link to="/">
          <button type="button" className="btn btn-primary float-end">
            Back
          </button>
        </Link>
      </div>

      <div>
        <div className="container  px-5" style={{ marginTop: 50 }}>
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-6 bg-secondary p-5">
                <form method="post">
                  <div className="row g-3">
                    <div className="col-sm-12">
                      <input
                        type="text"
                        name="name"
                        value={formvalue.name}
                        onChange={onchange}
                        className="form-control bg-light border-0 px-4"
                        placeholder="Your Name"
                        style={{ height: 55 }}
                      />
                    </div>
                    <div className="col-sm-12">
                      <input
                        type="email"
                        name="email"
                        value={formvalue.email}
                        onChange={onchange}
                        className="form-control bg-light border-0 px-4"
                        placeholder="Your Email"
                        style={{ height: 55 }}
                      />
                    </div>
                    <div className="col-sm-12">
                      <input
                        type="password"
                        name="password"
                        value={formvalue.password}
                        onChange={onchange}
                        className="form-control bg-light border-0 px-4"
                        placeholder="Password"
                        style={{ height: 55 }}
                      />
                    </div>
                    <div className="col-sm-12">
                      <input
                        type="number"
                        name="mobile"
                        value={formvalue.mobile}
                        onChange={onchange}
                        className="form-control bg-light border-0 px-4"
                        placeholder="mobile"
                        style={{ height: 55 }}
                      />
                    </div>
                    <div className="col-sm-12">
                      <button
                        className="btn btn-primary border-inner w-100 py-3"
                        type="submit"
                        onClick={onsubmit}
                      >
                        Editdata
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Editdata;
