import React from 'react';
/** @jsxImportSource @emotion/react */
import * as S from "./Style"
import PageHeader from './PageHeader/PageHeader';
import Category from './Category/Category';
import ProjectList from './Contents/ProjectList/ProjectList';

function MainContainer( {children, title} ) {
    return (
        <div css={S.SLayout}>
            {children}
        </div>
    );
}

export default MainContainer;