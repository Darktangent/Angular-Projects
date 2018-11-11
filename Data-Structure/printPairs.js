const boxes = [1, 2, 3, 4, 5]

function pair(boxes) {

  let j = 0
  for (let i = 0; i <= boxes.length - 1;) {
    if (j < boxes.length) {
      console.log(boxes[i], boxes[j])
      j++

    } else if (j === boxes.length) {
      j = 0
      i++
    }





  }
}
pair(boxes)