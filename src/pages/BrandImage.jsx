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


        <h1 style={{ margin: "0 0px", fontSize: 20, letterSpacing: "0.5px" }}>
            우리 조선 더마코스는<br/>지속 가능한 제품을 추구합니다.
          </h1>

  <div style={section}>

    <div style={{ maxWidth: 780, margin: "0 auto", padding: "48px 20px", lineHeight: 1.8 }}>
    
    <h2 style={{ margin: "0 0 18px", fontSize: 28, letterSpacing: "-0.5px" }}>
          괭생이 모자반
    </h2>

    <p style={{ margin: "0 0 18px" }}>
          괭생이모자반은 톳과 유사한 형태의 해조류로,<br />
          제주 연안의 거친 해양 환경에서 자라납니다.<br />
          외부 자극으로부터 스스로를 보호하기 위해 형성된 구조는<br />
    피부 보습과 진정에 대한 연구 대상으로 주목받아 왔습니다.<br />
    <br />
    괭생이모자반 추출물은<br />
    피부 수분 유지, 항산화 특성, <br />
    그리고 피부 컨디션 개선과 관련된 기능이 보고되어 있습니다.
    </p>


      {/* 중간 css 수정 */}
      <div>
        <h2 style={{ margin: "0 0 18px", fontSize: 28, letterSpacing: "-0.5px" }}>
          피부는 더 자극받을 이유가 없습니다
        </h2>

        <p style={{ margin: "0 0 18px" }}>
          조선 더마코스는<br />
          민감해진 피부와 반복되는 문제성 피부를<br />
          더 강한 성분으로 해결하려 하지 않습니다.
        </p>

        <p style={{ margin: "0 0 18px" }}>
          우리는 피부가 왜 약해졌는지,<br />
          무엇이 반복적으로 무너지고 있는지를 먼저 고민합니다.
        </p>

        <p style={{ margin: "0 0 28px" }}>
          그리고 그 답을<br />
          가장 기본적인 환경과 원료에서 찾습니다.
        </p>
      </div>

      <div style={{ marginTop: 28 }}>
        <h3 style={{ margin: "0 0 12px", fontSize: 20 }}>
          제주에서 시작된 피부 설계
        </h3>

        <p style={{ margin: "0 0 18px" }}>
          조선 더마코스는 제주에서 시작되었습니다.
        </p>

        <p style={{ margin: "0 0 18px" }}>
          제주는 깨끗한 자연의 이미지 이전에<br />
          바람, 염분, 화산 토양이라는 거친 조건을 가진 땅입니다.<br />
          이 환경 속에서 자라는 식물과 해조류는<br />
          스스로를 보호하며 살아남는 힘을 갖고 있습니다.
        </p>

        <p style={{ margin: "0 0 18px" }}>
          우리는 이 생존 방식에 주목합니다.
        </p>

        <p style={{ margin: "0 0 8px" }}>제주 모자반</p>
        <p style={{ margin: "0 0 8px" }}>제주 녹차</p>
        <p style={{ margin: "0 0 18px" }}>제주 허브 식물</p>

        <p style={{ margin: "0 0 28px" }}>
          이들은 단순한 자연 원료가 아니라,<br />
          피부를 지키기 위한 구조를 가진 원재료입니다.
        </p>
      </div>

      <div style={{ marginTop: 28 }}>
        <h3 style={{ margin: "0 0 12px", fontSize: 20 }}>
          피부를 위해 선택한 더마코스 기준
        </h3>

        <p style={{ margin: "0 0 18px" }}>
          조선 더마코스는<br />
          화장품이지만 식품에 가까운 기준으로 설계됩니다.
        </p>

        <p style={{ margin: "0 0 10px" }}>불필요한 성분은 덜어내고</p>
        <p style={{ margin: "0 0 10px" }}>반복 사용해도 부담 없는 안정성을 우선하며</p>
        <p style={{ margin: "0 0 18px" }}>민감 피부에서도 일상적으로 사용할 수 있도록 설계합니다.</p>

        <p style={{ margin: "0 0 28px" }}>
          우리는 피부를 바꾸기보다<br />
          피부가 무너지지 않도록 돕는 것을 목표로 합니다.
        </p>
      </div>

      <div style={{ marginTop: 28 }}>
        <h3 style={{ margin: "0 0 12px", fontSize: 20 }}>
          바디케어부터 시작하는 이유
        </h3>

        <p style={{ margin: "0 0 18px" }}>
          피부는 얼굴보다 몸에서 먼저 신호를 보냅니다.
        </p>

        <p style={{ margin: "0 0 18px" }}>
          건조함, 가려움, 붉어짐, 자극.<br />
          조선 더마코스의 바디 워시와 바디 로션은<br />
          이 신호에 가장 먼저 반응하도록 만들어졌습니다.
        </p>

        <p style={{ margin: "0 0 10px" }}>모자반 기반의 보습 구조</p>
        <p style={{ margin: "0 0 10px" }}>허브와 녹차의 진정 밸런스</p>
        <p style={{ margin: "0 0 18px" }}>씻고 난 뒤에도 남는 수분감</p>

        <p style={{ margin: "0 0 28px" }}>
          매일 사용하는 제품일수록<br />
          자극이 없어야 하고, 오래 써도 무너지지 않아야 합니다.
        </p>
      </div>

      <div style={{ marginTop: 28 }}>
        <h3 style={{ margin: "0 0 12px", fontSize: 20 }}>
          깨끗함은 디자인에서도 드러나야 합니다
        </h3>

        <p style={{ margin: "0 0 18px" }}>
          조선 더마코스의 디자인은<br />
          화려함보다 신뢰를 우선합니다.
        </p>

        <p style={{ margin: "0 0 10px" }}>미니멀한 컬러 시스템</p>
        <p style={{ margin: "0 0 10px" }}>불필요한 장식 제거</p>
        <p style={{ margin: "0 0 18px" }}>친환경 소재와 리필 구조</p>

        <p style={{ margin: "0 0 28px" }}>
          패키지는 제품의 태도를 보여줍니다.<br />
          우리는 말보다 구조로 신뢰를 만듭니다.
        </p>
      </div>

      <div style={{ marginTop: 28 }}>
        <h3 style={{ margin: "0 0 12px", fontSize: 20 }}>
          피부과에서 시작해, 일상으로 이어지다
        </h3>

        <p style={{ margin: "0 0 18px" }}>
          조선 더마코스는<br />
          피부과 입점을 통해 먼저 검증받고,<br />
          팝업을 통해 실제 사용자 반응을 확인합니다.
        </p>

        <p style={{ margin: "0 0 28px" }}>
          전문적인 환경에서 시작하지만,<br />
          궁극적으로는 누구나 매일 사용할 수 있는 더마코스를 지향합니다.
        </p>
      </div>

      <div style={{ marginTop: 28 }}>
        <h3 style={{ margin: "0 0 12px", fontSize: 20 }}>
          앞으로의 확장
        </h3>

        <p style={{ margin: "0 0 18px" }}>
          피부에 바르는 것에서 그치지 않고,<br />
          몸 안에서부터 균형을 생각하는 방향으로 확장합니다.
        </p>

        <p style={{ margin: "0 0 10px" }}>이너뷰티,</p>
        <p style={{ margin: "0 0 28px" }}>
          그리고 피부와 일상을 함께 설계하는 브랜드로.
        </p>
      </div>

      <div style={{ marginTop: 28, paddingTop: 20, borderTop: "1px solid rgba(0,0,0,0.08)" }}>
        <h3 style={{ margin: "0 0 12px", fontSize: 20 }}>
          브랜드 한 문장 정의
        </h3>

        <p style={{ margin: 0 }}>
          조선 더마코스는<br />
          자극을 줄이고,<br />
          피부가 편안해지는 방향을 설계하는 더마코스 브랜드입니다.
        </p>
      </div>
    </div>
        </div>
      </div>
    </div>
  );
}

