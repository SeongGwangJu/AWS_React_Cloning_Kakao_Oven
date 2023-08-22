import React from 'react';
/** @jsxImportSource @emotion/react */
import * as S from "./Style"
import HeaderName from './HeaderName/HeaderName';
function PageHeader( {title ,show} ) {
    return (
        <div css={S.SLayout}>
            <HeaderName title={"프로젝트 대쉬보드"} />
            <div show={"show"}>
                <input type="text"></input>
                <div>
                    <input type="radio"></input>
                    <input type="radio"></input>
                </div>
            </div>

        </div>
    );
}

export default PageHeader;