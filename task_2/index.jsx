import { Fragment, memo, useCallback } from 'react';

const MainComponent = () => {
    // Функции при каждом рендере заново создаются, соот. ссылка на нее меняется, при передаче в дочерний компонент
    // лучше использовать useCallback чтобы ссылка на функцию после рендера не менялась
    const makeLog = useCallback(() => console.log("hi from MainComponent"), []); // function to make logs from MainComponent

    return (
        <Fragment>
            <ChildComponent makeLog={makeLog} />
        </Fragment>
    );
};

// memoized component
const ChildComponent = memo(({ makeLog }) => (
    <button onClick={makeLog}>say Hi from ChildComponent</button>
));
