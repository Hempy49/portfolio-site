import styled from 'styled-components';
import { Link } from 'react-router';

export const NavigationContainer = styled.div`
    position: fixed;
    right: 0;
    right: 2em;
    top: 1.5em;
`;

export const NavItem = styled(Link)`
    margin-right: 30px;
    cursor: pointer;
    &:hover {
      color: blue;
    }
`;

export const StyledA = styled.a`
    margin-right: 30px;
    cursor: pointer;
    &:hover {
      color: blue;
    }
`;
