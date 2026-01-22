// 바디워시
// 제품명, 제품 이미지, 제품 상세 설명, 권장 소비자 가격

import { Link } from "react-router-dom";
import bodywashimg from "../assets/bodywash.png"
import washstate from "../assets/washstate.png"


export default function BodyWash() {

  return (
    <div style={wrap}>
      <div style={card}>
        <Link to="/product" style={{textAlign: "left", width: "100%", marginBottom: 0, display: "inline-block" }}>← Products</Link>
        <h2 style={{textAlign: "left", width: "100%", margin: 0 }}>Body Wash</h2>
        <p style={{textAlign: "left", width: "100%", margin: 0}}>
          저자극 세정 / 피부 장벽을 고려한 포뮬러.

        </p>

        <img src={bodywashimg} alt="조선더마코스 로고"  style={{ width: 300 }} />
          <h1 style={{margin: 0}}>
            괭생이모자반 바디워시
          </h1>

        <div>
          제품 권장 소비자 가격: 20,000원
        </div>

        <hr style={divider} />

        <div>
          
          <h3>
            씻어내는 동안에도, 자극은 남기지 않도록
          </h3>


          피부는 매일 씻습니다.
          <br />

          그래서 우리는 세정 이후의 상태까지 고려했습니다.
          <br />
          <br />

          <div>
              <img src={washstate} alt="바디워시 사용 이미지" style={{width: 400, margin: 20}}/>
          </div>

          괭생이모자반은
          <br />
          피부 진정과 수분 보호에 관한 연구가 보고된 해조 원료입니다.
          <br />
          우리는 불필요한 자극을 줄이고 피부의 당김을 최소화하는 데 초점을 맞췄습니다.
          
          <h3>
            괭생이모자반 추출물 함유
          </h3>
          세정 중에도 피부 수분 손실을 고려한 설계
          <br/>

          <h3>
            부드러운 세정 포뮬러
          </h3>
            노폐물은 제거하고, 피부 보호막은 과도하게 건드리지 않게 조절
          <br/>

          <h3>
            매일 사용 가능한 사용감
          </h3>
            거품은 충분하지만, 씻고 난 뒤는 가볍고 편안하게
          
          <br/>

        </div>
      </div>
    </div>
  );
}

const wrap = { minHeight: "100vh", display: "grid", placeItems: "center", padding: 24 };
const card = {
  width: "min(800px, 100%)",              // ✅ 넓혀서 긴 글 가독성 확보
  display: "flex",
  flexDirection: "column",
  gap: 22,
  padding: "26px 22px",                   // ✅ 카드 내부 여백
  borderRadius: 18,
  border: "1px solid #d9955d",
  boxShadow: "0 10px 30px rgba(0,0,0,0.06)",
  backdropFilter: "blur(8px)",
  alignItems: "center",
  textAlign: "center",
};

//const card = { width: "min(520px, 100%)", display: "flex", flexDirection: "column", gap: 14 };
const back = { textDecoration: "none", opacity: 0.7 };
const title = { margin: 0, fontSize: 24 };
const desc = { margin: 0, opacity: 0.8, lineHeight: 1.6 };

const divider = {
  width: "100%",
  border: "none",
  borderTop: "1px solid rgba(217, 149, 93, 0.4)", // 카드 테두리 톤과 맞춤
  margin: "20px 0",
};