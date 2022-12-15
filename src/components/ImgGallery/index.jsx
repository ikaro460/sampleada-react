import { StyledContainer } from "./style"
import firstPic from "../../assets/pic-1.jpg"
import secondPic from "../../assets/pic-2.jpg"

export const ImgGallery = () => {
    return (
        <StyledContainer>
            <ul>
                <li>
                    <figure>
                        <img src={firstPic} alt="first-pic" />
                    </figure>
                </li>
                <li>
                    <figure>
                        <img src={secondPic} alt="second-pic" />
                    </figure>
                </li>
            </ul>
        </StyledContainer>
    )
}