let recordedDeltas = []; // Array to store recorded deltas
let lastMouseX; // Previous x position
let lastMouseY; // Previous y position
let recording = false; // Flag to indicate if recording is active

function setup() {
  createCanvas(windowWidth, windowHeight);
lastMouseX = windowWidth/2;
  lastMouseY = windowHeight/2;
  // Add event listeners for mouse events
  canvas.addEventListener('mousemove', recordMouseMovement);
  canvas.addEventListener('click', toggleRecording);
}

function draw() {
  background(225);

  // Draw the recorded path using deltas
  fill(0)
  drawPathWithDeltas(recordedDeltas);

  // Display recording status
  fill(recording ? 'green' : 'red');
  noStroke();
  ellipse(20, 20, 20, 20);
}

// Event handler to record mouse movement
function recordMouseMovement(event) {
  if (recording) {
    const x = event.clientX;
    const y = event.clientY;

    if (lastMouseX !== undefined && lastMouseY !== undefined) {
      const deltaX = x - lastMouseX;
      const deltaY = y - lastMouseY;
      recordedDeltas.push([deltaX, deltaY]);
    }

    lastMouseX = x;
    lastMouseY = y;
  }
}

// Toggle recording status on canvas click
function toggleRecording() {
  recording = !recording;
}

// Draw the path using deltas
function drawPathWithDeltas(deltas) {
  let x = width / 2;
  let y = height / 2;

  for (const delta of deltas) {
    const deltaX = delta[0];
    const deltaY = delta[1];

    x += deltaX;
    y += deltaY;

  ellipse(x,y, 2, 2);
  }
}
