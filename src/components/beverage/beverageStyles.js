import styled from 'styled-components';
import { fonts, colors, media } from '../../vars';

export const BeverageWrap = styled.section`
    width: 100%;
    min-height: 100%;
    // border: 1px solid blue;
    box-shadow: 0px 0px 10px #B7B7B7;
    position: absolute;
    display: flex;
    flex-flow: column nowrap;
    justify-content: flex-start;
    align-items: center;

    ${media.tablet} {
        overflow-y: auto;
    }
`;

    export const BeverageBox = styled.section`
        display: flex;
        flex-flow: column nowrap;
        justify-content: center;
        align-items: center;
        width: 270px;
        margin-top: 30px;

        ${media.phone} {
            width: 340px;
        }
        
        ${media.tablet} {
            width: 400px;
        }

        .head {
            font-family: ${fonts.text};
            font-size: 16px;
            font-weight: bold;
            color: ${colors.green};
            align-self: flex-start;
            margin-bottom: 8px;
            margin-top: 20px;

            ${media.largeTablet} {
                font-size: 18px;
                margin-bottom: 10px;
            }

            ${media.desktop} {
                font-size: 20px;
                margin-bottom: 14px;
            }
        }
    `;

        export const Section = styled.section`
            width: 100%;
            display: flex;
            flex-flow: row nowrap;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 20px;

            // ACTIVE CLASS FOR SELECTED ITEM
            .active {
                border: 6px solid ${colors.green};
                background-color: ${colors.green};
                ${media.tablet} {
                    border: 8px solid ${colors.green};
                }
            }

            ${media.largeTablet} {
                // margin-top: 10px;
                margin-bottom: 20px;
            }

            ${media.modern} {
                // margin-top: 20px;
                margin-bottom: 30px;
            }
        `;

            export const Item = styled.div`
                width: 40%;
                // border: 1px solid blue;
                display: flex;
                flex-flow: column nowrap;
                justify-content: center;
                align-items: center;
                // box-shadow: 0px 0px 10px #CDCDCD;
                outline: 1px solid ${colors.gray};
                border: 6px solid transparent;
                cursor: pointer;

                ${media.tablet} {
                    border: 8px solid transparent;
                }

                &:hover {
                    border: 6px solid ${colors.green};
                    background-color: ${colors.green};

                    ${media.tablet} {
                        border: 8px solid ${colors.green};
                    }

                    .heading {
                        font-weight: 800;
                        color: ${colors.white};
                        text-shadow: 0px 0px 4px #626262;
                    }
                }

                .activeHeading {
                    font-weight: bold;
                    color: ${colors.white};
                    text-shadow: 0px 0px 4px #626262;
                }
            `;

                export const Heading = styled.h3`
                    font-family: ${fonts.text};
                    font-size: 15px;
                    padding: 14px;
                    font-weight: 600;
                `;

                export const IMG = styled.img`
                    // border: 1px solid green;
                    width: 100%;
                    height: 130px;
                `;

    export const ErrorMSG = styled.span`
        font-size: 13px;
        font-family: ${fonts.text};
        color: red;
        text-align: left;
        align-self: flex-start;
        padding-bottom: 8px;
        margin: 6px 0 0 0;
    `;