import { Rnd } from "react-rnd";
import React, { useState, useEffect } from "react";
import closeImg from "./assets/buttons/close.svg";
import closeActive from "./assets/buttons/close-active.svg";
import closeHover from "./assets/buttons/close-hover.svg";
import miniImg from "./assets/buttons/minimize.svg";
import miniActive from "./assets/buttons/minimize-active.svg";
import miniHover from "./assets/buttons/minimize-hover.svg";
import maxiImg from "./assets/buttons/maximize.svg";
import maxiActive from "./assets/buttons/maximize-active.svg";
import maxiHover from "./assets/buttons/maximize-hover.svg";

function DraggableResizableBox({
  content,
  close,
  onCloseChange,
  mini,
  onMinimize,
  zInd,
  tabClick,
  info,
}) {
  const [isClose, setIsClose] = useState(close);
  const [isMaximize, setMaximize] = useState(false);
  const [boxWidth, setWidth] = useState(1000);
  const [boxHeight, setHeight] = useState(800);
  const [position, setPosition] = useState({ x: 160, y: 30 });
  const [closeIcon, setCloseIcon] = useState(closeImg);
  const [miniIcon, setMiniIcon] = useState(miniImg);
  const [maxiIcon, setMaxiIcon] = useState(maxiImg);

  const tempPos = { x: 0, y: -152 };

  //console.log(position);

  return (
    <div
      className=".container"
      style={{
        zIndex: zInd,
        position: "relative",
        display: mini ? "none" : "block",
      }}
    >
      <Rnd
        default={{
          x: 30,
          y: 30,
          width: boxWidth,
          height: boxHeight,
        }}
        minWidth={1000}
        minHeight={800}
        bounds=".area"
        className="box"
        dragHandleClassName="drag-handle"
        resizeHandleClasses={{
          top: "top",
          right: "right",
          bottom: "bottom",
          left: "left",
          topLeft: "topl",
          topRight: "topr",
          bottomLeft: "bottoml",
          bottomRight: "bottomr",
        }}
        position={isMaximize ? tempPos : position}
        onDragStart={(e) => {
          tabClick(content);
          console.log("drag clicked");
          e.stopPropagation();
        }}
        onDragStop={(e, d, ref) => {
          if (isMaximize == false) {
            setPosition({ x: d.x, y: d.y });
          }
        }}
        onResizeStart={() => tabClick(content)}
        onResizeStop={(e, direction, ref, delta, position) => {
          setWidth(ref.offsetWidth); // Update width
          setHeight(ref.offsetHeight); // Update height
          setPosition(position);
          if (isMaximize) {
            setMaximize(!isMaximize);
          }
        }}
        size={{
          width: isMaximize ? window.innerWidth : boxWidth,
          height: isMaximize ? `96.5vh` : boxHeight,
        }}
        style={{ zIndex: zInd }} // Apply the dynamic z-index
      >
        <div style={{ width: "100%", height: "100%" }}>
          <div className="topContainer">
            <div className="drag-handle">
              <img
                src={require(content === 1 ? "./test.png" : "./pics/ball.png")}
                alt="start"
              />
              <p>{content === 1 ? "Hung Trinh" : "PokeDex"}</p>
            </div>
            <div className="buttons">
              <button
                className="mini-max"
                onClick={(e) => {
                  e.stopPropagation();
                  onMinimize(content);
                  setMiniIcon(miniImg);
                }}
                onMouseEnter={() => setMiniIcon(miniHover)}
                onMouseLeave={() => setMiniIcon(miniImg)}
                onMouseDown={() => setMiniIcon(miniActive)}
              >
                <img src={miniIcon} alt="minimize" />
              </button>
              <button
                className="mini-max"
                onClick={() => {
                  setMaximize(!isMaximize);
                  tabClick(content);
                }}
                onMouseEnter={() => setMaxiIcon(maxiHover)}
                onMouseLeave={() => setMaxiIcon(maxiImg)}
                onMouseDown={() => setMaxiIcon(maxiActive)}
              >
                <img src={maxiIcon} alt="maximize" />
              </button>
              <button
                className="closeButton"
                onClick={() => {
                  setIsClose(!isClose);
                  setWidth(1000);
                  setHeight(800);
                  setPosition({ x: 160, y: 30 });
                  setMaximize(false);
                  onCloseChange(content);
                  setCloseIcon(closeActive);
                }}
                onMouseEnter={() => setCloseIcon(closeHover)}
                onMouseLeave={() => setCloseIcon(closeImg)}
                onMouseDown={() => setCloseIcon(closeActive)}
              >
                <img src={closeIcon} alt="close" />
              </button>
            </div>
          </div>
          <div
            className="content"
            onClick={(e) => {
              console.log("content clicked");
              tabClick(content);
            }}
          >
            {info}
          </div>
        </div>
      </Rnd>
    </div>
  );
}

export default DraggableResizableBox;
