import React from 'react';
/** @jsxImportSource @emotion/react */
import * as S from "./Style"
import MainContainer from '../../../components/MainContainer/MainContainer';
import PageHeader from '../../../components/MainContainer/PageHeader/PageHeader';
import Category from '../../../components/MainContainer/Category/Category';
import ProjectList from '../../../components/MainContainer/Contents/ProjectList/ProjectList';
import SharedProjectList from '../../../components/MainContainer/Contents/SharedProjectList/SharedProjectList';

function SharedProject(props) {
    return (
        <div>
            <MainContainer title={"프로젝트 대쉬보드"}>
                <PageHeader title={"프로젝트 대쉬보드"} />
                <div css={S.SUnderPageHeader}>
                    <Category />
                    <SharedProjectList title={"프로젝트 대쉬보드"} />
                </div>
            </MainContainer>
        </div>
    );
}

export default SharedProject;