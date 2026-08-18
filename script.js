// Telegram Mini App

const tg = window.Telegram.WebApp;

tg.ready();

tg.expand();


// PAGE NAVIGATION

function showSection(sectionName) {

    const sections =
        document.querySelectorAll(".section");

    sections.forEach(
        section => {

            section.classList.remove(
                "active"
            );

        }
    );


    const selected =
        document.getElementById(
            sectionName
        );


    if (selected) {

        selected.classList.add(
            "active"
        );

    }

}


// SEARCH

const search =
    document.getElementById(
        "search"
    );


search.addEventListener(
    "input",
    function () {

        const value =
            search.value
                .toLowerCase()
                .trim();


        const cards =
            document.querySelectorAll(
                ".movie-card"
            );


        cards.forEach(
            card => {

                const title =
                    card.dataset.title
                        .toLowerCase();


                if (
                    title.includes(value)
                ) {

                    card.style.display =
                        "flex";

                } else {

                    card.style.display =
                        "none";

                }

            }
        );

    }
);


// MOVIE DETAILS

function movieDetails(title) {

    alert(
        "🎬 " +
        title +
        "\n\n" +
        "Movie details will be added here."
    );

}