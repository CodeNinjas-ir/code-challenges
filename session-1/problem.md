## Search in Names String

Assume that you have been given an unordered list of names in lowercase, and you want to find the name which is the penultimate in alphabetical order (a-z).

For example:

```js
['nastaran', 'shayan', 'ahmad', 'nilofar']
```

In order version:

```js
['ahmad', 'nastaran', 'nilofar', 'shayan']
```

The penultimate name is `nilofar`.

### Solution Limitations

You must not use the `sort` method on the array.

### Guide

You have to use `string.localeCompare` for alphabetical comparison.

---

### Input

The input of the app must be an array. The app should read the items of the array from a string in a line, separated by spaces (" "), with each string containing only lowercase characters.

### Output

The app must output the penultimate name in the array ordered alphabetically.

The output should be written using `console.log`.

---

### Input Sample

```
"nastaran shayan ahmad nilofar"
```

### Output Sample

The output should be:

```
nilofar
```

## Solutions 
<details>
  <summary>Solution 1</summary>
  <div>
    <h3>Merge Sort</h3>
    <p> <a href="./solution-1.js">Click here to view the code</a></p>
    <img src="https://media.geeksforgeeks.org/wp-content/uploads/20230706153706/Merge-Sort-Algorithm-(1).png"/>
  </div>
</details>

<details>
  <summary>Solution 2</summary>
  <div>
    <h3>Quick Sort</h3>
    <p><a href="./solution-2.js">Click here to view the code</a></p>
    <img src="https://favtutor.com/resources/images/uploads/mceu_46432632011643441346270.png"/>
  </div>
</details>
