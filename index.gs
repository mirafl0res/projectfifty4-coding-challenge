function generateTasks(objSlug) {
    var tasks = []; // Array which will store the generated tasks objects

    var year = new Date().getFullYear(); // Get current year
    var objectiveNumber = 999; // Stubbed constant for objective number

    //  Helper function to format task numbers with leading zeros for single digits
    function padSingleDigits(n) {
        if (n < 10) {
            return '0' + n;
        } else {
            return String(n);
        }
    }

    // Generate 5 tasks
    for (var i = 0; i < 5; i++) {
        var taskNumber = i + 1; // Start task numbering from 1

        // Format the task number (leading zero for single digits)
        var paddedTaskNumber = padSingleDigits(taskNumber);

        // Construct task ID in the format 'OBJ-YYY-NNN-T##'
        var taskId = 'OBJ-' + year + '-' + objectiveNumber + '-T' + paddedTaskNumber;

        // Generate a title using the provided slug
        var title = 'Task ' + taskNumber + ' for ' + 'Draft ICP Brief';

        // Set dueDate = today + (index × 2) days
        var dueDate = new Date();
        dueDate.setDate(dueDate.getDate() + i * 2);
        var dueDateStr = dueDate.toISOString().split('T')[0]; // Format date to YYYY-MM-DD

        // Create task object and add it to the tasks array
        tasks.push({
            taskId: taskId,
            title: title,
            dueDate: dueDateStr,
        });
    }
    return tasks;
}

function testGenerateTasks() {
    var result = generateTasks("Acquire-High-Paying-Clients");  // Använd en exempel-slug
    Logger.log(JSON.stringify(result, null, 2));  // Logga resultatet så att du kan se det
  }