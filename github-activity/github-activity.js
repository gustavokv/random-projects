const username = process.argv.at(2);

fetch(`https://api.github.com/users/${username}/events`)
    .then(response => {
        if(response.status == "404")
            throw new Error(`Could not find user ${username}`);

        return response.json();
    })
    .then(data => {
        for (const i in data) {
            
        }
    })
    .catch(error => console.error(error));
