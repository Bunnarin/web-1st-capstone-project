const display = document.getElementById('display');

const connectToServer = (url) => {
    display.innerHTML = "Connecting to server...";
    axios.get(url)
        .then((response) => {
            display.innerHTML = response.data;
        })
        .catch((error) => {
            console.error(error);
            display.innerHTML = error;
        });
}   
connectToServer("http://localhost:5500");
