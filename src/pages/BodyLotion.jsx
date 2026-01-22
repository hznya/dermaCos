// 바디로션
// 제품명, 제품 이미지, 제품 상세 설명, 권장 소비자 가격
import { Link } from "react-router-dom";
import lotionstate from "../assets/lotion_state.png";
import bodylotionimg from "../assets/bodylotion.png";
import bodylotionposter from "../assets/bodylotion_poster.png";
import { useState } from "react";

export default function BodyLotion() {
  const PRICE = 22000;
  const [qty, setQty] = useState(1);
  const [toast, setToast] = useState("");

  const [reviewText, setReviewText] = useState("");
  const [reviews, setReviews] = useState([]);

  const [reviewName, setReviewName] = useState("");

  const total = PRICE * qty;

  const showToast = (msg) => {
    setToast(msg);
    window.setTimeout(() => setToast(""), 1500);
  };

return (
    <div style={wrap}>
      <div style={card}>
        <Link to="/product" style={{textAlign: "left", width: "100%", marginBottom: 0, display: "inline-block" }}>← Products</Link>
        <h2 style={{textAlign: "left", width: "100%", margin: 0 }}>Body Lotion</h2>
        <p style={{textAlign: "left", width: "100%", margin: 0}}>
          저자극 보습 / 피부 장벽을 고려한 포뮬러.
          <br />
        </p>

        <img src={bodylotionimg} alt="조선더마코스 바디로션"  style={{ width: 300, margin: 0 }} />

        <h1 style={{margin: 0}}>
          제주 모자반 카밍 바디로션 400ml
        </h1>

        <div>
          가격: 22,000원
        </div>
 <div style={purchaseBar}>
          <div style={qtyRow}>
            <span style={label}>수량</span>

            <div style={qtyControl}>
              <button
                type="button"
                style={qtyBtn}
                onClick={() => setQty((q) => Math.max(1, q - 1))}
                aria-label="수량 감소"
              >
                −
              </button>

              <span style={qtyNum}>{qty}</span>

              <button
                type="button"
                style={qtyBtn}
                onClick={() => setQty((q) => q + 1)}
                aria-label="수량 증가"
              >
                +
              </button>
            </div>

            <span style={priceText}>{total.toLocaleString()}원</span>
          </div>

          <div style={actionRow}>
            <button
              type="button"
              style={cartBtn}
              onClick={() => showToast("장바구니에 담겼습니다")}
            >
              장바구니
            </button>

            <button
              type="button"
              style={buyBtn}
              onClick={() => showToast("구매창으로 이동합니다")}
            >
              구매하기
            </button>
          </div>

          {toast && <div style={toastStyle}>{toast}</div>}
        </div>
        <hr style={divider} />

        <img src={bodylotionposter} alt="조선더마코스 바디로션 포스터"  style={{ width: 400, margin: 0 }} />
        <div>
          <h3 style={{marginBottom: 0}}>
            필요한 보습만, 과하지 않게

          </h3>
          <br />
          피부에 남는 자극을 줄이기 위해
          <br />

          성분을 집중하고, 근거를 남겼습니다.
          <br />
          <br />
          
<p style={paragraph}></p>
          <br/>
          <div>
            <img src={lotionstate} alt="바디로션 사용 이미지" style={{width: 400}}/>

          </div>

          <br/>
          괭생이모자반은 해조류 중에서도
          <br />
          피부 보습과 진정에 관한 연구가 꾸준히 진행된 원료입니다.
          <br />
          우리는 이 원료의 수분 유지력과 피부 보호 특성에 주목했습니다.
          <p style={paragraph}></p>
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
<div style={reviewWrap}>
          <h3 style={reviewTitle}>사용자 리뷰</h3>
<input
  style={reviewInput}
  placeholder="이름을 입력하세요"
  value={reviewName}
  onChange={(e) => setReviewName(e.target.value)}
/>      
          <textarea
            style={reviewTextarea}
            placeholder="리뷰를 작성해주세요"
            value={reviewText}
            onChange={(e) => setReviewText(e.target.value)}
          />

          <div style={reviewActions}>
            <button
              type="button"
              style={reviewBtn}
              onClick={() => {
  const name = reviewName.trim();
  const text = reviewText.trim();
  if (!name || !text) return;

  setReviews((prev) => [
    { id: Date.now(), name, text, createdAt: new Date() },
    ...prev,
  ]);

  setReviewName("");
  setReviewText("");
  showToast("리뷰가 등록되었습니다");
}}
            >
              리뷰 등록
            </button>

          </div>

          <div style={reviewList}>
            {reviews.length === 0 ? (
              <p style={emptyReview}>아직 등록된 리뷰가 없습니다.</p>
            ) : (
              reviews.map((r) => (
                <div key={r.id} style={reviewItem}>
                  <div style={reviewMeta}>
                    <span style={reviewNameStyle}>{r.name}</span>
                    <span style={reviewDate}>
                      {r.createdAt.toLocaleDateString()}
                    </span>
                  </div>
                  <p style={reviewTextP}>{r.text}</p>
                </div>
              ))
            )}
          </div>
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
const divider = {
  width: "100%",
  border: "none",
  borderTop: "1px solid rgba(217, 149, 93, 0.4)", // 카드 테두리 톤과 맞춤
  margin: "20px 0",
};
const back = { textDecoration: "none", opacity: 0.7 };
const title = { margin: 0, fontSize: 24 };
const desc = { margin: 0, opacity: 0.8, lineHeight: 1.6 };

const purchaseBar = {
  width: "100%",
  border: "1px solid rgba(217, 149, 93, 0.35)",
  borderRadius: 14,
  padding: "14px 14px",
  background: "rgba(255, 255, 255, 0.35)",
  backdropFilter: "blur(8px)",
};

const qtyRow = {
  width: "100%",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  gap: 12,
};

const label = {
  fontSize: 13,
  opacity: 0.8,
};

const qtyControl = {
  display: "flex",
  alignItems: "center",
  gap: 10,
  border: "1px solid rgba(217, 149, 93, 0.35)",
  borderRadius: 999,
  padding: "6px 10px",
  background: "rgba(255,255,255,0.35)",
};

const qtyBtn = {
  width: 32,
  height: 32,
  borderRadius: 999,
  border: "1px solid rgba(217, 149, 93, 0.45)",
  background: "transparent",
  cursor: "pointer",
  fontSize: 18,
  lineHeight: "32px",
};

const qtyNum = {
  minWidth: 18,
  textAlign: "center",
  fontWeight: 600,
};

const priceText = {
  fontWeight: 700,
  letterSpacing: "-0.2px",
};

const actionRow = {
  width: "100%",
  display: "flex",
  gap: 10,
  marginTop: 12,
};

const cartBtn = {
  flex: 1,
  padding: "12px 12px",
  borderRadius: 12,
  border: "1px solid rgba(217, 149, 93, 0.55)",
  background: "rgba(217, 149, 93, 0.10)",
  cursor: "pointer",
  fontWeight: 600,
};

const buyBtn = {
  flex: 1,
  padding: "12px 12px",
  borderRadius: 12,
  border: "1px solid rgba(217, 149, 93, 0.75)",
  background: "rgba(217, 149, 93, 0.12)",
  cursor: "pointer",
  fontWeight: 700,
};

const toastStyle = {
  marginTop: 10,
  fontSize: 13,
  opacity: 0.85,
  padding: "10px 12px",
  borderRadius: 12,
  border: "1px solid rgba(0,0,0,0.08)",
  background: "rgba(255,255,255,0.55)",
};

const reviewWrap = {
  width: "100%",
  marginTop: 24,
  paddingTop: 20,
  borderTop: "1px solid rgba(217, 149, 93, 0.35)",
  textAlign: "left",
};

const reviewTitle = {
  margin: "0 0 10px 0",
};

const reviewTextarea = {
  width: "100%",
  height: 96,
  resize: "vertical",
  borderRadius: 12,
  border: "1px solid rgba(217, 149, 93, 0.35)",
  padding: "12px 12px",
  outline: "none",
  background: "rgba(255,255,255,0.35)",
};

const reviewActions = {
  display: "flex",
  alignItems: "center",
  gap: 12,
  marginTop: 10,
};

const reviewBtn = {
  padding: "10px 12px",
  borderRadius: 12,
  border: "1px solid rgba(217, 149, 93, 0.55)",
  background: "rgba(217, 149, 93, 0.10)",
  cursor: "pointer",
  fontWeight: 600,
};

const reviewHint = {
  fontSize: 12,
  opacity: 0.7,
};

const reviewList = {
  marginTop: 14,
  display: "flex",
  flexDirection: "column",
  gap: 10,
};

const emptyReview = {
  margin: 0,
  opacity: 0.75,
};

const reviewItem = {
  border: "1px solid rgba(0,0,0,0.08)",
  borderRadius: 14,
  padding: "12px 12px",
  background: "rgba(255,255,255,0.45)",
};

const reviewMeta = {
  display: "flex",
  justifyContent: "space-between",
  fontSize: 12,
  opacity: 0.7,
  marginBottom: 8,
};

const reviewName = {
  fontWeight: 600,
};

const reviewDate = {};

const reviewTextP = {
  margin: 0,
  lineHeight: 1.7,
  opacity: 0.9,
};

const reviewInput = {
  width: "100%",
  borderRadius: 12,
  border: "1px solid rgba(217, 149, 93, 0.35)",
  padding: "12px 12px",
  outline: "none",
  background: "rgba(255,255,255,0.35)",
  marginBottom: 10,
};

const reviewNameStyle = {
  fontWeight: 700,
};

const paragraph = {
  margin: "0 0 18px",
  paddingBottom: 12,
  borderBottom: "1px dashed rgba(0,0,0,0.08)",
};