import React, { useEffect, useState } from "react";
import useGithub from "../../hooks/github-hooks";
import RepositoryItem from "../repository-item";
import * as S from "./styled";

const Repositories = () => {

    const { githubState, getUserRepos, getUserStarred } = useGithub();
    const [hasUserForSearchRepos, setHasUserForSearchRepos] = useState(false);

    useEffect(() => {
        if (githubState.user.login) {
            getUserRepos(githubState.user.login);
            getUserStarred(githubState.user.login);
        }
        setHasUserForSearchRepos(githubState.repositories);
    }, [githubState.user.login]);

    return (
        <>
        {hasUserForSearchRepos ? 
        <S.wrapperTabs
            selectedTabClassName="is-selected"
            selectedTabPanelClassName="is-selected"
        >
            <S.wrapperTabList>
                <S.wrapperTab>Repositories</S.wrapperTab>
                <S.wrapperTab>Starred</S.wrapperTab>
            </S.wrapperTabList>
            <S.wrapperTabPanel>
                <S.wrapperList>
                {githubState.repositories.map((item) => (
                    <RepositoryItem
                    key={item.id}
                    name={item.name}
                    linktoRepo={item.html_url}
                    fullName={item.full_name}
                    />
                ))}
                </S.wrapperList>
            </S.wrapperTabPanel>
            <S.wrapperTabPanel>
                <S.wrapperList>
                {githubState.starred.map((item) => (
                    <RepositoryItem
                    key={item.id}
                    name={item.name}
                    linktoRepo={item.html_url}
                    fullName={item.full_name}
                    />
                ))}
                </S.wrapperList>
            </S.wrapperTabPanel>
        </S.wrapperTabs>
        : <></>}
        </>
    )
}

export default Repositories;