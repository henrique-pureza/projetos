import React from "react";
import ReactDOM from "react-dom/client";
import Player from "./Player.tsx";
import video from "./assets/introPS1.mp4";

const rootDiv = document.getElementById("root");
const root = ReactDOM.createRoot(rootDiv);

root.render(<Player video={video} />);
