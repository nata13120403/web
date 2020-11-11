//const card = document.querySelector('.card');
//const container = document.querySelector('.container');
let containers = document.getElementsByClassName('container');
console.log('Containers', containers);

Array.from(containers).forEach((container) => {
let card = container.children[0];
console.log('Card', card);

     
 
container.addEventListener ('mousemove', (e) => {
    let xAxis = (window.innerWidth/2 - e.pageX)/50;
    let yAxis = (window.innerHeight/2 - e.pageY)/50;
    card.style.transform = `rotateX(${xAxis}deg) rotateY(${yAxis}deg)`;
});

container.addEventListener('mouseenter', (e) =>{
    card.style.transition = 'none';
});


container.addEventListener('mouseleave', (e) => {
    card.style.transition = 'all 0.5s ease';
    card.style.transform = `rotateX(0deg) rotateY(0deg)`;
});
})
