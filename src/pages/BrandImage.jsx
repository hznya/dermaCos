// 브랜드 상세 설명 페이지
// 스킨케어 제품 구매시 고려 요인
// 괭생이모자반 자체의 효과가 입증된 자료
// 병원 입점 제품 등 전문성을 보여주는 설명

import { Link } from "react-router-dom";

export default function BrandImage() {
  return (
    <div style={wrap}>
      <div style={card}>
        <Link to="/" style={back}>← Home</Link>
        <h2 style={title}>About</h2>

        <div style={section}>
          <h3 style={h3}>괭생이 모자반</h3>
          <p style={desc}>
            괭생이모자반은 톳과 비슷하게 생긴 해조류예요.
            <br />
            아토피성 피부질환 예방에 도움이 됩니다.
            <br />
            보습력, 항산화, 미백, 항노화에 두각을 드러냅니다.
          </p>
          {/* <a href="#" style={link}>- 자료 링크 1</a> */}
          {/* <a href="#" style={link}>- 자료 링크 2</a> */}
        </div>

        <div style={section}>
          <h3 style={h3}>전문성 & 입점</h3>
          <p style={desc}>병원 입점/전문가 협업/테스트 프로세스를 짧게.</p>
        </div>
      </div>
    </div>
  );
}

const wrap = { minHeight: "100vh", display: "grid", placeItems: "center", padding: 24 };
const card = { width: "min(520px, 100%)", display: "flex", flexDirection: "column", gap: 18 };
const back = { textDecoration: "none", opacity: 0.7 };
const title = { margin: 0, fontSize: 24 };
const section = { display: "flex", flexDirection: "column", gap: 6 };
const h3 = { margin: 0, fontSize: 16 };
const desc = { margin: 0, opacity: 0.8, lineHeight: 1.6 };
// const link = { textDecoration: "none", opacity: 0.9 };