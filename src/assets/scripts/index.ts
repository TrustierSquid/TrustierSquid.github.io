
import emailjs from '@emailjs/browser';
// import 'dotenv/config'

const templateID: string = 'template_2nkyimf'
const serviceID: string = 'service_47zc9zm'

let sendTicket = document.getElementById('send-email');
sendTicket?.addEventListener('click', init)

function init():void {
    emailjs.init('fe27j37HF7dPw5soA');

    let params: {firstName: any, lastName: any, email: any, message: any} = {
        firstName: document.getElementById('contact-fname'),
        lastName: document.getElementById('contact-lname'),
        email: document.getElementById('contact-email'),
        message: document.getElementById('contact-message'),
    }
    
    
    emailjs.send(serviceID, templateID, params)
        .then((res) => {
            alert("your message was sent");
            console.log(res);
        }).catch((err) => {
            console.log(err)
        })
}


