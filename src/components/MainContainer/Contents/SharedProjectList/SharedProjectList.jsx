import React from 'react';
/** @jsxImportSource @emotion/react */
import * as S from "./Style"
import AllSelectBtn from '../AllSelectBtn';

function SharedProjectList(props) {
    return (
        <>
            <AllSelectBtn />
            <div css={S.SProjectWrapper}>
                <div css={S.SNoData}>
                <img src ="https://t1.daumcdn.net/oven/web/542CF1754D191D002B" />
                <span css={S.SNoDataMessage}>프로젝트가 없습니다. </span>
                </div>
            </div>
        </>
    );
}

export default SharedProjectList;