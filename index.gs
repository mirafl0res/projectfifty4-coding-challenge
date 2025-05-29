function generateTasks(objSlug) {
    var tasks = []; // Array for storing the generated task objects

    var year = new Date().getFullYear(); // Get the current year
    var objectiveNumber = 999; // Stubbed constant for objective number (used for taskId)

    // Helper function to pad single digits to two digits (e.g., 1 -> 01)
    function padSingleDigits(n) {
        if (n < 10) {
            return '0' + n; // Adds a leading zero to single-digit numbers
        } else {
            return String(n); // Converts two-digit numbers to a string
        }
    }

    // Generate 5 tasks
    for (var i = 0; i < 5; i++) {
        var taskNumber = i + 1; // Task numbering starts from 1

        // Format the task number with a leading zero if it's a single digit
        var paddedTaskNumber = padSingleDigits(taskNumber);

        // Create task ID in the format 'OBJ-YYYY-NNN-T##'
        var taskId = 'OBJ-' + year + '-' + objectiveNumber + '-T' + paddedTaskNumber;

        // Generate a title using the provided slug (e.g., project name)
        var title = 'Task ' + taskNumber + ' for ' + objSlug;

        // Set the due date for each task: today + (index * 2) days
        var dueDate = new Date();
        dueDate.setDate(dueDate.getDate() + i * 2); // Increment due date for each task
        var dueDateStr = dueDate.toISOString().split('T')[0]; // Format date to YYYY-MM-DD

        // Create the task object and add it to the tasks array
        tasks.push({
            taskId: taskId,
            title: title,
            dueDate: dueDateStr,
        });
    }
    return tasks; // Return the generated tasks array
}

// Test function to verify the generateTasks function and log results
function testGenerateTasks() {
    var result = generateTasks("Acquire-High-Paying-Clients");  // Example slug
    Logger.log(JSON.stringify(result, null, 2));  // Log the result in a readable format for testing
}

// Export the generateTasks function so it can be used in other project files
module.exports = { generateTasks }; //