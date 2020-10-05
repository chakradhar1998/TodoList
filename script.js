"use strict";
function clicked() {
  console.log("clicked");
  let content = document.querySelector("input").value;
  console.log(content);
  let list = document.querySelector("ul");
  console.log(list);
  let tag = document.createElement("li");
  let text = document.createTextNode(content);
  tag.appendChild(text);
  list.appendChild(tag);
}