document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contactForm");
  if (form) {
    form.addEventListener("submit", function(event) {
      event.preventDefault(); // Stop page reload
      const name = document.getElementById("name").value;
      alert("Thank you, " + name + "! Your message has been sent.");
      form.reset();
    });
  }
});
