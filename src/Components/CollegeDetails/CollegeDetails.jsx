import { useEffect, useState } from "react";
import Container from "../Shared/Container/Container";

const CollegeDetails = () => {
  const [colleges, setColleges] = useState([]);
  useEffect(() => {
    fetch("../../../public/collegeDetails.json")
      .then((res) => res.json())
      .then((data) => setColleges(data));
  }, []);

  return (
    <Container>
      <h1 className="text-center text-3xl font-bold text-pink-600">
        TOP COLLEGES
      </h1>
      {colleges.map((college) => (
        <>
          <div className="card lg:card-side bg-base-100 my-5 shadow-xl">
            <figure>
              <img src={college.collegeImage} alt="Album" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{college.collegeName}</h2>
              <p>
                Admission: {college.admissionDates.start} to{" "}
                {college.admissionDates.end}
              </p>
              <p>Events: {college.events}</p>
              <p>Research: {college.researchHistory}</p>
              <p>Sports: {college.sports}</p>
              <div className="card-actions justify-end">
                <button className="btn btn-primary">Details</button>
              </div>
            </div>
          </div>
        </>
      ))}
    </Container>
  );
};

export default CollegeDetails;
