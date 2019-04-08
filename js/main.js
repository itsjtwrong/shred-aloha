// BLOTTER - Example 1
var title = new Blotter.Text("SHRED⠀ALOHA", {
    family : "'Krona One', sans-serif",
    size : 79.5,
    paddingLeft : 40,
  paddingRight : 0,
    fill : "#ffd901"
  });

  var sub = new Blotter.Text("(artistic⠀collective)", {
    family : "'Krona One', sans-serif",
    size : 59,
    paddingLeft : 40,
  paddingRight : 40,
    fill : "#ffd901"
  });
  
  var titleMaterial = new Blotter.LiquidDistortMaterial();
  var subMaterial = new Blotter.LiquidDistortMaterial();

  subMaterial.uniforms.uSpeed.value = 0.1;
  subMaterial.uniforms.uVolatility.value = 0.1;

  // Play with the value for uSpeed. Lower values slow
  // down animation, while higher values speed it up. At
  // a speed of 0.0, animation is stopped entirely.
  titleMaterial.uniforms.uSpeed.value = 0.1;
  
  // Try uncommenting the following line to play with
  // the "volatility" of the effect. Higher values here will
  // produce more dramatic changes in the appearance of your
  // text as it animates, but you will likely want to keep
  // the value below 1.0.
  titleMaterial.uniforms.uVolatility.value = 0.50;
  
  var titleBlotter = new Blotter(titleMaterial, {
    texts : title
  });

  var subBlotter = new Blotter(subMaterial, {
      texts: sub
  });

  var elem = document.getElementById("title-text");
  var titleScope = titleBlotter.forText(title);
  var subScope = subBlotter.forText(sub);
  
  titleScope.appendTo(elem);
  subScope.appendTo(elem);