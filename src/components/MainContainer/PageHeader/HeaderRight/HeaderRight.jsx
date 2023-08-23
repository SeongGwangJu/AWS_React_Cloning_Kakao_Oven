import React, { useRef } from 'react';
/** @jsxImportSource @emotion/react */
import * as S from "./Style"
import PageHeader from '../PageHeader';
import { BiSearch } from "react-icons/bi";
import { BsListUl } from "react-icons/bs";
import { PiSquaresFourFill } from "react-icons/pi"

function HeaderRight( {title}) {

    const viewTypes = [useRef(), useRef()];

    return (
        <div css={S.SProjectUtil(title)}>
            <div css={S.SSearchBox}>
                <input type="text" placeholder='프로젝트 검색'/>
                <BiSearch css={S.SSearchIcon} />
            </div>
            <div css={S.SBtnBox}>
                <input type="radio" id='viewType1' name='viewType'
                defaultChecked={true} ref={viewTypes[0]} />
                <label css={S.SBtn} htmlFor='viewType1'>
                    <BsListUl />
                </label>
                <input type="radio" id='viewType2' name='viewType'
                ref={viewTypes[1]}/>
                <label css={S.SBtn}htmlFor="viewType2">
                    <PiSquaresFourFill />
                </label>
            </div>
        </div>
    );
}

export default HeaderRight;