
var x=document.getElementById("login");
var y=document.getElementById("register");
var z=document.getElementById("btm");

function Register(){
    x.style.left="-400px";
    y.style.left="50px";
    z.style.left="100px";
}

function register_press(){
    // Шукаємо поля вводу по їх id
    let username  = document.getElementById("username");
    let email = document.getElementById("email");
    
    // Отримуємо значення полів вводу
    let text_n   = username.value;
    let text_em = email.value;
    
    
    text_log = text_n.trim();
    if (!text_n) { 
        alert("This user name isn't true!");
        return;
    }
    alert("Registration completed successfully");
}

function Login(){
    x.style.left="50px";
    y.style.left="450px";
    z.style.left="0";   
}

function login_press() {
    // Шукаємо поля вводу по їх id
    let logggin  = document.getElementById("logggin");
    let password = document.getElementById("password");
    
    // Отримуємо значення полів вводу
    let text_log   = logggin.value;
    let text_pas = password.value;
    
    // Перевірка правильності заповнення поля #login
    text_log = text_log.trim();
    if (!text_log) { 
        alert("This user name isn't true!");
        return; 
    }
    
                       
    // Перевірка довжини паролю
    if (text_pas.length < 6) { 
        alert("You enter short pasword!" + "\n" + "The minimum password length is 6 symbols");
        return; 
    }
                                     
   
   alert("Registration completed successfully");

    document.location.href("../index.html");
}