import { useState } from "react";
import "./App.css";
import { EcubeLabsSignature } from "./components/ecube-labs-signature";
import { HaullaSignature } from "./components/haulla-signature";
import howToSetting1 from "./settings-1.png";
import howToSetting2 from "./settings-2.png";

const locationMap = {
  Seoul: {
    tel: "+82.2.868.0293",
    fax: "+82.2.868.0294",
    address: (
      <>
        #710, 288, Digital-ro, Guro-gu, Seoul, <br />
        Republic of Korea (Postal: 08390)
      </>
    ),
  },
  Gimpo: {
    tel: "+82.2.868.0293",
    fax: "+82.2.868.0294",
    address: "김포시 통진읍 귀전리 545번지",
  },
  "Los Angeles": {
    tel: "+1-213-282-7850",
    fax: "+1-213-289-2869",
    address: (
      <>
        508 Monterey Pass Rd, Unit B<br />
        Monterey Park, CA 91754, United States
      </>
    ),
  },
};

function Template({ id, component: Component }) {
  const [name, setName] = useState("");
  const [jobTitle, setJobTitle] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [loc, setLoc] = useState("Seoul");

  const copyToClipboard = () => {
    const elMailSign = document.getElementById(id);
    const range = document.createRange();
    const sel = window.getSelection();
    sel.removeAllRanges();

    try {
      range.selectNodeContents(elMailSign);
      sel.addRange(range);
    } catch (e) {
      range.selectNode(elMailSign);
      sel.addRange(range);
    }

    document.execCommand("copy");
  };

  return (
    <div>
      <input
        value={name}
        onChange={(e) => setName(e.currentTarget.value)}
        placeholder="Name"
      />
      <input
        value={jobTitle}
        onChange={(e) => setJobTitle(e.currentTarget.value)}
        placeholder="Job title / Department"
      />
      <input
        value={phoneNumber}
        onChange={(e) => setPhoneNumber(e.currentTarget.value)}
        placeholder="Mobile phone"
      />
      <select value={loc} onChange={(e) => setLoc(e.currentTarget.value)}>
        <option value="Seoul">Seoul</option>
        <option value="Gimpo">Gimpo</option>
        <option value="Los Angeles">Los Angeles</option>
      </select>
      <button onClick={copyToClipboard}>copy</button>
      <hr />

      <h3>Preview</h3>
      {/* NOTE: 퍼블리싱 대충해서 컨텐츠 안들어가면 템플릿 깨짐. 기본값 대충 넣어둠. */}
      <Component
        id={id}
        name={name || "Sapphira Park"}
        jobTitle={jobTitle || "Designer / Design Department"}
        phoneNumber={phoneNumber || "+82.10.0000.0000"}
        tel={locationMap[loc].tel}
        fax={locationMap[loc].fax}
        address={locationMap[loc].address}
      />

      <hr />
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <Template id="ecube-labs-signature" component={EcubeLabsSignature} />
      <Template id="haulla-signature" component={HaullaSignature} />

      <h3>How to add the signature to Gmail?</h3>
      <div>
        <ol>
          <li>
            In Gmail, open the Settings page <br />{" "}
            <img src={howToSetting1} alt="setting guide" />
          </li>
          <li>
            Paste <strong>(CTRL + V)</strong> the signature to the Signature
            text area. <br />
            If you had an existing signature, first remove it and save the
            settings. <br />
            <img src={howToSetting2} alt="setting guide" />
          </li>
          <li>Click 'Save Changes'</li>
        </ol>
      </div>
    </div>
  );
}

export default App;
