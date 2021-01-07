import { useState } from "react";
import "./App.css";
import { Sign } from "./components/sign";

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

function App() {
  const [name, setName] = useState("");
  const [jobTitle, setJobTitle] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [loc, setLoc] = useState("Seoul");

  const copyToClipboard = () => {
    const elMailSign = document.getElementById("mail-sign");
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
    <div className="App">
      <input value={name} onChange={(e) => setName(e.currentTarget.value)} />
      <input
        value={jobTitle}
        onChange={(e) => setJobTitle(e.currentTarget.value)}
      />
      <input
        value={phoneNumber}
        onChange={(e) => setPhoneNumber(e.currentTarget.value)}
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
      <Sign
        name={name || "HyeonJu Park"}
        jobTitle={jobTitle || "Designer / Design Department"}
        phoneNumber={phoneNumber || "+82.10.3007.4420"}
        tel={locationMap[loc].tel}
        fax={locationMap[loc].fax}
        address={locationMap[loc].address}
      />
    </div>
  );
}

export default App;
