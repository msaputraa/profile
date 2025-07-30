document.addEventListener('DOMContentLoaded', function() {
    // Fungsi untuk Scroll-Reveal Effect
    const sections = document.querySelectorAll('.reveal');

    const revealSection = () => {
        for (const section of sections) {
            const sectionTop = section.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;

            // Jika bagian masuk ke dalam viewport (sekitar 150px dari bawah viewport)
            if (sectionTop < windowHeight - 150) {
                section.classList.add('active');
            } else {
                // Opsional: hilangkan 'active' jika discroll ke atas lagi
                // section.classList.remove('active');
            }
        }
    };

    // Panggil saat halaman dimuat dan saat di-scroll
    window.addEventListener('scroll', revealSection);
    revealSection(); // Panggil sekali saat load untuk elemen yang sudah terlihat
});
