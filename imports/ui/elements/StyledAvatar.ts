import styled, {css} from 'styled-components';

const StyledAvatar = styled.div`
    width: 50px;
    height: 50px;
    border-radius: 50%;
    position: relative;
    overflow: hidden;
    background: ${({ theme }) => theme.avatar.color.background};
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;

    ${props => props.large && css`
        width: 80px;
        height: auto;
        border-radius: 50%;
    `}
    ${props => props.big && css`
        width: 20rem;
        height: 20rem;
        border-radius: 50%;
    `}

    .avatar--img {
        width: 100%;
        height: 100%;
    }
    .avatar--overlay {
        position: absolute;
        width: 100%;
        height: 100%;
        background: rgba(0,0,0,0.4);
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        color: white;
        font-size: 2.4rem;
    }
    .overlay--icon {
        margin-bottom: 1.3rem;
    }
    .overlay--text {
        font-size: 1.4rem;
    }
    input[type=file] {
        display: none;
    }
`

export default StyledAvatar;
