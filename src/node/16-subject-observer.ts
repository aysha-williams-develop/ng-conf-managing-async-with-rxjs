import { Subject } from 'rxjs';
import { data$ } from './fixtures/16-data';

const subject = new Subject();

/** TODO:
  1. Subscribe to `subject` and log it's output
  2. Use the `subject` to subscribe to `data$`
*/
// FINAL_START
subject.subscribe(
  x => console.log(x),
  err => console.error(err),
  () => console.info('done')
);

data$.subscribe(subject);
// FINAL_END

/**
  NOTE: expected output
  0
  1
  2
  3
  4
  5
  6
  7
  8
  9
  done
*/
