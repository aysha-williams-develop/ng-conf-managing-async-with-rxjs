import { from } from 'rxjs';

const data = ['apples', 'bananas', 'oranges'];

//TODO: create an observable the `data` array with `Observable.from`

console.log('start');
source$.subscribe(
  x => console.log(x),
  err => console.error(err),
  () => console.info('done')
);
console.log('stop');

/**
  NOTE: expected output
  start
  apples
  bananas
  oranges
  done
  stop
*/

// Notice the output is _synchronous_ again, because arrays are consumed
// synchronously
