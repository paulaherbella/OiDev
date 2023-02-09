import { Avatar } from "../avatar/avatar";
import * as S from "./styles";

const highlightsList = [
    {
        image: "https://via.placeholder.com/90",
        text: 'Parceiros',
    },

    {
        image: "https://via.placeholder.com/90",
        text: 'Desafios',
    },

    {
        image: "https://via.placeholder.com/90",
        text: 'Comunidade',
    },

    {
        image: "https://via.placeholder.com/90",
        text: 'Faculdades',
    },

    {
        image: "https://via.placeholder.com/90",
        text: 'Modelo Educacional',
    }
]

export const Highlights = () => {
    return (
        <S.Wrapper>
            {highlightsList.map((highlight, index) => (
                <S.HighlightItem key={index}>
                    <Avatar size="small" imagePath={highlight.image}/>
                    <S.HighlightText size="small">{highlight.text}</S.HighlightText>
                </S.HighlightItem>           
            ))}            
        </S.Wrapper>
    )
};
