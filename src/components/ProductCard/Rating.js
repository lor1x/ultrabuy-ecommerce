export default Rating = () => {
  let array = [];
  if (rating > 4.5)
    for (let index = 0; index < 5; index++) {
      array.push(true);
    }
  else if (rating > 3.5) {
    for (let index = 0; index < 4; index++) {
      array.push(true);
    }
  } else if (rating > 2.5) {
    for (let index = 0; index < 3; index++) {
      array.push(true);
    }
  } else if (rating > 1.5) {
    for (let index = 0; index < 2; index++) {
      array.push(true);
    }
  } else if (rating > 0.5) {
    array.push(true);
  } else {
  }
  for (let index = array.length; index < 5; index++) {
    array.push(false);
  }
  return array;
};
