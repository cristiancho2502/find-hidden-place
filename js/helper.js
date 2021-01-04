// generate a random Number
let getRandomNumber = size => {
  return Math.floor(Math.random() * size);
}

// get the Distance of two points
let getDistance = (e, target) => {
  let diffX = e.offsetX - target.x;
  let diffY = e.offsetY - target.y;
  return Math.sqrt((diffX * diffX) + (diffY * diffY));
}

// return an String depending on the distances 
let getDistanceHint = distance => {
  if (distance < 30) {
    return "Boiling hot!";
  } else if (distance < 50) {
    return "Really Hot";
  } else if (distance < 70) {
    return "Hot";
  } else if (distance < 110) {
    return "Warm";
  } else if (distance < 190) {
    return "Cold";
  } else if (distance < 380) {
    return "Really Cold";
  } else {
    return "Freezing!";
  }
}
