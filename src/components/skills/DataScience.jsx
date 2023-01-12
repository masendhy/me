import React from "react";
import { BsFillPatchCheckFill } from "react-icons/bs";

const DataScience = () => {
  return (
    <div className="experince__datascience">
      <h2>Data Science</h2>
      <div className="experience__content">
        <article className="experience__detail">
          <div>
            <BsFillPatchCheckFill className="experience__details-icon" />
          </div>
          <div>
            <h3 className="skills__name">Collect</h3>
            <span className="skills__level">
              I have theoretical and practical knowledge in questionnaire design
              and impact assessment. I have data collection and management
              experience with Kobo Toolbox, Qualtrics, Commcare and Airtable.
            </span>
          </div>
        </article>
        <article className="experience__detail">
          <div>
            <BsFillPatchCheckFill className="experience__details-icon" />
          </div>
          <div>
            <h3 className="skills__name">Process</h3>
            <span className="skills__level">
              As an Alteryx Designer Advanced Certified analyst I can offer
              support on improving existing workflows and creation of new
              processes, covering data transformation, unification, spatial and
              predictive analysis, and more.
            </span>
          </div>
        </article>
        <article className="experience__detail">
        <div>

          <BsFillPatchCheckFill className="experience__details-icon" />
        </div>
          <div>
            <h3 className="skills__name">Visualise</h3>
            <span className="skills__level">I am a Tableau Desktop Certified Professional with extensive knowledge of data visualisation best-practices. I have experience creating interactive tools and static infographics that can be consumed online or in print. Besides Tableau I have worked primarily with Power BI and Flourish. </span>
          </div>
        </article>
      </div>
    </div>
  );
};

export default DataScience;
