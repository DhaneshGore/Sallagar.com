document.addEventListener('DOMContentLoaded', function() {
  const aboutLink = document.querySelector('.navbar a[href="#about"]');
  const servicesLink = document.querySelector('.navbar a[href="#services"]');
  const homeLink = document.querySelector('.navbar a[href="#home"]');
  const contactLink = document.querySelector('.navbar a[href="#contact"]');

  function toggleAbout() {
    const aboutUsSection = document.getElementById("about-us");
    const servicesSection = document.getElementById("services");
    const homeSection = document.getElementById("Home");
    const contactSection = document.getElementById("contact"); // Add this line
    aboutUsSection.style.display = "block";
    servicesSection.style.display = "none";
    homeSection.style.display = "none";
    contactSection.style.display = "none"; // Hide Contact Us section
  }

  function toggleServices() {
    const servicesSection = document.getElementById("services");
    const aboutUsSection = document.getElementById("about-us");
    const homeSection = document.getElementById("Home");
    const contactSection = document.getElementById("contact");
    servicesSection.style.display = "block";
    aboutUsSection.style.display = "none";
    homeSection.style.display = "none";
    contactSection.style.display = "none"; // Hide Contact Us section
  }

  function toggleHome() {
    const homeSection = document.getElementById("Home");
    const aboutUsSection = document.getElementById("about-us");
    const servicesSection = document.getElementById("services");
    const contactSection = document.getElementById("contact");
    homeSection.style.display = "block";
    aboutUsSection.style.display = "none";
    servicesSection.style.display = "none";
    contactSection.style.display = "none"; // Hide Contact Us section
  }

  function toggleContact() {
    const contactSection = document.getElementById("contact");
    const aboutUsSection = document.getElementById("about-us");
    const servicesSection = document.getElementById("services");
    const homeSection = document.getElementById("Home");

    contactSection.style.display = "block";
    aboutUsSection.style.display = "none";
    servicesSection.style.display = "none";
    homeSection.style.display = "none";
  }

  aboutLink.addEventListener('click', toggleAbout);
  servicesLink.addEventListener('click', toggleServices);
  homeLink.addEventListener('click', toggleHome);
  contactLink.addEventListener('click', toggleContact);

  // Hide about-us, services, and contact sections initially
  const aboutUsSection = document.getElementById("about-us");
  const servicesSection = document.getElementById("services");
  const homeSection = document.getElementById("Home");
  const contactSection = document.getElementById("contact");
  aboutUsSection.style.display = "none";
  servicesSection.style.display = "none";
  homeSection.style.display = "none";
  contactSection.style.display = "none";
});
