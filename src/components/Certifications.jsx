import './Certifications.css';

const Certifications = () => {
  const certifications = [
    {
      name: 'AWS Certified Solutions Architect - Professional',
      issuer: 'Amazon Web Services',
      date: '2023',
      credentialId: 'AWS-PSA-XXXXXX',
      description: 'Advanced certification for designing distributed systems on AWS'
    },
    {
      name: 'Google Cloud Professional Machine Learning Engineer',
      issuer: 'Google Cloud',
      date: '2023',
      credentialId: 'GCP-MLE-XXXXXX',
      description: 'Expertise in designing, building, and productionizing ML models'
    },
    {
      name: 'Certified Kubernetes Administrator (CKA)',
      issuer: 'Cloud Native Computing Foundation',
      date: '2022',
      credentialId: 'CKA-XXXXXX',
      description: 'Professional certification for Kubernetes cluster administration'
    },
    {
      name: 'TensorFlow Developer Certificate',
      issuer: 'Google TensorFlow',
      date: '2022',
      credentialId: 'TF-DEV-XXXXXX',
      description: 'Proficiency in using TensorFlow to solve deep learning problems'
    },
    {
      name: 'Azure AI Engineer Associate',
      issuer: 'Microsoft',
      date: '2022',
      credentialId: 'AZ-AI-XXXXXX',
      description: 'Building, managing, and deploying AI solutions on Azure'
    },
    {
      name: 'Professional Scrum Master I',
      issuer: 'Scrum.org',
      date: '2021',
      credentialId: 'PSM-XXXXXX',
      description: 'Agile methodology and Scrum framework expertise'
    }
  ];

  return (
    <section id="certifications" className="section certifications-section">
      <div className="container">
        <h2 className="section-title">Professional Certifications</h2>
        <div className="certifications-grid">
          {certifications.map((cert, index) => (
            <div key={index} className="certification-card">
              <div className="cert-header">
                <h3 className="cert-name">{cert.name}</h3>
                <span className="cert-date">{cert.date}</span>
              </div>
              <p className="cert-issuer">{cert.issuer}</p>
              <p className="cert-description">{cert.description}</p>
              <div className="cert-footer">
                <span className="cert-credential">
                  Credential ID: {cert.credentialId}
                </span>
                <button className="cert-verify-btn" aria-label={`Verify ${cert.name} certification`}>
                  Verify
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;