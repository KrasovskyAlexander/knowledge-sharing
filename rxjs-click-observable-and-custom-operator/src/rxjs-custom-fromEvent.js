import { Observable } from 'rxjs';

const clickButton = document.getElementById('clickButton');

const clickObservable = new Observable(subscriber => {
    const clickHandler = (event) => {
        subscriber.next(event);
    };

    clickButton.addEventListener('click', clickHandler);

    return () => {
        clickButton.removeEventListener('click', clickHandler);
    };
});

export { clickObservable };
