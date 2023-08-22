/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

export const SFooter = css`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0 auto;
    border-top: 1px solid #dbdbdb;
    width: 1170px;
    height: 60px;
`;
export const SFooterLeft = css`
    align-self: center;
    display: flex;
    border-top: 3px red;
    white-space: nowrap;
`;

export const SServiceRule =css`
    margin-left: 10px;
    color: #44aceb;
    text-decoration: none;
    &:hover {
        color: #2a6496;
        text-decoration: underline;
    }
    `;

export const SPrivacyRule =css`
    margin-left: 10px;
    font-weight: 600;
    color: #44aceb;
    text-decoration: none;
    &:hover {
        color: #2a6496;
        text-decoration: underline;
    }
`;

export const SFooterRight =css`
    display: flex;
    align-items: center;
    height: 100%;
`;

