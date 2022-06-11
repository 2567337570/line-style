let juice = require('juice');
let styleValueDom = document.getElementById("style-value");
let labelValueDom = document.getElementById("label-value");

let btn = document.getElementById('pop-up');
let hbtn = document.getElementById('hide');
let copyBtn = document.getElementById("copy");
let resultValue = document.getElementById("result-value");
btn.onclick = function() {
    if(labelValueDom.value === ""){
        alert("请输入标签值");
        return;
    }
    let styleVal = `<style>${styleValueDom.value}</style>`;
    let labelVal = labelValueDom.value;
    let res = "";
    styleVal = styleVal.replace(/[\r\n]/g , "");
    res = styleVal + labelVal;
    let result = juice(res);
    resultValue.value = result;
    document.getElementById('code_box').classList.remove('hide');
    document.getElementById('code_box').style.display = "block";
    styleValueDom.value = "";
    labelValueDom.value = "";
}

hbtn.onclick = function() {
    document.getElementById('code_box').classList.add('hide');
    resultValue.value = "";
    let t = setTimeout(() => {
        document.getElementById('code_box').style.display = "none";
        clearTimeout(t);
    }, 500)
}

// copy
copyBtn.onclick = function() {
    copyToClipboard(resultValue.value);
    alert("复制成功");
}

const copyToClipboard = (text) => {
    return	navigator.clipboard?.writeText && navigator.clipboard.writeText(text)
}

