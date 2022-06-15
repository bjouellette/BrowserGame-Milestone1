
var connectFour = document.getElementsByClassName('td');
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach?retiredLocale=vi
Array.from(connectFour).forEach(f => f.addEventListener('click', function() {
    f.style.background = '#D2042D';
}))
Array.from(connectFour).forEach(c => c.addEventListener('dblclick', function() {
    c.style.background = '#4CBB17'
}))


function startOver() {
    window.location.reload();
}

