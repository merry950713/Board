const clock = document.querySelector('#clock');
function getClock() {
    const date = new Date();
    const hh = String(date.getHours()).padStart(2,"0");
    // const hh2 = String(date.getHours()).padStart(2,"0");
    const mm = String(date.getMinutes()).padStart(2,"0");
    const ss = String(date.getSeconds()).padStart(2,"0");
    // console.log(hh,mm,ss);

    const ampm = date.getHours() >= 12 ? 'PM' : 'AM';
    hh2 = date.getHours() > 12  ? date.getHours()-12 : date.getHours();
    clock.innerHTML = `${hh2}:${mm}:${ss} ${ampm}`

    
    
    // const time = new Date().toTimeString().split(" ")[0];
    // clock.innerHTML = time;
}
getClock();
setInterval(getClock, 1000);

