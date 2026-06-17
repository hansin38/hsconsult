import { useQuery } from 'react-query';
import Layout from '@/components/layout/Layout';
import {
    ActionSection,
    BusinessSection,
    CarouselSection,
    GoDetail,
    LocationSection,
    Section,
    SectionBody,
    SectionBodyItem,
    SectionDescription,
    SectionTitle,
} from '@/components/Main/Main.styles';
import MainLocation from '@/components/Main/MainLocation/MainLocation';
import Carousel from '@/components/Carousel/Carousel';
import { INITIAL_CAROUSEL_ITEMS } from '@/shared/constants/common.constants';
import { TArticle } from '@/shared/types/api.types';
import { getPage } from '@/shared/apis/appApi';
import ArticleList from '@/components/ArticleList/ArticleList';

const Home = () => {
    const queryData = useQuery(['notice', 1], () => getPage({ table: 'notice', limit: 10, page: Number(1) }));

    return (
        <Layout transparentHeader>
            <CarouselSection>
                <Carousel data={INITIAL_CAROUSEL_ITEMS} />
            </CarouselSection>
            <BusinessSection>
                <SectionTitle>비즈니스 분야</SectionTitle>
                <SectionDescription>
                    1979년 창업이래 40년간 전기분야를 필두로 정보통신분야 및 철도신호분야에 이르기까지 시스템분야
                    엔지니어링사업에 참여하였으며, <br />
                    송변전 시설을 비롯하여 도로, 항만, 공항, 철도 등의 공공시설 및 각종 건설사업에 대한 설계, 감리사업을
                    성공적으로 이끌어 왔습니다.
                </SectionDescription>
                <SectionBody>
                    <SectionBodyItem href="/field/architecture">
                        <img src="/images/architecture_sec.webp" alt="" />
                        <div>설계분야</div>
                        <div>
                            철도분야를 주축으로 송,변전설비, 공항, 도로, 공공 시설 및 기타의 설계에 대하여 많은 기본 및
                            실시설계 경험을 갖고있으며 그러한 바탕으로 기술역량에 대한 무한한 잠재력과 사업수행능력을
                            인정받아 사업영역을 성공적으로 넓혀왔으며 앞으로 이와 같은 신뢰를 바탕으로 설계 분야를
                            더더욱 발전시킬 것입니다.
                        </div>
                    </SectionBodyItem>
                    <SectionBodyItem href="/field/supervision/electrical-field">
                        <img src="/images/supervision_sec.webp" alt="" />
                        <div>감리분야</div>
                        <div>
                            <p>
                                전기철도분야를 주축으로 송,변전설비, 공항, 도로, 공공 시설 및 기타의 감리사업에 대하여
                                많은 경험을 갖고있으며 그러한 바탕으로 기술역량에 대한 무한한 잠재력과 사업수행능력을
                                인정받아 사업영역을 성공적으로 넓혀왔으며 앞으로 이와 같은 신뢰를 바탕으로 감리사업
                                분야를 더더욱 발전시킬 것입니다.
                            </p>
                        </div>
                    </SectionBodyItem>
                    <SectionBodyItem href="/field/construction">
                        <img src="/images/rail_sec.webp" alt="" />
                        <div>철도시공분야</div>
                        <div>
                            <p>
                                철도분야를 주축으로 송,변전설비, 공항, 도로, 공공 시설 및 기타의 시공부분에 대하여 많은
                                경험을 갖고있으며 그러한 바탕으로 기술역량에 대한 무한한 잠재력과 사업수행능력을
                                인정받아 사업영역을 성공적으로 넓혀왔으며 앞으로 이와 같은 신뢰를 바탕으로 시공분야를
                                더더욱 발전시킬 것입니다.
                            </p>
                        </div>
                    </SectionBodyItem>
                </SectionBody>
            </BusinessSection>
            <ActionSection>
                {/*<SectionTitle>한신콘설탄트는 이렇게 합니다.</SectionTitle>
        <SectionDescription color={'rgba(255, 255, 255, 0.60)'}>
          피고인의 자백이 고문·폭행·협박·구속의 부당한 장기화 또는 기망 기타의 방법에 의하여 자의로 진술된 것이 아니라고 인정될 때<br />
          또는 정식재판에 있어서 피고인의 자백이 그에게 불리한 유일한 증거일 때에는 이를 유죄의 증거로 삼거나 이를 이유로 처벌할 수 없다.
        </SectionDescription>*/}
                <SectionBody>
                    <SectionBodyItem href={'/intro/hello'}>
                        <img src="/images/icon_intro.svg" alt="" />
                        <div>회사소개</div>
                        <div>인사말과 조직도, 연혁을 확인할 수 있습니다.</div>
                    </SectionBodyItem>
                    <SectionBodyItem href={'/customer/notice'}>
                        <img src="/images/icon_customer.svg" alt="" />
                        <div>고객지원</div>
                        <div>공지사항과 문의를 할 수 있습니다.</div>
                    </SectionBodyItem>
                    <SectionBodyItem href={'/recruit/talent'}>
                        <img src="/images/icon_recruit.svg" alt="" />
                        <div>채용정보</div>
                        <div>채용정보를 확인하실 수 있습니다.</div>
                    </SectionBodyItem>
                </SectionBody>
            </ActionSection>
            <LocationSection multi>
                <Section>
                    <SectionTitle largeGap>
                        공지사항
                        <GoDetail href={'/customer/notice'} />
                    </SectionTitle>
                    <SectionBody>
                        <ArticleList list={(queryData?.data?.data?.list || []) as TArticle[]} table={'notice'} />
                    </SectionBody>
                </Section>
                <Section>
                    <SectionTitle largeGap>
                        찾아오시는 길<GoDetail href={'/contact/directions'} />
                    </SectionTitle>
                    <SectionBody>
                        <MainLocation />
                    </SectionBody>
                </Section>
            </LocationSection>
        </Layout>
    );
};

export default Home;
