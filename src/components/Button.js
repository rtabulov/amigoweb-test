import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
    ${(props) =>
        props.block ? 'display: block; width: 100%;' : 'display: inline-block;'}
    padding: 18px 65px 17px;
    margin: 15px 0;
    background-color: #0880ae;
    border: none;
    border-radius: 6px;
    box-shadow: 0px 4px 8px 0px rgba(44, 39, 56, 0.08),
        0px 2px 4px 0px rgba(44, 39, 56, 0.08);
    font-family: inherit;
    font-weight: 500;
    color: #ebf4f8;
    font-style: normal;
    line-height: 21px;
    transition: 0.15s;
    border: 2px solid #0880ae;
    cursor: pointer;
    &:hover {
        box-shadow: 0px 12px 24px rgba(44, 39, 56, 0.08),
            0px 24px 48px rgba(44, 39, 56, 0.16);
    }
    &:active {
        box-shadow: 0px 2px 4px rgba(44, 39, 56, 0.0001),
            0px 4px 8px rgba(44, 39, 56, 0.08);
        border: 2px solid rgba(44, 39, 56, 0.86);
    }
    &:disabled {
        cursor: not-allowed;
        color: rgba(44, 39, 56, 0.5);

        background: #dbe2ea;
        border-color: #dbe2ea;
        box-shadow: 0px 4px 8px rgba(44, 39, 56, 0.08);
    }
`;

export default function Button({ children, as, disabled = false, ...other }) {
    return (
        <StyledButton disabled={disabled} as={as} {...other}>
            {children}
        </StyledButton>
    );
}
