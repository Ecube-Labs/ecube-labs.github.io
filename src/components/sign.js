// NOTE: 서명에 쓰이는 퍼블리싱 수준은 html4, css2 기준으로 하는게 여러 메일 클라이언트에서 깨지지 않게 하는 방법이다.
// NOTE: 서명은 무조건 inline-style로 해야 메일 클라이언트에서 정상적으로 적용된다.
export function Sign({ name, jobTitle, phoneNumber, tel, fax, address }) {
  return (
    <>
      <link
        href="http://fonts.googleapis.com/css?family=Roboto"
        rel="stylesheet"
        type="text/css"
      ></link>
      <table
        id="mail-sign"
        cellPadding={0}
        cellSpacing={0}
        style={{
          width: "600px",
          minHeight: "265px",
          backgroundColor: "#ffffff", // FIXME: 다크모드에서도 안된다. 어떻게 할까?
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
              <table cellPadding={0} cellSpacing={0}>
                <tbody>
                  <tr>
                    {/* Left latters */}
                    <td style={{ verticalAlign: "top" }}>
                      <table
                        cellPadding={0}
                        cellSpacing={0}
                        style={{
                          width: "100%",
                          textAlign: "left",
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
                                {/* NOTE: public 폴더에 있는 파일 참조하는것임 */}
                                <img
                                  src={`${window.location.origin}/ci-logo-english-rgb.png`}
                                  srcSet={`${window.location.origin}/ci-logo-english-rgb@2x.png 2x, ${window.location.origin}/ci-logo-english-rgb@3x.png 3x`}
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
                                  fontFamily: "Roboto, Arial, sans-serif",
                                  fontSize: "16px",
                                  fontWeight: "bold",
                                  fontStretch: "normal",
                                  fontStyle: "normal",
                                  lineHeight: "1.5",
                                  letterSpacing: "0.09px",
                                  color: "rgba(0, 0, 0, 0.87)",
                                }}
                              >
                                {name}
                              </div>
                            </td>
                          </tr>
                          {/* Job title / position row */}
                          <tr>
                            <td>
                              <div
                                style={{
                                  marginBottom: "4px",
                                  fontFamily: "Roboto, Arial, sans-serif",
                                  fontSize: "14px",
                                  fontWeight: "normal",
                                  fontStretch: "normal",
                                  fontStyle: "normal",
                                  lineHeight: "1.43",
                                  letterSpacing: "0.1px",
                                  color: "rgba(0, 0, 0, 0.87)",
                                }}
                              >
                                {jobTitle}
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <div
                                style={{
                                  marginBottom: "4px",
                                  fontFamily: "Roboto, Arial, sans-serif",
                                  fontSize: "14px",
                                  fontWeight: "normal",
                                  fontStretch: "normal",
                                  fontStyle: "normal",
                                  lineHeight: "1.43",
                                  letterSpacing: "0.1px",
                                  color: "rgba(0, 0, 0, 0.87)",
                                }}
                              >
                                T {tel}
                                <br />F {fax}
                                <br />M {phoneNumber}
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <div
                                style={{
                                  fontFamily: "Roboto, Arial, sans-serif",
                                  fontSize: "14px",
                                  fontWeight: "normal",
                                  fontStretch: "normal",
                                  fontStyle: "normal",
                                  lineHeight: "1.43",
                                  letterSpacing: "0.1px",
                                  color: "rgba(0, 0, 0, 0.87)",
                                }}
                              >
                                {address}
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
                        {/* NOTE: public 폴더에 있는 파일 참조하는것임 */}
                        <img
                          style={{
                            width: "218px",
                            height: "202px",
                          }}
                          src={`${window.location.origin}/solution.png`}
                          srcSet={`${window.location.origin}/solution@2x.png 2x, ${window.location.origin}/solution@3x.png 3x`}
                          alt="Products"
                        />
                      </a>
                    </td>
                  </tr>
                  <tr style={{ height: "4px" }}></tr>
                  <tr>
                    <td
                      colSpan={2}
                      style={{
                        fontFamily: "Roboto, Arial, sans-serif",
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
          <tr style={{ height: "12px" }}></tr>
        </tbody>
      </table>
    </>
  );
}
