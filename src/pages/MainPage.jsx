// 메인 페이지
// 브랜드 이념. 추구 가치

import { Link } from "react-router-dom";
// import logo from "../assets/logo.png";
import logobh from "../assets/logo_nbg.png"


export default function MainPage() {
  return (
    <div style={wrap}>
      <div style={overlay}></div>
      <div style={card}>
        <img src={logobh} alt="조선더마코스 로고"  style={{ width: 200 }} />
        <h1 style={title}>조선 더마코스 <br/> CHOSUN DERMACOS</h1>
        <p style={desc}>
          제주를 살린, 제주를 담은.
          <br />
          피부에 필요한 것만 남깁니다.
        </p>

        <div style={btnRow}>
          <Link to="/about" style={btn}>
            ABOUT
          </Link>
          
          <Link to="/product" style={btn}>
            PRODUCTS
          </Link>
        </div>
      </div>
    </div>
  );
}

const wrap = {
  minHeight: "100vh",
  display: "grid",
  placeItems: "center",
  padding: 24,
  position: "relative",

  backgroundImage: "url(/backImg.png)",
  backgroundSize: "cover",
  backgroundPosition: "center",
};



const card = {
  width: "min(520px, 100%)",
  display: "flex",
  flexDirection: "column",
  gap: 16,
    padding: "12px 14px",
  borderRadius: 12,
  border: "1px solid #d9955d",
  textDecoration: "none",
  background: "rgba(255, 248, 240, 0.7)",
    position: "relative",      // 👈 필수
  zIndex: 2,       
    
};


const title = { margin: 0, fontSize: 40, letterSpacing: -1 };
const desc = { margin: 0, lineHeight: 1.6, opacity: 0.8 };

const btnRow = { display: "flex", gap: 12, marginTop: 8 };

const btn = {
  padding: "10px 14px",
  borderRadius: 10,
  textDecoration: "none",
  border: "1px solid #d9955d",
};

const overlay = {
  position: "absolute",
  inset: 0,
  background: "rgba(0, 0, 0, 0.15)", // 숫자 조절 (0.25~0.45)
  zIndex: 1,
};