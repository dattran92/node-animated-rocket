# Node Animated Rocket

Animated rocket using process.stdout

### Why to have this project?

Most of the time, Node.JS developers use console.log when we want to print something into the terminal. Basically, console.log is a wrapper of `process.stdout.write` with formatted output. Something like this:

```
Console.prototype.log = function() {
  this._stdout.write(util.format.apply(this, arguments) + '\n');
};
```

On another world, process.stdout has several other functions rather than `process.stdout.write`. This project use those functions to demonstrate how we can write something, clear, and rewrite other things on your terminal.

### How to run

```
node index.js
```

### Demo
![animated rocket](rocket.gif)
