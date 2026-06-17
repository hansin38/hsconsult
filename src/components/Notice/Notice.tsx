import { UseQueryResult } from 'react-query';
import { IGetPageReturn, TArticle } from '@/shared/types/api.types';
import ArticleList from '@/components/ArticleList/ArticleList';
import { NoticeContainer, NoticeHelmet, NoticeHelmetLeft, NoticeSearch, NoticeTextWrpper } from './Notice.styles';

const Notice = ({ data: res }: UseQueryResult<IGetPageReturn, unknown>) => {
    return (
        <NoticeContainer>
            <NoticeTextWrpper>
                <h3>공지사항</h3>
                <h5>한신콘설탄트의 소식에 대해 알려드립니다.</h5>
            </NoticeTextWrpper>
            <NoticeHelmet>
                <NoticeHelmetLeft>{res?.data?.total || 0}개</NoticeHelmetLeft>
                <NoticeSearch>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M17.31 15.9L20.71 19.29C20.8993 19.4778 21.0058 19.7334 21.0058 20C21.0058 20.2666 20.8993 20.5222 20.71 20.71C20.5222 20.8993 20.2666 21.0058 20 21.0058C19.7334 21.0058 19.4778 20.8993 19.29 20.71L15.9 17.31C14.5025 18.407 12.7767 19.0022 11 19C6.58172 19 3 15.4183 3 11C3 6.58172 6.58172 3 11 3C15.4183 3 19 6.58172 19 11C19.0022 12.7767 18.407 14.5025 17.31 15.9ZM11 5C7.68629 5 5 7.68629 5 11C5 14.3137 7.68629 17 11 17C14.3137 17 17 14.3137 17 11C17 7.68629 14.3137 5 11 5Z"
                            fill="#7C7C7C"
                        />
                    </svg>
                    <input type="text" placeholder={'검색어를 입력해주세요.'} />
                </NoticeSearch>
            </NoticeHelmet>
            <ArticleList list={(res?.data?.list as TArticle[]) || []} table={'notice'} />
        </NoticeContainer>
    );
};

export default Notice;
