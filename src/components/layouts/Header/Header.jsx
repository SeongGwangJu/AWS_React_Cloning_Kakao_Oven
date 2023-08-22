import React from 'react';
/** @jsxImportSource @emotion/react */
import * as S from "./Style"
import {GoTriangleDown} from "react-icons/go";

function Header(props) {
    const profileImg = "https://www.gravatar.com/avatar/4a1c1ac6442f1e6db4269cd2b66be5f8?d=retro";
    return (
        <div css={S.SHeaderBox}>
            <div css={S.SHeader}>
                <div css={S.SLogoBox}>
                    <span css={S.SLogo}>Oven</span>
                    <span css={S.SLogoBeta}>BETA</span>
                </div>
                <ul css={S.SNavBarBox} >
                    <img css={S.SNavImg} src={profileImg}  />
                    SeongGwangJu
                    <GoTriangleDown fill="white" css={S.SToggleIcon}/>
                </ul>
            </div>
        </div>
    );
}

export default Header;