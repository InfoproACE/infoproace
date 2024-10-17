document.addEventListener("DOMContentLoaded", () => {
    const user = JSON.parse(sessionStorage.getItem("loggedInUser"));
    if (!user) {
        window.location.href = "s-login.html";  // หากไม่มีผู้ใช้ล็อกอินอยู่ ให้กลับไปหน้า login
    } else {
        document.getElementById("userProfile").textContent = `${user.firstName} ${user.lastName}`;
        document.getElementById("profilePic").src = user.profilePic;
    }
});
