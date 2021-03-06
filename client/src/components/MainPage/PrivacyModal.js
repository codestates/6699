import style from './PrivacyModal.module.css';
import {Link} from 'react-router-dom';

function PrivacyModal({privacyModalHandler}){
  return (
    <div className={style.container}>
      <div className={style.containerbg} onClick={privacyModalHandler}/>
      <div className={style.modalbox}>
        {/* 로고 박스 */}
        <div className={style.logobox}>
        <Link to='/mainpage'><div id ={style.logo} /></Link>
          <div className={style.logotitle}>개인정보 수집 및 이용 동의 <strong>[필수]</strong></div>
        </div>

        {/* 텍스트 박스 */}
        <div className={style.textbox}>
          <textarea readOnly className={style.textarea} defaultValue="제1조 (개인정보의 처리 목적) ① 개인정보보호위원회는 개인정보를 다음의 목적을 위해 처리합니다. 처리한 개인정보는 다음의 목적이외의 용도로는 사용되지 않으며 이용 목적이 변경되는 경우에는 개인정보 보호법 제18조에 따라 별도의 동의를 받는 등 필요한 조치를 이행할 예정입니다.
          가. 서비스 제공
          교육 콘텐츠 제공, 본인인증, 증명서발급(교육 수료증) 등 서비스 제공에 관련한 목적으로 개인정보를 처리합니다.
          협박 사례를 적극 신고하시기 바랍니다.
          나. 민원처리
          개인정보 열람, 개인정보 정정·삭제, 개인정보 처리정지 요구, 개인정보 유출사고 신고 등 개인정보와 관련된 민원처리를 목적으로 개인정보를 처리합니다.
          ② 개인정보보호위원회가 개인정보 보호법 제32조에 따라 등록·공개하는 개인정보파일의 처리목적은 다음과 같습니다.
          순번	개인정보파일의 명칭	운영근거	처리목적
          1.교육서비스 제공 사용자 정보	정보주체 동의	개인정보보호 온라인교육에 대한 본인인증, 교육이력관리, 교육수료증 발급
          2.개인정보 열람등요구 처리 사용자 정보	개인정보보호법 제35조-제39조	개인정보 열람등요구 처리 행정업무의 참고 또는 사실 증명
          3.유출사고 신고 처리 사용자 정보	개인정보보호법 제34조
          신용정보의 이용 및 보호에 관한 법률 제39조	유출사고 신고 처리 행정업무의 참고 또는 사실 증명
          4.개인정보보호 전문강사 명단	정보주체 동의	개인정보보호 교육지원(강사풀 제공)
          5.가명정보 전문가 명단	정보주체 동의	가명정보 안전활용 지원(가명정보 전문가풀 제공)
          제2조 (개인정보의 처리 및 보유 기간)
          ① 개인정보보호위원회는 법령에 따른 개인정보 보유·이용기간 또는 정보주체로부터 개인정보를 수집시에 동의받은 개인정보 보유·이용기간 내에서 개인정보를 처리·보유합니다.
          ② 각각의 개인정보 처리 및 보유 기간은 다음과 같습니다.
          순번	개인정보파일의 명칭	운영근거	보유기간
          (목적 달성시)
          1.교육서비스 제공 사용자 정보	정보주체 동의	2년
          2.개인정보 열람등요구 처리 사용자 정보	개인정보보호법 제35조-제39조	3년
          3.유출사고 신고 처리 사용자 정보	개인정보보호법 제34조
          신용정보의 이용 및 보호에 관한 법률 제39조	3년
          4.개인정보보호 전문강사 명단	정보주체 동의	3년
          5.가명정보 전문가 명단	정보주체 동의	3년
          제3조 (개인정보의 제3자 제공)
          ① 개인정보보호위원회는 정보주체의 동의, 법률의 특별한 규정 등 개인정보 보호법 제17조 및 제18조에 해당하는 경우에만 개인정보를 제3자에게 제공합니다.
          ② 개인정보보호위원회는 민원 신청인이 공공기관에 대하여 신청한 개인정보 열람, 정정·삭제, 처리정지민원을 처리하기 위하여 민원 신청인의 개인정보를 개인정보파일 보유기관에게 이송(제공)하고 있으며, <민원사무 처리에 관한 법률>에서 정하는 기간 동안 해당 기관에서 보유 및 이용합니다.
          - 이송(제공)하는 개인정보 항목 : 신청인 성명, 생년월일, 전화번호, 주소
          제4조 (개인정보처리 위탁)
          ① 개인정보보호위원회는 원활한 개인정보 업무처리를 위하여 다음과 같이 개인정보 처리업무를 위탁하고 있습니다.
          가. 위탁처리 기관
          - 수탁업체명 : 한국인터넷진흥원
          - 주소 : 전라남도 나주시 진흥길 9 한국인터넷진흥원
          - 전화 : 061-820-1648
          - 근무시간 : 09:00 - 18:00
          - 위탁업무 : 개인정보보호 포털 운영
          나. 위탁처리 수행업체
          - 수탁업체명 : (주)포뎁스
          - 주소 : 서울특별시 강남구 도곡로 1길 14 삼일프라자 1602호
          - 전화 : 02-6952-8651
          - 근무시간 : 09:00 - 18:00
          - 위탁업무 : 개인정보보호 포털 H/W 및 S/W 유지보수, Help-desk 운영
          다. 위탁처리 수행업체
          - 수탁업체명 : (주)씨드젠
          - 주소 : 서울특별시 구로구 디지털로33길 28
          - 전화 : 02-786-9601
          - 근무시간 : 09:00 - 18:00
          - 위탁업무 : 개인정보보호 및 가명처리 현장 교육 운영, 전문강사단 관리, 교육안내 및 민원처리
          라. 위탁처리 수행업체
          - 수탁업체명: (주)아이엘아이티
          - 주소 : 서울 강남구 테헤란로 10길18
          - 전화 : 070-4333-8387
          - 근무시간 : 09:00 ~ 18:00
          - 위탁업무 : 개인정보 영향평가 교육 및 영향평가사무국 운영
          마. 위탁처리 수행업체
          - 수탁업체명: (주)건담앤컴퍼니
          - 주소 : 서울시 송파구 백제고분로 446 송암빌딩 3층 르호봇송파나루
          - 전화 : 02-419-5152
          - 근무시간 : 09:00 - 18:00
          - 위탁업무 : 가명처리 지원센터 운영 및 유지보수
          바. 위탁처리 수행업체
          - 수탁업체명　: (주)포유씨큐리티
          - 주소 : 서울시 금천구 가산디지털 1로 58 에이스한솔타워 1011호
          - 전화 : 02-6964-7993
          - 근무시간 : 09:00 - 18:00
          - 위탁업무 : 데이터 안전활용 컨설팅 수행
          사. 위탁처리 수행업체
          - 수탁업체명: (주)컬처메이커스
          - 주소 : 서울 중구 퇴계로 36길 2
          - 전화 : 070-4849-5227
          - 근무시간 : 09:00 - 18:00
          - 위탁업무 : 가명처리 검증전문가 선발, 전문가 풀 구성 및 운영
          (안내사항)
          가. 아이핀 인증 - (주)코리아크레딧뷰로
          나. 휴대폰 인증 - (주)코리아크레딧뷰로
          제5조 (정보주체와 법정대리인의 권리·의무 및 그 행사방법에 관한 사항)
          ① 정보주체(만 14세 미만인 경우에는 법정대리인을 말함)는 언제든지 개인정보보호위원회가 보유하고 있는 개인정보에 대하여 개인정보 열람․정정․삭제․처리정지 요구 등의 권리를 행사할 수 있습니다.
          ② 제1항에 따른 권리 행사는 <개인정보보호 포털 (www.privacy.go.kr)>의 “개인정보 열람․정정․삭제․처리정지 요구”를 통하여 하실 수 있으며, 이에 대해 지체 없이 조치하겠습니다.
          ☞ 개인정보 열람․정정․삭제․처리정지 요구 바로가기 기관명은 개인정보보호위원회로, 파일명은 “교육서비스 제공 사용자 정보”, “개인정보 열람등요구 처리 사용자 정보”, “유출사고 신고 처리 사용자 정보”, “개인정보보호 전문강사 명단”으로 검색)
          기관명과 파일명을 입력 하는 예시 (기관명 -개인정보보호위원회) (파일명 -교육서비스 제공 사용자 정보)

          ③ 제1항에 따른 권리 행사는 정보주체의 법정대리인이나 위임을 받은 자 등 대리인을 통하여 하실 수 있습니다.
          ④ 개인정보 열람 및 처리정지 요구는 개인정보보호법 제35조 제4항, 제37조 제2항에 의하여 정보주체의 권리가 제한 될 수 있습니다.
          ⑤ 개인정보의 정정 및 삭제 요구는 다른 법령에서 그 개인정보가 수집 대상으로 명시되어 있는 경우에는 그 삭제를 요구할 수 없습니다.
          ⑥ 정보주체 권리에 따른 열람의 요구, 정정·삭제의 요구, 처리정지의 요구 시 열람 등 요구를 한 자가 본인이거나 정당한 대리인인지를 확인합니다.
          제6조 (처리하는 개인정보의 항목)
          개인정보보호위원회는 다음의 개인정보 항목을 처리하고 있습니다.

          순번 개인정보파일의 명칭	개인정보파일에 기록되는 개인정보의 항목
          1.교육서비스 제공 사용자 정보	성명, 생년월일, 기관명, 직위, 전화번호, 이메일, 중복가입확인정보(DI)
          2.개인정보 열람등요구 처리 사용자 정보	성명, 생년월일, 전화번호, 주소, 휴대폰번호(선택), fax번호(선택), 이메일(선택), 중복가입확인정보(DI)
          3.유출사고 신고 처리 사용자 정보	성명, 기관명, 부서, 직위, 전화번호, 이메일
          4.개인정보보호 전문강사 명단	성명, 소속, 직급, 강의경력, 연락처, 이메일, 강의지역
          5.가명정보 전문가 명단	성명, 소속, 직위/담당업무, 이메일, 연락처, 주요경력
          제7조 (개인정보 파기 절차 및 방법)
          ① 개인정보보호위원회는 원칙적으로 개인정보 처리목적이 달성된 경우에는 지체없이 해당 개인정보를 파기합니다. 다만, 다른 법률에 따라 보존하여야하는 경우에는 그러하지 않습니다. 파기의 절차, 기한 및 방법은 다음과 같습니다.
          가. 파기절차
          불필요한 개인정보 및 개인정보파일은 개인정보책임자의 책임 하에 내부방침 절차에 따라 다음과 같이 처리하고 있습니다.
          - 개인정보의 파기
          보유기간이 경과한 개인정보는 종료일로부터 지체 없이 파기합니다.
          - 개인정보파일의 파기
          개인정보파일의 처리 목적 달성, 해당 서비스의 폐지, 사업의 종료 등 그 개인정보파일이 불필요하게 되었을 때에는 개인정보의 처리가 불필요한 것으로 인정되는 날로부터 지체 없이 그 개인정보파일을 파기합니다.
          나. 파기방법
          1) 전자적 형태의 정보는 기록을 재생할 수 없는 기술적 방법을 사용합니다.
          2) 종이에 출력된 개인정보는 분쇄기로 분쇄하거나 소각을 통하여 파기합니다.
          제8조 (개인정보 자동 수집 장치의 설치•운영 및 거부에 관한 사항)
          ① 개인정보보호위원회는 정보주체의 이용정보를 저장하고 수시로 불러오는 '쿠키(cookie)'를 사용합니다.
          ② 쿠키는 웹사이트를 운영하는데 이용되는 서버(http)가 이용자의 컴퓨터 브라우저에게 보내는 소량의 정보이며 이용자들이 PC 컴퓨터내의 하드디스크에 저장되기도 합니다.
          가. 쿠키의 사용목적 : 이용자의 접속빈도나 방문시간 등을 파악하여 이용자에게 보다 편리한 서비스를 제공하기 위해 사용됩니다.
          나. 쿠키의 설치·운영 및 거부: 브라우저 옵션 설정을 통해 쿠키 허용, 쿠키 차단 등의 설정을 할 수 있습니다.
          - Internet Explorer : 웹브라우저 우측 상단의 도구 메뉴 > 인터넷 옵션 > 개인정보 > 설정 > 고급
          - Edge: 웹브라우저 우측 상단의 설정 메뉴 > 쿠키 및 사이트 권한 > 쿠키 및 사이트 데이터 관리 및 삭제
          - Chrome: 웹브라우저 우측 상단의 설정 메뉴 > 개인정보 및 보안 > 쿠키 및 기타 사이트 데이터
          다. 쿠키 저장을 거부 또는 차단할 경우 서비스 이용에 어려움이 발생할 수 있습니다.
          제9조 (개인정보의 안전성 확보 조치)
          개인정보보호위원회는 「개인정보보호법」 제29조에 따라 다음과 같이 안전성 확보에 필요한 기술적, 관리적, 물리적 조치를 하고 있습니다.

          1. 내부관리계획의 수립 및 시행
          개인정보보호위원회의 내부관리계획 수립 및 시행은 개인정보보호위원회의 내부관리 지침을 준수하여 시행합니다.

          2. 개인정보 취급 담당자의 최소화 및 교육
          개인정보를 취급하는 담당자를 지정하고 최소화하여 개인정보를 관리하는 대책을 시행하고 있습니다.

          3. 개인정보에 대한 접근 제한
          개인정보를 처리하는 데이터베이스시스템에 대한 접근권한의 부여, 변경, 말소를 통하여 개인정보에 대한 접근통제를 위하여 필요한 조치를 하고 있으며 침입차단시스템을 이용하여 외부로부터의 무단 접근을 통제하고 있습니다.

          4. 접속기록의 보관 및 위변조 방지
          개인정보처리시스템에 접속한 기록(웹 로그, 요약정보 등)을 최소 1년 이상 보관, 관리하고 있으며, 접속 기록이 위변조 및 도난, 분실되지 않도록 보안기능을 사용하고 있습니다.

          5. 개인정보의 암호화
          이용자의 개인정보는 암호화 되어 저장 및 관리되고 있습니다. 또한 중요한 데이터는 저장 및 전송 시 암호화하여 사용하는 등의 별도 보안기능을 사용하고 있습니다.

          6. 해킹 등에 대비한 기술적 대책
          개인정보보호위원회는 해킹이나 컴퓨터 바이러스 등에 의한 개인정보 유출 및 훼손을 막기 위하여 보안프로그램을 설치하고 주기적인 갱신·점검을 하며 외부로부터 접근이 통제된 구역에 시스템을 설치하고 기술적/물리적으로 감시 및 차단하고 있습니다. 또한 네트워크 트래픽의 통제(Monitoring)는 물론 불법적으로 정보를 변경하는 등의 시도를 탐지하고 있습니다.

          7. 비인가자에 대한 출입 통제
          개인정보를 보관하고 있는 개인정보시스템의 물리적 보관 장소를 별도로 두고 이에 대해 출입통제 절차를 수립, 운영하고 있습니다.

          제10조 (권익침해 구제방법)
          정보주체는 아래의 기관에 대해 개인정보 침해에 대한 피해구제, 상담 등을 문의하실 수 있습니다. <아래의 기관은 개인정보보호 포털과는 별개의 기관으로서, 개인정보보호 포털의 자체적인 개인정보 불만처리, 피해구제 결과에 만족하지 못하시거나 보다 자세한 도움이 필요하시면 문의하여 주시기 바랍니다>

          ▶ 개인정보 침해신고센터 (한국인터넷진흥원 운영)
          - 소관업무 : 개인정보 침해사실 신고, 상담 신청
          - 홈페이지 : privacy.kisa.or.kr
          - 전화 : (국번없이) 118
          - 주소 : 전라남도 나주시 진흥길 9 한국인터넷진흥원
          ▶ 개인정보 분쟁조정위원회
          - 소관업무 : 개인정보 분쟁조정신청, 집단분쟁조정 (민사적 해결)
          - 홈페이지 : www.kopico.go.kr
          - 전화 : 1833-6972
          - 주소 : 서울특별시 종로구 세종대로 209 정부서울청사 12층
          ▶ 대검찰청 사이버수사과:
          - (국번없이) 1301, privacy@spo.go.kr (www.spo.go.kr)
          ▶ 경찰청 사이버수사국
          - (국번없이) 182 (ecrm.cyber.go.kr)
          또한, 개인정보의 열람, 정정·삭제, 처리정지 등에 대한 정보주체자의 요구에 대하여 공공기관의 장이 행한 처분 또는 부작위로 인하여 권리 또는 이익을 침해 받은 자는 행정심판법이 정하는 바에 따라 행정심판을 청구할 수 있습니다.

          ☞ 온라인행정심판(www.simpan.go.kr)의 전화번호 안내 참조

          제11조(개인정보 열람청구)
          ① 정보주체는 개인정보 보호법 제35조에 따른 개인정보의 열람 청구를 아래의 부서에 할 수 있습니다. 개인정보보호위원회는 정보주체의 개인정보 열람청구가 신속하게 처리되도록 노력하겠습니다.
          ▶ 개인정보 열람청구 접수·처리 부서
          부서명 : 자율보호정책과
          담당자 : 김명숙
          연락처 : <전화번호 02-2100-3082>, < 팩스번호 02-2100-3005>
          ② 정보주체께서는 제1항의 열람청구 접수·처리부서 이외에, 개인정보보호위원회의 ‘개인정보보호 포털’ 웹사이트(www.privacy.go.kr)를 통하여서도 개인정보 열람청구를 하실 수 있습니다.
          ▶ 개인정보보호위원회 개인정보보호 포털 → 민원마당 → 개인정보 열람등 요구
          제12조 (개인정보보호 '분야별' 책임관 및 담당자 연락처)
          개인정보보호위원회는 개인정보를 보호하고 개인정보와 관련한 불만을 처리하기 위하여 아래와 같이 개인정보 보호책임자 및 실무담당자를 지정하고 있습니다. (개인정보보호법 제31조 제1항에 따른 개인정보 보호책임자)

          구분	부서명	성명	연락처
          개인정보보호 책임자	개인정보정책국장	이정렬	02-2100-3040
          개인정보보호 분야별책임관	개인정보보호정책과장	이병남	02-2100-3051
          개인정보보호 담당자	개인정보보호정책과	박정민	02-2100-3059
          제13조 (개인정보 처리방침의 변경)
          ① 본 방침은 2021년 05월 26일부터 시행됩니다.
          ② 이전의 개인정보 처리방침은 아래에서 확인하실 수 있습니다." />
        </div>

        {/* 버튼 박스 */}
        <div className={style.buttonbox}>
          <div className={style.loginbutton} onClick={privacyModalHandler}>뒤 로 가 기</div>
        </div>
      </div>
    </div>
  )
}
export default PrivacyModal;