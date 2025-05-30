function handleLogin(event) {
  event.preventDefault();
  
  const userName = document.getElementById("userName").value.trim();
  const accountNumber = document.getElementById("accountNumber").value.trim();
  const password = document.getElementById("password").value.trim();

  if (userName && accountNumber && password) {
    localStorage.setItem("userName", userName);
    window.location.href = "index2.html";
  } else {
    alert("Please fill in all fields.");
  }
}