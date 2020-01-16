import styled from 'styled-components';
import { fonts, colors, media } from '../../vars';

export const DetailsWrap = styled.section`
    width: 100%;
    height: 100vh;
    // border: 1px solid blue;
    box-shadow: 0px 0px 10px #B7B7B7;
    position: absolute;
    display: flex;
    flex-flow: column nowrap;
    justify-content: flex-start;
    align-items: center;

    ${media.tablet} {
        width: 560px;
        max-height: 800px;
        margin: 0px auto;
        position: relative;
        margin-top: 20px;
    }
`;

    export const DetailsBox = styled.section`
        display: flex;
        flex-flow: column nowrap;
        justify-content: center;
        align-items: center;
        width: 270px;
        margin-top: 40px;

        ${media.phone} {
            width: 340px;
        }
        
        ${media.tablet} {
            width: 400px;
        }
    `;

        export const Input = styled.input`
            width: 100%;
            height: 40px;
            border: 1px solid #D7D7D7;
            margin-bottom: 12px;
            border-radius: 3px;
            background-color: #f8f8f8;
            color: gray;
            padding: 0 10px;
        `;

    export const SubmitBtn = styled.button`
        width: 140px;
        height: 40px;
        border: none;
        background-color: ${colors.green};
        bottom: 30px;
        position: absolute;
        color: ${colors.white};
    `;