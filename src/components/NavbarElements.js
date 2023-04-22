import styled from 'styled-components'
import {Link as LinkR} from 'react-router-dom'

export const Nav = styled.nav`
    height: 70px;
    display: flex;
    justify-content: left;
    align-items: left;
    font-size: 1rem;
    position: sticky;
    top: 30px;
    z-index: 10;

    @media screen and (max-width:960px) {
        transition: 0.8s all ease;
    }
`;
export const NavbarContainer = styled.div`
    display: flex;
    justify-content: space-between;
    height: 70px;
    z-index: 1;
    width: 100%;
    padding: 0 24px;
    max-width: 1100px;
`;

export const NavLogo = styled(LinkR) `
    justify-self: flex-start;
    cursor: pointer;
    display: flex;
    align-items: left;
    margin-left: 24px;
    height:140px;
`;