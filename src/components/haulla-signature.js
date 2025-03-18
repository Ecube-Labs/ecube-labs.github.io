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
                        src={`${window.location.origin}/bi-haulla-logo-rgb@3x.png`}
                        // NOTE: 지메일 서명에서는 항상 default src 로 렌더링 됨
                        // srcSet={`${window.location.origin}/bi-haulla-logo-rgb@2x.png 2x, ${window.location.origin}/bi-haulla-logo-rgb@3x.png 3x`}
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
                        src={`${window.location.origin}/gmail-signature@3x.gif`}
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
                  marginLeft: "24px",
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
                        href="https://www.haulla.com/?utm_source=sales&utm_medium=email_esignature&utm_content=main_page"
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
          <tr>
            <td colSpan="3">
              <a
                style={{
                  fontSize: "16px",
                  fontWeight: "bold",
                  color: "#015dee",
                }}
                href={`http://haulla-api-stage.haulla.com/referrals/redirect-hubspot-forms/?channel=${encodeURIComponent('Email signature banner')}`}
              >
                <img
                  src={`${window.location.origin}/haulla-gmail-signature-referral-banner.png`}
                  style={{
                    width: "448px",
                    height: "64px",
                  }}
                  alt="Promotion"
                />
              </a>
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
