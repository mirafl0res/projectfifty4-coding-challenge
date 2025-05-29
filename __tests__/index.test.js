// __tests__/index.test.js
// Test suite for the generateTasks function
// This file contains tests to verify the correctness of the generateTasks function
// which generates an array of tasks with specific taskId and dueDate formats.
const { generateTasks } = require('../index.gs');

describe('generateTasks', () => {
  it('should generate 5 tasks', () => {
    const tasks = generateTasks('Acquire-High-Paying-Clients');
    expect(tasks).toHaveLength(5);  // Ensures that exactly 5 tasks are generated
  });

  it('should generate taskId with correct format', () => {
    const tasks = generateTasks('Acquire-High-Paying-Clients');
    expect(tasks[0].taskId).toMatch(/^OBJ-\d{4}-999-T\d{2}$/);  // Ensure taskId formatting
  });

  it('should generate dueDate in correct format', () => {
    const tasks = generateTasks('Acquire-High-Paying-Clients');
    expect(tasks[0].dueDate).toMatch(/^\d{4}-\d{2}-\d{2}$/);  // Ensure dueDate is in the format YYYY-MM-DD format
  });
});