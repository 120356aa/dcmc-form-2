import styled from 'styled-components';
import { colors, fonts, media } from '../../vars';

export const HeaderWrap = styled.header`
    width: 100%;
    border-bottom: 3px solid ${colors.green};
    background-color: ${colors.green};
    height: 56px;
    display: flex;
    flex-flow: row nowrap;
    justify-content: flex-start;
    align-items: center;

    ${media.tablet} {
        min-height: 60px;
        justify-content: center;
    }
`;

    export const H1 = styled.h1`
        color: ${colors.white};
        font-size: 18px;
        font-family: "Times New Roman", Times, serif;
        font-weight: 600;
        margin-left: 14px;

        ${media.tablet} {
            font-size: 20px;
            margin-left: 0;
        }

        span {
            font-size: 16px;
        }
    `;

    export const Close = styled.img`
        width: 20px;
        height: 20px;
        // border: 1px solid red;
        margin-right: 15px;
    `;