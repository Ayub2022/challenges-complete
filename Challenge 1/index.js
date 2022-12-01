const gradeInput = document.querySelector(".marking");
const calculateGradeButton = document.querySelector(".markingbutton");

calculateGradeButton.addEventListener("click", () => {
  studentGrade(parseInt(gradeInput.value, 10));
});

const studentGrade = (grade) => {
    //to ensure grade is not less than 0 and greater than 100
  if (!(grade < 0 || grade > 100)) {
    //grade is greater than 79 and less or equal to 100
    if (grade > 79 && grade <= 100) {
      alert("A");
      //grade is greater or equal to 60 and less or equal to 79
    } else if (grade >= 60 && grade <= 79) {
      alert("B-");
      //grade is greater than or equal to 49 and less than or equal to 59
    } else if (grade >= 49 && grade <= 59) {
      alert("C-");
      //grade is greater than or equal to 40 and less than 49
    } else if (grade >= 40 && grade < 49) {
      alert("D-");
      //grade is less than 40
    } else if (grade < 40) {
      alert("E");
    }
    //If the grades does not meet the above condition, should return that
  } else {
    alert("Invalid Grade");
  }
};
