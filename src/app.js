/* eslint-disable */
import "bootstrap";
import "./style.css";

document.getElementById("thebutton").addEventListener("click", function() {
  document.querySelector("#excuse").innerText = excuseGen();
  console.log("Test" + excuseGen);
});

let excuseGen = () => {
  let pronoun = ["The", "A"];
  let subject = ["dog", "cat", "my pet", "stranger", "friend", "homeless man "];
  let verb = ["ate", "stole", "run away with my ", "peed on", "chewed on"];
  let item = ["homework", "assigment", "my notes"];
  let place = ["at my home", "in my yard", "in my garden"];

  let pronounIndex = Math.floor(Math.random() * pronoun.length);
  let subjectIndex = Math.floor(Math.random() * subject.length);
  let verbIndex = Math.floor(Math.random() * verb.length);
  let itemIndex = Math.floor(Math.random() * item.length);
  let placeIndex = Math.floor(Math.random() * place.length);

  return (
    pronoun[pronounIndex] +
    " " +
    subject[subjectIndex] +
    " " +
    verb[verbIndex] +
    " " +
    item[itemIndex] +
    " " +
    place[placeIndex]
  );
};
