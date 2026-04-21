cost button = document.getElementById("btn");
let darkMode = false;

button.addEventListener("click", () ==> {
 darkMode = !darkMode; // flip between true/false
 document.body.classList.toggle("dark", darkMode);
});

if (darkMode) {
 button.textContent = "Light Mode";
} else {
 button.textContent = "Dark Mode";
}
});

const gallery = document.getElementById("gallery");

gallery.addEventListener("mouseover", () => {
  gallery.src = "/images/assetshield.png";
});
gallery.addEventListener("mouseout", () => {
  gallery.src = "/images/assetsword.png";
});

