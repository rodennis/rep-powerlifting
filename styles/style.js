const button = document.querySelector("button");
const signUp = document.querySelector("#signUp");
const signUpSubmit = document.querySelector("#signUpSubmit");

/**getting the values of the login input fields and returning them to the cnsole*/
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

/**calling the pop up window for the sign up screen */
signUp.addEventListener('click', function onButtonClick() {
    document.getElementById('signUpForm').className="show";

})

/**calling all of the values of input fields, and returning them to the console, and closing the window afterwards */
signUpSubmit.addEventListener('click', function register() {
    const first = document.getElementById("firstName").value;
    const last = document.getElementById("lastName").value;
    const email = document.getElementById("email").value;
    const pW = document.getElementById("pW").value;
    const male = document.getElementById("male").value;
    const female = document.getElementById("female").value;

    if (first === '' || last  === '' || email === '' || pW === '') {
        alert("Please fill out the entire form!")
        return console.error("error");
    }

    else {  
        console.log("First name:" + " " + first + "\n" + "Last name:" + " " + last + "\n" + 
        "Email:" + " " + email + "\n" + "Password:" + " " + pW + "\n" + "Sex:" + " " + male + 
        "\n" + "Sex:" + " " + female)

        document.getElementById("firstName").value='';
        document.getElementById("lastName").value='';
        document.getElementById("email").value='';
        document.getElementById("pW").value='';
        document.getElementById("male").value='';
        document.getElementById("female").value='';
        document.getElementById('signUpForm').className="hide";

        alert("Sign up successful!")
    }
})