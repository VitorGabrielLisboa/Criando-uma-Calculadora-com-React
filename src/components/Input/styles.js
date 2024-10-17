import styled from 'styled-components';

export const InputContainer = styled.div`
    position: relative;
    width: 100%;
    height: 160px;

    display: flex;
    align-items: center;
    justify-content: flex-end;
    font-size: 24px;
    font-family: 'Poppins', sans-serif;

    input{
        width: 100%;
        background: #fafafa;
        height: 160px;
        border: none;
        outline: none;
        border-radius: .5rem;
        box-shadow: #d3d3d3 3px 3px 6px 0px inset, rgba(255, 255, 255, 0.5) -3px -3px 6px 1px inset;
        text-align: right;
        padding: 0 .5rem;
        color: #555;
        font-size: 1.5rem;
        font-family: 'Poppins', sans-serif;
        font-weight: 700;
    }
    span{
        position: absolute;
        top: 5px;
        font-size: .9rem;
        right: 10px;
        color: #666;
    }

    @media screen and (min-width: 375px) {
        height: 85px;
            input{
                height: 85px;
            }
        }


`