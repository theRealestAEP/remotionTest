var comp = app.project.activeItem; // get the active composition
var layer = comp.layer(1); // get the first layer
var positionProperty = layer.property("Position"); // get the position property

var output = ""; // start with an empty string
for (var i = 1; i <= positionProperty.numKeys; i++) {
  var keyTime = positionProperty.keyTime(i); // the time of the keyframe
  var keyValue = positionProperty.keyValue(i); // the value of the keyframe
  output += "Keytime:" + keyTime + "Keyvalue:" + keyValue.toString() + "\n";
}

// write the output to a text file on your desktop
var file = new File("~/Desktop/keyframe_data.txt");
file.open("w");
file.write(output);
file.close();
