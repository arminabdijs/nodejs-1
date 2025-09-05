const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("what's your name our teacher ? ", (answer) => {
  console.log(`your name : ${answer}`);
  // rl.close();
  console.log("ok! please enter student name");
});

let students = [];
rl.on("line", (input) => {
  if (input === "exit" || input === "q" || input === "quit") {
    console.log(
      "\n---------------------------------------------------------\n"
    );

    console.log(`all students : ${students.splice(" , ")}`);

    console.log(
      "\n---------------------------------------------------------\n \n"
    );

    console.log("goodbye");
    rl.close();
    return;
  }

  if (input.length < 3) {
    console.log("please enter valid name!");
    return;
  }

  students.push(input);
  console.log(`add ${input} to list`);
  console.log(`we have ${students.length} now`);
});

rl.on("SIGINT", () => {
  console.log(
    "\n \n---------------------------------------------------------\n \n"
  );
  console.log("goodbye");
  rl.close();
});
