import './Contact.css'
import background from "./images/contact.jpg"
export function Contact() {
    return (
        <div>
            <form className='form' style={{ backgroundImage: `url(${background})`, backgroundSize: "cover", backgroundRepeat: "no-repeat", height: "100vh" }}>
                <h1 className='text-light mydisplay2'>Contact Me</h1>
                <p className='text-light'>You can contact me through my mobile number or through the social media handles mentioned below.</p>
                <p className='text-light'>Mobile No:-(India) +918107191657</p>
                <p className='text-light'>Email Id:-(India) dhruvagarwal02@icloud.com</p>
                <a href="https://www.instagram.com/dhruv.8107">
                    <i class="text-danger fa-brands fa-instagram fa-shake icon"></i>
                </a>
                <a href="https://www.linkedin.com/in/dhruv-agarwal-209714232?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" className='ms-2'>
                    <i class="text-primary fa-brands fa-linkedin fa-shake icon"></i>
                </a>
            </form>
        </div>
    )
}