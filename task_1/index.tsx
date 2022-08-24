import { Component, memo, PureComponent } from 'react';

type IUser = {
    name: string
    age: number
}

type IProps = {
    user: IUser
}

function areEqual(prevProps: any, nextProps: any) {
    // Самый простой способ сравнивать объекты, массивы это через JSON.stringify()
    // хотя этот способ не рекомендуют в официальной документации
    // Можно было сравнивать prevProps.user.name === nextProps.user.name и т.д.
    return JSON.stringify(prevProps) === JSON.stringify(nextProps);
}

// functional component
const FirstComponent = memo(({ name, age }: IUser) => (
    <div>
        my name is {name}, my age is {age}
    </div>
));

// functional component
const SecondComponent = memo(({ user: { name, age } }: IProps) => (
    <div>
        my name is {name}, my age is {age}
    </div>
), areEqual);

// class component
class ThirdComponent extends PureComponent<IUser> {
    render() {
        return (
            <div>
                my name is {this.props.name}, my age is {this.props.age}
            </div>
        )
    }
}

// class component
class FourthComponent extends Component<IProps> {

    shouldComponentUpdate(nextProps) {
        return !areEqual(this.props, nextProps);
    }

    render() {
        return (
            <div>
                my name is {this.props.user.name}, my age is {this.props.user.age}
            </div>
        )
    }
}
