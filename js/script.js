//forms
function userForm() {
    let firstName = document.getElementById("firstName").value;
    let lastName = document.getElementById("lastName").value;
    let email = document.getElementById("email").value;
    let address = document.getElementById("address").value;
    let city = document.getElementById("city").value;
    let province = document.getElementById("province").value;
    let membership = document.querySelector('input[name="membership"]:checked').value;

    let userInfoDiv = document.createElement("div");
    userInfoDiv.setAttribute("id", "userInfo");

    let fullName = document.createElement("p");
    fullName.textContent = "Full Name: " + firstName + " " + lastName;

    let userEmail = document.createElement("p");
    userEmail.textContent = "Email: " + email;

    let userAddress = document.createElement("p");
    userAddress.textContent = "Address: " + address + ", " + city + ", " + province;

    let userMembership = document.createElement("p");
    userMembership.textContent = "Membership: " + membership;

    userInfoDiv.appendChild(fullName);
    userInfoDiv.appendChild(userEmail);
    userInfoDiv.appendChild(userAddress);
    userInfoDiv.appendChild(userMembership);

    let outputDiv = document.getElementById("output");
    outputDiv.innerHTML = ""; // Clear previous content
    outputDiv.appendChild(userInfoDiv);
}

document.getElementById("calculateButton").addEventListener("click", myExcelFuns);

let result = 0; // Declare a global variable to store the result

function myExcelFuns() {
    let numberStr = document.getElementById("numbers").value;
    numberStr = numberStr.trim();

    if (numberStr === "") {
        alert("Please enter numbers separated by spaces.");
        return;
    }

    let numberArr = numberStr.split(" ");

    let Array = [];

    for (let i = 0; i < numberArr.length; i++) {
        let num = parseFloat(numberArr[i]);

        if (!isNaN(num)) {
            Array.push(num);
        }
    }

    if (Array.length === 0) {
        alert("Invalid input. Please enter valid numbers separated by spaces.");
        return;
    }

    let selectedFunction = document.querySelector('input[name="excelFunction"]:checked').value;


    if (selectedFunction === "Sum") {
        // Calculate the total of all numbers
        result = Array.reduce(function (acc, num) {
            return acc + num;
        }, 0);
    } else if (selectedFunction === "Average") {
        // Calculate the average of the numbers
        result = Array.reduce(function (acc, num) {
            return acc + num;
        }, 0) / Array.length;
    } else if (selectedFunction === "Max") {
        // Find the maximum number
        result = Math.max.apply(null, Array);
    } else {
        // Find the minimum number
        result = Math.min.apply(null, Array);
    }

    let outputDiv = document.getElementById("output");
    outputDiv.innerHTML = "Result: " + result;
}

// Toggle between dark and light themes
document.getElementById("darkThemeButton").addEventListener("click", function (event) {
    event.preventDefault(); // Prevent form submission
    toggleDarkTheme();
});

function toggleDarkTheme() {
    document.body.classList.remove("light-theme");
    document.body.classList.add("dark-theme");
}

document.getElementById("lightThemeButton").addEventListener("click", function (event) {
    event.preventDefault(); // Prevent form submission
    toggleDarkTheme();
});

function toggleLightTheme() {
    document.body.classList.remove("dark-theme");
    document.body.classList.add("light-theme");
}
