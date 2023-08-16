let xOff = 0; // Perlin noise x offset
let yOff = 100; // Perlin noise y offset
let noiseFactor = 2; // Controls the amount of noise applied to movement
let cursorX; // Initial x position of the simulated mouse
let cursorY; // Initial y position of the simulated mouse
let animation; // Variable to hold the animation frame

function setup() {
  createCanvas(windowWidth, windowHeight);
  cursorX = width / 2; // Initial x position in the center of the canvas
  cursorY = height / 2; // Initial y position in the center of the canvas
  loop();

  // animation = engine(); // Start the animation engine
  function Timing() {
    loop()
    setTimeout(function () {
    noLoop()// Stop the animation after 2 seconds
  }, 2000);
  }
  setInterval(Timing,3000)
}

function draw() {
  background(220);

  // Calculate the Perlin noise values for x and y
  let noiseX = noise(xOff) * noiseFactor;
  let noiseY = noise(yOff) * noiseFactor;

  // Update the cursor position using Perlin noise
  cursorX += noiseX;
  cursorY += noiseY;

  // Wrap cursor position around the canvas
  cursorX = (cursorX + width) % width;
  cursorY = (cursorY + height) % height;

  // Update the Perlin noise offsets
  xOff += 0.005;
  yOff += 0.005;

  // Draw the simulated mouse pointer
  fill(255, 0, 0);
  ellipse(cursorX, cursorY, 20, 20);
}

function engine() {
  draw();
  return requestAnimationFrame(engine);
}


























// let recordedPath = []; // Array to store the recorded path

// function setup() {
//   createCanvas(windowWidth, windowHeight);
//   // noLoop();

//   // Add event listener for mouse movement
//   document.addEventListener('mousemove', recordMouseMovement);
// }

// function draw() {
//   background(220);
  
//   // Draw the recorded path
//   drawPath(recordedPath);
// }

// // Event handler to record mouse movement
// function recordMouseMovement(event) {
//   const x = event.clientX;
//   const y = event.clientY;
//   recordedPath.push([x, y]);
// }

// // Draw a path on the canvas
// function drawPath(path) {
//   beginShape();
//   for (const point of path) {
//     vertex(point[0], point[1]);
//   }
//   endShape();
// }

// // const movements = {
// //   mouseMovement: {
// //     path: [], // Array to store the normalized path
// //   },
// //   zoom: {
// //     finger1: [],
// //     finger2: [],
// //   },
// //   // Add other movement types similarly
// // };

// // const canvasSize = 2; // Assume canvas size is normalized between -1 and 1
// // const numberOfPoints = 100; // Number of points in each path

// // function setup() {
// //   createCanvas(windowWidth, windowHeight);
// //   movements.mouseMovement.path = generateNormalizedPath(numberOfPoints);
  
// //   // Simulating zoom for finger1 and finger2
// //   movements.zoom.finger1 = generateZoomPath(numberOfPoints, 0.1); // Example zoom factor
// //   movements.zoom.finger2 = generateZoomPath(numberOfPoints, -0.1); // Example zoom factor
// // }

// // function draw() {
// //   background(220);
  
// //   // Draw the normalized path
// //   drawPath(movements.mouseMovement.path);

// //   // Draw the zoom paths for finger1 and finger2
// //   drawPath(movements.zoom.finger1);
// //   drawPath(movements.zoom.finger2);
// // }

// // // Generate a normalized path between -1 and 1 for a specified number of points
// // function generateNormalizedPath(numPoints) {
// //   const path = [];
// //   for (let i = 0; i < numPoints; i++) {
// //     const x = map(i, 0, numPoints - 1, -canvasSize / 2, canvasSize / 2);
// //     const y = noise(i * 0.1) * canvasSize - canvasSize / 2;
// //     path.push([x, y]);
// //   }
// //   return path;
// // }

// // // Generate a zoom path for a finger based on a specified zoom factor
// // function generateZoomPath(numPoints, zoomFactor) {
// //   const path = [];
// //   for (let i = 0; i < numPoints; i++) {
// //     const factor = map(i, 0, numPoints - 1, 1, 1 + zoomFactor);
// //     path.push(factor);
// //   }
// //   return path;
// // }

// // // Draw a path on the canvas
// // function drawPath(path) {
// //   beginShape();
// //   for (const point of path) {
// //     const x = map(point[0], -canvasSize / 2, canvasSize / 2, 0, width);
// //     const y = map(point[1], -canvasSize / 2, canvasSize / 2, 0, height);
// //     vertex(x, y);
// //   }
// //   endShape();
// // }
