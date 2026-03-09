const calculate = () => {
    const name = document.getElementById("name").value;
    let marks = [
        Number(document.getElementById("javascript").value),
        Number(document.getElementById("html").value),
        Number(document.getElementById("css").value),
        Number(document.getElementById("python").value),
        Number(document.getElementById("java").value)
    ];
    if (name.trim() === "") {
        document.getElementById("result").innerHTML =
        "Please enter your name.";
        return;
    }
    for (let i = 0; i < marks.length; i++) {
    if (marks[i]=== 0 || isNaN(marks[i])) {
        document.getElementById("result").innerHTML = 
        "Please enter valid marks for all subjects.";
        return;
    }
}
    for (let i = 0; i < marks.length; i++) {
        if (marks[i] < 0 || marks[i] > 100) {
            document.getElementById("result").innerHTML = 
            "Marks should be between 0 and 100.";
            return;
        }
}
    let total = 0;
    for (let i = 0; i < marks.length; i++) {
        total += marks[i];
    }
    let average = total / marks.length;
    let grade = "";
    let badgeClass = "";
    if (average >= 90) {
        grade = "A+"; badgeClass = "grade-A-plus";
    } else if (average >= 80) {
        grade = "A"; badgeClass = "grade-A";
    } else if (average >= 70) {
        grade = "B"; badgeClass = "grade-B";
    } else if (average >= 60) {
        grade = "C"; badgeClass = "grade-C";
    } else if (average >= 50) {
        grade = "D"; badgeClass = "grade-D";
    } else {
        grade = "Fail"; badgeClass = "grade-fail";
    } 
    if (grade !== "Fail") {
        document.getElementById("result").innerHTML = `<strong>Student:</strong> ${name}<br>
        <strong>Total:</strong> ${total} / 500<br>
        <strong>Average:</strong> ${average.toFixed(2)}%<br>
        <br> Grade: <span class="badge ${badgeClass}">${grade}</span>`;
    } else {    
        document.getElementById("result").innerHTML = `<strong>Student:</strong> ${name}<br>
        <strong>Total:</strong> ${total} / 500<br>
        <strong>Average:</strong> ${average.toFixed(2)}%<br>
        <br> Grade: <span class="badge ${badgeClass}">Failed</span>`;
        }
}

function resetSection() { 
    document.getElementById("name").value = "";
    document.getElementById("javascript").value = "";
    document.getElementById("html").value = "";
    document.getElementById("css").value = "";  
    document.getElementById("python").value = "";
    document.getElementById("java").value = "";
    document.getElementById("result").innerHTML = "";
}


function checkPalindrome() {
    const word = document.getElementById("word").value;
       if (word === "") {
        document.getElementById("palindrome-check").innerHTML = 
        "Please enter a word.";
        return;
    }
    const lowerWord = word.toLowerCase();
    const reversedWord = lowerWord.split("").reverse().join("");
    const charcount = word.length;
    if (lowerWord === reversedWord) {
        document.getElementById("palindrome-check").innerHTML = 
        `Result: ${word} ✅ palindrome.` +
        `<br> Length: ${charcount} characters.`;
    } else {
        document.getElementById("palindrome-check").innerHTML = 
        `${word} ❌ not a palindrome.` + 
        `<br> Length: ${charcount} characters.`;
    }
}


function checkEvenOdd() {
    let input = document.getElementById("number").value;
    if (input === "") {
        document.getElementById("even-odd-check").innerHTML = 
        "Please enter a number.";
        return;
    }
    let number = Number(input);
    if (isNaN(number)) {
        document.getElementById("even-odd-check").innerHTML = 
        "Please enter a valid number.";
        return;
    }
    let result = "";
    if (number === 0) {
        result = `${number} is neither positive nor negative.`;
    }
    else if (number < 0) {
        result = `${number} is a negative number.`;
    }
    else if ( number > 0) {
         result = `${number} is a positive number and `;

       if (number % 2 === 0) {
        result += `is an even number.`;
    } else {       
        result += `is an odd number.`;
    } 
    }
    document.getElementById("even-odd-check").innerHTML = result;
}

function checklogin() {

  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  if (username === "" || password === "") {
    document.getElementById("login-check").innerHTML =
      "Please enter username and password.";
    return;
  }

  if (username === "admin" && password === "12345") {
    document.getElementById("login-check").innerHTML =
      "Login successful!";
  } else {
    document.getElementById("login-check").innerHTML =
      "Invalid username or password.";
  }

}

function toggleTheme() {
    var body = document.body;
    var btn = document.getElementById("themeBtn");

    if (btn.innerHTML === "🌙 Dark Mode") {
        body.setAttribute("data-theme", "dark");
        btn.innerHTML = "☀️ Light Mode";
    } else {
        body.removeAttribute("data-theme");
        btn.innerHTML = "🌙 Dark Mode";
    }
}