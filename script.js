document.addEventListener('DOMContentLoaded', function() {

    // Fungsi untuk smooth scrolling saat link navigasi di-klik
    const navLinks = document.querySelectorAll('.nav-links a, .hero-section .btn');

    for (const link of navLinks) {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            
            // Pastikan elemen target ada sebelum melakukan scroll
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                // Ambil tinggi navbar untuk offset
                const navbarHeight = document.querySelector('.navbar').offsetHeight;
                const elementPosition = targetElement.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - navbarHeight;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        });
    }

    // Menangani pengiriman form kontak
    const contactForm = document.getElementById('contact-form');
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault(); // Mencegah form dikirim secara default
        
        const name = this.querySelector('input[name="name"]').value;
        alert(`Terima kasih, ${name}! Pesan Anda telah kami terima.`);
        this.reset(); // Mengosongkan form setelah dikirim
    });
});