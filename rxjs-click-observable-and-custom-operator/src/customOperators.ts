import { Observable, OperatorFunction } from 'rxjs';
import { filter, tap, map } from 'rxjs/operators';

function filterAndLog(predicate: (value: number) => boolean) {
    return (source$: Observable<number>) => {
        return source$.pipe(
            filter(predicate),
            tap(value => console.log(`Прошёл фильтр: ${value}`))
        );
    };
}

function multiplyBy(multiplier: number) {
    return (source$: Observable<number>) => {
        return source$.pipe(
            map(value => value * multiplier)
        );
    };
}

function countValues<T>(outputElement: HTMLElement): OperatorFunction<T, T> {
    return (source: Observable<T>) =>
        new Observable<T>((destination) => {
            let count = 0;

            const subscription = source.subscribe({
                next(value) {
                    count++;
                    destination.next(value);
                },
                error(err) {
                    destination.error(err);
                },
                complete() {
                    outputElement.innerHTML += `<p>Поток завершен. Обработано значений: ${count}</p>`;
                    destination.complete();
                },
            });

            return () => {
                outputElement.innerHTML += `<p>Подписка отписана. Итоговое количество кликов: ${count}</p>`;
                subscription.unsubscribe();
            };
        });
}

export { filterAndLog, multiplyBy, countValues }
