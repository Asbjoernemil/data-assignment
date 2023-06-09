"use strict";

window.addEventListener("load", start);

async function start() {
  const dat = await getCharacter(
    "https://cederdorff.github.io/dat-js/05-data/southpark.json"
  );
  dat.forEach(ShowCharacters);
}

async function getCharacter(url) {
  const response = await fetch(url);
  const data = await response.json();
  return data;
}

function ShowCharacters(character) {
  const myHtml = `
			<article class="grid-item">
				<img src="${character.image}">
				<h2>${character.name}</h2>
                <p>Age: ${character.age}</p>
                <p>Occupation: ${character.occupation}</p>
                <p>Gender: ${character.gender}</p>
                
			</article>
	`;
  document.querySelector("#characters").insertAdjacentHTML("beforeend", myHtml);
  document
    .querySelector("#characters article:last-child")
    .addEventListener("click", () => showDialog(character));
}

function showDialog(character) {
  document.querySelector("#dialog-name").textContent = character.name;
  document.querySelector("#dialog-nickname").textContent = character.nickname;
  document.querySelector("#dialog-occupation").textContent =
    character.occupation;
  document.querySelector("#dialog-age").textContent = character.age;
  document.querySelector("#dialog-voicedBy").textContent = character.voicedBy;
  document.querySelector("#dialog-gender").textContent = character.gender;
  document.querySelector("#dialog-religion").textContent = character.religion;
  document.querySelector("#dialog-catchPhrase").textContent =
    character.catchPhrase;
  document.querySelector("#dialog-hairColor").textContent = character.hairColor;
  document.querySelector("#dialog-schoolGrade").textContent =
    character.schoolGrade;
  document.querySelector("#dialog-episodes").textContent = character.episodes;
  document.querySelector("#dialog-appearances").textContent =
    character.appearances;
  document.querySelector("#dialog-firstAppearance").textContent =
    character.firstAppearance;
  document.querySelector("#dialog-image").src = character.image;

  document.querySelector("dialog").showModal();
}
