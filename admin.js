const SUPABASE_URL = "https://xhtrgzjtvdhxoohgcbvl.supabase.co/rest/v1/";
const SUPABASE_KEY = "sb_publishable_jzGpskvXUHSYYq9LjNluOg_-rvmkvji";

const supabaseClient =
    window.supabase.createClient(
        SUPABASE_URL,
        SUPABASE_KEY
    );


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


        const { data, error } =
            await supabaseClient
                .from("media")
                .insert([item])
                .select();


        if (error) {

            console.error(error);

            alert(
                "❌ Movie එක save කරන්න බැරි වුණා.\n\n" +
                error.message
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

    });