
import './Skills.css'; 
import slide  from '/assets/flick-to-left.png'

const skillsData = [
  {
    category: 'Frontend Development',
    skills: [
      'HTML5',
      'CSS3',
      'JavaScript (ES6+)',
      'React.js',
    ],
  },
  {
    category: 'Backend Development',
    skills: [
      'Python',
      'MongoDB',
    ],
  },
  {
    category: 'Data Analytics ',
    skills: [
      'Power BI',
      'Tableau',
      'Excel',
    ],
  },
  {
    category: 'Soft Skills',
    skills: [
      'Team player',
      'Bias for action',
      'Deliver results',
    ],
  },

];

const Skills = () => {
  return (
    <>
      <h2 className="skills-heading">Skills</h2>
      <section id="Skills" className="skills-section">
        <div className="skills-container">
          {skillsData.map((skillCategory, index) => (
            <div key={index} className="skills-category-card ">
              <h3 className="category-title">{skillCategory.category}</h3>
              <ul className="skill-list">
                {skillCategory.skills.map((skill, skillIndex) => (
                  <li key={skillIndex} className="skill-item">
                    <span className="skill-icon"></span>
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}

        </div>

      </section>
      <p className='slide'>  <img src= {slide} alt="slide" srcset="" /></p>
    </>
  );
};

export default Skills;
