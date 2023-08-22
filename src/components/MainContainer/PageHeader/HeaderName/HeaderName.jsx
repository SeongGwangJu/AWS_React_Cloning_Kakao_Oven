import React from 'react';
/** @jsxImportSource @emotion/react */
import * as S from "./Style"
function HeaderName( {title, show} ) {

    const viewtype = "show"
    if(viewtype==={show}) {
    
    }
    return (
            <span css={S.STitle}>{title}</span>

    );
}

export default HeaderName;