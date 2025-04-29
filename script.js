// Change text and style
document.getElementById("change-btn").addEventListener("click", () => {
  const infoText = document.getElementById("info-text");
  infoText.textContent = "The text has been changed!";
  infoText.style.color = "#00aeef";
  infoText.style.fontWeight = "bold";
});

// Add or remove element
document.getElementById("toggle-btn").addEventListener("click", () => {
  const container = document.getElementById("container");
  const existing = document.getElementById("dynamic-text");

  if (existing) {
    container.removeChild(existing);
  } else {
    const para = document.createElement("p");
    para.id = "dynamic-text";
    para.textContent = "This paragraph is added dynamically.";
    container.appendChild(para);
  }
});
