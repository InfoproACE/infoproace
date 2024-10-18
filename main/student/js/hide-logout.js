// เลือกองค์ประกอบ .right และปุ่ม #logout
const right = document.querySelector('.right');
const logoutButton = document.querySelector('#logout');

// สถานะเปิด-ปิดของ #logout
let isLogoutVisible = false;

// เมื่อคลิกที่ .right
right.addEventListener('click', (event) => {
  event.stopPropagation(); // หยุดไม่ให้ event ไปถึง document

  if (isLogoutVisible) {
    logoutButton.style.display = 'none'; // ซ่อนปุ่ม #logout
    isLogoutVisible = false;
  } else {
    logoutButton.style.display = 'block'; // แสดงปุ่ม #logout
    isLogoutVisible = true;
  }
});

// เมื่อคลิกที่พื้นที่อื่นในหน้า
document.addEventListener('click', () => {
  logoutButton.style.display = 'none';
  isLogoutVisible = false;
});
