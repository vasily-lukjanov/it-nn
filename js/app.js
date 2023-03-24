// Update background Image
function rand(fr, to) {
    let getGsnd = Math.random() * to;
    while (getGsnd < fr) {
        getGsnd = Math.random() * to;
    }
    return Number(getGsnd.toFixed())
}

let newVal = rand(0, 3);
while (Number(localStorage.lastImg) == newVal) {
    newVal = rand(0, 3);
}

let loadedFlag = false;

function documentLoaded() {
    document.getElementsByClassName('wrapper style1').wrapperID.style.background = "url('images/bg-" + newVal + ".jpg')";
    localStorage.lastImg = newVal;
    document.getElementById('copyrightYear').innerText = new Date().getFullYear();
    loadedFlag = true;
}
document.addEventListener("DOMContentLoaded", documentLoaded);


setInterval(() => {
    if (loadedFlag) {
        document.getElementsByClassName('wrapper style1').wrapperID.style.backgroundPositionY = (window.pageYOffset / 4) + 'px';
    }
    
}, 16);