import React from "react";
import PageContentLayout from "../layouts/pageContent";
import qhseOverlay from "../assets/images/qhseOverlay.png";
import bullet from "../assets/images/bullet.svg";
import qhseCertification from "../assets/images/qhseCertification.png";
import hseManagement from "../assets/images/hseManagement.png";
import rule1 from '../assets/images/rule1.png'
import rule2 from '../assets/images/rule2.png'
import rule3 from '../assets/images/rule3.png'
import rule4 from '../assets/images/rule4.png'
import rule5 from '../assets/images/rule5.png'
import rule6 from '../assets/images/rule6.png'
import rule7 from '../assets/images/rule7.png'
import rule8 from '../assets/images/rule8.png'
import rule9 from '../assets/images/rule9.png'
import rule10 from '../assets/images/rule10.png'



const QHSE = () => {

  const goldenRules = [
    {rule:'Wearing PPE',image:rule1},
    {rule:'Lifting Operations',image:rule2},
    {rule:'Working at Height',image:rule3},
    {rule:'Gestures, Postures and Proper Tools',image:rule4},
    {rule:'Cleaning and Tidy Workspaces',image:rule5},
    {rule:'Onsite Traffic Safety',image:rule6},
    {rule:'Alcohol and Drugs',image:rule7},
    {rule:'Confined Spaces',image:rule8},
    {rule:'Simultaneous Operations',image:rule9},
    {rule:'Collective Involvment and Behavior',image:rule10},
  ]

  return (
    <>
      <PageContentLayout>
        <div className="qhse-banner">
          <img src={qhseOverlay} alt="" />
          <div className="flex flex-col gap-6 w-10/12 items-center mx-auto relative bottom-[15vh] lg:bottom-[30vh] text-white">
            <h1
              className="text-[2.125rem] text-center lg:text-left lg:text-[3.125rem] titleExtraBold text-white
max-w-[45rem] text-center
            "
            >
              QUALITY, HEALTH, SAFTEY & ENVIRONMENT
            </h1>
          </div>
        </div>

        <div className="qhse-page-container">
          <div className="qhse-page-container--container">
            <h1 className="titleSemi">Our Aim</h1>

            <p className="paragraphNormal heroText">
              Within the framework of its business activities and its commitment
              to Health, Quality, Safety and the Environment, ARVERNE DRILLING
              aims to promote four objectives:
            </p>
            <div className="points">
              <div className="qhse-page-container--points-container">
                <div className="qhse-page-container--points-container__point">
                  <img src={bullet} alt="" />{" "}
                  <p className="paragraphNormal">
                    Promote the development of each personnel thanks to an
                    adapted training program
                  </p>
                </div>

                <div className="qhse-page-container--points-container__point">
                  <img src={bullet} alt="" />{" "}
                  <p className="paragraphNormal">
                    Adopt the best standards in terms of Quality Health Safety
                    and Environment
                  </p>
                </div>

                <div className="qhse-page-container--points-container__point">
                  <img src={bullet} alt="" />{" "}
                  <p className="paragraphNormal">
                    Promote & Offer our customers an excellent service, best
                    practices and reliable equipment
                  </p>
                </div>

                <div className="qhse-page-container--points-container__point">
                  <img src={bullet} alt="" />{" "}
                  <p className="paragraphNormal">
                    Get involved in the identification and the implementation of
                    the corrective and preventive actions
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="qhse-page-container--certification-container">
            <img src={qhseCertification} />

            <div className="qhse-page-container--certification-container__text-container">
              <h1 className="titleSemi">
                {" "}
                ARVERNE DRILLING is ISO 9001 certified
              </h1>

              <p className="paragraphHeavy ">
                its QHSE Management System is designed to incorporate the
                requirements of:
              </p>

              <div className="certification-points-container ">
                <div className="certification-points-container__point">
                  <img src={bullet} alt="" />{" "}
                  <p className="paragraphHeavy">
                    The standard for Occupational Health and Safety Management
                    Systems: OHSAS 18001
                  </p>
                </div>

                <div className="certification-points-container__point">
                  <img src={bullet} alt="" />{" "}
                  <p className="paragraphHeavy">
                    The International Standard for Environmental Management
                    Systems: ISO 14001
                  </p>
                </div>

                <div className="certification-points-container__point">
                  <img src={bullet} alt="" />{" "}
                  <p className="paragraphHeavy">
                    The International Standard for Quality Management Systems:
                    ISO 9001
                  </p>
                </div>

                <div className="certification-points-container__point">
                  <img src={bullet} alt="" />{" "}
                  <p className="paragraphHeavy">
                    IADC HSE Case Guidelines for Land Drilling Units
                  </p>
                </div>
              </div>

              {/* <p className='paragraphNormal'>its QHSE Management System is designed to incorporate the
 requirements of:</p> */}
            </div>
          </div>
        </div>

        <div className="hse-banner">
          <img src={qhseOverlay} alt="" />
          {/* <div className="flex flex-col gap-6 w-10/12 items-center mx-auto relative bottom-[15vh] lg:bottom-[40vh] text-white"> */}
          <h1
            className="titleMedium
            "
          >
            <span>Arverne Drilling</span> has established a set of processes to
            collect the expectations of our customers as soon as possible and is
            committed to delivering <span>best-in-class</span> services in{" "}
            <span>compliance</span> with their requirements.
          </h1>
        </div>
        {/* </div> */}

        <div className="hse-container">
          <div className="hse-container--container">
            <h1 className="titleSemi">
              HEALTH, SAFETY & ENVIRONMENT MANAGEMENT
            </h1>

            <p className="paragraphNormal">
              Safety is the enterprise core value and a comprehensive framework
              supports people development and safety culture instillation in the
              company DNA.
            </p>

            <img src={hseManagement} alt="" />
          </div>
        </div>

        <div className="golden-rules-container">
          <div className="golden-rules-container--container">
            <h1 className="titleSemi">Arverne Drilling Golden Rules</h1>

            <p className="paragraphNormal">
              A process to create Golden Rules has been implemented within the
              company. 10 Golden Rules have been established by co-construction
              with our worksites by analyzing the causes of risks and by
              exchanging with the collaborators. The description of every rule
              has been prepared by a panel of collaborators.
            </p>
            <p className="paragraphNormal">
              These 10 golden rules are the product of our experience and
              communication within all our sites. 10 golden rules drive our
              actions for our own safety and for our colleague's safety.
            </p>

            <div className="golden-rules-container--container__rules-container">
              {goldenRules.map((goldenRule,index) => (
                <div className="rule-card">
                  <h1 className="titleSemi">{goldenRule.rule}</h1>
                  <img src={goldenRule.image} />
                </div>
              ))}
              
            </div>
          </div>
        </div>
      </PageContentLayout>
    </>
  );
};

export default QHSE;
