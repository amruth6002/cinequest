
const searchInput = document.getElementById('searchInput');
const moviesList = document.getElementById('moviesList');

searchInput.addEventListener('input', function () {
    const query = this.value.toLowerCase();
    const movieItems = document.querySelectorAll('#moviesList li');

    movieItems.forEach(item => {
        const movieName = item.textContent.toLowerCase();
        const isMatch = movieName.includes(query);
        if (isMatch) {
            item.style.display = 'block';
            item.scrollIntoView({ behavior: 'smooth', block: 'start' });
        } else {
            item.style.display = 'none';
        }
    });
});
 