let showMoreLinks = document.querySelectorAll(".show-more-link");
showMoreLinks.forEach(function (showMoreLink) {
    showMoreLink.addEventListener('click', showMoreOrLess, false);
});

function showMoreOrLess() {
    if (this.getAttribute('data-more') == 0) {
        this.setAttribute('data-more', 1);
        this.style.display = 'block';
        this.innerHTML = 'read less';
        this.previousElementSibling.style.display = 'block';
    }
    else if (this.getAttribute('data-more') == 1) {
        this.setAttribute('data-more', 0);
        this.style.display = 'inline';
        this.innerHTML = 'read more';
        this.previousElementSibling.style.display = 'none';
    }
}
