// ==========================
// TELEGRAM MINI APP
// ==========================

const tg = window.Telegram.WebApp;

tg.ready();
tg.expand();


// ==========================
// MOVIES DATABASE
// ==========================

const movies = [

   {
    title: "Avatar",
    year: "2009",
    genre: "Sci-Fi • Adventure • Action",
    rating: "7.8",
    emoji: "🌌",

    poster:
        "https://image.tmdb.org/t/p/w500/6EiRUJpuoeQPghrs3YNktfnqOVh.jpg",

    country: "USA",
    language: "English",
    runtime: "2h 42min",
    director: "James Cameron",

    story:
        "A paraplegic Marine is dispatched to the moon Pandora on a unique mission, where he becomes caught between his orders and protecting the world he discovers."
},

    {
        title: "Avengers: Endgame",
        year: "2019",
        genre: "Action • Adventure • Sci-Fi",
        rating: "8.4",
        emoji: "🦸",
        story: "The Avengers face the consequences of Thanos' actions and fight to restore what was lost."
    },

    {
        title: "Pirates of the Caribbean",
        year: "2003",
        genre: "Adventure • Fantasy",
        rating: "8.1",
        emoji: "🏴‍☠️",
        story: "A legendary pirate begins an unforgettable adventure across the Caribbean seas."
    },

    {
        title: "The Dark Knight",
        year: "2008",
        genre: "Action • Crime • Drama",
        rating: "9.0",
        emoji: "🦇",
        story: "Batman faces a dangerous criminal mastermind who brings chaos to Gotham City."
    }

];


// ==========================
// TV SERIES DATABASE
// ==========================

const series = [

    {
        title: "The Walking Dead",
        year: "2010",
        genre: "Drama • Horror • Thriller",
        rating: "8.1",
        emoji: "🧟",
        story: "A group of survivors struggles to survive in a world overrun by the undead."
    },

    {
        title: "Peaky Blinders",
        year: "2013",
        genre: "Crime • Drama",
        rating: "8.7",
        emoji: "🎩",
        story: "The Shelby family builds a powerful criminal empire in post-war Birmingham."
    },

    {
        title: "Breaking Bad",
        year: "2008",
        genre: "Crime • Drama • Thriller",
        rating: "9.5",
        emoji: "🧪",
        story: "A chemistry teacher enters the world of crime and becomes a powerful drug manufacturer."
    },

    {
        title: "The Last of Us",
        year: "2023",
        genre: "Drama • Action • Adventure",
        rating: "8.7",
        emoji: "🍄",
        story: "A hardened survivor and a young girl travel across a dangerous post-apocalyptic world."
    }

];


// ==========================
// CREATE CARD
// ==========================

function createCard(item) {

    return `
        <div class="movie-card">

            <div class="poster">

    <img
        src="${item.poster}"
        alt="${item.title}"
    >

</div>

            <div class="movie-info">

                <h3>
                    ${item.title}
                </h3>

                <p>
                    📅 ${item.year}
                </p>

                <p>
                    ${item.genre}
                </p>

                <p class="rating">
                    ⭐ IMDb ${item.rating}
                </p>

                <button onclick="showDetails('${item.title}')">
                    View Details
                </button>

            </div>

        </div>
    `;
}


// ==========================
// LOAD MOVIES
// ==========================

function loadMovies() {

    const container =
        document.getElementById("moviesList");

    container.innerHTML =
        movies.map(createCard).join("");
}


// ==========================
// LOAD SERIES
// ==========================

function loadSeries() {

    const container =
        document.getElementById("seriesList");

    container.innerHTML =
        series.map(createCard).join("");
}


// ==========================
// LOAD POPULAR
// ==========================

function loadPopular() {

    const container =
        document.getElementById("homeMovies");

    const popular = [
        movies[0],
        movies[3],
        series[0],
        series[2]
    ];

    container.innerHTML =
        popular.map(createCard).join("");
}


// ==========================
// PAGE NAVIGATION
// ==========================

function showPage(page) {

    const pages =
        document.querySelectorAll(".page");

    pages.forEach(function(item) {

        item.classList.remove("active");

    });

    const selected =
        document.getElementById(page);

    if (selected) {

        selected.classList.add("active");

    }
}


// ==========================
// SEARCH
// ==========================

const search =
    document.getElementById("search");


search.addEventListener(
    "input",
    function() {

        const query =
            search.value
                .toLowerCase()
                .trim();

        const all = [
            ...movies,
            ...series
        ];

        const results =
            all.filter(function(item) {

                return item.title
                    .toLowerCase()
                    .includes(query);

            });


        const container =
            document.getElementById("homeMovies");


        if (query === "") {

            loadPopular();

            return;

        }


        container.innerHTML =
            results
                .map(createCard)
                .join("");

    }
);


// ==========================
// MOVIE DETAILS
// ==========================

function showDetails(title) {

    const all = [
        ...movies,
        ...series
    ];


    const item =
        all.find(function(movie) {

            return movie.title === title;

        });


    if (!item) {

        return;

    }


    const telegramLink =
        "https://t.me/";


    const details = `

       <div class="details-poster">

    <img
        src="${item.poster}"
        alt="${item.title}"
    >

</div>


        <h2 class="details-title">

            🎬 ${item.title}

        </h2>


        <p class="details-info">

            📅 <strong>Year:</strong>
            ${item.year}

        </p>


        <p class="details-info">

            🎭 <strong>Genre:</strong>
            ${item.genre}

        </p>


        <p class="details-rating">

            ⭐ IMDb:
            ${item.rating}/10

        </p>


        <hr>


        <h3>
            📝 Story
        </h3>


        <p class="details-info">

            ${item.story}

        </p>


        <a
            class="download-btn"
            href="${telegramLink}"
            target="_blank"
        >

            📥 Telegram Download

        </a>

    `;


    const content =
        document.getElementById(
            "detailsContent"
        );


    const modal =
        document.getElementById(
            "detailsModal"
        );


    if (!content || !modal) {

        console.error(
            "Movie details HTML is missing."
        );

        return;

    }


    content.innerHTML =
        details;


    modal.style.display =
        "block";

}


// ==========================
// CLOSE DETAILS
// ==========================

function closeDetails() {

    const modal =
        document.getElementById(
            "detailsModal"
        );


    if (modal) {

        modal.style.display =
            "none";

    }

}


// ==========================
// CLOSE OUTSIDE MODAL
// ==========================

window.addEventListener(
    "click",
    function(event) {

        const modal =
            document.getElementById(
                "detailsModal"
            );


        if (
            event.target === modal
        ) {

            closeDetails();

        }

    }
);


// ==========================
// START APP
// ==========================

loadMovies();

loadSeries();

loadPopular();
