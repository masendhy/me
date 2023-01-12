import React, { useState } from "react";
import { BiAnalyse } from "react-icons/bi";
import { DiGoogleAnalytics } from "react-icons/di";
import { TbDeviceDesktopAnalytics } from "react-icons/tb";

import "./services.css";

const Services = () => {
  const [toggleState, setToggleState] = useState(0);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <section className="services section" id="services">
      <h2 className="section__title">Services</h2>
      <span className="section__subtitle">
        Help others to make the right decisions, data-driven decisions
      </span>
      <div className="services__container container grid">
        <div className="services__content">
          <BiAnalyse className="services__icon"></BiAnalyse>
          <h3 className="services__title">DATA ANALYSIS</h3>

          <span className="services__button" onClick={() => toggleTab(1)}>
            View More
            <i className="uil uil-arrow-right services__button-icon"></i>
          </span>

          <div
            className={
              toggleState === 1
                ? "services__modal active-modal"
                : "services__modal"
            }
          >
            <div className="services__modal-content">
              <i
                onClick={() => toggleTab(0)}
                className="uil uil-times services__modal-close"
              ></i>
              <h3 className="services-title">Data analysis</h3>
              <p className="services__modal-description">
                I am specialized in analyzing data. Results, trends and
                recommendations are clearly presented in reports or tools.
              </p>

              <ul className="services__modal-services grid">
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                    <strong>Goal : </strong> Often, companies have data that
                    contain a lot of hidden information. Asking the right
                    questions and analyzing the data will give you relevant
                    insights. The goal is to answer the right questions that
                    will help the company to make the right decisions.
                  </p>

                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                    <strong>Result : </strong> Results are presented in a report
                    with recommendations and follow-up steps. Based on this
                    report, clear and well-founded decisions can be made, costs
                    can be saved and processes optimized.
                  </p>

                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                    <strong>Project Duration : </strong> Project duration varies
                    between 2 weeks and 3 months. In order to carry out the
                    project as quickly as possible, it is important that the
                    relevant data is available, complete and clean.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="services__content">
          <DiGoogleAnalytics className="services__icon"></DiGoogleAnalytics>
          <h3 className="services__title">DATA ANALYTICS</h3>

          <span className="services__button" onClick={() => toggleTab(2)}>
            View More
            <i className="uil uil-arrow-right services__button-icon"></i>
          </span>

          <div
            className={
              toggleState === 2
                ? "services__modal active-modal"
                : "services__modal"
            }
          >
            <div className="services__modal-content">
              <i
                onClick={() => toggleTab(0)}
                className="uil uil-times services__modal-close"
              ></i>
              <h3 className="services-title">Data analytics</h3>
              <p className="services__modal-description">
                Get more value from your data with prediction models and machine
                learning techniques, for example by predicting behavior or
                targeting the right customer.
              </p>

              <ul className="services__modal-services grid">
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                    <strong>Goal : </strong> How can we make a recommendation
                    system? How can we categorize our customers and take actions
                    separately for each group? How can we identify objects based
                    on specific characteristics? All these kind of questions can
                    be answered by using data analytics techniques.
                  </p>

                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                    <strong>Result : </strong> By using statistics, programming
                    and machine learning techniques, I can find patterns hidden
                    in the data. With this information I can make an algorithm,
                    probability estimation or statistical model which you can
                    use to make the right decisions.
                  </p>

                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                    <strong>Project Duration : </strong> Project duration varies
                    between 3 weeks – 2 months. The project starts by getting an
                    understanding of the situation and gathering the right data.
                    After collecting the right data, I start analyzing the data
                    and share the results. Finally, I will make the algorithm or
                    model which you can implement in your business.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="services__content">
          <TbDeviceDesktopAnalytics className="services__icon"></TbDeviceDesktopAnalytics>
          <h3 className="services__title">DASHBOARD</h3>

          <span className="services__button" onClick={() => toggleTab(3)}>
            View More
            <i className="uil uil-arrow-right services__button-icon"></i>
          </span>

          <div
            className={
              toggleState === 3
                ? "services__modal active-modal"
                : "services__modal"
            }
          >
            <div className="services__modal-content">
              <i
                onClick={() => toggleTab(0)}
                className="uil uil-times services__modal-close"
              ></i>
              <h3 className="services-title">Dashboard</h3>
              <p className="services__modal-description">
                Dashboards show the most recent results in an interactive way.
                By clicking and drilling, you will examine trends and patterns
                yourself.
              </p>

              <ul className="services__modal-services grid">
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                    <strong>Goal : </strong> The purpose of a dashboard is to
                    view the most important KPI’s and results at a glance.
                    Dashboards are an interactive way to see how the company or
                    project perform.
                  </p>

                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                    <strong>Result : </strong> By using dashboards, you will
                    discover the right insights in an easy way. You can apply
                    filters yourself and consult different graphs. By
                    immediately having the right information available, correct
                    decisions can be made.
                  </p>

                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                    <strong>Project Duration : </strong> On average, the
                    development of a dashboard takes 2 weeks – 2 months. The
                    development consists of two phases:
                    <ol>
                      <li>selection of KPI’s and design of the dashboard</li>
                      <li>collecting data and dashboard development</li>
                    </ol>
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
