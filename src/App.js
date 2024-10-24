import React from "react";
import "./App.css";
import GroupOfIcon from "./component/GroupOfIcon";

function App() {
  const listOfPart = [
    { value: "Body", folder: "body" },
    { value: "Eyes", folder: "eyes" },
    { value: "Hair", folder: "hair" },
    { value: "Mouth", folder: "mouths" },
    { value: "Eyebrows", folder: "eyebrows" },
    { value: "Glasses", folder: "accessories/glasses" },
    { value: "Clothing (L1)", folder: "clothes/layer_1" },
    { value: "Clothing (L2)", folder: "clothes/layer_2" },
    { value: "Clothing (L3)", folder: "clothes/layer_3" },
  ];

  return (
    <div>
      <div className="App">
        <div className="title">CHARACTER</div>
        <div className="subtitle">CUSTOMIZATION</div>
        <div className="divider"></div>
        <div className="avatar-group gap-30">
          <div>
            <div className="avatar-wrapper">
              <div className="avatar">
                {/* img body */}
                {/* img eyes */}
                {/* img hair */}
                {/* img clothes 1 */}
                {/* img clothes 2 */}
                {/* img clothes 3 */}
                {/* img mouth */}
                {/* img nose */}
                {/* img eyebrow */}
                {/* img accessories */}
              </div>
              <div className="text-center">
                <button className="button">Randomize!</button>
              </div>
            </div>
          </div>

          <div>
            {listOfPart.map(({ value, folder }, index) => (
              <div key={index} className="list-section">
                <h2>{value}</h2>
                <GroupOfIcon folder={folder} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
