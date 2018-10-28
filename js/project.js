// 1. Select #color-button from the page, and add an onclick event handler that triggers a functin changeColor;
document.querySelector('#color-button').onclick = changeColor;

// 2. Write the function, named changeColor, that is called when #color-button is clicked
function changeColor() {
  // 3. Inside of the function changeColor, use variables to store the <input> values from #red, #green, and #blue
  // - Use .value to get the values from the inputs
  // HINT: var red = document.getElementById('red').value;
  const red = document.querySelector('#red').value;
  const green = document.querySelector('#green').value;
  const blue = document.querySelector('#blue').value;

  // 4. Create a variable, named colorStr, which concatenates the above red, green, and blue variables into the format:
  // rgb(x, y, z)
  // - If the user enters: 100, 150, and 200, colorStr should be: rgb(100, 150, 200)
  const colorString = 'rgb(' + red + ',' + green + ',' + blue + ')';

  // 5. Use .innerHtml to change the text inside of #colorful-text to colorStr
  document.querySelector('#colorful-text').innerHtml = colorString;
  // 6. Use .style.background to change the background of #wrapper to colorStr
  document.querySelector('#wrapper').style.background = colorString;
}
