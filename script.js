document.addEventListener('DOMContentLoaded', function() {
    // Smooth scroll untuk link navigasi
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            // Jangan prevent default untuk download CV button
            if (this.id === 'downloadCvBtn') {
                return;
            }
            e.preventDefault();
            
            // Remove active class from all nav links
            document.querySelectorAll('nav a').forEach(link => {
                link.classList.remove('active');
            });
            
            // Add active class to clicked link
            this.classList.add('active');
            
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });

    // Download CV functionality - Download existing PDF file
    const downloadCvBtn = document.getElementById('downloadCvBtn');
    if (downloadCvBtn) {
        downloadCvBtn.addEventListener('click', function(e) {
            e.preventDefault();
            
            try {
                // Create a link element to download the PDF
                const link = document.createElement('a');
                link.href = 'assets/CV_Widi Dwipayana.pdf';
                link.download = 'CV_Widi Dwipayana.pdf';
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
            } catch (error) {
                console.error('Error downloading CV:', error);
                alert('Gagal mengunduh CV. Silakan coba lagi.');
            }
        });
    }
    
    // Form submission - Send to WhatsApp
    const contactForm = document.querySelector('.contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form values
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const subject = document.getElementById('subject').value;
            const message = document.getElementById('message').value;
            
            // WhatsApp number
            const whatsappNumber = '6285183035367';
            
            // Create message text
            const whatsappMessage = `Halo Widi,\n\nSaya ingin menghubungi Anda.\n\n*Nama:* ${name}\n*Email:* ${email}\n*Subjek:* ${subject}\n*Pesan:* ${message}`;
            
            // Encode message for URL
            const encodedMessage = encodeURIComponent(whatsappMessage);
            
            // Create WhatsApp URL
            const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;
            
            // Open WhatsApp
            window.open(whatsappURL, '_blank');
            
            // Show confirmation
            alert('Terima kasih! WhatsApp saya akan membuka pesan Anda.');
            
            // Reset form
            this.reset();
        });
    }
});
