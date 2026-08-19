const SUPABASE_URL =
    "https://xhtrgzjtvdhxoohgcbvl.supabase.co";

const SUPABASE_KEY =
    "sb_publishable_jzGpskvXUHSYYq9LjNluOg_-rvmkvji";


document
    .getElementById("movieForm")
    .addEventListener("submit", async function (event) {

        event.preventDefault();


        const item = {

            type:
                document.getElementById("type").value,

            title:
                document.getElementById("title").value,

            year:
                Number(
                    document.getElementById("year").value
                ),

            release_date:
                document.getElementById("releaseDate").value,

            genre:
                document.getElementById("genre").value,

            rating:
                document.getElementById("rating").value,

            poster:
                document.getElementById("poster").value,

            country:
                document.getElementById("country").value,

            language:
                document.getElementById("language").value,

            runtime:
                document.getElementById("runtime").value,

            director:
                document.getElementById("director").value,

            cast:
                document.getElementById("cast").value,

            trailer:
                document.getElementById("trailer").value,

            story:
                document.getElementById("story").value

        };


        try {

            const response = await fetch(
                SUPABASE_URL + "/rest/v1/media",
                {
                    method: "POST",

                    headers: {

                        "apikey": SUPABASE_KEY,

                        "Authorization":
                            "Bearer " + SUPABASE_KEY,

                        "Content-Type":
                            "application/json",

                        "Prefer":
                            "return=representation"

                    },

                    body: JSON.stringify(item)

                }
            );


            const result =
                await response.json();


            if (!response.ok) {

                console.error(
                    "Supabase Error:",
                    result
                );

                alert(
                    "❌ Movie එක save කරන්න බැරි වුණා.\n\n" +
                    (
                        result.message ||
                        "Unknown error"
                    )
                );

                return;

            }


            alert(
                "✅ " +
                item.title +
                " successfully added!"
            );


            document
                .getElementById("movieForm")
                .reset();


            console.log(
                "Movie saved:",
                result
            );

        }

        catch (error) {

            console.error(
                "Connection Error:",
                error
            );

            alert(
                "❌ Supabase connection error."
            );

        }

    });
