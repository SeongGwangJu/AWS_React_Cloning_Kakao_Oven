import React from 'react';
/** @jsxImportSource @emotion/react */
import * as S from "./Style"
import Category from '../../MainContainer/Category/Category';
import PageHeader from '../../MainContainer/PageHeader/PageHeader';
import HeaderName from '../../MainContainer/PageHeader/HeaderName/HeaderName';
import MainContainer from '../../MainContainer/MainContainer';

function MainLayout( {children} ) {
    return (
        <div css={S.SLayout}>
            {children}
        </div>
    );
}

export default MainLayout;