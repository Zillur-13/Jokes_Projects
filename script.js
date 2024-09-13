
function getData(){

    let config = {
        headers: {
            'Accept': 'application/json'
        }
    }

    axios.get("https://icanhazdadjoke.com", config).then((res) => {
        // console.log(res.data.joke);
        document.getElementById("joke").innerHTML = res.data.joke
    }).catch((err) => {
        // console.error(err);
        alert(`Something went Wrong`)
        document.getElementById("joke").innerHTML = "An error occurred while fetching the joke."
    })

}
window.onload = getData