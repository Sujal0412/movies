const movies = [
    { title: "Inception", genre: "Sci-Fi", rating: 8.8, releaseYear: 2010 },
    { title: "The Dark Knight", genre: "Action", rating: 9.0, releaseYear: 2008 },
    { title: "Interstellar", genre: "Sci-Fi", rating: 8.6, releaseYear: 2014 }
];

const list = document.getElementById('list');
const addMovieForm = document.getElementById('addMovieForm');
const genreFilter = document.getElementById('genreFilter');
const filterButton = document.getElementById('filterButton');

const displayMovies = (collection) => {
    list.innerHTML = '';
    collection.forEach(movie => {
        const li = document.createElement('li');
        li.classList.add('bg-gray-100', 'p-4', 'rounded-lg', 'shadow-lg', 'mb-2', 'transition', 'duration-300', 'hover:bg-gray-200'); 

        const title = document.createElement('span');
        title.classList.add('font-bold', 'text-lg', 'text-gray-900');
        title.textContent = movie.title;

        const details = document.createElement('span');
        details.classList.add('text-gray-600', 'ml-2', 'text-sm');
        details.textContent = `(${movie.releaseYear}) - ${movie.genre}, Rating: ${movie.rating}`;

        li.appendChild(title);
        li.appendChild(details);

        list.appendChild(li);
    });
};

addMovieForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const newMovie = {
        title: document.getElementById('title').value,
        genre: document.getElementById('genre').value,
        rating: parseFloat(document.getElementById('rating').value),
        releaseYear: parseInt(document.getElementById('releaseYear').value, 10)
    };
    movies.push(newMovie);
    displayMovies(movies);
    addMovieForm.reset();
});

filterButton.addEventListener('click', () => {
    const genre = genreFilter.value.trim();
    const filteredMovies = genre ? movies.filter(movie => movie.genre.toLowerCase() === genre.toLowerCase()) : movies;
    displayMovies(filteredMovies);
});

const findHighestRatedMovie = collection => {
    return collection.reduce((highest, movie) => movie.rating > highest.rating ? movie : highest);
};

const ratingButton = document.querySelector("#high");

ratingButton.addEventListener('click', () => {
    const highestRated = findHighestRatedMovie(movies);
    list.innerHTML = '';

    const li = document.createElement('li');
    li.classList.add('bg-gray-100', 'p-4', 'rounded-lg', 'shadow-lg', 'mb-2', 'transition', 'duration-300', 'hover:bg-gray-200'); 

    const title = document.createElement('span');
    title.classList.add('font-bold', 'text-lg', 'text-gray-900');
    title.textContent = highestRated.title;

    const details = document.createElement('span');
    details.classList.add('text-gray-600', 'ml-2', 'text-sm');
    details.textContent = `(${highestRated.releaseYear}) - ${highestRated.genre}, Rating: ${highestRated.rating}`;

    li.appendChild(title);
    li.appendChild(details);

    list.appendChild(li);
});
