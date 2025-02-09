document.getElementById("button").addEventListener("click", function() {
            const name = encodeURIComponent(document.getElementById("name").value);
            const year = encodeURIComponent(document.getElementById("year").value);
            const baseUrl = "https://localhost:8080/";
            const queryString = `?name=${name}&year=${year}`;
            document.getElementById("url").textContent = baseUrl + queryString;
        });