const MathUtils = {
    // Equation of a line.
    lineEq: (y2, y1, x2, x1, currentVal) => {
      var m = (y2 - y1) / (x2 - x1), b = y1 - m * x1;
      return m * currentVal + b;
    },
    // Linear Interpolation function.
    lerp: (a, b, n) =>  (1 - n) * a + n * b
  };
  
  // Create the blotter material. 
  const material = new Blotter.LiquidDistortMaterial();
  // Set the default material uniform values.
  material.uniforms.uSpeed.value = .5;
  material.uniforms.uVolatility.value = 0.01;
  material.uniforms.uSeed.value = Math.random();
  // Create the Blotter instance.
  const blotter = new Blotter(material);
  // Initialize the Blotter Text on all HTML elements with data-blotter.
  const blotterElems = [...document.querySelectorAll('[data-blotter]')];
  const projList = ["POYS"];
  var i=0;
  blotterElems.forEach((el) => {
    const text = new Blotter.Text(projList[i], {
        family : "'Krona One', sans-serif",
        paddingLeft: 50,
        paddingRight: 100,
        size: 70,
    });
    blotter.addText(text);
    // Now delete the html content.
    // el.innerHTML = projList[i];
    // The created canvas.
    const scope = blotter.forText(text);
    // Append it to the main element.
    scope.appendTo(el);
    i++;
  });
  
  // Now, change one (or more) uniform value as we scroll. 
  // The faster the scrolling the more the value changes.
  let currentScroll = window.pageYOffset;
  // The volatility is the uniform that will change.  
  let volatility = 0.05;
  // It will go from 0 (not scrolling) to 0.9 (scrolling at a speed of maxscroll).
  const maxscroll = 10;
  const uniformValuesRange = [0,0.9];
  // Using requestAnimationFrame + linear interpolation for the effect.
  const render = () => {
    // Current scroll position
    const newScroll = window.pageYOffset;
    // How much was scrolled from the last repaint.
    const scrolled = Math.abs(newScroll - currentScroll);
    // Get the new value of volatility.
    volatility =  MathUtils.lerp(volatility, Math.min(MathUtils.lineEq(uniformValuesRange[1], uniformValuesRange[0], maxscroll, 0, scrolled), 0.9), 0.05) + 0.001;
    // Set the volatility.
    material.uniforms.uVolatility.value = volatility;
    // Update the current scroll.
    currentScroll = newScroll;
    // Repeat.
    requestAnimationFrame(render);
  }
  requestAnimationFrame(render);