import bannerBackground from "./banner-image-background.png";

// NOTE: 서명에 쓰이는 퍼블리싱 수준은 html4, css2 기준으로 하는게 여러 메일 클라이언트에서 깨지지 않게 하는 방법이다.
// NOTE: 서명은 무조건 inline-style로 해야 메일 클라이언트에서 정상적으로 적용된다.
export function HaullaSignature({ id, name, jobTitle, phoneNumber }) {
  return (
    <>
      <link
        href="https://fonts.googleapis.com/css?family=Roboto"
        rel="stylesheet"
        type="text/css"
      ></link>
      <table
        id={id}
        cellPadding={0}
        cellSpacing={0}
        style={{
          width: "480px",
          maxWidth: "480px",
          minHeight: "106px",
          padding: "16px",
          backgroundColor: "#ffffff", // FIXME: 다크모드에서도 안된다. 어떻게 할까?
        }}
      >
        <tbody>
          <tr>
            <td>
              <table cellPadding={0} cellSpacing={0}>
                <tbody>
                  <tr>
                    <td>
                      <img
                        src={`${window.location.origin}/bi-haulla-logo-rgb.png`}
                        srcSet={`${window.location.origin}/bi-haulla-logo-rgb@2x.png 2x, ${window.location.origin}/bi-haulla-logo-rgb@3x.png 3x`}
                        style={{
                          width: "111px",
                          height: "29px",
                          marginBottom: "4px",
                        }}
                        alt="Logo"
                      />
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div
                        style={{
                          fontSize: "28px",
                          lineHeight: "40px",
                          fontWeight: 500,
                        }}
                      >
                        for
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <img
                        src={`${window.location.origin}/gmail-signature.gif`}
                        srcSet={`${window.location.origin}/gmail-signature@2x.gif 2x, ${window.location.origin}/gmail-signature@3x.gif 3x`}
                        style={{ height: "40px" }}
                        alt="Service coverage"
                      />
                    </td>
                  </tr>
                </tbody>
              </table>
            </td>
            <td>
              <div
                style={{
                  width: "1px",
                  height: "111px",
                  backgroundColor: "black",
                  opacity: 0.38,
                  marginLeft: "71px",
                  marginRight: "24px",
                }}
              ></div>
            </td>
            <td>
              <table cellPadding={0} cellSpacing={0} style={{ width: "234px" }}>
                <tbody>
                  <tr>
                    <td>
                      <div
                        style={{
                          fontSize: "20px",
                          lineHeight: "28px",
                          fontWeight: 500,
                          marginBottom: "8px",
                        }}
                      >
                        {name}
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div
                        style={{
                          fontSize: "16px",
                          lineHeight: "24px",
                          marginBottom: "4px",
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
                          fontSize: "16px",
                          lineHeight: "24px",
                          marginBottom: "4px",
                        }}
                      >
                        M: {phoneNumber}
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td style={{ fontSize: "16px", lineHeight: "24px" }}>
                      <a
                        href="https://www.haulla.com?utm_source=Gmail&utm_medium=esignature&utm_content=main_page"
                        target="_blank"
                        rel="noreferrer"
                      >
                        www.haulla.com
                      </a>
                    </td>
                  </tr>
                </tbody>
              </table>
            </td>
          </tr>
          <tr>
            <td colSpan="3" style={{ height: "16px" }}></td>
          </tr>
          <tr
            style={{
              height: "64px",
              backgroundImage: `url(${bannerBackground})`,
            }}
          >
            <td colSpan="3">
              <table cellPadding={0} cellSpacing={0}>
                <tbody>
                  <tr>
                    <td valign="middle">
                      <img
                        src={`${window.location.origin}/banner-image-dumpster.png`}
                        srcSet={`${window.location.origin}/banner-image-dumpster@2x.png 2x, ${window.location.origin}/banner-image-dumpster@3x.png 3x`}
                        style={{
                          width: "65px",
                          height: "53px",
                          marginTop: "8px",
                          marginLeft: "8px",
                          marginRight: "12px",
                        }}
                        alt="Dumpster"
                      />
                    </td>
                    <td>
                      <div
                        style={{
                          display: "inline-block",
                          fontSize: "16px",
                          lineHeight: "14px",
                          fontWeight: 500,
                          color: "#FFFFFF",
                          marginRight: "48px",
                        }}
                      >
                        Want to Save More?
                      </div>
                    </td>
                    <td>
                      <a
                        style={{
                          display: "inline-block",
                          padding: "8px 36px",
                          borderRadius: "1px",
                          backgroundImage:
                            "linear-gradient(to left, #ffffff, #d2e4ff 0%)",
                          fontSize: "16px",
                          lineHeight: "14px",
                          fontWeight: "bold",
                          color: "#015dee",
                          textDecoration: "none",
                        }}
                        href="https://refer.haulla.com/?utm_source=Gmail&utm_medium=esignature&utm_content=refer_page"
                      >
                        Save Now !
                      </a>
                    </td>
                  </tr>
                </tbody>
              </table>
            </td>
          </tr>
          {/* HACK: 맥 메일 앱에서 서명을 붙여 넣을 때 empty row 가 있어야 커서가 다음줄에 포커스 되면서 정상적으로 복붙이 된다. */}
          <tr>
            <td colSpan="3"></td>
          </tr>
        </tbody>
      </table>
    </>
  );
}
