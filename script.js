
const sw = document.querySelectorAll(".switch");
const onoff = document.querySelectorAll(".onoff");
let isBtnOn = true;

sw.forEach(element => {
    element.addEventListener('click', (e) => {
        console.log(e.target.id);
        if(isBtnOn){
            document.getElementById(e.target.id).src = 'icons/switch-off.png'
            isBtnOn = false
        }else{
            document.getElementById(e.target.id).src = 'icons/switch-on.png'
            isBtnOn = true
        }  
    })
});







// maintenance.forEach(el => {
//     el.addEventListener('click', switchhandle)
// })

// let elevators = 4;
// let floors = 5;

// let main = document.getElementById('main');
// let control = document.getElementById('control')
// let currFloor;

// let updateUI = () => {
//     let htmlel = `
//     <div class="elevatorArea">
//         <div class="elevator">
//             <div><span class="currFloor" >1</span></div>
//             <div><span class="currFloor" >1</span></div>
//             <div><span class="currFloor" >1</span></div>
//             <div><span class="currFloor" >1</span></div>
//             <div><span class="currFloor" >1</span></div>
//             <div class="el">
//             </div>
//         </div>
//         <div class="switch">
//             <img src="icons/switch-off.png" alt="">
//             <img src="icons/switch-on.png" alt="">
//         </div>
//     </div>`
//     main.insertAdjacentHTML('afterbegin', htmlel);

// }

// for (let i = 1; i <= elevators; i++) {
//     updateUI(i);
// }


// let hrmlfl = `
// <div class="floorContainer">
//     <div class="floor"><span>1</span></div>
//     <div class="floor floorbtn">
//         <img src="icons/arrow-up.png" alt="">
//     </div>
// </div>`

// for (let i = 0; i < floors; i++) {
//     control.insertAdjacentHTML('afterbegin', hrmlfl);
// }


