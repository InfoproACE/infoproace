function setMobileLogo() {
  const logo = document.querySelector('.mainlogo');
  const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

  if (isMobile) {
    logo.src = 'https://i.postimg.cc/BZkHV2xP/image.png';
  }
}

// เรียกใช้เมื่อโหลดหน้า
window.addEventListener('load', setMobileLogo);
