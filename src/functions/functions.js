//selectStyle function
//function that return a different css style for differents colors
exports.selectStyle = (color, classes) => {
  let style;

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

//importData function
//function that returns an specific json data from an specific component
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
