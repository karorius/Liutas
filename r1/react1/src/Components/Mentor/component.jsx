const arr = ['Labas ', 'Hello', 'Godday'];

function random(max) {
    return Math.floor(Math.random() * (max + 1))
}
const Naujas = () => {

    return <h1> {arr[random(2)]} Pasauli </h1>
}

export default Naujas