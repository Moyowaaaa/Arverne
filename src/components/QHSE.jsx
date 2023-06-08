import React from 'react'
import qhseJumbotronbackgroundVideo from '../assets/images/qhseVideo.mp4'


const QHSE = () => {
  return (
    <>
    <div className='qhseSection'>
        <div className='qhseSection--container'>
        <h1 className='titleSemi'>Quality, Health, Safety & Environment</h1>

<p className='paragraphNormal'>Arverne Drilling has an objective of zero accidents and zero pollution, driven by the fact that any accident can be avoided. The fulfillment of this objective is conditioned by a day-to-day implication of the management and collaborators, training, and awareness.</p>
<p className='paragraphNormal'>Within the framework of its business activities and its commitment to Health, Quality, Safety, and the Environment, Arverne Drilling aims to promote four objectives:</p>
      
      
<div className='qhse'>
        <div className='qhse--card'>
            <h1 className='cardTitle'>Promote development</h1>
            <p className='paragraphNormal'>Promote the development of each person with the aid of an adapted training program</p>
            </div>
            <div className='qhse--card'>
            <h1 className='cardTitle'>Standards</h1>
            <p className='paragraphNormal'>Adopt the best standards in terms of Quality, Health Safety, and Environment</p>
            </div>
            <div className='qhse--card'>
            <h1 className='cardTitle'>Excellent service</h1>
            <p className='paragraphNormal'>Promote & offer our customers excellent service, best practices, and reliable equipment</p>
            </div>
            <div className='qhse--card'>
            <h1 className='cardTitle'>Involvement</h1>
            <p className='paragraphNormal'>Get involved in the identification and implementation of corrective and preventive actions during operations.</p>
            </div>
        </div>

        </div>

      


      

    </div>

    <div className='qsheJumbotron'>
        <video src={qhseJumbotronbackgroundVideo} alt="" autoPlay loop muted />
            <h1 className='titleMedium'>Arverne Drilling believes in <span>innovation</span> and <span>continuous improvement</span> which is the core of our sustainability strategy which focuses on; Governance, Enviroment, Health & Safty and People.</h1>
        </div>


        <div className='inspectionSection'>
            <div className="inspectionSection--container">

                <h1 className='titleSemi'>
                Inspection and Maintenance Policy
                </h1>
                

<p className='paragraphNormal'>According to the requirements of the applicable standards and to the specification given by the client or its representative.</p>
<p className='paragraphNormal'>Arverne Drilling has implemented a Preventive Maintenance Management System. The policy defines the maintenance rules to develop more effective maintenance and reduce Non-Productive Times (NPT).</p>
            </div>
        </div>
    </>
  )
}

export default QHSE