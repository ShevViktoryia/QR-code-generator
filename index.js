import inquirer from "inquirer";
import fs from "fs";
import qr from "qr-image";

inquirer
  .prompt([
    {
      message: "Type your URL: ",
      name: "URL",
    },
  ])
  .then((answers) => {
    qr.image(answers.URL).pipe(fs.createWriteStream("url.png"));
    fs.writeFile("answer.txt", answers.URL, (err) => {
      if (err) console.log(err);
      else {
        console.log(fs.readFileSync("answer.txt", "utf8"));
      }
    });
  });