const wrap = {
  minHeight: "100vh",
  display: "grid",
  placeItems: "center",
  padding: "56px 18px",
  background: "#F6F3EE", // warm ivory
  color: "#2B2B2B",
};

const card = {
  width: "min(820px, 100%)",              // ✅ 넓혀서 긴 글 가독성 확보
  display: "flex",
  flexDirection: "column",
  gap: 22,
  padding: "26px 22px",                   // ✅ 카드 내부 여백
  borderRadius: 18,
  background: "rgba(255,255,255,0.55)",   // ✅ 은은한 카드 느낌
  border: "1px solid rgba(222,216,207,0.9)",
  boxShadow: "0 10px 30px rgba(0,0,0,0.06)",
  backdropFilter: "blur(8px)",
};

const back = {
  textDecoration: "none",
  opacity: 0.75,
  fontSize: 13,
  alignSelf: "flex-start",
  padding: "6px 10px",
  borderRadius: 999,
  border: "1px solid rgba(222,216,207,0.9)",
  background: "rgba(255,255,255,0.6)",
};

const title = {
  margin: "6px 0 2px",
  fontSize: 26,
  letterSpacing: "-0.6px",
};

const section = {
  display: "flex",
  flexDirection: "column",
  gap: 10,
  paddingTop: 18,
  marginTop: 10,
  borderTop: "1px solid rgba(0,0,0,0.08)", // ✅ 섹션 구분선으로 일관성
};

const h3 = {
  margin: 0,
  fontSize: 18,                            // ✅ 지금 16은 너무 작아서 제목 느낌이 약함
  letterSpacing: "-0.4px",
};

const desc = {
  margin: 0,
  opacity: 0.88,
  lineHeight: 1.85,                        // ✅ 긴 글에 맞게
  fontSize: 15,
  color: "rgba(43,43,43,0.88)",
};