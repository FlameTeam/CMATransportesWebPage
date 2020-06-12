/**
 * @author DixonOrtiz
 * @function selectStyle
 * @description function that return a different css style for differents colors
 * @argument {string color, object classes (style sheet)}
 * @return  { json style (css properties) }
 */
exports.selectStyle = (color, classes) => {
  let style;

  console.log(typeof classes);

  switch (color) {
    case "white":
      style = classes.white;
      break;

    case "blue":
      style = classes.blue;
      break;

    default:
      return "";
  }

  return style;
};

/**
 * @author DixonOrtiz
 * @function importData
 * @description function that returns an specific json data from an specific component
 * @argument {string section, json array sectionData}
 * @return  { json finalData (data requested) }
 */
exports.importData = (section, sectionData) => {
  let finalData;

  switch (section) {
    case "services":
      sectionData.forEach((data) => {
        if (data.section === section) {
          finalData = data;
        }
      });

      break;

    default:
      return "";
  }

  return finalData;
};
