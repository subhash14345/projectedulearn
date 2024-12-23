function toggleMenu() {
    document.querySelector('.menu-icon').classList.toggle('change');
    document.getElementById('navMenu').classList.toggle('show');
  }

const trans=[1000,3000,4000,2000,-898,3800,-4500];
const dollar=80;

const condoll=trans.map(function(n){
  return (n/dollar).toFixed(0);
})
console.log(condoll)