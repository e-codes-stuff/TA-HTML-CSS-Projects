// JavaScript functions for opening and closing the lightbox
function openLightbox(imageSrc, caption) {
    var modal = document.getElementById("myModal");
    var modalImage = document.getElementById("modal-image");
    var captionText = document.getElementById("caption");

    modal.style.display = "block";
    modalImage.src = imageSrc;
    captionText.innerHTML = caption;
}

function closeLightbox() {
    var modal = document.getElementById("myModal");
    modal.style.display = "none";
}