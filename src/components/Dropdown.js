import React, { useEffect, useState } from 'react';

import Label from './Label';
import arrow from './assets/arrow.svg';
import styled from 'styled-components';

const Trigger = styled.div`
    display: flex;
    align-items: center;
    height: 55px;
    background: #ffffff;
    border: 1px solid #dbe2ea;
    box-shadow: 0px 4px 8px rgba(44, 39, 56, 0.04);
    border-radius: 6px;
    padding: 0 16px;
    background-image: url(${arrow});
    background-position: right 11px top 11px;
    background-repeat: no-repeat;

    &:focus {
        border: 2px solid #0880ae;
        transform: translateX(-1px);
    }

    ${(props) =>
        props.active &&
        `
        border: 2px solid #0880ae;
        transform: translateX(-1px);
        background-position: right 9px top 10px;`}
`;

const Container = styled.div`
    position: relative;
`;

const List = styled.div`
    padding: 6px 0;
    margin-top: 4px;
    background: #ffffff;
    border: 1px solid #dbe2ea;
    box-sizing: border-box;
    box-shadow: 0px 4px 8px rgba(44, 39, 56, 0.04),
        0px 20px 20px rgba(44, 39, 56, 0.04);
    border-radius: 6px;
    position: absolute;
    width: 100%;
`;

const Item = styled.div`
    ${(props) => props.selected && 'background: #ebf4f8;'}
    padding: 11px 15px;
    &:hover {
        background: #ebf4f8;
    }
`;

export default function Dropdown({
    label = 'Label',
    items,
    selected,
    setSelected,
}) {
    const [open, setOpen] = useState(false);

    // closing dropdown
    useEffect(() => {
        const listener = () => setOpen(false);
        document.body.addEventListener('click', listener);
        return () => document.body.removeEventListener('click', listener);
    }, []);

    return (
        <Container onClick={(e) => e.stopPropagation()}>
            <Label onClick={() => setOpen(!open)}>{label}</Label>
            <Trigger active={open} onClick={() => setOpen(!open)}>
                {selected.text}
            </Trigger>
            {open && (
                <List>
                    {items.map((item) => (
                        <Item
                            selected={selected.value === item.value}
                            key={item.value}
                            onClick={() => {
                                setSelected(item);
                                setOpen(false);
                            }}
                        >
                            {item.text}
                        </Item>
                    ))}
                </List>
            )}
        </Container>
    );
}
