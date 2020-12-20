import styled, {css} from 'styled-components';

const StyledRightImg = styled.div `
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100vw;
    height: 100vh;
    background: ${ ({
    theme}) => theme.rightImg.color.bgGrey};

    ${props => props.right && css `
        width: 100%;
        height: 100%;
    `}

    .rightImg--image {
        width: 8rem;
        height: 8rem;
        margin-bottom: 1rem;
    }
    .rightImg--title {
        font-size: 2rem;
        margin-bottom: 1rem;
        color: ${ ({
        theme}) => theme.rightImg.color.darkGrey};
        font-weight: 300;
    }
    .rightImg--div {
        margin-bottom: 1rem;
        width: 100%;
    }
    .rightImg--p {
        text-align: center;
        color: ${ ({
            theme}) => theme.rightImg.color.mediumGrey};
        font-size: 1rem;
        line-height: 2rem;
        margin-bottom: 1rem;
        margin-top: 0;
    }
    .rightImg--divider {
        width: 100%;
        height: 0.1rem;
        background: ${ ({
                theme}) => theme.rightImg.color.lightGrey};
        margin-bottom: 0.1rem;
    }
`; 

export default StyledRightImg;