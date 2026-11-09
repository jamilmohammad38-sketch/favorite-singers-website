// A JSON object containing my favorite singers
const music = {
  "singers": [
    { "name": "The Weeknd", "hometown": "Toronto, Canada", "song": "Blinding Lights" },
    { "name": "SZA", "hometown": "Maplewood, New Jersey", "song": "Snooze" },
    { "name": "Bruno Mars", "hometown": "Honolulu, Hawaii", "song": "Just the Way You Are" },
    { "name": "Billie Eilish", "hometown": "Los Angeles, California", "song": "Birds of a Feather" },
    { "name": "Adele", "hometown": "London, England", "song": "Someone Like You" }
  ]
};

// Put each singer into the table when the page loads
const table = document.getElementById("singerTable");

for (let i = 0; i < music.singers.length; i++) {
  const singer = music.singers[i];
  const row = document.createElement("tr");

  const name = document.createElement("td");
  name.textContent = singer.name;
  row.appendChild(name);

  const hometown = document.createElement("td");
  hometown.textContent = singer.hometown;
  row.appendChild(hometown);

  const song = document.createElement("td");
  song.textContent = singer.song;
  row.appendChild(song);

  table.appendChild(row);
}
