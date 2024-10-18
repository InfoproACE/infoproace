// เลือกองค์ประกอบ .right และปุ่ม #logout
const right = document.querySelector('.right');
const logoutButton = document.querySelector('#logout');

// เมื่อคลิกที่ .right ให้แสดง #logout
right.addEventListener('click', (event) => {
  event.stopPropagation(); // หยุดไม่ให้ event ไปถึง document
  logoutButton.style.display = 'block'; // แสดงปุ่ม logout
});

// เมื่อคลิกที่พื้นที่อื่นในหน้า ซ่อน #logout
document.addEventListener('click', () => {
  logoutButton.style.display = 'none';
});
