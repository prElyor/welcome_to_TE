import {useState} from "react";

// ========== --- Я ДУМАЛ В ТАКОМ СЛУЧАЕ ЛУЧШЕ ИСПОЛЬЗОВАТЬ HOC (HIGH ORDER COMPONENT) --- =======
// Общие логики и UI перенесем в HOC

export const HOC = ({mouseEnterCallbak, children}) => {
    const [isActive, setActive] = useState(false);

    const mouseEnterHandler = () => {
        setActive(true);
        mouseEnterCallbak();
    };

    return (
        <div onMouseEnter={mouseEnterHandler} className={isActive ? "active" : ""}>
            {children}
        </div>
    );
};

export const Block1 = ({imgSrc, imgAlt}) => {
    return <img src={imgSrc} alt={imgAlt}/>;
};

export const Block2 = ({content}) => {
    return <p>{content}</p>;
};

export const Block3 = ({userData}) => {
    return (
        <address>
            country: {userData.country}, street: {userData.street}
        </address>
    );
};

// ======= ПРИМЕР ИСПОЛЬЗОВАНИЯ HOC  ===========

export const App = () => {

    return (
        <Fragment>
            <HOC mouseEnterCallbak={() => console.log("hi from Block1")}>
                <Block1
                    imgSrc="https://ohmylook.ua/files/products/42504.290x484.JPG?ce7d3c50d2e66b146f8711dd9eb7af35"
                    imgAlt="my picture"
                />
            </HOC>
            <HOC mouseEnterCallbak={() => console.log("hi from Block2")}>
                <Block2 content="Magdalena"/>
            </HOC>
            <HOC mouseEnterCallbak={() => console.log("hi from Block3")}>
                <Block3 userData={{country: "USA", street: "Maskavas"}}/>
            </HOC>
        </Fragment>
    )

}
