var t = document.getElementById('log');

getCookies();

function log(msg) {
    let entry = document.createElement('p');
    entry.innerHTML = decodeURIComponent(document.cookie);
    
    t.appendChild(entry);
}

function setCookie(cookie_name, cookie_value, seconds) {
    const date = new Date();
    date.setTime(date.getTime() + (seconds * 1000));
    let expires = 'expires='+date.toUTCString();
    document.cookie = `${cookie_name}=${cookie_value};expires${expires}`;
}

function getCookies() {
    var cookies = decodeURIComponent(document.cookie);
    log(cookies);
}