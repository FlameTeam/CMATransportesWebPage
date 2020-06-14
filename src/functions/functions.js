/**
 * @author DixonOrtiz and Constanza Jazme
 * @function selectStyle
 * @description function that return a different css style for differents colors
 * @argument {string color, object classes (style sheet)}
 * @return  { json style (css properties) }
 */
exports.selectStyle = (color, classes) => {
  let style;

  switch (color) {
    case "navbar":
      style = classes.navbar;
      break;

    case "white":
      style = classes.white;
      break;

    case "blue":
      style = classes.blue;
      break;

    case "footer":
      style = classes.footer;
      break;

    default:
      return "";
  }

  return style;
};

/**
 * @author DixonOrtiz
 * @function importSpecificData
 * @description function that returns an specific json data from an specific component
 * @argument {string section, json array sectionData}
 * @return  { json finalData (data requested) }
 */
exports.importSpecificData = (section, sectionData) => {
  let finalData = "";

  sectionData.forEach((data) => {
    if (data.section === section) {
      finalData = data;
    }
  });

  return finalData;
};
