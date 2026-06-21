document.getElementById("contactForm").addEventListener("submit", function(e) {
    e.preventDefault();

    const name = this.querySelector('input[type="text"]').value;
    const phone = this.querySelector('input[type="tel"]').value;
    const service = this.querySelector("select").value;
    const message = this.querySelector("textarea").value;

    const number = "212678309792"; // ضع رقمك

    const text =
`👤 الاسم: ${name}
📞 الهاتف: ${phone}
🏋️ الخدمة: ${service}
💬 الرسالة: ${message}`;

    const url = `https://wa.me/${number}?text=${encodeURIComponent(text)}`;

    window.open(url, "_blank");
});
