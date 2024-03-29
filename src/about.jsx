import React, { useEffect , useRef} from 'react';

const closeThis = () => {
  const personalData = document.getElementById('personal-data');
  const skills = document.getElementById('my-skills');
  const experience = document.getElementById('my-experience');
  if(personalData && skills && experience){
    personalData.classList.remove('active');
    skills.classList.remove('active');
    experience.classList.remove('active');
  }
}

function handleSkillHover(skill) {
  const meterFill = document.querySelector('.meter-fill');
  let skillWidth = 0;
  
  // Calculate skill width based on skill percentage
  switch(skill) {
    case 'html5':
      skillWidth = 95; // Example: HTML5 skill percentage
      break;
    case 'css':
      skillWidth = 90;
      break;
    case 'javascript':
      skillWidth = 80;
      break;
    case 'php':
      skillWidth = 90;
      break;
    case 'scss':
      skillWidth = 60;
      break;
    case 'laravel':
      skillWidth = 60;
      break;
    case 'react':
      skillWidth = 90;
      break;
    case 'three':
      skillWidth = 85;
      break;
    case 'bootstrap':
      skillWidth = 50;
      break;
    case 'wordpress':
      skillWidth = 100;
      break;
    case 'drupal':
      skillWidth = 60;
      break;
    case 'csharp':
      skillWidth = 85;
      break;
    case 'java':
      skillWidth = 70;
      break;
    case 'kotlin':
      skillWidth = 60;
      break;
    case 'c++':
      skillWidth = 40;
      break;
    case 'blender':
      skillWidth = 90;
      break;
    case 'unity':
      skillWidth = 85;
      break;
    case 'android':
      skillWidth = 70;
      break;
    case 'photoshop':
      skillWidth = 60;
      break;
    default:
      break;
  }
  
  // Update meter-fill width
  meterFill.style.width = `${skillWidth}%`;
}

function resetMeterFill() {
  const meterFill = document.querySelector('.meter-fill');
  meterFill.style.width = '0%';
}


const About = () => {

  const calculateAge = (birthDate) => {
    const today = new Date();
    const birth = new Date(birthDate);
    let age = today.getFullYear() - birth.getFullYear();
    const monthDiff = today.getMonth() - birth.getMonth();
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birth.getDate())) {
      age--;
    }
    return age;
  };

  const birthDate = new Date('1993-03-02');
  const age = calculateAge(birthDate);

  return (
    <div className="about" id="aboutme-content">
        <div className="personal-data" id='personal-data'>
            <div className="p-data-content">
              <h2>You can call me <span>Francis</span></h2>
              <p className='p'>I am a passionate IT professional armed with a BSIT degree. 
                With a solid foundation in 3D modeling, programming, databases, 
                networking, and graphics design.
                I have the knowledge and technical expertise to tackle complex technological challenges. 
                Driven by a commitment to excellence and a genuine curiosity for innovation.</p>
                <h4>Language Spoken: <span>English | Tagalog | Cebuano</span></h4>
                <h4>Age: <span>{age}</span></h4>
                <h4>Nationality: <span>Filipino</span></h4>
                <p onClick={closeThis} className='closeThis'>×</p>
            </div>
        </div>
        <div className="my-skills" id='my-skills'>
            <div className="my-skills-content">
              <h2>My Skills</h2>
              <div className="meter-holder">
                <div className="meter-bg"></div>
                <div className="meter-fill"></div>
              </div>
              <p className="sub-header">Web Dev</p>
              <p className="p p-skills"><span onMouseEnter={() => handleSkillHover('html5')} onMouseLeave={() => resetMeterFill()}>Html5 </span> 
                                        <span onMouseEnter={() => handleSkillHover('css')} onMouseLeave={() => resetMeterFill()}>| CSS </span>
                                        <span onMouseEnter={() => handleSkillHover('javascript')} onMouseLeave={() => resetMeterFill()}>| Javascript </span>
                                        <span onMouseEnter={() => handleSkillHover('php')} onMouseLeave={() => resetMeterFill()}>| PHP </span>
                                        <span onMouseEnter={() => handleSkillHover('scss')} onMouseLeave={() => resetMeterFill()}>| SCSS</span>
              </p>
              <p className="sub-header">Framework</p>
              <p className="p p-skills"><span onMouseEnter={() => handleSkillHover('laravel')} onMouseLeave={() => resetMeterFill()}>Laravel </span>
                                        <span onMouseEnter={() => handleSkillHover('react')} onMouseLeave={() => resetMeterFill()}>| React </span>
                                        <span onMouseEnter={() => handleSkillHover('three')} onMouseLeave={() => resetMeterFill()}>| Three Js </span>
                                        <span onMouseEnter={() => handleSkillHover('bootstrap')} onMouseLeave={() => resetMeterFill()}>| Bootstrap</span>
              </p>
              <p className="sub-header">CMS</p>
              <p className="p p-skills"><span onMouseEnter={() => handleSkillHover('wordpress')} onMouseLeave={() => resetMeterFill()}>Wordpress </span>
                                        <span onMouseEnter={() => handleSkillHover('drupal')} onMouseLeave={() => resetMeterFill()}>| Drupal </span>
              </p>
              <p className="sub-header">Programming Languages</p>
              <p className="p p-skills"><span onMouseEnter={() => handleSkillHover('csharp')} onMouseLeave={() => resetMeterFill()}>C# </span>
                                        <span onMouseEnter={() => handleSkillHover('java')} onMouseLeave={() => resetMeterFill()}>| Java </span>
                                        <span onMouseEnter={() => handleSkillHover('kotlin')} onMouseLeave={() => resetMeterFill()}>| Kotlin </span>
                                        <span onMouseEnter={() => handleSkillHover('c++')} onMouseLeave={() => resetMeterFill()}>| C++</span>
              </p>
              <p className="sub-header">Software Tools</p>
              <p className="p p-skills"><span onMouseEnter={() => handleSkillHover('blender')} onMouseLeave={() => resetMeterFill()}>Blender </span>
                                        <span onMouseEnter={() => handleSkillHover('unity')} onMouseLeave={() => resetMeterFill()}>| Unity Engine </span>
                                        <span onMouseEnter={() => handleSkillHover('android')} onMouseLeave={() => resetMeterFill()}>| Android Studio </span>
                                        <span onMouseEnter={() => handleSkillHover('photoshop')} onMouseLeave={() => resetMeterFill()}>| Photoshop</span>
              </p>
              <p onClick={closeThis} className='closeThis'>×</p>
            </div>
        </div>
        <div className="my-experience" id='my-experience'>
            <div className="my-experience-content">
              <h2>My Experience</h2>
              <div className="exp-line"></div>
              <p className="sub-header">Wattsavers Energy Services Company</p>
              <p className="exp-comp-web"><a href='http://wattsavers.com.ph/' target='blank'>http://wattsavers.com.ph/</a></p>
              <p className="p p-exp">Web Developer | IT Support</p>
              <div className="exp-line"></div>
              <p className="sub-header">Workaid</p>
              <p className="exp-comp-web"><a href='https://workaid.io/' target='blank'>https://workaid.io/</a></p>
              <p className="p p-exp">Web Developer | IT Support</p>
              <div className="exp-line"></div>
              <p onClick={closeThis} className='closeThis'>×</p>
            </div>
        </div>
    </div>
  );
}

export default About;
