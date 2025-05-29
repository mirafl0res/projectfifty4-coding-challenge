// Major edits to this file were made with the assistance of ChatGPT.

const { generateTasks } = require('../index.gs');
const { mockLogger } = require('jest-gas');  // Import mockLogger from jest-gas

describe('generateTasks', () => {
  let logSpy;  // Declare a variable to hold the spy

  beforeAll(() => {
    // Ensure Logger is globally available and mock it using jest.spyOn
    global.Logger = {
      log: jest.fn(),  // Mock Logger.log with jest.fn()
    };
    logSpy = jest.spyOn(global.Logger, 'log').mockImplementation(() => {});  // Use jest.spyOn to mock Logger.log
  });

  afterAll(() => {
    logSpy.mockRestore();  // Restore the original Logger.log after tests
  });

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

  it('should log results using Logger', () => {
    const tasks = generateTasks('Acquire-High-Paying-Clients');
    Logger.log('Generated tasks:', tasks);  // Mocked Logger.log call
    expect(logSpy).toHaveBeenCalledWith('Generated tasks:', tasks);  // Verify that Logger.log was called
  });
});