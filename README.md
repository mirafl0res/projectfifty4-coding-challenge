# projectfifty4-coding-challenge
 
 ## Coding Challenge – Developer &amp; Automation Interns

•	**Task ID**: The ID includes the current year and a stubbed number (999), with padded task numbers like OBJ-2025-999-T01.

•	**Due date logic**: Each task’s due date is set to today + (index × 2) days, using JavaScript’s Date and setDate().

•	**Title**: Titles use the input slug to make them descriptive (e.g., “Task 1 for Acquire-High-Paying-Clients”).

•	**Testing**: Jest tests ensure everything works, with jest-gas used to mock Logger.log.

•	**CI**: I set up GitHub Actions to run tests automatically and ensure everything passes.