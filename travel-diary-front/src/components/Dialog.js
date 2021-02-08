import React from 'react';
import styled, { keyframes } from 'styled-components';

const fadeIn = keyframes`
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
    }
`;

const slideUp = keyframes`
    from {
        transform: translateY(200px);
    }
    to {
        transform: translateY(0px);
    }
`;
const DarkBackground = styled.div`
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background: rgba(51, 51, 51, 0.6);

    animation-duration: 0.25s;
    animation-timing-function: ease-out;
    animation-name: ${fadeIn};
    animation-fill-mode: forwards;
`;

const DialogBlock = styled.div`
    width: 328px;
    height: 188px;
    padding: 10px;
    background: #ffffff;
    border-radius: 20px;

    animation-duration: 0.25s;
    animation-timing-function: ease-out;
    animation-name: ${slideUp};
    animation-fill-mode: forwards;
`;

const DetailButton = styled.button`
    width: 65px;
    height: 16px;
    background: #ffffff;
    border: none;
    outline: none;
    color: #000000;
    cursor: pointer;
    font-family: 'Noto Sans KR';
    font-size: 13.5px; 
`;

const Wrapper = styled.div`
    & + & {
        margin-top: 16px;
    }
`;


function Dialog() {
    return (
        <DarkBackground>
            <DialogBlock>
                <Wrapper>
                <DetailButton onClick={() => alert("강남구")}>강남구</DetailButton>
                <DetailButton onClick={() => alert("강동구")}>강동구</DetailButton>
                <DetailButton onClick={() => alert("지역구")}>강서구</DetailButton>
                <DetailButton onClick={() => alert("지역구")}>강북구</DetailButton>
                <DetailButton onClick={() => alert("지역구")}>관악구</DetailButton>
                </Wrapper>
                <Wrapper>
                <DetailButton onClick={() => alert("지역구")}>광진구</DetailButton>
                <DetailButton onClick={() => alert("지역구")}>구로구</DetailButton>
                <DetailButton onClick={() => alert("지역구")}>금천구</DetailButton>
                <DetailButton onClick={() => alert("지역구")}>노원구</DetailButton>
                <DetailButton onClick={() => alert("지역구")}>동대문구</DetailButton>
                </Wrapper>
                <Wrapper>
                <DetailButton onClick={() => alert("지역구")}>도봉구</DetailButton>
                <DetailButton onClick={() => alert("지역구")}>동작구</DetailButton>
                <DetailButton onClick={() => alert("지역구")}>마포구</DetailButton>
                <DetailButton onClick={() => alert("지역구")}>서대문구</DetailButton>
                <DetailButton onClick={() => alert("지역구")}>성동구</DetailButton>
                </Wrapper>
                <Wrapper>
                <DetailButton onClick={() => alert("지역구")}>성북구</DetailButton>
                <DetailButton onClick={() => alert("지역구")}>서초구</DetailButton>
                <DetailButton onClick={() => alert("지역구")}>송파구</DetailButton>
                <DetailButton onClick={() => alert("지역구")}>영등포구</DetailButton>
                <DetailButton onClick={() => alert("지역구")}>용산구</DetailButton>
                </Wrapper>
                <Wrapper>
                <DetailButton onClick={() => alert("지역구")}>양천구</DetailButton>
                <DetailButton onClick={() => alert("지역구")}>은평구</DetailButton>
                <DetailButton onClick={() => alert("지역구")}>종로구</DetailButton>
                <DetailButton onClick={() => alert("지역구")}>중구</DetailButton>
                <DetailButton onClick={() => alert("지역구")}>중랑구</DetailButton>
                </Wrapper>
            </DialogBlock>
        </DarkBackground>
    );
}

export default React.memo(Dialog);