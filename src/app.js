/* eslint-disable */
import "bootstrap";
import "./style.css";

document.getElementById("thebutton").onclick = function() {
  document.querySelector("#Excuse").innerHTML = ExcuseGen();
  console.log("Test" + ExcuseGen);
};

let ExcuseGen = () => {
  let pronoun = ["The", "A"];
  let subject = ["dog", "cat", "my pet"];
  let verb = ["ate", "stole", "run away with my "];
  let item = ["homework", "assigment"];
  let place = ["at my home", "in my yard"];

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
