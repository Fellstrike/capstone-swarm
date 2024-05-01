let buzzezMany = 25;
let buzzez = [];


//we need a generative goal for the particles to head towards. Either one of the edges, the middle, or another square maybe?
function setup()
{
  let randX;
  let randY;
  createCanvas(1000, 1000);
  for(let i = 0; i < buzzezMany; i++)
  {
    randX = random(1000);
    randY = random(1000);
    buzzez[i] = new Buzz(randX, randY);
    buzzez[i].globalBest = createVector(buzzez[i].x, buzzez[i].y);
    //console.log('i');
  }
}

function draw() {
  let gBestX;
  let gBestY;
  background(220, 200, 100);
  for(let i = 0; i < buzzezMany; i++){
    buzzez[i].spawn();  
    gBestX = 500;
    gBestY = 500;
    if (buzzez[i].x <= 0 || buzzez[i].x >= 900)
    {
      gBestX = buzzez[i].x;
    }
    if (buzzez[i].y <= 0 || buzzez[i] >= 900)
    {
      gBestY = buzzez[i].y;
    }
    buzzez[i].update(gBestX, gBestY, 0.1, 0.2, 0.3);
  }
}

// function updateGlobalBest() {
//   this.particles.forEach(particle => {
//       const currentDistance = dist(particle.x, particle.y, particle.objectiveX, particle.objectiveY);
//       const gBestDistance = dist(this.globalBest.x, this.globalBest.y, particle.objectiveX, particle.objectiveY);
// //ln 24: use dist function
//     // if (currentDistance < gBestDistance) {
//     //     this.globalBest.x = buzzez.x;
//     //     this.globalBest.y = buzzez.y;
//     // }
//   });

  
  // function animate() {
    // const inertia = parseFloat(inertiaSlider.value);
    // const c1 = parseFloat(c1Slider.value);
    // const c2 = parseFloat(c2Slider.value);

    // context.clearRect(0, 0, canvas.width, canvas.height);

    // swarm.updateParticles(inertia, c1, c2);
    // swarm.drawParticles(context);

    // setTimeout(() => {
    //     requestAnimationFrame(animate);
    // }, 1000 / 60);s
// }
