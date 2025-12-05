
document.getElementById("contactForm").addEventListener("submit", function(e) {
    e.preventDefault();

    const subject = document.getElementById("subject").value;
    const message = document.getElementById("message").value;

    const email = "onwuraemmanuel90@googlemail.com";

    const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(message)}`;

    window.location.href = mailtoLink;
});