import { css } from "@emotion/react";

export const SCommon = css`
    * {
    box-sizing: border-box;
    color:#333;
    overflow: hidden;
    }

    *::-webkit-scrollbar{
        border: none;
        width: 5px;

    }
    *::-webkit-scrollbar-thumb{
        border-radius: 5px;
        background-color: #dbdbdb;
    }
`;