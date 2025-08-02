# Frontend Developer Assessment

This repository contains various JavaScript implementations for common programming tasks. Here's how to test each solution:

## 1. Group By Department

Test the department grouping function:

```javascript
node groupByDepartment.js
// Should output: { HR: ['Alice', 'Charlie'], Finance: ['Bob'] }
```

## 2. Fetch User Mock

Test the async fetch simulation:

```javascript
node fetchUserMock.js
// Should output the user object after 1 second:
// { id: 1, name: 'Jane Doe', email: 'jane@example.com' }
```

## 3. Remove Duplicates

Test the duplicate removal function:

```javascript
node removeDuplicates.js
// Should output: [1, 2, 3, 4, 5]
```

## 4. DOM Task List

1. Open `index.html` in a web browser
2. Click the "Add Task" button
3. Each click should add a new "New Task" item to the list

## 5. Tax Calculator

Test the progressive tax calculation:

```javascript
node calculateTax.js
// Should output: 2250 instead of 2750
```

## Running Tests

1. Make sure you have Node.js installed
2. Open terminal in the project directory
3. Run individual files using `node filename.js`
4. For DOM testing, open index.html in a web browser
