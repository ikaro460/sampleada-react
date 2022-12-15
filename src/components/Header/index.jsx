import { NavBar } from "../NavBar"
import { StyledContainer } from "./style"
import logo from "../../assets/logo-sampleada.png"

export const Header = () => {
    return (
        <StyledContainer>
            <figure>
                <img src={logo} alt="logo-sampleada" />
            </figure>
            <NavBar />
        </StyledContainer>
    )
}