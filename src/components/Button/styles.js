import styled from 'styled-components';

export const ButtonContainer = styled.button`
    align-self: center;
    justify-self: center;
    width: 70px;
    height: 70px;
    font-size: 1.5rem;
    font-weight: 600;
    border: 1px solid transparent;
    color: #555;
    border-radius: 9px;
    background: none;
    box-shadow: #d3d3d3 0px 1px 4px;
    cursor: pointer;
    transition: all .5s ease;
    &:hover{
        transform: scale(1.1);

    }
    &.zero{
        height: 100%;
        grid-row: span 2;
    }
    &.color{
        background: #75b4c0;
        color: #fff;
    }
`