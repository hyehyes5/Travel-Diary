import React from 'react';
import styled from 'styled-components';

const DarkBackground = styled.div`
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background: rgba(0,0,0,0.8);
`;

const DialogBlock = styled.div`
    width: 320px;
    padding: 1.5rem;
    background: white;
    border-radius: 2px;
`;

const DetailButton = styled.button`
    background: white;
    border: none;
    outline: none;
`;

const ResetButton = styled.button`
    background-color: white;
    border: none;
    outline: none;
`;

const ChooseButton = styled.button`
    background: white;
    border: none;
    outline: none;
`;

function DetailDialog() {
    return (
        <DarkBackground>
            <DialogBlock>
                <DetailButton></DetailButton>
                <ResetButton></ResetButton>
                <ChooseButton></ChooseButton>
            </DialogBlock>
        </DarkBackground>
    );
}

export default DetailDialog;