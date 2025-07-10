function changeBackground() {
  document.body.style.backgroundColor =
    document.body.style.backgroundColor === 'lightyellow' ? '#f0f8ff' : 'lightyellow';
}

function validateSignup() {
  const name = document.getElementById("name").value;
  if (name.length < 3) {
    alert("Name must be at least 3 characters");
    return false;
  }
  alert("Signup successful!");
  return true;
}

function validateLogin() {
  const email = document.getElementById("loginEmail").value;
  const password = document.getElementById("loginPassword").value;
  if (email === "" || password === "") {
    alert("Please enter email and password");
    return false;
  }
  alert("Login successful!");
  return true;
}