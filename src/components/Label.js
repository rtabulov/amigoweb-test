import styled from 'styled-components';

const Label = styled.label`
    font-weight: 500;
    color: #756f86;

    ${(props) => (props.block ? 'display: block;' : 'display: inline-block;')}
    margin-bottom: 7px;
`;

Label.defaultProps = {
    block: true,
};

export default Label;
