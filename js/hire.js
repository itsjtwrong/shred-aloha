// BLOTTER - Example 1
var title = new Blotter.Text("ARE⠀YOU⠀SURE⠀ABOUT⠀THIS?", {
    family : "'Krona One', sans-serif",
    size : 79.5,
    paddingLeft : 40,
  paddingRight : 0,
  paddingTop: 40,
    fill : "#000"
  });

  var sub = new Blotter.Text("WORK⠀FOR⠀PREVIOUS⠀CLIENTS", {
    family : "'Krona One', sans-serif",
    size : 59,
    paddingLeft : 40,
  paddingRight : 40,
  paddingTop: 40,
    fill : "#000"
  });
  
  var material = new Blotter.ChannelSplitMaterial();
  var subMaterial = new Blotter.ChannelSplitMaterial();

  material.uniforms.uOffset.value = 0;

  material.uniforms.uRotation.value = 20;
  
  var titleBlotter = new Blotter(material, {
    texts : title
  });

  var subBlotter = new Blotter(material, {
      texts: sub
  });

  var elem = document.getElementById("title-text");
  var subElem = document.getElementById("sub")
  var titleScope = titleBlotter.forText(title);
  var subScope = subBlotter.forText(sub);
  
  titleScope.appendTo(elem);
  subScope.appendTo(subElem);
let distort = 0;
let flag = true;
let rotation = 20;
const my_function = () => {
  if(flag == true) {
    distort+= 0.001
    rotation += 1;
    if(distort > 0.4) {
      flag = false;
    }
  } else {
    distort -= 0.001;
    rotation += 1;
    if(distort < 0.01) {
      flag = true;
    }
  }
  material.uniforms.uOffset.value = distort;
  material.uniforms.uRotation.value = rotation % 360;
  
  requestAnimationFrame(my_function);
};
requestAnimationFrame(my_function)