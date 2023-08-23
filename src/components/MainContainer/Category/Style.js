/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

export const SUnderPageHeader = css`
    padding: 20px 0px;
    border-top: 1px solid #dbdbdb;
    display: flex;
    width: 100%;
`;

export const SLayout = css`
    margin-right: 30px;
    width: 262px;
`;
export const SListBox = css`
    cursor: pointer;
    width: 262px;
`;
export const SList = (isSelected) => css`
    display: flex;
    align-items: center;
    padding: 10px 15px;
    width: 100%;
    height: 40px;
    background-color: ${isSelected ? "#3498DB" : "transparent"};
    color: ${isSelected ? "white" : "black"};
    font-size: 14px;

    &:hover {
        ${!isSelected && "background-color: #eee;"}
    }
`;

