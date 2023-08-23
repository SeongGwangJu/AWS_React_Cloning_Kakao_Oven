import React from 'react';
/** @jsxImportSource @emotion/react */
import * as S from "./Style"
function HeaderName( {title, isShowUtil} ) {

    return (
            <span css={S.STitle}>{title}</span>

    );
}

export default HeaderName;