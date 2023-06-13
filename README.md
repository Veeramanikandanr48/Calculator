# Calculator

This is a basic calculator web application that allows users to perform arithmetic calculations. It provides a user-friendly interface with buttons for inputting numbers, operators, and parentheses.

## Features

- Input field to display the result of calculations
- Buttons for numbers (0-9), decimal point, operators (+, -, *, /), and parentheses (() and ))
- AC button to clear the input field
- C button to delete the last character
- = button to evaluate the expression and display the result
- Error handling for invalid expressions

## Technologies Used

- HTML: Markup language for creating the calculator interface
- CSS: Styling language for visually enhancing the calculator
- JavaScript: Programming language for implementing calculator functionality
- [Math.js](https://mathjs.org/): Library for evaluating mathematical expressions

## Usage

To use the calculator, simply open the `index.html` file in a web browser. You can enter numbers and perform calculations by clicking on the buttons provided. The result will be displayed in the input field.

## Code Explanation

The project consists of three main files:

1. `index.html`: Contains the HTML structure of the calculator interface and includes the necessary CSS and JavaScript files.
2. `style.css`: Defines the visual styles for the calculator interface, including colors, dimensions, and positioning.
3. `script.js`: Implements the JavaScript functions that handle user interactions and perform the calculations.

The JavaScript functions included in `script.js` are:

- `appendValue`: Appends the clicked button value to the current expression in the input field.
- `appendOperator`: Appends the clicked operator to the current expression, handling certain validation rules.
- `clearResult`: Clears the input field and resets the current expression.
- `deleteLastChar`: Deletes the last character from the current expression.
- `calculate`: Evaluates the current expression using the `eval` function and displays the result in the input field.
- `calculateEquation`: Evaluates the current expression using the `math.evaluate` function from Math.js and displays the result in the input field.
- `solveAlgebra`: Simplifies the current algebraic expression using the `math.simplify` function from Math.js and displays the result in the input field.

## Credits

The project utilizes the following external resources:

- [Google Fonts](https://fonts.google.com/): Provides a wide range of fonts for the calculator interface.
- [Math.js](https://mathjs.org/): Library for mathematical calculations and algebraic simplification.

## License

This project is licensed under the [MIT License](LICENSE).
