import { Fragment, memo } from 'react';

// ======= ----  Первая идея ------ ========

const MainComponent = ({
    user = { name: 'unknown', age: null } // default value for `props.user`
}) => {
    return (
        <Fragment>
            <ChildComponent name={user.name} age={user.age} />
        </Fragment>
    );
};

// memoized component
const ChildComponent = memo(({ name, age } ) => {
    return (
        <div>user name: {name}, user age: {age}</div>
    )
});


// ======== ---- Вторая идея ----- ========

function areEqual(prevProps, nextProps) {
    // Самый простой способ сравнивать объекты, массивы это через JSON.stringify()
    // хотя этот способ не рекомендуют в официальной документации
    // Можно было сравнивать prevProps.user.name === nextProps.user.name и т.д.
    return JSON.stringify(prevProps) === JSON.stringify(nextProps);
}

const MainComponent = ({
                           user = { name: 'unknown', age: null } // default value for `props.user`
                       }) => {
    return (
        <Fragment>
            <ChildComponent user={user} />
        </Fragment>
    );
};

// memoized component
const ChildComponent = memo(({ user: { name, age } }) => {
    return (
        <div>user name: {name}, user age: {age}</div>
    )
}, areEqual);
