import React from "react";
import Header from "../header";
import * as S from "./styled";

function Layout({children}){
    return(
        <S.wrapperLayout>
            <Header/>  
            {children}  
        </S.wrapperLayout>
    )
}

export default Layout;