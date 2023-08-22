import React from 'react';
/** @jsxImportSource @emotion/react */
import * as S from "./Style"

function Footer(props) {
    return (
        <div css={S.SFooter}>
            <div css={S.SFooterLeft}>
                <div>
                    Oven
                    <a href="" css={S.SServiceRule}>서비스 이용약관 및 운영원칙</a>
                    <a href="" css={S.SPrivacyRule}>개인정보처리방침</a>
                </div>
            </div>
            <div css={S.SFooterRight}>© SeongGwang.</div>
        </div>
    );
}

export default Footer;