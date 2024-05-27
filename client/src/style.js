import styled from '@emotion/styled';
import { Button as MuiButton } from '@mui/material';
import { Accordion as MuiAccordion } from '@mui/material';
import { AccordionSummary as MuiAccordionSummary } from '@mui/material';
import { AccordionDetails as MuiAccordionDetails } from '@mui/material';

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

export const Accordion = styled(MuiAccordion)`
    border-radius: 1rem;
    margin-bottom: 1rem;
    box-shadow: none;
`
export const AccordionSummary = styled(MuiAccordionSummary)`
    border-radius: 1rem;
    font-weight: bold;
    box-shadow: none;
`

export const AccordionDetails = styled(MuiAccordionDetails)`
    border-radius: 1rem;
    padding: 1rem;
    box-shadow: none;
    font-size: small;
`