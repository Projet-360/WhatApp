import styled from 'styled-components';

const StyledFormLogin = styled.div`
    .label {
        background: ${({theme}) => theme.searchBar.color.labelBackground};
        border-radius: 0.7rem;
        padding-left: 2.5rem;
        padding-right: 2.5rem;
        height: 2rem;
        width: 18rem;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        margin-bottom: 0.3rem;
    }
    .icon {
        color: ${({theme}) => theme.searchBar.color.icon};
        font-size: 1.3rem;
        margin-right: 1.5rem;
    }
    .input {
        font-size: 1rem;
        font-weight: 400;
        line-height: 1rem;
        min-height: 1rem;
        outline: none;
        width: 100%;
        user-select: text;
        z-index: 1;
        border: none;
        color: ${({theme}) => theme.searchBar.color.input};
        &::placeholder {
            color: ${({theme}) => theme.searchBar.color.placeholder};
            opacity: 1;
            font-size: 1rem;
        }
    }
    .loginBtn {
        width: 100%;
        border-radius: 0.7rem;
        padding-left: 2.5rem;
        padding-right: 2.5rem;
        height: 2rem;
        font-size: 1rem;
        background: ${ ({
                    theme}) => theme.rightImg.color.bgGreen};
        color: white;
        margin-top: 0.3rem;
        outline: none;
        cursor: pointer;
        border: 0; 
             &:hover {
            background: ${ ({theme}) => theme.rightImg.color.darkGreen};
        }
    }
`

export default StyledFormLogin;