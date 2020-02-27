export function appendParagraph(text, element) {
  const paragraph = document.createElement("p");
  const content = document.createTextNode(text);
  paragraph.appendChild(content);
  element.appendChild(paragraph);
}
