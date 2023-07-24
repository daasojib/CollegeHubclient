import { useEffect, useState } from "react";
import Container from "../Shared/Container/Container";
import { Link } from "react-router-dom";

const Admission = () => {
  const [colleges, setColleges] = useState([]);

  useEffect(() => {
    fetch(" https://collegehub-server.vercel.app/collegeDetails")
      .then((res) => res.json())
      .then((data) => setColleges(data));
  }, []);

  return (
    <div>
      <Container>
        <>
          <div className="overflow-x-auto">
            <table className="table">
              {/* head */}
              <thead>
                <tr>
                  <th></th>
                  <th>Name</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {colleges.map((college) => (
                  <>
                    <tr>
                      <td>
                        <div className="flex items-center space-x-3">
                          <div className="avatar"></div>
                          <div></div>
                        </div>
                      </td>

                      <td>{college.collegeName}</td>
                      <th>
                        <Link to="/myInfo" className="btn btn-outline btn-xs">
                          Update Info
                        </Link>
                      </th>
                    </tr>
                  </>
                ))}
              </tbody>
            </table>
          </div>
        </>
      </Container>
    </div>
  );
};

export default Admission;
