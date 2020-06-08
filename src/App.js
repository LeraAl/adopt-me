const Pet = ({ name, animal, breed }) => {
    return React.createElement('div', {}, [
        React.createElement('h1', {}, name),
        React.createElement('h2', {}, animal),
        React.createElement('h2', {}, breed),
    ])
}


const App = () => {
    return React.createElement(
        "div",
        {},
        [
            React.createElement("h1", {}, "Adopt Me!"),
            React.createElement(Pet, { name: 'Luna', animal: 'Dog', breed: 'Animal'}),
            React.createElement(Pet, { name: 'Pepper', animal: 'Parot', breed: 'small'}),
            React.createElement(Pet, { name: 'Kameya', animal: 'Dog', breed: 'Golden Retriver'}),
        ]
    );
};
ReactDOM.render(
    React.createElement(App),
    document.getElementById("root")
);