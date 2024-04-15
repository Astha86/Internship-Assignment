const Page1 = document.querySelector('.page1');
Page1.classList.add('active');

const Page3 = document.querySelector('.page3');
const skipbtn1 = document.querySelector('.skip1');

skipbtn1.addEventListener('click', () => {
    Page1.classList.remove('active');
    Page3.classList.add('active');
});

const Page2 = document.querySelector('.page2');
const skipbtn2 = document.querySelector('.skip2');

skipbtn2.addEventListener('click', () => {
    Page2.classList.remove('active');
    Page3.classList.add('active');
});

const nextbtn1 = document.querySelector('.next1');
nextbtn1.addEventListener('click', () => {
    Page1.classList.remove('active');
    Page2.classList.add('active');
});

const nextbtn2 = document.querySelector('.next2');
nextbtn2.addEventListener('click', () => {
    Page2.classList.remove('active');
    Page3.classList.add('active');
});

const Page5 = document.querySelector('.page5');
const createbtn = document.querySelector('.create');
createbtn.addEventListener('click', () => {
    Page3.classList.remove('active');
    Page5.classList.add('active');
});

const Page4 = document.querySelector('.page4');
const loginbtn = document.querySelector('.login');
loginbtn.addEventListener('click', () => {
    Page3.classList.remove('active');
    Page4.classList.add('active');
});

// Create Account Button of page 4
const createAcnt = document.querySelector('.createAc');
createAcnt.addEventListener('click', () => {
    Page4.classList.remove('active');
    Page3.classList.add('active');
});

const signInBtn = document.querySelector('.signIn');
signInBtn.addEventListener('click', () => {
    Page4.classList.remove('active');
    Page5.classList.add('active');
});

const Page6 = document.querySelector('.page6');
const confirmBtn = document.querySelector('.confirm');
confirmBtn.addEventListener('click', () => {
    Page5.classList.remove('active');
    Page6.classList.add('active');
});

const backBtn = document.querySelector('.back');
backBtn.addEventListener('click', () => {
    Page6.classList.remove('active');
    Page5.classList.add('active');
});

const Page7 = document.querySelector('.page7');
const chartImg = document.querySelector('.chart');
chartImg.addEventListener('click', () => {
    Page6.classList.remove('active');
    Page7.classList.add('active');
});

const gobackBtn = document.querySelector('.goback');
gobackBtn.addEventListener('click', () => {
    Page7.classList.remove('active');
    Page6.classList.add('active');
});