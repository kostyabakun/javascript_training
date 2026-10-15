const actualMarks = 85;
const passingMarks = 75;
const studentName = "John Doe";

if (actualMarks >= passingMarks) {
  console.log(`${studentName} úspěšně složil zkoušku.`); // ? Text uzavřený v `` se nazývá template literal a ten mi umožňuje čitelnější zápis textů s kódem dohromady, alternativně: console.log(studentName + " úspěšně složil zkoušku.")
}
