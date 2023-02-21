// EVENT PROPAGATION

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
  }, false
);

document.addEventListener(
  "click",
  function () {
    console.log("Document");
  }, false
);

document.querySelector(".div2").addEventListener(
  "click",
  function () {
    // e.stopPropagation() // Stops the Event Propagation at this element
    console.log("DIV 2");
  }, {once: true}
);

document.querySelector(".div1").addEventListener(
  "click",
  function () {
    console.log("DIV 1");
  }, false
);

document.querySelector(".button").addEventListener(
  "click",
  function (e) { // event object
    e.preventDefault()
    console.log(e.target.innerText = "Clicked");
  }, false
);

// 52:55