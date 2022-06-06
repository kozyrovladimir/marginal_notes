const requestURL = 'https://yoqi.app/yoqi_work_api/hs/Landing/V1/AddSubscriber';

function sendRequest(method, url, body = null) {
    const headers = {
        'Content-Type': 'multipart/form-data'
    };

    return fetch(url, {
        method: method,
        body: JSON.stringify(body),
        headers: headers,
    }).then(response => {
        return response.json()
    })
};

// sendRequest('GET', requestURL)
//     .then(data => {
//     console.log(data);
//     })
//     .catch(err => {
//         console.log(err);
//     });

// const body = {
//     name: 'Vladimir',
//     surname: 'Kozyro',
//     mail: 'vladimirdddkozyro@gmail.com',
// }
//
// sendRequest('POST', requestURL, body)
//     .then(response => {
//         console.log(response)
//     })
//     .catch(error => {
//         console.log(error)
//     });


let formdata = new FormData();
formdata.append("name", "vladimir");
formdata.append("surname", "kozyro");
formdata.append("mail", "vladimirkozyro@gmail.com");

let requestOptions = {
    method: 'POST',
    body: formdata,
    redirect: 'follow'
};

fetch("https://yoqi.app/yoqi_work_api/hs/Landing/V1/AddSubscriber", requestOptions)
    .then(response => response.text())
    .then(result => console.log(result))
    .catch(error => console.log('error', error));
