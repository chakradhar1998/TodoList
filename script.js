"use strict";
function clicked() {
  console.log("clicked");
  let content = document.querySelector("input").value;
  console.log(content);
  //let list = document.querySelector("ul");
  let list = document.getElementsByClassName("list-items");
  console.log(list[0]);
  let tag = document.createElement("li");
  let text = document.createTextNode(content);
  tag.appendChild(text);
  list[0].appendChild(tag);
}