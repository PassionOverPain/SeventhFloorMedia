const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting)
            {
                entry.target.classList.add('show');
            }   else{
                entry.target.classList.remove('show');
            }
    });
});
const hiddenElements = document.querySelectorAll('.ImageGallery');
hiddenElements.forEach((el)=> observer.observe(el));

let lightmode = localStorage.getItem('lightMode')
var About = document.getElementById('About');
var Contact = document.getElementById('Contact');
var theme = document.getElementById('theme');
theme.onclick = function() 
{
    document.body.classList.toggle("lightMode");
    if(document.body.classList.contains("lightMode"))
        {
            About.style.background="url('Images/wpanel.jpg') center center / cover";
            Contact.style.background="url('Images/wpanel.jpg') center center / cover";
        }
        else
        {
            About.style.background="url('Images/panel.jpg') center center / cover";
            Contact.style.background="url('Images/panel.jpg') center center / cover";
        }
}
document.body.classList.toggle('')