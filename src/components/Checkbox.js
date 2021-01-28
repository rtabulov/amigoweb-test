import React, { useState } from 'react';
import styled from 'styled-components';
import checkmark from './assets/checkbox.svg';
import Label from './Label';

const StyledCheckbox = styled.label`
    display: inline-block;
    width: 28px;
    height: 28px;
    background: #ffffff;
    border: 1px solid #dbe2ea;
    box-shadow: 0px 4px 8px rgba(44, 39, 56, 0.04);
    border-radius: 4px;
    margin-right: 10px;

    ${(props) => props.invalid && `border: 1px solid red;pP`}

    ${(props) =>
        props.checked &&
        `background: #ffffff;
        border: 2px solid #0880ae;
        box-sizing: border-box;
        box-shadow: 0px 4px 8px rgba(44, 39, 56, 0.04);
        border-radius: 4px;
        background-image: url(${checkmark});
        background-size: cover;
        background-position: center;`}
`;

const Container = styled.div`
    margin: 30px 0;
    display: flex;
    align-items: center;
`;

export default function Checkbox({
    children,
    onChange,
    id,
    required,
    value,
    ...other
}) {
    const [touched, setTouched] = useState(false);
    return (
        <Container>
            <input
                style={{ display: 'none' }}
                type="checkbox"
                onChange={(e) => {
                    onChange(e.target.checked);
                    setTouched(true);
                }}
                id={id}
                checked={value}
                {...other}
            />
            <StyledCheckbox
                invalid={required && touched && !value}
                htmlFor={id}
                checked={value}
            />
            <Label style={{ marginBottom: '0' }} block={false} htmlFor={id}>
                {children}
            </Label>
        </Container>
    );
}
