import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { deletedata, getuserdata } from "../features/user/action";

const Viewdata = () => {
  const dispatch = useDispatch();

  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getuserdata());
  }, []);

  const { users } = useSelector((state) => state.user);
  console.log(users);

  const ondelete = (id) => {
    dispatch(deletedata(id));
  };

  console.log("render viewdata");
  return (
    <div>
      <div className="container mt-5">
        <h3 className="float-start">Managedata</h3>
        <Link to="/adddata">
          <button type="button" className="btn btn-primary float-end">
            Adddata
          </button>
        </Link>
      </div>

      <div className="container">
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Id</th>
              <th scope="col">Name</th>
              <th scope="col">Email</th>
              <th scope="col">Mobile</th>
              <th scope="col">Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map((value) => {
              return (
                <tr key={value.id}>
                  <th scope="row">{value.id}</th>
                  <td>{value.name}</td>
                  <td>{value.email}</td>
                  <td>{value.mobile}</td>
                  <td className="">
                    <div className="">
                      <button type="button" className="btn btn-primary mx-2">
                        Status
                      </button>
                      <button
                        type="button"
                        className="btn btn-primary mx-2"
                        onClick={() => navigate(`/editdata/${value.id}`)}
                      >
                        Edit
                      </button>
                      <button
                        type="button"
                        className="btn btn-primary mx-2"
                        onClick={() => ondelete(value.id)}
                      >
                        Delete
                      </button>
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Viewdata;
