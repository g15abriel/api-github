import React, { useState } from "react";
import useGithub from "../../hooks/github-hooks";
import * as S from "./styled";

const Header = () => {
    const {getUser} = useGithub();
    const [usernameForSearch, setUsernameForSearch] = useState()

    const submitGetUser = () => {
        if (!usernameForSearch) return;
        return getUser(usernameForSearch);
    };

    return (
        <header>
            <S.wrapper>
                <input 
                    type="text" 
                    placeholder="Digite o username para pesquisa..."
                    onChange={(event) => setUsernameForSearch(event.target.value)}
                />
                <button type="submit" onClick={submitGetUser}><span>Buscar</span></button>
            </S.wrapper>
        </header>
    )
}

export default Header;