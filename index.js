function showOptions() {
    document.getElementById('options').style.display = 'block';
}

function showHugMessage() {
    alert('Sending you a virtual hug! 🤗');
}

document.getElementById('noButton').addEventListener('mouseover', function() {
    const button = document.getElementById('noButton');
    button.style.position = 'absolute';
    button.style.top = Math.random() * 300 + 'px';
    button.style.left = Math.random() * 300 + 'px';
});
