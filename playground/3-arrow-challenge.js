//
// Goal: Create method to get incomplete tasks
//
// 1. Define getTasksToDo method
// 2. Use filter to to return just the incompleted tasks (arrow function)
// 3. Test your work by running the script

const tasks = {
  tasks: [
    {
      text: "Grocery shopping",
      completed: true
    },
    {
      text: "Clean yard",
      completed: false
    },
    {
      text: "Film course",
      completed: false
    }
  ],
  getTasksToDo() {
    return this.tasks.filter(task => !task.completed);
  }
};

console.log(tasks.getTasksToDo());

// const event = {
//   name: "Birthday Party",
//   guestList: ["Andrew", "Jen", "Mike"],
//   printGuestList() {
//     console.log("Guest list for " + this.name);

//     this.guestList.forEach(guest => {
//       console.log(guest + " is attending " + this.name);
//     });
//   }
// };

// event.printGuestList();
