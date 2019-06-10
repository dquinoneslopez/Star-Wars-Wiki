var container = document.querySelector('.gallery');

container.addEventListener('click', function(e) {
    if (e.target != e.currentTarget) {
        e.preventDefault();
        // e.target is the image inside the link we just clicked.
    }
    e.stopPropagation();
}, false);

var data = e.target.getAttribute('data-name'),
    url = data + ".html";
history.pushState(null, null, url);

history.pushState(data, null, url);

window.addEventListener('popstate', function(e) {
    // e.state is equal to the data-attribute of the last image we clicked
});

function requestContent(file) {
    $('.content').load(file + ' .content');
}

window.addEventListener('popstate', function(e) {
    var character = e.state;

    if (character == null) {
        removeCurrentClass();
        textWrapper.innerHTML = " ";
        content.innerHTML = " ";
        document.title = defaultTitle;
    } else {
        updateText(character);
        requestContent(character + ".html");
        addCurrentClass(character);
        document.title = "Ghostbuster | " + character;
    }
});