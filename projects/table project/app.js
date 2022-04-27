const calculate = () => {
   let comp = parseInt(document.getElementById("computerInput").value);
   let math = parseInt(document.getElementById("mathInput").value);
   let eng = parseInt(document.getElementById("englishInput").value);
   let chem = parseInt(document.getElementById("chemistryInput").value);
   let phys = parseInt(document.getElementById("physicsInput").value);
   if (comp > 100 || math > 100 || eng > 100 || chem > 100 || phys > 100) {
      alert("Please enter correct value ");
   } else {
      var obtain = comp + math + eng + chem + phys;
      document.getElementById("obtain").innerHTML = obtain;
      var per = obtain / 500 * 100;
      document.getElementById("per").innerHTML = per;
   } if (comp > 40 && math > 40 && eng > 40 && chem > 40 && phys > 40) {
      document.getElementById("remarks").innerHTML = "pass";

   } else {
      document.getElementById("remarks").innerHTML = "Fail";
   }
   if (per >= 80) {
      document.getElementById("grade").textContent = "A";
   } else if (per >= 70) {
      document.getElementById("grade").textContent = "B";

   } else if (per >= 60) {
      document.getElementById("grade").textContent = "C";

   } else if (per >= 50) {
      document.getElementById("grade").textContent = "D";

   } else if (per >= 40) {
      document.getElementById("grade").textContent = "E";
   } else {
      document.getElementById("grade").textContent = "F";

   }
}