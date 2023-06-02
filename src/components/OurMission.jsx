import React from 'react'
import rightArrow from '../assets/images/right.svg'
import rightCurve from '../assets/images/rightCurve.svg'
import left from '../assets/images/left.svg'
import leftCurve from '../assets/images/leftCurve.svg'
import slant from '../assets/images/slant.svg'

const OurMission = () => {
  return (
    <>
    <section className='ourMission'>

        <div className='ourMission--hero-container'>
<div className='ourMission--hero-container__container'>
    <h1 className='titleSemi'>Our Mission</h1>

    <p className='paragraphNormal'>
    At Arverne Drilling, we are committed to providing safe, efficient, and reliable energy services to our clients. Our mission is to deliver high-quality results that meet their needs while minimizing our impact on the environment and communities in which we operate.
    </p>
</div>
            </div>

    </section>
    <div className='footprintsSection'>

<div className='footprintsSection--container'>
    <div className='footprintsSection--container__container'>
    <h1 className='titleSemi'>Our History and Footprint Across the Globe</h1>
<p className='paragraphNormal'>Founded in 1833, CINQUIN FLEURIE, then in 1857, it became SOCIETE HULSTER. A hundred years after in 1957, it became INTRAFOR and in 1967, INTRAFOR CO</p>
<p className='paragraphNormal'>In 1988, COFOR (COMPAGNIE DE FORAGE), and it 2016, ENTREPOSE DRILLING.It became ARVERNE DRILLING in 2020 retaining the company’s full operational competencies and expertise.</p>
    </div>
    
    <div className='Imcontainer'>
        <div className='topContainer'>
        <div className='card'>
            <div className='paragraphExtra'>CINQUIN FLEURIE</div>

        <p>1833</p>
        </div>

        <img src={rightArrow} />

        <div className='card'>
        <div className='paragraphExtra'>SOCIETE HULSTER</div>

<p>1857</p>
        </div>

        <img src={rightCurve} className='rightCurve' />


        </div>

        <div className='middleContainer'>
        <img src={leftCurve} className='leftCurve' />

        <div className='card'>
            <div className='paragraphExtra'>CINQUIN FLEURIE</div>

        <p>1833</p>
        </div>

        <img src={left} />

        <div className='card'>
        <div className='paragraphExtra'>SOCIETE HULSTER</div>

<p>1857</p>
        </div>

        

        


        </div>

        

        <div className='bottomContainer'>
        

        <div className='card'>
            <div className='paragraphExtra'>CINQUIN FLEURIE</div>

        <p>1833</p>
        </div>

        <img src={rightArrow} />

        <div className='card'>
        <div className='paragraphExtra'>SOCIETE HULSTER</div>

<p>1857</p>
        </div>

        


        </div>

        <div className='lastContainer'>
            <img src={slant} />
            <div className='card'>
        <div className='paragraphExtra'>SOCIETE HULSTER</div>

<p>1857</p>
        </div>
        </div>
      
        
    </div>
</div>


            </div>
    </>
  )
}

export default OurMission