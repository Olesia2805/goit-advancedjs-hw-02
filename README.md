# This homework assignment covers:

## Synchronous and asynchronous code

## Using Timeouts and Intervals: [Timeouts and Intervals](src/js/1-timer.js)

- **_setTimeout:_** used to postpone the execution of a function for a certain
  time.

- **_setInterval:_** calls the function at regular intervals.

Both methods return an identifier that can be used to cancel the scheduled
execution using clearTimeout or clearInterval, respectively.

## Promises and how they work: [Prompts](src/js/2-snackbar.js)

Promises are used to work with asynchronous operations in JavaScript. A promise
is an object that represents the final (or unsuccessful) completion of an
asynchronous operation and the value by which this operation was completed.

**_A promise can be in one of three states:_**

- _Pending:_ The initial state, not completed and not rejected.
- _Fulfilled:_ The transaction was completed successfully.
- _Rejected:_ The operation was completed with an error.

**_The main methods of the Promise class:_**

- _then():_ Called when the promise is completed successfully (in the
  ‘Fulfilled’ state).
- _catch():_ Called when the promise is rejected (in the ‘Rejected’ state).
- _finally():_ Called regardless of whether the promise was completed or
  rejected.
