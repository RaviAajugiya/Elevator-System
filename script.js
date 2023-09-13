let currfloor = [0,0,0,0,0]
let floorbtn = document.querySelectorAll('.floorbtn')

const handleAnimation = (e) => {
    // console.log(e.target.id.slice(-1));
    let curr = e.target.id.slice(-1)
    console.log('curr', curr);
    console.log(currfloor);
    let temp = currfloor.map(c => Math.abs(curr - c));
    console.log(temp);

    let min = temp.reduce((acc,curr) => {
        return acc < curr ? acc : curr 
    }, 0)
    console.log(min);
    
    
    let random = Math.floor(Math.random()*5);
    currfloor[random] = Number(e.target.id.slice(-1));
    document.querySelector(`#box${random}`).style.bottom = `${currfloor[random]}00px`;
}

floorbtn.forEach(f => {
    f.addEventListener('click', handleAnimation)
})
