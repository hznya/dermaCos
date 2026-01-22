import { Link } from "react-router-dom";
import bodylotionimg from "../assets/bodylotion.png"
import bodywashimg from "../assets/bodywash.png"

export default function ProductHub() {
  return (
    <div style={wrap}>
      <div style={card}>
        <Link to="/" style={back}>← Home</Link>
        <h2 style={title}>Products</h2>
        <p style={desc}>조선 더마코스의 두 가지 라인업을 소개합니다.</p>

        <div style={list}>
          <Link to="/product/bodylotion" style={item}>
          <img src={bodylotionimg} alt="조선더마코스 로고"  style={{ width: 200 }} />
          <br />
            Body Lotion
          </Link>
          
          <Link to="/product/bodywash" style={item}>
          <img src={bodywashimg} alt="조선더마코스 로고"  style={{ width: 200 }} />
          <br />
            Body Wash
          </Link>

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
// const imgstyle = {width: 200};

const list = { display: "flex", flexDirection: "row", gap: 10, marginTop: 8 };
const item = {
  padding: "12px 14px",
  borderRadius: 12,
  border: "1px solid #d9955d",
  textDecoration: "none",
};