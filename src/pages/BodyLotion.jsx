// 바디로션
// 제품명, 제품 이미지, 제품 상세 설명, 권장 소비자 가격
import { Link } from "react-router-dom";
import lotionstate from "../assets/lotion_state.png";
import bodywashimg from "../assets/bodywash.png"

export default function BodyLotion() {

return (
    <div style={wrap}>
      <div style={card}>
        <Link to="/product" style={back}>← Products</Link>
        <h2 style={title}>Body Lotion</h2>
        <p style={desc}>
          저자극 보습 / 피부 장벽을 고려한 포뮬러.
          <br />
        </p>

        <img src={bodywashimg} alt="조선더마코스 로고"  style={{ width: 400 }} />
        <img src={lotionstate} alt="바디로션 사용 이미지" style={{width: 400}}/>

        <div>
          제품 권장 소비자 가격: 20,000원
        </div>

        <div>
          <h1>
            괭생이모자반 바디로션
          </h1>
          
          필요한 보습만, 과하지 않게
          <br />

          피부에 남는 자극을 줄이기 위해
          <br />

          성분을 집중하고, 근거를 남겼습니다.
          <br />
          <br />

          괭생이모자반은 해조류 중에서도
          <br />
          피부 보습과 진정에 관한 연구가 꾸준히 진행된 원료입니다.
          <br />
          우리는 이 원료의 수분 유지력과 피부 보호 특성에 주목했습니다.
          
          <h3>
            괭생이모자반 추출물 함유
          </h3>
          피부 수분 손실을 줄이고, 건조로 인한 불편함 완화에 도움
          <br/>

          <h3>
            끈적임 없는 보습
          </h3>
            빠르게 흡수되는 제형으로 제품 사용 후 바로 옷을 입어도 부담 없는 사용감
          <br/>

          <h3>
            민감 피부를 고려한 포뮬러
          </h3>
            불필요한 성분을 배제하고 매일 사용을 전제로 설계한 제품
          
          <br/>

        </div>

      </div>
    </div>
  );
}

const wrap = { minHeight: "100vh", display: "grid", placeItems: "center", padding: 24 };
const card = { width: "min(520px, 100%)", display: "flex", flexDirection: "column", gap: 14 };
const back = { textDecoration: "none", opacity: 0.7 };
const title = { margin: 0, fontSize: 24 };
const desc = { margin: 0, opacity: 0.8, lineHeight: 1.6 };
