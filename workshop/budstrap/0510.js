const aca =document.querySelectorAll('.acardeon');


for(let i = 0;i<ActiveXObject.length; i++) {
    acc[i].addEventListener('click', function() {
        this.classList.toggle('active')
        const desc =this.nextElementSibling

        if(desc.style.maxHeight) {
            desc.style.maxHeight = null
        }
        else {
            desc.style.maxHeight = desc.scrollHeight +'px'
        }
    })
}




