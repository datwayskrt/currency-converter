import styled from 'styled-components'
import { NavLink as Link } from 'react-router-dom'

export const Container = styled.header`
    width: 100%;
    position: relative;
    top: 0;
    left: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: var(--color-background-secondary);

    /* border: 2px solid red; */

    @media(max-width: 1200px){
        padding: 0 2rem;
    }

    @media(max-width: 768px){
        padding: 0.75rem;
    }
`;

export const Nav = styled.nav`
    width: 100%;
    max-width: 1120px;
    height: 64px;
    display: flex;
    align-items: center;
    justify-content: space-between;

    /* border: 2px solid green; */

    @media (max-width: 480px){
        height: 40px;
    }
`;

// export const Label = styled.p`
//     color: #777;
//     font-size: 1rem;
//     font-weight: 500;
//     margin-left: 0.5rem;
// `;

export const NavLogo = styled.img`
    height: 65%;
    cursor: pointer;
`;

export const NavMenu = styled.ul`
    display: flex;
    flex-direction: row;
    list-style: none;
    text-decoration: none;
    gap: 35px;
    margin-left: 80px;
    /* border: 2px solid red; */
`;

export const NavItem = styled.li`
    text-decoration: none;
`;

export const NavLink = styled(Link)`
    color: var(--text-color-secondary);
    font-size: 1rem;
    font-weight: 500;
    text-decoration: none;
`;

export const MobileMenuIcon = styled.div``;

export const ContactButton = styled.button`
    cursor: pointer;
    color: #777;
    font-size: 1rem;
    padding: 0.7rem;
    font-weight: 500;
    background-color: #FAFAFA;
    border: 2px solid #777;

    &:hover{
        transition: 0.5s;
        color: #FAFAFA;
        border: 2px solid #2A3D7D;
        background-color: #2A3D7D;
    }

    &.active {
        color: #FAFAFA;
        border: 2px solid #2A3D7D;
        background-color: #2A3D7D;
    } 
`;