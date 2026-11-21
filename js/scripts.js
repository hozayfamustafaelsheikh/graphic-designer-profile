
document.addEventListener("DOMContentLoaded", () => {

  // ==================================
  // Portfolio Filtering
  // ==================================

  const filterButtons = document.querySelectorAll(".filter-btn");
  const portfolioItems = document.querySelectorAll(".portfolio-item");

  filterButtons.forEach(button => {
    button.addEventListener("click", () => {

      // Update active button
      filterButtons.forEach(btn => btn.classList.remove("active"));
      button.classList.add("active");

      const selectedCategory = button.dataset.filter;

      portfolioItems.forEach(item => {
        const itemCategory = item.dataset.category;

        if (
          selectedCategory === "all" ||
          itemCategory === selectedCategory
        ) {
          item.classList.remove("hidden");
        } else {
          item.classList.add("hidden");
        }
      });

    });
  });


  // ==================================
  // Contact Form - WhatsApp
  // ==================================

  // Replace with Sohanda's WhatsApp number.
  // Example UAE: 971501234567

  const WHATSAPP_NUMBER = "971501234567";

  const contactForm = document.getElementById("contactForm");

  contactForm?.addEventListener("submit", event => {
    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const subject = document.getElementById("subject").value;
    const message = document.getElementById("message").value.trim();

    const feedback = document.getElementById("formFeedback");

    if (!name || !email || !subject || !message) {
      feedback.textContent = "Please complete all fields.";
      return;
    }

    if (!/^\d{8,15}$/.test(WHATSAPP_NUMBER)) {
      feedback.textContent = "Please configure the WhatsApp number in script.js.";
      return;
    }

    const whatsappMessage = `
Hello Sohanda!

I would like to discuss a design project.

Name: ${name}
Email: ${email}
Project Type: ${subject}

Project Details:
${message}
    `.trim();

    const whatsappURL =
      `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(whatsappMessage)}`;

    window.open(whatsappURL, "_blank", "noopener,noreferrer");

    feedback.textContent = "Your message is ready in WhatsApp. Please press Send there.";

    contactForm.reset();
  });


  // ==================================
  // Close mobile navbar after clicking
  // ==================================

  const navLinks = document.querySelectorAll(".navbar .nav-link");
  const navbarCollapse = document.getElementById("navbarMenu");

  navLinks.forEach(link => {
    link.addEventListener("click", () => {
      if (
        navbarCollapse &&
        navbarCollapse.classList.contains("show")
      ) {
        bootstrap.Collapse.getOrCreateInstance(navbarCollapse).hide();
      }
    });
  });

});
