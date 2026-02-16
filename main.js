const movies = [
    { title: 'Movie 1', description: 'Description for movie 1' },
    { title: 'Movie 2', description: 'Description for movie 2' },
    { title: 'Movie 3', description: 'Description for movie 3' },
    { title: 'Movie 4', description: 'Description for movie 4' },
    { title: 'Movie 5', description: 'Description for movie 5' },
    { title: 'Movie 6', description: 'Description for movie 6' },
    { title: 'Movie 7', description: 'Description for movie 7' },
    { title: 'Movie 8', description: 'Description for movie 8' },
    { title: 'Movie 9', description: 'Description for movie 9' },
    { title: 'Movie 10', description: 'Description for movie 10' },
];

class MovieCard extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }

    connectedCallback() {
        const title = this.getAttribute('title');
        const description = this.getAttribute('description');

        this.shadowRoot.innerHTML = `
            <style>
                :host {
                    display: block;
                }
                .card {
                    height: 100%;
                    display: flex;
                    flex-direction: column;
                    justify-content: space-between;
                }
                .card-content {
                    padding: 1rem;
                }
                h3 {
                    margin-top: 0;
                }
                img {
                    width: 100%;
                    height: 300px;
                    object-fit: cover;
                }
            </style>
            <div class="card">
                <img src="https://via.placeholder.com/250x300" alt="${title}">
                <div class="card-content">
                    <h3>${title}</h3>
                    <p>${description}</p>
                </div>
            </div>
        `;
    }
}

customElements.define('movie-card', MovieCard);

const movieList = document.getElementById('movie-list');

movies.forEach(movie => {
    const movieCard = document.createElement('movie-card');
    movieCard.setAttribute('title', movie.title);
    movieCard.setAttribute('description', movie.description);
    movieList.appendChild(movieCard);
});
