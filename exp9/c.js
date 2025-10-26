function validateForm() { 127 
const name = document.getElementById("name").value.trim(); 
const mobile = document.getElementById("mobile").value.trim(); 
const email = document.getElementById("email").value.trim(); let 
message = ""; 
const nameRegex = /^[A-Za-z][A-Za-z0-9]{5,}$/; const mobileRegex = 
/^[0-9]{10}$/; const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.- 
]+\.[a-zA-Z]{2,}$/; if (!nameRegex.test(name)) { 
message = "Invalid Name. Should start with alphabet, alphanumeric, min 6 chars."; 
} else if (!mobileRegex.test(mobile)) { message = 
"Invalid Mobile Number. Should be 10 digits."; 
} else if (!emailRegex.test(email)) { message = "Invalid Email. 
Format should be xxxxxxx@xxxxxx.xxx"; 
} else { 
message = "Registration Successful!"; 
document.getElementById("message").style.color = "green"; 
document.getElementById("regForm").reset(); 
document.getElementById("message").innerText = message; 
return false; 
} 
document.getElementById("message").style.color = "red"; 
document.getElementById("message").innerText = message; 
return false; 
} 
