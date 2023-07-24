import { useEffect, useState } from "react";
import Feedback from "../Feedback/Feedback";

const ResearchPaper = () => {
  const [papers, setPapers] = useState([]);

  useEffect(() => {
    fetch("/researchPaper.json")
      .then((res) => res.json())
      .then((data) => setPapers(data));
  }, []);

  return (
    <div>
      <h2 className="text-center text-3xl font-bold my-10 text-pink-600">
        Research Paper
      </h2>
      {papers.map((paper) => (
        <>
          <div className="text-center my-5">
            <label htmlFor="my_modal_7" className="btn">
              {paper.paperName}
            </label>

            <input type="checkbox" id="my_modal_7" className="modal-toggle" />
            <div className="modal">
              <div className="modal-box">
                <h3 className="text-lg font-bold">{paper.websiteURL}</h3>
              </div>
              <label className="modal-backdrop" htmlFor="my_modal_7">
                Close
              </label>
            </div>
          </div>
        </>
      ))}
          <Feedback></Feedback>
    </div>
  );
};

export default ResearchPaper;
