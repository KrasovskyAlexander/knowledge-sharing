import { clickObservable } from './rxjs-custom-fromEvent.js';
import { countValues, filterAndLog, multiplyBy } from "./customOperators.ts";
import {map} from "rxjs/operators";
import {of} from "rxjs";


const output = document.getElementById('output');
const output2 = document.getElementById('output2');
const output3 = document.getElementById('output3');

const subscription = clickObservable.pipe(
    map(event => event.clientX),
    countValues(output2),
    multiplyBy(2),
    filterAndLog(value => value > 100),
).subscribe({
    next(event) {
        output.innerHTML += `<p>Button clicked at X: ${event}</p>`;
    },
    error(event) {},
    complete() {},
});

setTimeout(() => {
    subscription.unsubscribe();
    output.innerHTML += '<p>Subscription unsubscribed after 10 seconds</p>';
}, 10000);


const number = of(50, 100, 150, 200);

const numberSub = number.pipe(
    countValues(output3),
    multiplyBy(2),
    filterAndLog(value => value > 200),
)

numberSub.subscribe()
