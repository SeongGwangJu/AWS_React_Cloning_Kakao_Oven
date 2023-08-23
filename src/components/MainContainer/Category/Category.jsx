import React, { useState } from 'react';
/** @jsxImportSource @emotion/react */
import * as S from "./Style"
import { Navigate, useLocation, useNavigate } from 'react-router-dom';

function Category( { title }) {

    const navigate = useNavigate();
    const location = useLocation();
    const [ isSelected, setIsSelected ] = useState(false);

    const CategoryList = [
        {
            id: 1,
            name: "나의 프로젝트",
            path: "/projects/my"
        },
        {
            id: 2,
            name: "나에게 공유된 프로젝트",
            path: "/projects/shared"
        }
    ]

        const handleCategoryClick = (path) => {
            navigate(path);
            setIsSelected(true);
        }
    return (
            <div css={S.SLayout}>
                <ul css={S.SListBox}>
                    {CategoryList.map(category => (
                        <li css={S.SList(location.pathname.startsWith(category.path))} key={category.id}
                        onClick={() => {handleCategoryClick(category.path);
                        }}>
                            {category.name}
                        </li>
                    ))}
                </ul>
            </div>
    );
}

export default Category;