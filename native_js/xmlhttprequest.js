let xhttp = new XMLHttpRequest();

xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
        myFunction(this.responseText);
    }
};

xhttp.open("GET", "http://example.com/articles/1", true);
xhttp.send();

function myFunction(data) {
    console.log(data);
};


let xhttp2 = new XMLHttpRequest();
xhttp2.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
        myFunction2(this.responseText);
    }
}

xhttp2.open("POST", "http://example.com/articles/1", true);

xhttp2.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
xhttp2.send('auth=sdfsdfsdf=1');

function myFunction2(data) {
    console.log('POST');
    console.log(data);
}
