
import './Certification.css';

const certificationsData = [
  {
    title: 'Generative AI',
    issuer: 'Microsoft & LinkedIn Learning',
    date: 'October 2024',
    id: '19445443454'
  },
  {
    title: ' Data	Analytics',
    issuer: 'Deloitte',
    date: 'May 2025',
    id: 'Jjk6Xx2TrZjufb8DW'
  }
];

const Certifications = () => {
  return (
    <div>
      <h2 className='certify'>Certifications</h2>
      <section id="certifications">

        <div className="container">

          <div className="certifications-grid">
            {certificationsData.map((certification, index) => (
              <div key={index} className="certification-card">
                <h3>{certification.title}</h3>
                <p className="issuer">{certification.issuer}</p>
                <p className="date">{certification.date}</p>
                <p className="id">ID: {certification.id}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Certifications;