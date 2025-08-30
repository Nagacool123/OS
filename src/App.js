import "./App.css";
import React, { useState, useEffect, act } from "react";

import DraggableResizableBox from "./box";
import Info from "./info.js";
import Pokedex from "./pokedex.js";
import { tab } from "@testing-library/user-event/dist/tab";

function App() {
  const [openedTabs, setOpenedTabs] = useState([1]);
  const [activeTab, setActiveTab] = useState(1);
  const [zIndex, setZIndex] = useState(1);
  const [time, setTime] = useState(new Date());

  const [minimizedBoxes, setMiniboxes] = useState({
    minibox1: false,
    minibox2: true,
  });
  const [boxes, setBoxes] = useState({
    box1: false,
    box2: true,
  });
  const [boxesZIndex, setBoxesZ] = useState({
    boxZ1: zIndex,
    boxZ2: zIndex,
  });

  const handleTabs = (tabs) => {
    setZIndex((prevZIndex) => prevZIndex + 1);

    if (activeTab !== tabs && minimizedBoxes[`minibox${tabs}`] === false) {
      setActiveTab(tabs);
      setBoxesZ((prevBoxesZ) => ({
        ...prevBoxesZ,
        [`boxZ${tabs}`]: zIndex,
      }));
    } else if (activeTab === tabs) {
      setMiniboxes((prevMiniboxes) => ({
        ...prevMiniboxes,
        [`minibox${tabs}`]: !prevMiniboxes[`minibox${tabs}`],
      }));
      setActiveTab(null);
    } else {
      setMiniboxes((prevMiniboxes) => ({
        ...prevMiniboxes,
        [`minibox${tabs}`]: !prevMiniboxes[`minibox${tabs}`],
      }));
      setActiveTab(tabs);
      setBoxesZ((prevBoxesZ) => ({
        ...prevBoxesZ,
        [`boxZ${tabs}`]: zIndex,
      }));
    }
  };

  const handleClose = (newCloseState) => {
    setBoxes((prevMiniboxes) => ({
      ...prevMiniboxes,
      [`box${newCloseState}`]: true,
    }));
    setMiniboxes((prevMiniboxes) => ({
      ...prevMiniboxes,
      [`minibox${newCloseState}`]: true,
    }));
    setOpenedTabs((prev) => prev.filter((tab) => tab !== newCloseState));
    console.log("Box1 close state updated:", newCloseState);
  };

  const handleMini = (newCloseState) => {
    console.log("setting active tab to null");
    console.log("Box1 minimize state updated:", newCloseState);

    setMiniboxes((prevMiniboxes) => ({
      ...prevMiniboxes,
      [`minibox${newCloseState}`]: !prevMiniboxes[`minibox${newCloseState}`],
    }));
    setActiveTab(null);
  };

  const handleTabCLick = (content) => {
    setZIndex((prevZIndex) => prevZIndex + 1);
    setActiveTab(content);
    setBoxesZ((prev) => ({
      ...prev,
      [`boxZ${content}`]: zIndex,
    }));
  };

  useEffect(() => {
    const timerId = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(timerId);
  }, []);

  const formatTime = (date) => {
    const hours = date.getHours();
    const minutes = date.getMinutes().toString().padStart(2, "0");
    const ampm = hours >= 12 ? "PM" : "AM";
    const formattedHours = hours % 12 || 12;

    return `${formattedHours}:${minutes} ${ampm}`;
  };

  return (
    <div className="App">
      <div className="area">
        <button
          className="icon flex justify-center items-center text-cente"
          onClick={() => {
            if (boxes.box1 === false && minimizedBoxes.minibox1 === true) {
              console.log("open hidden");
              setMiniboxes((prevMiniboxes) => ({
                ...prevMiniboxes,
                [`minibox${1}`]: false,
              }));
              handleTabCLick(1);
            } else {
              setActiveTab(1);
              handleTabCLick(1);
              setBoxes((prevMiniboxes) => ({
                ...prevMiniboxes,
                [`box${1}`]: false,
              }));
              setMiniboxes((prevMiniboxes) => ({
                ...prevMiniboxes,
                [`minibox${1}`]: false,
              }));
              setOpenedTabs((prev) => (prev.includes(1) ? prev : [...prev, 1]));
            }
          }}
        >
          <div className="icon-container">
            <img src={require("./test.png")} alt="start" />
            <p>Portfolio</p>
          </div>
        </button>
        <button
          className="icon2 flex justify-center items-center text-cente"
          onClick={() => {
            if (boxes.box2 === false && minimizedBoxes.minibox2 === true) {
              console.log("open hidden");
              setMiniboxes((prevMiniboxes) => ({
                ...prevMiniboxes,
                [`minibox${2}`]: false,
              }));
              setActiveTab(2);
              handleTabCLick(2);
            } else {
              setActiveTab(2);
              handleTabCLick(2);
              setBoxes((prevMiniboxes) => ({
                ...prevMiniboxes,
                [`box${2}`]: false,
              }));
              setMiniboxes((prevMiniboxes) => ({
                ...prevMiniboxes,
                [`minibox${2}`]: false,
              }));
              setOpenedTabs((prev) => (prev.includes(2) ? prev : [...prev, 2]));
            }
          }}
        >
          <div className="icon-container">
            <img src={require("./pics/ball.png")} alt="start" />
            <p>PokeDex</p>
          </div>
        </button>
        {!boxes.box1 && (
          <DraggableResizableBox
            content={1}
            close={boxes.box1}
            mini={minimizedBoxes.minibox1}
            onCloseChange={handleClose}
            onMinimize={handleMini}
            zInd={boxesZIndex.boxZ1}
            tabClick={handleTabCLick}
            info={<Info />}
          />
        )}
        {!boxes.box2 && (
          <DraggableResizableBox
            content={2}
            close={boxes.box2}
            mini={minimizedBoxes.minibox2}
            onCloseChange={handleClose}
            onMinimize={handleMini}
            zInd={boxesZIndex.boxZ2}
            tabClick={handleTabCLick}
            info={<Pokedex click={handleTabCLick} active={activeTab} />}
          />
        )}
      </div>
      <div className="taskBar">
        <img src={require("./pics/startbutton.png")} alt="start" />
        {openedTabs.map((tab) => (
          <button
            key={tab}
            className={`tabs ${tab === activeTab ? "active-tab" : ""}`}
            onClick={() => {
              handleTabs(tab);
            }}
          >
            <div className="tabs-container">
              <img
                src={require(tab === 1 ? "./test.png" : "./pics/ball.png")}
                alt="start"
              />
              <div className="tabs-name">
                {tab === 1 ? "Hung Trinh" : "PokeDex"}
              </div>
            </div>
          </button>
        ))}
        <div className="time">{formatTime(time)}</div>
      </div>
    </div>
  );
}

export default App;
