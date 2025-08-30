import "./App.css";

function Pokedex({ click, active }) {
  return (
    <div className="pokedex_container" style={{ position: "relative" }}>
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          zIndex: 10,
          pointerEvents: active === 2 ? "none" : "auto",
        }}
        onClick={() => click(2)}
      ></div>
      <iframe
        src="https://hungspokedex.netlify.app/"
        title="Pokedex Iframe"
        width="100%"
        height="100%"
        frameBorder="0"
      ></iframe>
    </div>
  );
}

export default Pokedex;
