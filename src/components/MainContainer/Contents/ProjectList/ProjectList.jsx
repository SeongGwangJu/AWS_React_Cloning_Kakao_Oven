import React from 'react';
/** @jsxImportSource @emotion/react */
import * as S from "./Style"
import { TbSquareRoundedPlusFilled } from "react-icons/tb"
import AllSelectBtn from '../AllSelectBtn';
import ProjectElement from './ProjectElement/ProjectElement';

function ProjectList( {children, title} ) {
    return (
        <div css={S.SLayout}>
            <div css={S.SBtns}>
                <AllSelectBtn />
                <button css={S.SAddProject(title)}>
                    <TbSquareRoundedPlusFilled  css={S.SPlusIcon} />
                    새로운 프로젝트 만들기
                    </button>
            </div>
            <ProjectElement />
        </div>
    );
}

export default ProjectList;