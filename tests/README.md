# Al Balad Testing 

This README provides detailed instructions for setting up and running tests for the Al Balad project using Playwright and TypeScript.

## Pre-requisites

Ensure the following prerequisites are installed and configured before proceeding:

1. **Node.js and npm**

   - Download and install the latest LTS version of Node.js v22.12.0 from [Node.js Official Website](https://nodejs.org/).
   - Verify the installation using:
     ```bash
     node -v
     npm -v
     ```

2. **Git**

   - Install Git version 2.47.1 from [Git Official Website](https://git-scm.com/).
   - Verify the installation using:
     ```bash
     git --version
     ```

3. **Code Editor**

   - Use a code editor such as [Visual Studio Code](https://code.visualstudio.com/) for editing and managing the project files.

4. **Browser Support**

   - Playwright supports multiple browsers, which will be installed automatically during the setup process.

5. **System Permissions**

   - Ensure you have administrative rights to install dependencies and run the required commands.

## Installation Guidelines

Follow these steps to set up the environment:

1. **Clone the Repository**

   - Clone the project repository to your local machine:
     ```bash
     git clone <https://github.com/FathimaShifana586/TestcaseforAlbalad.git>
     cd <tests>
     ```

2. **Install Node Dependencies**

   - Install all required npm packages:
     ```bash
     npm install
     ```

3. **Install Playwright version 1.49 Browsers**

   - Use the Playwright CLI to install necessary browsers:
     ```bash
     npx playwright install
     ```

4. **Setup TypeScript**

   - If the project does not already include a TypeScript configuration, create a `tsconfig.json` file with the following content:
     ```json
     {
       "compilerOptions": {
         "target": "ESNext",
         "module": "CommonJS",
         "strict": true,
         "esModuleInterop": true,
         "skipLibCheck": true,
         "outDir": "dist"
       },
       "include": ["tests/**/*"]
     }
     ```

## How to Run Tests

1. **Write or Locate Tests**

   - Test files should be stored in the `tests` directory and named with a `.spec.ts` extension.
   - Example file structure:
     ```
     tests/
       example.spec.ts
     ```

2. **Run All Tests**

   - Execute all tests using the following command:
     ```bash
     npx playwright test
     ```

3. **Run Specific Tests**

   - Run a specific test file by specifying its path:
     ```bash
     npx playwright test tests/example.spec.ts
     ```

4. **Debugging Tests**

   - Run tests in debug mode to inspect issues:
     ```bash
     npx playwright test --debug
     ```

5. **View Reports**

   - Generate and view an HTML report:
     ```bash
     npx playwright show-report
     ```


