//your JS code here. If required.
let para = document.querySelector("#status");
let btn = document.querySelector("#enterBtn");

btn.addEventListener("click", () => {
    let heading = document.createElement("h1");

    heading.innerText = "Entered Metaverse";

    para.replaceWith(heading);
});
