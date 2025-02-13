document.getElementById("peliculas").addEventListener("click", function () {
    document.getElementById("contenido").hidden = false;
    document.getElementById("form_new_actor").hidden = true;
    fetch("http://localhost/apisakila/peliculas/all", {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            "Authorization": "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJ0dS1hcGkuY29tIiwiYXVkIjoidHUtYXBpLmNvbSIsImlhdCI6MTczOTQ3MTgyMCwiZXhwIjoxNzM5NDc1NDIwLCJ1c2VyX2lkIjoxfQ.cTJFlI7_nhiqyaeJ3NNzrJRKV1u_zq4CrYtSMobJF3s"
        }
    })
    .then(response => response.json())
    .then(data => {
        let output = "<h2>Peliculas</h2>";
        data.forEach(function (pelicula) {
            output += `
                <div>
                    <h3>${pelicula.title}</h3>
                    <p>${pelicula.description}</p>
                </div>
            `;
        });
        document.getElementById("contenido").innerHTML = output;
    })
    .catch(error => console.error('Error:', error));
});

document.getElementById("new_actor").addEventListener("click", function () {
    document.getElementById("contenido").hidden = true;
    document.getElementById("form_new_actor").hidden = false;
});

document.getElementById("save_actor").addEventListener("click", function () {
    let first_name = document.getElementById("name").value;
    let last_name = document.getElementById("last_name").value;
    let formData = new FormData();
    formData.append("name", first_name);
    formData.append("lastname", last_name);

    fetch("http://192.168.100.166/apisakila/actores/new", {
        method: "POST",
        body: formData
    })
    .then(response => response.json())
    .then(data => {
        console.log(data);
    })
    .catch(error => console.error('Error:', error));
});
