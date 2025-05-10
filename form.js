




const submit_btn = document.querySelector("#submit-btn")
const firstnamewarn = document.querySelector("#firstname-warn")
const emailwarn = document.querySelector("#email-warn")
const lastnamewarn = document.querySelector("#lastname-warn")

submit_btn.addEventListener ("click" , function nameinputt () {
    const firstname = document.querySelector("#first-name").value.trim()
    const lastname = document.querySelector("#last-name").value.trim()
    const email = document.querySelector("#email").value.trim()

      
      if (firstname === "" ){
       
        firstnamewarn.textContent = "You must fill the first name field";
        firstnamewarn.style.color = "red";
        

    }   
    
    
     if ( lastname === ""){
       
        lastnamewarn.textContent = "You must fill the last name field";
        lastnamewarn.style.color = "red";
        

    }  

     else if (/[0-9]/.test(firstname)) {
        console.log("firstname-not ok")
        firstnamewarn.textContent = "The first name must consist of letters only!";
        firstnamewarn.style.color = "red";
     }
      
    else if (/[0-9]/.test(lastname)) {
        console.log("lastname-not ok")
        lastnamewarn.textContent = "The last name must consist of letters only!";
        lastnamewarn.style.color = "red";
     }


    else {
        firstnamewarn.textContent = "All is Good!";
        firstnamewarn.style.color = "green";

        lastnamewarn.textContent = "All is Good!";
        lastnamewarn.style.color = "green";
    }
    
    

    
    if (email === "") {
        console.log("this column is requierd");
        emailwarn.textContent = "You must fill the email field"
        emailwarn.style.color = "red";
    }

        else if (!/@/.test(email)) {
        console.log("there no @ in this email")
        emailwarn.textContent = "This not like an email"
        emailwarn.style.color = "red";

    }
    else {
        emailwarn.textContent = "All is Good!"
        emailwarn.style.color = "green";
    }
   
   
})