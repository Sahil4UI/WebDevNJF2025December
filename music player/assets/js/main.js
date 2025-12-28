
let songsDiv = document.querySelector("#songsList");

let container = document.createElement("div");
container.className = "container";

let row = document.createElement("div");
row.className = "row";

for (let i=0;i<songs.length;i++)
{
    let div = document.createElement("div");
    div.className = "col-xl-3 col-lg-3 col-md-4 col-sm-12";

    let card = document.createElement("div");
    card.className = "music-card"

    let img = document.createElement("img");
    img.src = songs[i].songPoster;
    img.className="w-100"

    let h2 =  document.createElement("h2");
    h2.innerText = songs[i].songName;

    let btn = document.createElement("button");
    btn.className = "btn btn-info";
    btn.innerText = "PLAY";

    card.appendChild(img);
    card.appendChild(h2);
    card.appendChild(btn);

    div.appendChild(card);
    row.appendChild(div);
}

container.appendChild(row);
songsDiv.appendChild(container);