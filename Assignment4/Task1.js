function fetchData() {
    return new Promise((res) => {
        const time = Math.floor(Math.random() * 500 + 1);
        //const time = false;
        setTimeout(() => {

            if (time) {
                const data = ["Shruti", "Rushikesh", "Yash", "Siddhi"];
                res(data);
            } else {
                console.log("Error");
            }
        }, 2000);
    });
}

fetchData().then(data => console.log("Fetched Data:", data)).catch(error => console.log(error));
