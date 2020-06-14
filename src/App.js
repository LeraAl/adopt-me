import React from "react";
import { render } from "react-dom";
import Pet from "./Pet";

const App = () => {
    return React.createElement("div", {}, [
        React.createElement("h1", {}, "Adopt Me!"),
        React.createElement(Pet, {
            name: "Luna",
            animal: "Dog",
            breed: "Animal",
        }),
        React.createElement(Pet, {
            name: "Pepper",
            animal: "Parot",
            breed: "small",
        }),
        React.createElement(Pet, {
            name: "Kameya",
            animal: "Dog",
            breed: "Golden Retriver",
        }),
    ]);
};
render(React.createElement(App), document.getElementById("root"));
