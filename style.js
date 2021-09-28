const button = document.querySelector("button");


button.addEventListener('click', function getInput() {
    const userName = document.getElementById("userName").value; 
    const passWord = document.getElementById("passWord").value;

    if (userName === "" || passWord === "") {
        alert("Incorrect Username or Password!")
        return console.error("error");
    }
    
    else {
    console.log("Username:" + " " + userName + " " + "/", "Password:" + " " + passWord);
    }
})



   