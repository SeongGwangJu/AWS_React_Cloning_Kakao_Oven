import React from 'react';
/** @jsxImportSource @emotion/react */
import * as S from "./Style"
import Category from '../../MainContainer/Category/Category';
import PageHeader from '../../MainContainer/PageHeader/PageHeader';

function MainLayout( {children} ) {
    return (
        <div css={S.SLayout}>
            <PageHeader title={"프로젝트대쉬보드"}/>
            <Category />
            
        </div>
    );
}

export default MainLayout;