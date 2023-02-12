window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    const body = document.querySelector('body');
    const offset = window.pageYOffset;
    
    console.log(offset);
    if (offset > 50) {
        header.classList.remove("fade-out");
        header.classList.add("fade-in");
    } else {
        header.classList.remove("fade-in");
        header.classList.add("fade-out");
    }
});
