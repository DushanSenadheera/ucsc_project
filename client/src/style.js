import styled from '@emotion/styled';
import { Button as MuiButton } from '@mui/material';

export const Button = styled(MuiButton)`
    background-color: ${props => props.variant === 'contained' ? '#fff' : 'transparent'};
    border: 1px solid #fff;
    border-radius: 1.5rem;
    padding: 0.25rem 1.25rem;
    color: ${props => props.variant === 'contained' ? 'var(--primary-color)' : '#fff'};
    font-weight: bold;
    font-size: small;

    &:hover {
        background-color: #fff;
        color: var(--primary-color);
    }
`

export const Logo = styled.div`
    
    font-family: "Cinzel", serif;
    font-size: xx-large;
    color: #fff;
    cursor: pointer;
`
