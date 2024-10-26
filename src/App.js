import React, { useState } from "react";
import "./App.css";
import GroupOfIcon from "./component/GroupOfIcon";
import IconSelected from "./component/IconSelected";

function App() {
  const listOfPart = [
    { value: "Body", folder: "body", quantity: 17, layout: 0 },
    { value: "Eyes", folder: "eyes", quantity: 24, layout: 1 },
    { value: "Hair", folder: "hair", quantity: 73, layout: 6 },
    {
      value: "Clothing (L1)",
      folder: "clothes/layer_1",
      quantity: 5,
      layout: 2,
    },
    {
      value: "Clothing (L2)",
      folder: "clothes/layer_2",
      quantity: 5,
      layout: 3,
    },
    {
      value: "Clothing (L3)",
      folder: "clothes/layer_3",
      quantity: 9,
      layout: 4,
    },
    { value: "Mouth", folder: "mouths", quantity: 24, layout: 4 },
    { value: "Nose", folder: "noses", quantity: 1, layout: 4 },
    { value: "Eyebrows", folder: "eyebrows", quantity: 15, layout: 4 },
    {
      value: "Glasses",
      folder: "accessories/glasses",
      quantity: 17,
      layout: 5,
    },
  ];

  const getRandomNumber = (i) => {
    return Math.floor(Math.random() * i) + 1;
  };

  const handleRandom = () => {
    const randomArray = listOfPart.map((item) => {
      return {
        folder: item.folder,
        name: getRandomNumber(item.quantity),
        layout: item.layout,
      };
    });
    return randomArray;
  };

  const handleClick = (newFolder, newName) => {
    setShows((prevShows) =>
      prevShows.map((item) =>
        item.folder === newFolder ? { ...item, name: newName } : item
      )
    );
  };

  const [shows, setShows] = useState(handleRandom());

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
                {shows.map(({ folder, name, layout }, index) => (
                  <IconSelected
                    key={index}
                    folder={folder}
                    name={name}
                    layout={layout}
                  />
                ))}
              </div>

              <div className="text-center">
                <button
                  className="button"
                  onClick={() => setShows(handleRandom())}
                >
                  Randomize!
                </button>
              </div>
            </div>
          </div>

          <div>
            {listOfPart
              .filter((item) => item.folder !== "noses")
              .map(({ value, folder, quantity }, index) => (
                <div key={index} className="list-section">
                  <h2>{value}</h2>
                  <GroupOfIcon
                    folder={folder}
                    quantity={quantity}
                    handleClick={handleClick}
                    shows={shows}
                  />
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
