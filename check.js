function myFunction() {
    var x, text;
    x = document.getElementById("numb").value;
    if (x=="VHJC-THE-BEST") {
        text="vhjc.github.io/software";
    } else {
        text="输入错误!";
    }
    document.getElementById("demo").innerHTML=text;
}
