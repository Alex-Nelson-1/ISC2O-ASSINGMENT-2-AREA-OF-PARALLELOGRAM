/* Created by: Alex.Nelson
 * Created on: Oct 2022
 * This file contains the JavaScript for index.html
 */
"use strict"
/* FUnction */
function calculateArea() {
  /* Input */
  const length = parseFloat(document.getElementById("lengthOfParallelogram").value)
  const width = parseFloat(document.getElementById("widthOfParallelogram").value)
  /* Proccess */
  const area = length * width 
  /* Output */
  document.getElementById("area").innerHTML = "The area of your parallelogram is: " + area + " cm"
}
