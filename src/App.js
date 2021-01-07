import logo from "./ci-logo-english-rgb.png";
import solution from "./solution.png";
import "./App.css";

function App() {
  return (
    <div className="App">
      <table
        cellPadding={0}
        cellSpacing={0}
        style={{
          width: "600px",
          minHeight: "265px",
          // border: "1px solid black", // FIXME: 퍼블리싱 편하게 해주는 용도. 배포 전에 지울것
        }}
      >
        <tbody>
          <tr style={{ height: "16px" }}></tr>
          <tr>
            <td
              style={{
                width: "16px",
              }}
            ></td>
            <td>
              {/* NOTE: content */}
              <table
                cellPadding={0}
                cellSpacing={0}
                style={{
                  // border: "1px solid black", // FIXME: 퍼블리싱 편하게 해주는 용도. 배포 전에 지울것
                }}
              >
                <tbody>
                  <tr>
                    {/* Left latters */}
                    <td>
                      <table
                        cellPadding={0}
                        cellSpacing={0}
                        style={{
                          width: "100%",
                          textAlign: "left",
                          // border: "1px solid black", // FIXME: 퍼블리싱 편하게 해주는 용도. 배포 전에 지울것
                        }}
                      >
                        <tbody>
                          {/* Logo row */}
                          <tr>
                            <td>
                              <a
                                style={{
                                  display: "block",
                                  height: "42px",
                                  width: "168px",
                                }}
                                href="https://www.ecubelabs.com/"
                                target="_blank"
                              >
                                <img
                                  src={logo}
                                  alt="Ecube Labs"
                                  style={{
                                    height: "42px",
                                    width: "168px",
                                  }}
                                />
                              </a>
                            </td>
                          </tr>
                          {/* Name row */}
                          <tr>
                            <td>
                              <div
                                style={{
                                  marginTop: "8px",
                                  marginBottom: "4px",
                                  fontFamily: "Roboto",
                                  fontSize: "16px",
                                  fontWeight: "bold",
                                  fontStretch: "normal",
                                  fontStyle: "normal",
                                  lineHeight: "1.5",
                                  letterSpacing: "0.09px",
                                  color: "rgba(0, 0, 0, 0.87)",
                                }}
                              >
                                Tim kang
                              </div>
                            </td>
                          </tr>
                          {/* Job title / position row */}
                          <tr>
                            <td>
                              <div
                                style={{
                                  marginBottom: "4px",
                                  fontFamily: "Roboto",
                                  fontSize: "14px",
                                  fontWeight: "normal",
                                  fontStretch: "normal",
                                  fontStyle: "normal",
                                  lineHeight: "1.43",
                                  letterSpacing: "0.1px",
                                  color: "rgba(0, 0, 0, 0.87)",
                                }}
                              >
                                DevOps Engineer
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <div
                                style={{
                                  marginBottom: "4px",
                                  fontFamily: "Roboto",
                                  fontSize: "14px",
                                  fontWeight: "normal",
                                  fontStretch: "normal",
                                  fontStyle: "normal",
                                  lineHeight: "1.43",
                                  letterSpacing: "0.1px",
                                  color: "rgba(0, 0, 0, 0.87)",
                                }}
                              >
                                T +82.2.868.0293
                                <br />
                                F +82.2.868.0294
                                <br />M +82.10.3007.4420
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <div
                                style={{
                                  fontFamily: "Roboto",
                                  fontSize: "14px",
                                  fontWeight: "normal",
                                  fontStretch: "normal",
                                  fontStyle: "normal",
                                  lineHeight: "1.43",
                                  letterSpacing: "0.1px",
                                  color: "rgba(0, 0, 0, 0.87)",
                                }}
                              >
                                #710, 288, Digital-ro, Guro-gu, Seoul, <br />
                                Republic of Korea (Postal: 08390)
                              </div>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </td>
                    {/* Right banner */}
                    <td
                      style={{
                        textAlign: "right",
                        width: "218px",
                        height: "202px",
                      }}
                    >
                      <a
                        href="https://www.ecubelabs.com/solution/"
                        target="_blank"
                      >
                        <img src={solution} alt="Products" />
                      </a>
                    </td>
                  </tr>
          <tr style={{ height: "4px" }}></tr>
                  <tr>
                    <td
                      colSpan={2}
                      style={{
                        height: "27px",
                        fontFamily: "Roboto",
                        fontSize: "8px",
                        fontWeight: "normal",
                        fontStretch: "normal",
                        fontStyle: "normal",
                        lineHeight: "1.13",
                        letterSpacing: "normal",
                        textAlign: "justify",
                        color: "rgba(0, 0, 0, 0.38)",
                      }}
                    >
                      This message and any attachments are solely for the
                      intended recipient and may contain confidential and/or
                      privileged information. If you are not the intended
                      recipient, any disclosure, copying, use, and/or
                      distribution of the information included in this message
                      and its attachments is prohibited. If you have received
                      this communication in error, please notify us by replying
                      to this email and immediately delete this message and/or
                      attachments.
                    </td>
                  </tr>
                </tbody>
              </table>
            </td>
            <td
              style={{
                width: "16px",
              }}
            ></td>
          </tr>
          <tr style={{ height: "16px" }}></tr>
        </tbody>
      </table>
    </div>
  );
}

export default App;
