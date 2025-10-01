function getAverage(arr) {
  let average = 0;
  let totalScore = 0;
  for(let i = 0; i < arr.length; i++) {
    totalScore += arr[i];
    average = totalScore / arr.length;
  }
  return average;
}

function getGrade(score){
  let arrA = [90, 91, 92, 93, 94, 95, 96, 97, 98, 99];
  let arrB = [80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90];
  let arrC = [70, 71, 72, 73, 74, 75, 76, 77, 78, 79];
  let arrD = [60, 61, 62, 63, 64, 65, 66, 67, 68, 69];

  if (score === 100) {
    return "A+";
  }	else if (arrA.includes(score)) {
    return "A";
  } else if (arrB.includes(score)) {
    return "B";
  } else if (arrC.includes(score)) {
    return "C";
  } else if (arrD.includes(score)) {
    return "D";
  } else if (score <= 59 && score >= 0) {
    return "F";
  }
}

function hasPassingGrade(grade) {
  let passinGrades = ["A+", "A", "B", "C", "D"];

  if (passinGrades.includes(getGrade(grade))) {
    return true;
  } else {
    return false;
  } 
}


function studentMsg(arr1, score1) {
  let average1 = getAverage(arr1);
  let grade = getGrade(score1);
  if (grade !== "F") {
    return `Class average: ${average1}. Your grade: ${grade}. You passed the course.`
  } else {
  return `Class average: ${average1}. Your grade: ${grade}. You failed the course.`
  }

}



console.log(studentMsg([92, 88, 12, 77, 57, 100, 67, 38, 97, 89], 70))
