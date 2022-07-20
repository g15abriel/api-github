import React from "react";
import * as S from "./styled";

const RepositoryItem = ({name, linktoRepo, fullName}) => {
    return(
        <S.wrapper>
            <S.wrapperTitle>{name}</S.wrapperTitle>
            <S.wrapperFullName>Full name:</S.wrapperFullName>
            <S.wrapperLink href={linktoRepo} target="_brank" rel = "noreferrer">
                {fullName}
            </S.wrapperLink>
        </S.wrapper>
    );
};

export default RepositoryItem;