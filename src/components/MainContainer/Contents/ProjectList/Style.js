/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

export const SLayout = css`
    width: 100%;
`;
export const SBtns = css`
    display: flex;
    justify-content: space-between;
    width: 100%;
`;

export const SAllSelect = css`
    background-color: white;
    padding: 6px 12px;
    border: 1px solid #dbdbdb;
    border-radius: 2px;
    font-size: 14px;
    width: 85.32px;
    height: 33.47px;
    cursor: pointer;
    &:hover {
        background-color: #e6e6e6;
    }
`;
export const SAddProject = (title) => {
    let display = "none"

    // 프로젝트대쉬보드일 때 보임
    if(title ==="프로젝트 대쉬보드") {
        display = "flex"
    }

    return css`
    display: ${display};
    background-color: #3498db;
    border: 1px solid transparent;
    border-radius: 4px;
    color: white;
    justify-content: center;
    align-items: center;
    padding: 6px 12px;
    font-size: 14px;
    width: 191.34px;
    height: 33.63px;
    cursor: pointer;
    white-space: nowrap;
    &:hover {
        background-color: #357ebd;
    }
    `
};

export const SPlusIcon = css`
    font-size: 16px;
    margin-right: 4px;
    & > path {
        color: white;
    }
`;