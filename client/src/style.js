import styled from "styled-components";

export const Input = styled.input`
    padding: 1rem 2rem;
    background-color: #fff;
    border: none;
    border-radius: 0.5rem;

    @media screen and (max-width: 768px){
        background-color: black;
    }
`

export const Button = styled.button`
    padding: 1rem 2rem;
    background-color: ${props => props.primary ? '#6247aa' : 'transparent'};
    color: ${props => props.primary ? 'white' : '#6247aa'};
    border: ${props => props.primary ? 'none' : '1px solid #6247aa'};
    border-radius: 0.5rem;
    cursor: pointer;
`
