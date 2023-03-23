"use strict";

window.addEventListener("load", start);

function start() {
  // const data = getDate();
  // ShowAllCharacters(data)

  const butters = {
    name: `Leopold "Butters" Stotch`,
    nickname:
      "Inspector Butters, Marjorine, Mantequilla, Paladin Butters the Merciful, Professor Chaos",
    image:
      "http://southparkstudios.mtvnimages.com/shared/characters/kids/butters-stotch.png",
    occupation: "Student",
    age: 10,
    voicedBy: "Matt Stone",
    gender: "Male",
    religion: "Roman Catholic , Temporary: Blaintologist*",
    catchPhrase: '"Do you know what i am saying?"',
    hairColor: "Blonde",
    schoolGrade: 4,
    episodes: "S01E01 to S26E05",
    appearances: 317,
    firstAppearance: "S01E01",
  };

  ShowCharacters(butters);
  ShowCharacters(butters);
  ShowCharacters(butters);
}

function getData() {
  // returner
  // return data
}

function showAllCharacters(list) {
  // parametre (data)
  // ShowCharacters();
}

function ShowCharacters(character) {
  // skal have et objekt
  // skal skrive HTML
  // const myHtml?
  const myHtml = `
			<article>
				<img src="${character.image}">
				<h2> Full name: ${character.name}</h2>
                <p>Age: ${character.age}</p>
                <p>School grade: ${character.schoolGrade}</p>
                <p>${character.name} is played by actor: ${character.voicedBy}</p>
			</article>
	`;
  document.querySelector("#characters").insertAdjacentHTML("beforeend", myHtml);

  showDialog(character);
}

function showDialog(character) {
  document.querySelector("#dialog-name").textContent = character.name;
  document.querySelector("#dialog-nickName").textContent = character.nickame;
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

  // kan clicke på karakter
  document
    .querySelector("#characters article:last-child")
    .addEventListener("click", characterClicked);

  // funktion inde i funtion og åbner vinduet
  function characterClicked() {
    document.querySelector("dialog").showModal();
  }
}

function closeDialog() {}

function getDescription() {}
