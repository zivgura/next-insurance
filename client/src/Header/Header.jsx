import Logo from '../assets/Logo.png';
import { HeaderContainer } from './Header.styled';

export function Header() {
    return (
        <HeaderContainer className="header">
            <img src={Logo} alt={'Next Movies'}/>
        </HeaderContainer>
    )
}