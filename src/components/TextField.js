import React, { useState } from 'react';
import styled from 'styled-components';
import Label from './Label';

const Input = styled.input`
    background: #ffffff;
    border: 1px solid #dbe2ea;
    box-shadow: 0px 4px 8px rgba(44, 39, 56, 0.04);
    height: 50px;
    border-radius: 6px;
    font-weight: normal;
    padding: 16px;
    display: block;
    width: 100%;

    color: #2c2738;

    &::placeholder {
        color: #7c9cbf;
    }

    &:focus {
        transform: translateX(-1px);
        background: #ffffff;
        border: 2px solid #0880ae;
        outline: none;
    }
`;

const Field = styled.div`
    margin-top: 5px;
    margin-bottom: 10px;
`;

const Message = styled.p`
    height: 18px;
    margin: 0;
    margin-top: 8px;
    font-size: 14px;
    line-height: 18px;

    color: #ff7171;
`;

export default function TextField({
    placeholder = 'Placeholder',
    errorMessage,
    label = 'Label',
    validate = () => true,
    onChange,
    ...other
}) {
    const [touched, setTouched] = useState(false);
    return (
        <Field>
            <Label htmlFor={other.id}>{label}</Label>
            <Input
                onChange={(e) => onChange(e.target.value)}
                onBlur={() => setTouched(true)}
                placeholder={placeholder}
                {...other}
            />
            <Message>{touched && errorMessage}</Message>
        </Field>
    );
}
