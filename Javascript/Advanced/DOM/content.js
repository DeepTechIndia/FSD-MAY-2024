const paragraph = document.getElementById("myParagraph");
paragraph.textContent = "This is a New Text Content";

paragraph.innerHTML = "This is a new <em>HTML</em> content";

paragraph.innerHTML = "<h1>Headinng</h1>";

paragraph.innerText = "This is the new text content with innertext";

// const content = document.getElementById("content");
// console.log(content.textContent);

// console.log(content.innerText);

// outerHTML =>

paragraph.outerHTML =
  "<div id=myParagraph>This is a new <em>HTML</em> content</div>";

console.log(document.getElementById("myParagraph"));
