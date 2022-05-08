import { Link, NavLink } from "react-router-dom"
import styled from "styled-components"
import { theme } from "../../theme/theme"
import Button from "../Form/Button"
import Logo from "../svgs/Logo"


const HeaderDiv = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${theme.colors.color01};
  padding: .5rem 3rem;
  box-shadow: 0 2px 4px rgba(0,0,0,.2);
`

const UlStyled = styled.ul`
  display: flex;
  align-items: center;
`

const Header = () => {
  return (
    <HeaderDiv>
      <Link to='/'>
        <Logo />
      </Link>
      <UlStyled>
        <NavLink to='/login'>
          <Button marginConfig={'0 1.5rem 0 0'}>
            login
          </Button>
        </NavLink>
        <NavLink to='/criar'>
          <Button>
            cadastro
          </Button>
        </NavLink>
      </UlStyled>
    </HeaderDiv>
  )
}

export default Header