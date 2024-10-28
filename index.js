function changeTheme() {
    const selectedTheme = document.querySelector('input[name="theme"]:checked').value;
    document.body.className = selectedTheme;
}
