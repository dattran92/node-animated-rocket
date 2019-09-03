const Reset = "\x1b[0m";
const Bright = "\x1b[1m";
const Dim = "\x1b[2m";
const Underscore = "\x1b[4m";
const Blink = "\x1b[5m";
const Reverse = "\x1b[7m";
const Hidden = "\x1b[8m";

const FgBlack = "\x1b[30m";
const FgRed = "\x1b[31m";
const FgGreen = "\x1b[32m";
const FgYellow = "\x1b[33m";
const FgBlue = "\x1b[34m";
const FgMagenta = "\x1b[35m";
const FgCyan = "\x1b[36m";
const FgWhite = "\x1b[37m";

const BgBlack = "\x1b[40m";
const BgRed = "\x1b[41m";
const BgGreen = "\x1b[42m";
const BgYellow = "\x1b[43m";
const BgBlue = "\x1b[44m";
const BgMagenta = "\x1b[45m";
const BgCyan = "\x1b[46m";
const BgWhite = "\x1b[47m";


const frame1 = `
       !
       !
       ^
      / \\
     /___\\
    |=   =|
    |     |
    |     |
    |     |
    |     |
    |     |
    |     |
    |     |
    |     |
    |     |
   /|##!##|\\
  / |##!##| \\
 /  |##!##|  \\
|  / ^ | ^ \\  |
| /  ( | )  \\ |
|/   ( | )   \\|
    ((   ))
   ((  :  ))
   ((  :  ))
    ((   ))
     (( ))
      ( )
       .
       .
       .
`;

const frame2 = `
       !
       !
       ^
      / \\
     /___\\
    |=   =|
    |     |
    |     |
    |     |
    |     |
    |     |
    |     |
    |     |
    |     |
    |     |
   /|##!##|\\
  / |##!##| \\
 /  |##!##|  \\
|  / ^ | ^ \\  |
| / ( | )   \\ |
|/ ( | )     \\|
  ((   ))
 ((  :  ))
 ((  :  ))
  ((   ))
   (( ))
    ( )
     .
     .
     .
`;

const writeLine = (line, color) => {
  process.stdout.write(color + line + Reset + "\n");
};

const drawFrame = (frame) => {
  const lines = frame.split("\n");
  const numOfLinesToClear = lines.length;
  lines.forEach(line => {
    writeLine(line, FgMagenta);
  });
  process.stdout.moveCursor(0, numOfLinesToClear * -1);
};

const clearFrame = (frame) => {
  const lines = frame.split("\n");
  const numOfLinesToClear = lines.length;
  for (let i = 0; i < numOfLinesToClear; i++) {
    process.stdout.moveCursor(0, 1);
    process.stdout.clearLine();
    process.stdout.write("");
  }
  process.stdout.moveCursor(0, numOfLinesToClear * -1);
};

const delayDrawFrame = (frame, timeout) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      drawFrame(frame);
      resolve();
    }, timeout);
  });
};

const delayClearFrame = (frame, timeout) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      clearFrame(frame);
      resolve();
    }, timeout);
  });
};

const start = async () => {
  await delayDrawFrame(frame1, 0);
  await delayClearFrame(frame1, 200);
  await delayDrawFrame(frame2, 0);
  await delayClearFrame(frame2, 200);
  await start();
};

start();
