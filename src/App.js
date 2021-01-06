import logo from "./ci-logo-english-rgb.png";
import solution from "./solution.png";
import "./App.css";

function App() {
  return (
    <div className="App">
      <table
        style={{
          borderTop: "1px solid #5bc500",
          borderSpacing: "0px",
          width: "580px",
          minHeight: "170px",
        }}
      >
        <tbody>
          <tr style={{ height: "5px" }}></tr>
          <tr>
            <td
              style={{
                padding: "0px",
                borderRight: "1px solid #bdbdbe",
                width: "155px",
              }}
            >
              <a href="https://www.ecubelabs.com/" target="_blank">
                <img
                  src={logo}
                  alt="Ecube Labs"
                  style={{ margin: "0px 12.5px 0px 23px", height: "100px" }}
                />
              </a>
            </td>
            <td
              style={{
                padding: "0px 10px",
                fontFamily: "Trebuchet MS",
                color: "#000",
                width: "245px",
              }}
            >
              <h2
                style={{ marginBottom: "2px", fontSize: "15px", color: "#000" }}
              >
                Charlie Kim
              </h2>
              <p style={{ marginTop: "0px", fontSize: "12px", color: "#000" }}>
                <strong>SW</strong>
              </p>
              <p
                style={{
                  fontSize: "10px",
                  marginTop: "20px",
                  marginBottom: "0px",
                  color: "#000",
                }}
              >
                #710, 288, Digital-ro, Guro-gu, <br />
                Seoul, Republic of Korea (Postal: 08390) <br />
                <span style={{ display: "inline-block", width: "10px" }}>
                  T
                </span>
                <strong>+82-2-868-0293</strong> <br />
                <span style={{ display: "inline-block", width: "10px" }}>
                  F
                </span>
                <strong>+82-2-868-0294</strong> <br />
                <span style={{ display: "inline-block", width: "10px" }}>
                  M
                </span>
                <strong>123</strong>
              </p>
            </td>
            <td style={{ padding: "0px", width: "175px" }}>
              <a href="https://www.ecubelabs.com/solution/" target="_blank">
                <img
                  src={solution}
                  alt="Products"
                />
              </a>
            </td>
          </tr>
          <tr style={{ height: "5px" }}></tr>
          <tr
            style={{
              height: "31px",
              backgroundColor: "#5bc500",
              color: "#fff",
              textAlign: "center",
              margin: "0px",
              padding: "0px",
            }}
          >
            <td
              colSpan="3"
              style={{
                padding: "0px 10px",
                fontFamily: "Trebuchet MS",
                margin: "0px",
                fontSize: "7px",
              }}
            >
              This message and any attachments are solely for the intended
              recipient and may contain confidential and/or privileged
              information. If you are not the intended recipient, any
              disclosure, copying, use, and/or distribution of the information
              included in this message and its attachments is prohibited. If you
              have received this communication in error, please notify us by
              replying to this email and immediately delete this message and/or
              attachments.
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default App;
