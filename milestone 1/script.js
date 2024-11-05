var toggleButton = document.getElementById('toggle-skills');
var skills = document.getElementById('skills');
toggleButton.addEventListener('click', function () {
    if (skills.style.display === 'none') {
        skills.style.display;
    }
    else {
        skills.style.display = 'none';
    }
});
