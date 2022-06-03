# Frontend Mentor - Intro section with dropdown navigation solution

This is a solution to the [Intro section with dropdown navigation challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/intro-section-with-dropdown-navigation-ryaPetHE5). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
- [Author](#author)
- [Acknowledgments](#acknowledgments)



## Overview

### The challenge

Users should be able to:

- View the relevant dropdown menus on desktop and mobile when interacting with the navigation links
- View the optimal layout for the content depending on their device's screen size
- See hover states for all interactive elements on the page

### Screenshot

https://github.com/bahati7/intro-section-with-dropdown-navigation-main/blob/main/design/desktop-design.jpg

https://github.com/bahati7/intro-section-with-dropdown-navigation-main/blob/main/design/mobile-design.jpg

https://github.com/bahati7/intro-section-with-dropdown-navigation-main/blob/main/design/mobile-menu-collapsed.jpg

### Links

- Solution URL: https://www.frontendmentor.io/solutions/introsectionwithdropdownnavigationmainjs-xU1yH_vAcP
- Live Site URL: https://intro-section-with-dropdown-navigation-main-77.netlify.app/

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- javascript for menu

### What I learned

I this chanllenge I learned about dropdown menu and toggle class in javascript

```
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
```



## Author

- Website - https://bahatiphilemon.netlify.app/
- Frontend Mentor - https://www.frontendmentor.io/profile/bahati7
- Twitter - https://twitter.com/PhilemonBahati



## Acknowledgments

Thank you to Frontend Mentor team - https://www.frontendmentor.io/
