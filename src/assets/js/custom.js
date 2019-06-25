async function getData(url) {

    try {

        const res = await promisedRequest(url);

        return JSON.parse(res);
        
    }
    catch (error) {

        return console.log(error);
        
    }

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