const showMenu=(toggleId,navId)=>{
    const toggle=document.getElementById(toggleId),
    nav=document.getElementById(navId);
    const close=document.getElementById('close');

    if(toggle && nav){
        toggle.addEventListener('click',()=>{
            nav.classList.toggle('show')
            toggle.classList.toggle('humburger')
        })
    }
}


showMenu('close','nav-menu')

/*ACTIVE AND REMOVE MENU*/
const navLink=document.querySelectorAll('.nav_link')

function linkAction(){
    navLink.forEach(n=>n.classList.remove('active'))
    this.classList.add('active')
}

navLink.forEach(n=>n.addEventListener('click',linkAction))