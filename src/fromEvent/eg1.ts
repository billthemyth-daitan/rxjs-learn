import { fromEvent } from 'rxjs';
import { scan } from 'rxjs/operators';

fromEvent(document, 'click')
  .pipe(scan(count => count + 1, 0))
  .subscribe(count => console.log(`Clicked ${count} times`));

//   import { fromEvent } from 'rxjs';
// import { throttleTime, map, scan } from 'rxjs/operators';

// fromEvent(document, 'click')
//   .pipe(
//     throttleTime(1000),
//     // map(event => event.target.Clien), // Ignore the error. VSCODE unknow that`s property
//     scan((count, clientX) => count + clientX, 0)
//   )
//   .subscribe(count => console.log(count));
