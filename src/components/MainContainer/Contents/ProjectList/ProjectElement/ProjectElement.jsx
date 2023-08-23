import React from 'react';
/** @jsxImportSource @emotion/react */
import * as S from "./Style"
import {GoTriangleDown} from "react-icons/go";
import {MdSettings} from "react-icons/md";
import {BiTime} from "react-icons/bi";

function ProjectElement(props) {
    return (
        <div css={S.SProjectWrapper}>
            <div css={S.SProjectListBox}>
                <div css={S.SProjectList}>
                    <div>
                        <input type="checkbox" />
                    </div>
                    <div css={S.SProjectInfo }>
                        <div css={S.SimgBox}>
                            <img src="https://t1.daumcdn.net/oven/web/542CF1754D191D002B" 
                            css={S.SThumbnail}/>
                        </div>
                        <div css={S.SProjectContents}>
                            <h1 css={S.SName}>Todo</h1>
                            <h2 css={S.SDescription}>산대특2회차_TodoList만들기(HTML,CSS,JavaScript)</h2>
                            <div css={S.SLine}/>
                            <div css={S.SProjectContentsBottom}>
                                <span>
                                    <BiTime css={S.SDateIcon}/>
                                    16일 전</span>
                                <span css={S.STestBox}>로그인없이 테스트 가능</span>
                            </div>
                        </div>
                    </div>
                </div>
                <button css={S.SSettingBtn}>
                    <MdSettings fill="#888888"/>
                    <GoTriangleDown fill="#888888"/>
                </button>
            </div>
        </div>
    );
}

export default ProjectElement;