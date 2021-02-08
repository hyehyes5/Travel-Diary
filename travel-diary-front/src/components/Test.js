import React, { useRef, useState, useEffect } from 'react';
import Dialog from './Dialog';
import styled from 'styled-components';

const TestPageBlock = styled.div`
    width: 360px;
    height: 760px;
    border: solid 3px #c9c9c9;
    background-color: #ffffff;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

function Test() {

    const [isOpen, setOpen] = useState(false);
    const modalEl = useRef(null);

    const handleClickOutside = ({target}) => {
        if (isOpen && (!modalEl.current || !modalEl.current.contains(target))) {
            setOpen(false);
        }
    };

    useEffect(() => {
        window.addEventListener('click', handleClickOutside);
        return () => {
            window.removeEventListener('click', handleClickOutside);
        };
    }, [isOpen]);

    return (
        <TestPageBlock>
            <button onClick={() => setOpen(true)}></button>
            { isOpen && <Dialog innerref={modalEl}/> }
        </TestPageBlock>
    );
}

export default Test;