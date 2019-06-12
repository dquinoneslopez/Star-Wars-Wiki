function getData(url) {

    return promisedRequest(url)
        .then(res => JSON.parse(res))
        .catch(error => console.log(error));

}


function promisedRequest(url) {

    return new Promise(function(resolve, reject) {

        const xhr = new XMLHttpRequest();
        xhr.open('GET', url, true);

        xhr.onload = function() {

            if (xhr.status === 200) {

                resolve(xhr.response);

            } else {

                reject(xhr.statusText);

            }

        };

        xhr.onerror = function() {

            reject(Error('Network Error'));

        };

        xhr.send();

    });

}