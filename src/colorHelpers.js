/*
{
  paletteName: "Material UI Colors",
  id: "material-ui-colors",
  emoji: "🎨",
  colors: [
    { name: "red", color: "#F44336" },
    { name: "pink", color: "#E91E63" },
    { name: "purple", color: "#9C27B0" },
    { name: "deeppurple", color: "#673AB7" },
    { name: "indigo", color: "#3F51B5" },
    { name: "blue", color: "#2196F3" },
    { name: "lightblue", color: "#03A9F4" },
    { name: "cyan", color: "#00BCD4" },
    { name: "teal", color: "#009688" },
    { name: "green", color: "#4CAF50" },
    { name: "lightgreen", color: "#8BC34A" },
    { name: "lime", color: "#CDDC39" },
    { name: "yellow", color: "#FFEB3B" },
    { name: "amber", color: "#FFC107" },
    { name: "orange", color: "#FF9800" },
    { name: "deeporange", color: "#FF5722" },
    { name: "brown", color: "#795548" },
    { name: "grey", color: "#9E9E9E" },
    { name: "bluegrey", color: "#607D8B" }
  ]
}
*/

import chroma from 'chroma-js';

// create a variable and set it equal to an array of all the different color levels, from 50 to 900.
const levels = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900];
// 1.
function generatePalette(starterPalette) {
  let newPalette = {
    paletteName: starterPalette.paletteName,
    id: starterPalette.id,
    emoji: starterPalette.emoji,
    // see note at bottom
    colors: {}
  };
  // loop over each level       (reference note at bottom)
  for (let level of levels) {
    // will build a new colors object since the array will go inside the object of colors
    newPalette.colors[level] = []; // lingo for thought process: 'colorsOFlevel' = empty array.
    // will set a new object array for 50, 100, 200, ...900
  }

  // 4.loop over each color

  for (let color of starterPalette.colors) {
    // loop over and generate a scale for all the different colors and an rgba along the way
    // for each color in the starterPalette,
    // take the lightest scale(number) and assign to 50. repeat up to the darkest shade at 900;
    let scale = getScale(color.color, 10).reverse(); // need to reverse and get ten colors
    // ****** NEED TO REVIEW THIS MORE..... *********** lit i 'in' scale
    for (let i in scale) {
      // for each iteration of the scale of 10, generate a newPaslette color
      newPalette.colors[levels[i]].push({
        name: `${color.name} ${levels[i]}`,
        id: color.name.toLowerCase().replace(/ /g, '-'), // replace a space, globally and replace it with a dash
        hex: scale[i],
        rgb: chroma(scale[i]).css(),
        rgba: chroma(scale[i])
          .css()
          .replace('rgb', 'rgba')
          .replace(')', ',1.0)') // replace.. ) with.. ,1.0)  => going from rgb(23,45,1) and replace it with rgba(xx, xx, xx, xx)
      });
    }
  }
  return newPalette;
}

// CHROMA

// 2.
// Create a function that will retrieve an array of three colors to be called in generateScale
function getRange(hexColor) {
  const end = '#fff';
  return [
    // a total of three array values...
    chroma(hexColor) // turn into a chroma color
      .darken(1.4) // darken the color at 1.4x otherwise colors were too dark
      .hex(), // gets the hex value from darken(1.4)
    hexColor, // will be the middle color
    end // to the end color of white
    // from the darkened color to the original color to the end color of white (color.darken(1.4) - color - white)
  ];
}

// 3.
// create a function to return 10 hex-colors based off a hex number
function getScale(hexColor, numberOfColors) {
  return chroma
    .scale(getRange(hexColor))
    .mode('lab')
    .colors(numberOfColors); // will be 10 colors based off 50, 100, 200... 900;
}

// MUST CALL and EXPORT
export { generatePalette };

/*
NOTE:
Instead of writing each one out like below, loop over and add intos
colors: {
  50: [],
  100: []
}
*/
