import imgSelfie from '../../images/selfie.png';
import infoStyles from '../../styles/info.module.css';
import  '../../styles/index.css';
import  '../../styles/sectionTop.css';

function LanguagesCard({languageList}) {

  const tableStyle = {
    borderCollapse: "collapse",
    border: "1px solid #ccc",
    borderRadius: "6px",
    overflow: "hidden",
    fontSize: "16px",
    boxShadow: "0 1px 3px rgba(0,0,0,0.08)"
  };

  const thStyle = {
    backgroundColor: "#f8f8f8",
    textAlign: "center",
    padding: "12px",
    borderBottom: "1px solid #ccc",
    fontWeight: "600",
  };

  const tdStyle = {
    padding: "12px",
    borderBottom: "1px solid #eee",
  };

  return (
        <div>
              <h3>Languages</h3>
              <div style={{ padding: "24px", display: "flex", justifyContent: "center",}}>
                  <table style={tableStyle}>
                      <thead>
                          <tr>
                              <th style={thStyle}>Language</th>
                              <th style={thStyle}>CEFR Level</th>
                              <th style={thStyle}>Certificate</th>
                          </tr>
                      </thead>
                      <tbody>
                          {languageList.map((item, index) => (
                              <tr key={index} >
                                  <td style={tdStyle}>{item.lang}</td>
                                  <td style={tdStyle}>{item.cerfLevel}</td>
                                  <td style={tdStyle}>{item.certificate}</td>
                              </tr>
                          ))}
                      </tbody>
                  </table>
              </div>
        </div>
  );
}

export default LanguagesCard;