/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

export const SProjectUtil = (title) => {

    let display = "none"

    // 프로젝트대쉬보드일 때만 HeaderRight가 보임
    if(title ==="프로젝트 대쉬보드") {
        display = "flex"
    }

    return css`
    display: ${display};
    height: 34px;
    `;
}

export const SSearchBox = css`
    position: relative;
    margin-right: 20px;
    display: flex;

    & > input {
        transition: all 0.1s ease;
        border: 0.8px solid #dbdbdb;
        outline: none;
        border-radius: 2px;
        padding: 6px 42.5px 6px 12px;
        height: 34px;
        width: 226.5px;
        &:focus {
            border-color: #3498DB;
            box-shadow: 0px 0px 10px 0px #3f9fDf77;
        }
    }
`;

export const SSearchIcon = css`
    position: absolute;
    transform: translateY(-50%);
    top: 50%;
    right:8px;
    font-size: 18px;
`;

export const SBtnBox = css`
    display: flex;
    justify-content: center;
    align-items: center;
    & > input {
        display: none;
    }

    & > input:checked + label {
        background-color: #e6e6e6;
        box-shadow: inset 0px 0px 10px 0px #bbb;
    }

`;

export const SBtn = css`
    display: flex;
    justify-content: center;
    align-items: center;

    border: 1px solid #dbdbdb;
    width: 40px;
    height: 34px;
    font-size: 18px;

    &:first-of-type {
        border-top-left-radius: 3px;
        border-bottom-left-radius: 3px;
    }
    &:last-child {
        border-left : none;
        border-top-right-radius: 3px;
        border-bottom-right-radius: 3px;
        /* border만큼 빼줘야 정사각형 */
        width: 39px
    }
`;