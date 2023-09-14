import React from 'react';
import Image from 'next/image';
import { HelloContainer, HelloImageWrapper, HelloTextWrpper, ProfileImageWrapper } from 'src/components/Hello/Hello.styles';

const Hello = (): React.ReactElement => {
  return (
    <HelloContainer>
      <HelloImageWrapper>
        <Image src="/images/hello.jpg" layout={'fill'} alt="상단 이미지 영역" />
      </HelloImageWrapper>
      <ProfileImageWrapper>
        <Image src="/images/profile.jpg" width={240} height={320} alt="상단 이미지 영역" />
        <p>
          대표이사 <b>홍길동</b>
        </p>
      </ProfileImageWrapper>
      <HelloTextWrpper>
        <h3>
          한신콘설탄트는 설명을 적어주세요 입니다.
          <br /> 이렇게 저렇게 세상에 도움이 되는 일을 하고 있습니다.
        </h3>
        <h5>
          2007년 설립된 (주)서현기술단은 토목(철도), 토질 및 기초, 토목구조, 공공측량을 바탕으로 철도계획, 설계, 감리, 타당성조사, 컨설턴트 등 토목엔지니어링 서비스를 제공하는
          회사입니다.
        </h5>
        <h5>
          (주)서현기술단은 투명하고 합리적인 경영을 바탕으로 최고의 기술진들이 모여 탄탄한 기술력과 열정으로 더욱 가치 있고 미래 지향적인 Project를 향해 정진하고 있으며 자원부족
          국가에서 경쟁력은 오직 인재라는 생각을 염두에 두고 인력을 더욱 보강하고 훌륭한 인재양성을 위해 노력하고 있습니다.
        </h5>
        <h5>
          저희 임직원 모두는 서현기술단에 관심과 사랑을 주시는 모든 고객께 감사를 드리며, 21세기 동북아시아의 허브로 자리매김하여 세계로 뻗어 나가는 관문이 될 철도의 미래, 그
          중심에 서현기술단이 최고의 서비스를 제공할 수 있도록 최선을 다하겠습니다.
        </h5>
      </HelloTextWrpper>
    </HelloContainer>
  );
};

export default Hello;
