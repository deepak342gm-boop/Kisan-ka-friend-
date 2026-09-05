let selectedRole = "Farmer";


// ROLE SELECT
function selectRole(button, role) {

  document.querySelectorAll(".role").forEach(btn => {
    btn.classList.remove("active");
  });

  button.classList.add("active");

  selectedRole = role;
}


// PASSWORD SHOW/HIDE
function togglePassword() {

  const password = document.getElementById("password");

  if (password.type === "password") {
    password.type = "text";
  } else {
    password.type = "password";
  }
}


// LOGIN
function login() {

  const phone = document.getElementById("phone").value.trim();
  const password = document.getElementById("password").value.trim();
  const message = document.getElementById("loginMessage");

  if (phone.length < 10) {

    message.innerText = "Please enter a valid mobile number.";

    return;
  }

  if (password.length < 4) {

    message.innerText = "Please enter your password.";

    return;
  }

  message.innerText = "";

  document.getElementById("loginPage").classList.add("hidden");
  document.getElementById("dashboard").classList.remove("hidden");

  document.getElementById("userRole").innerText = selectedRole;

  document.getElementById("pageTitle").innerText =
    selectedRole === "Buyer"
      ? "Good Evening, Buyer 👋"
      : "Good Evening, Farmer 👋";

}


// SIGNUP
function showSignup() {

  const message = document.getElementById("loginMessage");

  message.style.color = "#16a34a";

  message.innerText =
    "Account registration will be available in the next version.";

}


// LOGOUT
function logout() {

  document.getElementById("dashboard").classList.add("hidden");

  document.getElementById("loginPage").classList.remove("hidden");

  document.getElementById("phone").value = "";
  document.getElementById("password").value = "";

}


// SIDEBAR
function toggleSidebar() {

  document.querySelector(".sidebar").classList.toggle("open");

}


// SECTION NAVIGATION
function showSection(sectionId, button) {

  document.querySelectorAll(".page-section").forEach(section => {
    section.classList.add("hidden");
  });

  document.getElementById(sectionId).classList.remove("hidden");


  document.querySelectorAll(".nav-item").forEach(item => {
    item.classList.remove("active");
  });

  if (button) {
    button.classList.add("active");
  }


  const titles = {

    home: "Good Evening 👋",
    market: "Marketplace 🛒",
    orders: "Your Orders 📦",
    logistics: "Smart Logistics 🚚",
    ai: "AI Agriculture Intelligence 🧠",
    analytics: "Farm Analytics 📊"

  };

  document.getElementById("pageTitle").innerText =
    titles[sectionId] || "FarmLinkAI";


  if (window.innerWidth < 800) {
    document.querySelector(".sidebar").classList.remove("open");
  }

}


// SEARCH PRODUCTS
function searchProducts() {

  const query =
    document.getElementById("search").value.toLowerCase();

  const products =
    document.querySelectorAll(".product");

  products.forEach(product => {

    const text = product.innerText.toLowerCase();

    if (text.includes(query)) {
      product.style.display = "";
    } else {
      product.style.display = "none";
    }

  });

}


// AI FORECAST
function runAI() {

  const button =
    document.querySelector(".ai-header .primary-btn");

  button.innerText = "⏳ Analyzing Market Data...";

  setTimeout(() => {

    button.innerText = "✓ Forecast Updated";

    alert(
      "AI Analysis Complete!\n\n" +
      "Tomato demand: +32%\n" +
      "Expected price: ₹38/kg\n" +
      "Best selling window: Next 2–3 days\n" +
      "Route efficiency: +18%"
    );

  }, 1500);

}