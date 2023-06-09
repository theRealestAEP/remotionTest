const fs = require('fs');

// Load the data from the file
let data = fs.readFileSync('keyframe_data.txt', 'utf-8');

// Split the data into lines
let lines = data.split('\r');

let keyframes = [];
console.log(lines)
// Parse each line
for (let line of lines) {
  let keytimeMatch = line.match(/Keytime:(\d+(?:\.\d+)?)/);
  let keyvalueMatch = line.match(/Keyvalue:([-\d.,]+)/);

  if (keytimeMatch && keyvalueMatch) {
    let keytime = parseFloat(keytimeMatch[1]);
    let keyvalue = keyvalueMatch[1].split(',');
    let x = parseFloat(keyvalue[0]);
    let y = parseFloat(keyvalue[1]);

    keyframes.push({ keytime, x, y });
  }
}

let output = {KeyFrameData:keyframes}
fs.writeFileSync('./output.json',JSON.stringify(output))
// Output the keyframes array
console.log(keyframes);
