let users = [];
function addUser()  {
    const signUpUsername = document.getElementById('signUpUsername').value;
    const signUpPassword = document.getElementById('signUpPassword').value;

    if (signUpUsername && signUpPassword) {
        const newUser = { username: signUpUsername, password: signUpPassword };
        if (users.some(u => u.username === signUpUsername)) {
            alert('username already exists, please use a different username.');
            return;
        }
        users.push(newUser);
        localStorage.setItem("users", 'users')
        console.log(localStorage.getItem("users"))
       alert('Sign up successful!');
       window.location.href = "http://127.0.0.1:3000/first page/firstpage.html";
    } else {
        alert('Please fill in both username and password.');
    }
}
function signIn() {
    const signInUsernameInput = document.getElementById('signInUsername').value;
    const signInPasswordInput = document.getElementById('signInPassword').value;
    localStorage.getItem("users")
    const user = users.find(u => u.username === signInUsernameInput && u.password === signInPasswordInput);

    if (user) {
        alert('signin succesfull');
    } else {
        alert('signup first');
    }
}


