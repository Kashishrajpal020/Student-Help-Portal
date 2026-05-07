const form =
document.getElementById("contactForm");

form.addEventListener("submit", function(e){

    e.preventDefault();

    let name =
    document.getElementById("name").value;

    let email =
    document.getElementById("email").value;

    let subject =
    document.getElementById("subject").value;

    let message =
    document.getElementById("message").value;

    // MESSAGE OBJECT
    let newMessage = {

        id : Date.now(),

        name : name,

        email : email,

        subject : subject,

        message : message,

        date : new Date().toLocaleDateString(),

        time : new Date().toLocaleTimeString()
    };

    // GET OLD MESSAGES
    let messages =
    JSON.parse(localStorage.getItem("messages"))
    || [];

    // ADD NEW MESSAGE
    messages.push(newMessage);

    // SAVE TO STORAGE
    localStorage.setItem(
        "messages",
        JSON.stringify(messages)
    );

    alert("Message Sent Successfully!");

    // CLEAR FORM
    form.reset();

});