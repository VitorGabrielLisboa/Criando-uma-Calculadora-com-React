import styled from 'styled-components';
export const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center; 
    background: #fff;
    padding : 0 2rem ;
    @media screen and (min-width: 375px){
        background-color: #e7e7e7;
        
    }
`

export const Content = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    @media screen and (min-width: 375px) {
        background-color: #fff;
        padding: 1rem;
        box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
        border-radius: .5rem;
        width: 350px;
        min-height: 350px;
        max-height: fit-content;  
    }
`

export const ButtonBox = styled.div`
    display: grid;
    grid-template-columns: repeat(4, .3fr);
    grid-template-rows: repeat(5, 1fr);
    gap: 10px;
`