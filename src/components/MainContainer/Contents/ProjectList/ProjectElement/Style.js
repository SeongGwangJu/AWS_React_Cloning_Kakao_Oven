/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

export const SProjectWrapper = css`
    margin-top: 20px;
    width: 878px;
`;

export const SProjectListBox = css`
    display: flex;
    justify-content: space-between;
    border: 1px solid #dbdbdb;
    width: 100%;
    height: 161px;
    border-radius: 4px;
`;

export const SProjectList = css`
    display: flex;
`;

export const SCheckboxBox = css`
    display: flex;
`;
export const SProjectInfo = css`
    display: flex;
    margin-left: 10px;
    align-items: center;
`;

export const SimgBox = css`
    width: 180px;
    height: 120px;
    display: flex;
    align-items: center;
    justify-content: center;
`;
export const SThumbnail = css`

`;

export const SProjectContents = css`
    display: flex;
    flex-direction: column;
    
`;

export const SName = css`
    color:#3498db;
    font-size: 24px;
    cursor: pointer;
    &:hover {
        color: #2a6496;
        text-decoration: underline;
    }
    font-family: Verdana, Geneva, Tahoma, sans-serif;
`;

export const SDescription = css`
    margin-top: 15px;
    font-size: 14px;
`;

export const SLine = css`
    width: 620px;
    margin: 15px 0px;
    height: 1px;
    border: 0.5px solid #dbdbdb60;
`;

export const SProjectContentsBottom = css`
    font-weight: 600;
    font-size: 12px;
`;

export const SDateIcon = css`
    font-size: 12px;
    margin-right: 3px;
`;

export const STestBox = css`
    margin-left: 30px;
    background-color: #5cb85c;
    color: white;
    padding: 1px 7px;
    border: none;
    border-radius: 4px;
    font-size: 11px;
`;

export const SSettingBtn = css`
    margin-top: 12px;
    margin-right: 10px;
    padding-right: 1px;
    padding-top: 1px;
    width: 34.2px;
    height: 21.4px;
    background-color: transparent;
    border: 0.5px solid transparent;
    white-space: nowrap;
    cursor: pointer;

    & > path {
        color: #888888;
    }

    &:hover {
        background-color: #e6e6e6;
        border: 0.5px solid #cccccc;
    }
`;