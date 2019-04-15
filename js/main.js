addEventListener("load", poysImg);

let folders = {
  "poys": ["FLOW"],
};

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
  paddingRight : 80,
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

function throwImg(section) {
  mq = window.matchMedia( "(min-width: 960px)" );
  if(mq.matches) {
    document.getElementById("title-text").style.display = "none";
  document.getElementById("display").style.width = "auto";
  let y = document.getElementById("title-img");
  y.style.display = "block";
  imgInterval = setInterval(function() {y.src = getSrc(section.id)}, 1000);
  }
  
}

function getSrc(id) {
  let newImg = id+"/" + folders[id][Math.floor(Math.random()*folders[id].length)]+ "/" + Math.floor(Math.random() * 9) + ".jpg";
  return newImg;
} 

function getPoysSrc(id) {
  let folder = folders.poys;
  let newImg = "poys"+"/" + folder[folder.indexOf(id)]+ "/" + Math.floor(Math.random() * 9) + ".jpg";
  return newImg;
}

function endImgThrow(section) {
  clearInterval(imgInterval);
  let y = document.getElementById("title-img")
  y.style.display = "none";
  y.src = "";
  document.getElementById("title-text").style.display = "block"
  document.getElementById("display").style.width = "800px";
}

function poysImg(){
  mq = window.matchMedia( "(min-width: 960px)" );
  if(mq.matches) {
    // document.getElementById("title-text").style.display = "none";
    // document.getElementById("display").style.width = "auto";
    var y = document.getElementsByClassName("poys-img");
    for(var i=0;i<y.length;i++) {
      console.log("HERE");
      let posImgInterval;
      posImgInterval = setInterval(function() {
        y[i-1].src = getPoysSrc(y[i-1].id)
      }, 500);
      y[i].addEventListener("mouseover", function() {
        clearInterval(imgInterval);
      })
      y[i].addEventListener("mouseout", function() {
        posImgInterval = setInterval(function() {
          y[i-1].src = getPoysSrc(y[i-1].id)
        }, 500);
      })
    }
  }
};