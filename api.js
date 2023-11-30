function jatekos()
{
    fetch("https://www.balldontlie.io/api/v1/players")
    .then(response => response.json())
    .then(adat => {
        for(player of adat.data)
        {
        document.getElementById("jatekos").innerHTML += player.first_name + " " +  player.last_name + " " + player.team.full_name + "<br>";
    }
    })
    
    .catch( error => console.log("Hiba!" + error))
}

function csapat()
{
    fetch("https://www.balldontlie.io/api/v1/players")
    .then(response => response.json())
    .then(elem => {
        for(team of elem.data)
        {
            document.getElementById("csapat").innerHTML += asd;
        }
    })
}
