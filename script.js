document.getElementById("contact").addEventListener("submit", function(e) {
    e.preventDefault();

    const name = this.querySelector('input[type="text"]').value;
    const phone = this.querySelector('input[type="tel"]').value;
    const service = this.querySelector("select").value;
    const message = this.querySelector("textarea").value;

    const number = "447700900077"; 

    const text =
`👤 name: ${name}
📞 phone: ${phone}
🏋️ service: ${service}
💬 message: ${message}`;

    const url = `https://wa.me/${number}?text=${encodeURIComponent(text)}`;

    window.open(url, "_blank");
});
