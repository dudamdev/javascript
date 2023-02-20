// Event Probagation
// 3 phases
//  1. Event Capturing
//  2. Target
//  3. Event Bubbling

// Event Capturing (Phase 1)
// --------------------------------------------------------------->
// Document <-> HTML <-> Body <-> div <-> Button (Target - Phase 2)
// <---------------------------------------------------------------
// Event Bubbling (Phase 3)

window.addEventListener(
  "click",
  function () {
    console.log("Window");
  },
  true
);

document.addEventListener(
  "click",
  function () {
    console.log("Document");
  },
  true
);

document.querySelector(".div2").addEventListener(
  "click",
  function () {
    console.log("DIV 2");
  },
  true
);

document.querySelector(".div1").addEventListener(
  "click",
  function () {
    console.log("DIV 1");
  },
  true
);

document.querySelector("button").addEventListener(
  "click",
  function (e) {
    console.log(e);
  },
  true
);

// 52:55