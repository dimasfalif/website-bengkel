<!DOCTYPE html>
<html>
<head>
   
    <link rel="stylesheet" href="styles.css">
    <title>Bengkel Sugan Sugih</title>
</head>
<script>
    document.addEventListener("DOMContentLoaded", function() {
        const learnMoreButtons = document.querySelectorAll('.learn-more');
        const modal = document.getElementById("myModal");
        const modalTitle = document.getElementById("modal-title");
        const modalDescription = document.getElementById("modal-description");
        const closeModal = document.getElementsByClassName("close")[0];

        learnMoreButtons.forEach((button, index) => {
            button.addEventListener('click', function() {
                // Mengatur judul dan deskripsi modal berdasarkan layanan
                const serviceTitle = this.previousElementSibling.previousElementSibling.innerText; // Ambil judul layanan
                const serviceDescription = this.nextElementSibling.innerText; // Ambil deskripsi layanan

                modalTitle.innerText = serviceTitle; // Set judul modal
                modalDescription.innerText = serviceDescription; // Set deskripsi modal

                modal.style.display = "block"; // Tampilkan modal
            });
        });

        // Menutup modal ketika tombol close diklik
        closeModal.onclick = function() {
            modal.style.display = "none"; // Sembunyikan modal
        }

        // Menutup modal ketika pengguna mengklik di luar modal
        window.onclick = function(event) {
            if (event.target === modal) {
                modal.style.display = "none"; // Sembunyikan modal
            }
        }
    });
</script>
</html>