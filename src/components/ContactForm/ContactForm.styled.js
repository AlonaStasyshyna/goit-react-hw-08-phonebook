import styled from 'styled-components';

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    gap: 8px;
    padding: 8px;
    width: 208px;

    border: 1px solid gray;
`

export const Label = styled.label`
    display: flex;
    flex-direction: column;
    gap: 4px;

    width: 200px;
    font-weight: 600;
`

export const Input = styled.input`
    padding: 4px;
`

export const Button = styled.button`
    cursor: pointer;
    width: 200px;
    padding: 4px;
    border-radius: 2px;
    border: 1px solid gray;
    background-color: whitesmoke;
`