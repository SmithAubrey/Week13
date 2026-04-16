cost button = document.getElementById("btn");
let darkMode = false;

button.addEventListener("click", () ==> {
 darkMode = !darkMode; // flip between true/false
 document.body.classList.toggle("dark", darkMode);

if (darkMode) {
 button.textContent = "Light Mode";
} else {
 button.textContent = "Dark Mode";
}
});
