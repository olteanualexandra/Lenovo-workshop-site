function submitForm(event) {
    const username = document.getElementById("name-input").value;
    const email = document.getElementById("email-input").value;
    const message = document.getElementById("message-input").value;
    document.getElementById("contact").style.display = "none";
    document.getElementById("response").style.display = "block";
    event.preventDefault();
    alert(
      `Thank you for reaching out! I will get back to you soon. \n Username: ${username} \n Email: ${email} \n Message: ${message} \n`
    );
  }
  
  window.addEventListener("scroll", () => {
    let scrollDistance = window.scrollY;
    if (scrollDistance > 200) {
      document.getElementById("anchor").style.display = "flex";
    } else {
      document.getElementById("anchor").style.display = "none";
    }
  });

