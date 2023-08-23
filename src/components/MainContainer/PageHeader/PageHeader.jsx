import React, { useRef } from 'react';
/** @jsxImportSource @emotion/react */
import * as S from "./Style"
import HeaderName from './HeaderName/HeaderName';
import MainLayout from '../../layouts/MainLayout/MainLayout';
import HeaderRight from './HeaderRight/HeaderRight';


function PageHeader( {children, title} ) {
    return (
        <div css={S.SLayout}>
            <HeaderName title={title}  />
            <HeaderRight title={title} />
            {children}
        </div>
    );
}

export default PageHeader;