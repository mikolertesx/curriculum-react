import React from "react";

export const MdToHTML = (text, normal, highlight, { containerClass }) => {
  const createSpanWithClass = (newClass, text) => {
    if (newClass === "" || newClass === null) {
      return <span>{text}</span>;
    }
    return <span className={newClass}>{text}</span>;
  };

  const items = [];
  let insideBold = false;
  let accumulatedText = "";
  for (let i = 0; i < text.length; i++) {
    const char = text[i];
    if (insideBold === false) {
      if (char !== "*") {
        accumulatedText += char;
      } else {
        items.push(createSpanWithClass(normal, accumulatedText));
        accumulatedText = "";
        insideBold = true;
      }
    } else {
      if (char !== "*") {
        accumulatedText += char;
      } else {
        items.push(createSpanWithClass(highlight, accumulatedText));
        accumulatedText = "";
        insideBold = false;
      }
    }
  }
  if (accumulatedText !== "") {
    items.push(createSpanWithClass(normal, accumulatedText));
  }
  return <p className={containerClass}>{items}</p>;
};

export const MdToHTMLLang = (
  language,
  text,
  normal,
  highlight,
  { containerClass }
) => {
  return MdToHTML(text[language], normal, highlight, { containerClass });
};

export default MdToHTML;
