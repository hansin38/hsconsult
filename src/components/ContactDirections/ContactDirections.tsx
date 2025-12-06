import React, { Fragment } from 'react';
import {
    ContactDirectionsContainer,
    ContactDirectionsImageWrapper,
    ContactDirectionsSection,
    ContactDirectionsTextWrpper,
    SectionContents,
    SectionTitle,
} from 'src/components/ContactDirections/ContactDirections.styles';
import BreadCrumb from '@/components/BreadCrumb/BreadCrumb';
import { MainLocationMap, MainLocationMapContainer } from '@/components/Main/MainLocation/MainLocation.styles';
import MapButton from '@/components/svg/MapButton';

const ContactDirections = (): React.ReactElement => {
    return (
        <Fragment>
            <ContactDirectionsImageWrapper image={'/images/cover_location.webp'}>Contact</ContactDirectionsImageWrapper>
            <ContactDirectionsContainer>
                <BreadCrumb />
                <ContactDirectionsTextWrpper>
                    <h3>찾아오시는 길</h3>
                    <h5>한신 콘설탄트까지 오시는 길에 대해 안내드립니다.</h5>
                </ContactDirectionsTextWrpper>
                <ContactDirectionsSection>
                    <SectionTitle>본사</SectionTitle>
                    <SectionContents>
                        <MainLocationMapContainer>
                            <MainLocationMap src={'/images/loc_busan.webp'} />
                        </MainLocationMapContainer>
                        <div>
                            <div>
                                <div>주소</div>
                                <div>
                                    <b>부산광역시 중구 고가길32 (보수동1가)</b>
                                    <MapButton
                                        style={{ zoom: 0.6, marginBlock: '-6px', marginLeft: '5px', cursor: 'pointer' }}
                                        onClick={() => window.open('https://naver.me/FM11bWsM', '_blank')}
                                    />
                                </div>
                            </div>
                            <div>
                                <div>전화</div>
                                <div>051-254-8141</div>
                            </div>
                            <div>
                                <div>팩스</div>
                                <div>051-254-8648</div>
                            </div>
                            <div>
                                <div>이메일</div>
                                <div>
                                    <a href="mailto:hscont@chol.com">hscont@chol.com</a>
                                </div>
                            </div>
                        </div>
                    </SectionContents>
                </ContactDirectionsSection>
                <ContactDirectionsSection>
                    <SectionTitle>서울지사</SectionTitle>
                    <SectionContents>
                        <MainLocationMapContainer>
                            <MainLocationMap src={'/images/loc_seoul.webp'} />
                        </MainLocationMapContainer>
                        <div>
                            <div>
                                <div>주소</div>
                                <div>
                                    <b>서울특별시 송파구 가락로240 (방이동)</b>
                                    <MapButton
                                        style={{ zoom: 0.6, marginBlock: '-6px', marginLeft: '5px', cursor: 'pointer' }}
                                        onClick={() => window.open('https://naver.me/xHDDusLr', '_blank')}
                                    />
                                </div>
                            </div>
                            <div>
                                <div>전화</div>
                                <div>02-417-6761</div>
                            </div>
                            <div>
                                <div>팩스</div>
                                <div>02-417-3302</div>
                            </div>
                            <div>
                                <div>이메일</div>
                                <div>
                                    <a href="mailto:hansin38@chol.com">hansin38@chol.com</a>
                                </div>
                            </div>
                        </div>
                    </SectionContents>
                </ContactDirectionsSection>
            </ContactDirectionsContainer>
        </Fragment>
    );
};

export default ContactDirections;
