const plus = document.getElementById("plus");
const minus = document.getElementById('minus');
const bar = document.getElementById('barId');
const indicator = document.getElementById('indicatorId');


const barWidth = bar.clientWidth;


plus.onclick = (e) => {
    if(indicator.clientWidth === 0){
        indicator.style.width = parseInt(barWidth/100) + "px";
    } else {
        let val = indicator.clientWidth + parseInt(barWidth/100);
        if(val <= barWidth) indicator.style.width = val + "px";
    }
};

minus.onclick = function (e) {
    let val = indicator.clientWidth - parseInt(barWidth/100);
    if(val >= 0) indicator.style.width = val + "px";
};

// -----------------------------------------------------------------


const plus1 = document.getElementById("plus1");
const minus1 = document.getElementById('minus1');
const bar1 = document.getElementById('barId1');
const indicator1 = document.getElementById('indicatorId1');

const changeBarPlus = () => {
    var id = setInterval(fillBar, 10);
    let width = 1;
    function fillBar() {
        if(width <= 100){
            indicator1.style.width = width + "%";
            width++;
        } else {
            clearInterval(id);
        }
    }
}

const changeBarMinus = () => {
    var id = setInterval(emptyBar, 10);
    let width = 99;
    function emptyBar() {
        if(width >= 0){
            indicator1.style.width = width + "%";
            width--;
        } else {
            clearInterval(id);
        }
    }
}

plus1.onclick = (e) => {
    if(indicator1.clientWidth === 0){
        changeBarPlus();
    }
}

minus1.onclick = (e) => {
    if(indicator1.clientWidth === bar1.clientWidth){
        changeBarMinus();
    }
}


