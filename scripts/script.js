function checkForm() {
   const pw = document.querySelector("#pw");
   const cpw = document.querySelector("#cpw");
   const errMsg = document.querySelector(".errMsg");

   if (pw.value != cpw.value) {
      pw.className = 'error';
      cpw.className = 'error';
      errMsg.innerHTML = '* Passwords do not match';
      return false;
   }
   else {
      pw.className = '';
      cpw.className = '';
      errMsg.innerHTML = '';
      return true;
   }
}