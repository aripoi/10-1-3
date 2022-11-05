import React, {useState, useContext } from "react";
import './PageColor.css';

const ColorContext = React.createContext(null); //생성할 컨텍스트의 기본 매개변수를 'nill'로 설정

function PageColor() {
    const [isDark, setIsDark] = useState(false); // 논리타입의 state 변수 isDark와 해당 변수의 핸들링 state 함수 setIsDark 생성. isDark의 기본값을 false로 설정

    return (
        <ColorContext.Provider value={{isDark, setIsDark}}>  // 컨텍스트의 제공자. props 매개변수를 'isDark'와 'setIsDark' 로 변경 Page 컴포넌트에 전달
            <Page />
        </ColorContext.Provider>
    )
}

function Page() { //Header, Content, Footer 컴포넌트를 가지는 Page 컴포넌트 생성
    return (
        <div className='page'>
            <Header />
            <Content />
            <Footer ></Footer>
        </div>
    )
}

function Header() {
    const { isDark } = useContext(ColorContext); //컨텍스트 구독 요청. Provider의 'isDark' 매개변수를 가져옴
    return (
        <header className="header"
            style={{
                backgroundColor: isDark ? 'black' : 'lightgray',  /*isDark 가 true 이면 black, 아니면 lightgray로 background-color설정*/
                color: isDark ? 'white' : 'black', /*isDark 가 true 이면 white, 아니면 black으로 color설정*/
            }}>
            <h2>컨텍스트 강의</h2>
        </header>
    )
}

function Content() {
    const { isDark } = useContext(ColorContext); //컨텍스트 구독 요청. Provider의 'isDark' 매개변수를 가져옴
    return (
        <content className='content'
            style={{
                backgroundColor: isDark ? 'black' : 'lightgray', /*isDark 가 true 이면 black, 아니면 lightgray로 background-color설정*/
                color: isDark ? 'white' : 'black', /*isDark 가 true 이면 white, 아니면 black으로 color설정*/
            }}>
            <p>오늘은 리액트 10주차 강의이며 Context를 배우고 있습니다.</p>
        </content>
    )
}

function Footer() { 
    const { isDark, setIsDark } = useContext(ColorContext); //컨텍스트 구독 요청. Provider의 'isDark'와 'setIsDark' 매개변수를 가져옴
    const toggleColor = () => { // 버튼의 onClick 함수 정의 - isDark 의 Boolean 값을 'flase -> true' / 'true -> false' 로 변경
        setIsDark(!isDark);
    }
    return (
        <footer className='footer'
            style={{
                backgroundColor: isDark ? 'black' : 'lightgray', /*isDark 가 true 이면 black, 아니면 lightgray로 background-color설정*/
                color: isDark ? 'white' : 'black', /*isDark 가 true 이면 white, 아니면 black으로 color설정*/
            }}>
            <button className="button" onClick={toggleColor}>색상반전</button> {/*버튼 클릭시 onClick의 toggleColor 함수를 통해 색상 반전 효과 추가*/}
        </footer>
    )
}

export default PageColor;
