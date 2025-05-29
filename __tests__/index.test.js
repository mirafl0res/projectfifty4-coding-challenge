const { generateTasks } = require('../index.gs');
const { mockLogger } = require('jest-gas');  

describe('generateTasks', () => {
  beforeAll(() => {
    // Mocka Logger globalt så att den fungerar i testmiljön
    global.Logger = {
      log: jest.fn(),  // Mocka Logger.log som en Jest-funktion
    };
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
    expect(Logger.log).toHaveBeenCalledWith('Generated tasks:', tasks);  // Ensure Logger.log was called
  });
});