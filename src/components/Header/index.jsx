import { NavBar } from "../NavBar"
import { StyledContainer } from "./style"

export const Header = () => {
    return (
        <StyledContainer>
            <figure>
                <img src="../../../assets/Identidade Sampleada branca-03 1.png" alt="logo-sampleada" />
            </figure>
            <NavBar />
        </StyledContainer>
    )
}