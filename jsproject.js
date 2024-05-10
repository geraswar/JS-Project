//เข้าถึง modal1-2
var modal1 = document.getElementById("myModal1");
var modal2 = document.getElementById("myModal2");

// ปุ่มbuttonสำหรับสลับไปมาระหว่างโมเดล1-2
var btnOpenModal1 = document.getElementById("btnOpenModal1");
var btnOpenModal2 = document.getElementById("btnOpenModal2");

// ปุ่มปิดโมเดล
var close1 = document.getElementsByClassName("close1")[0];
var close2 = document.getElementsByClassName("close2")[0];

// ปุ่มที่ซ่อนในโมเดลเพื่อเปิดสลับไปโมเดล2
btnOpenModal1.onclick = function() {
  modal1.style.display = "block";
  modal2.style.display = "none"; // โมเดล2ถูกซ่อนไว้เพื่อรอเปิด
}

// ปุ่มที่ซ่อนในโมเดลเพื่อเปิดสลับไปโมเดล1
btnOpenModal2.onclick = function() {
  modal2.style.display = "block";
  modal1.style.display = "none";  // โมเดล1ถูกซ่อนไว้เพื่อรอเปิด
}

// ปุ่มปิดโมเดล1
close1.onclick = function() {
  modal1.style.display = "none";
}

// ปุ่มปิดโมเดล2
close2.onclick = function() {
  modal2.style.display = "none";
}

// เมื่อคลิ๊กภายนอกเขตโมเดลจะทำการปิดลง
window.onclick = function(event) {
  if (event.target == modal1) {
    modal1.style.display = "none";
  }
  if (event.target == modal2) {
    modal2.style.display = "none";
  }
}
/*jsสำหรับเปิด-ปิดautoplayของยูทูป*/
    function openModal(modalId) {
      var modal = document.getElementById(modalId);
      var video = modal.querySelector('iframe');
      modal.style.display = "block";
      video.src = video.src; 
    }
  
    function closeModal(modalId) {
      var modal = document.getElementById(modalId);
      modal.style.display = "none";
      var video = modal.querySelector('iframe');
      video.src = ''; 
    }