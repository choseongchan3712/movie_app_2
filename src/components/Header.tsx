import { Link, NavLink } from "react-router-dom";
import styled from "styled-components";
import { commonPadding } from "../GlobalStyled";

const HeaderWrap = styled.div`
  width: 100%;
  padding: ${commonPadding.pcPadding};
  height: 80px;
  position: fixed;
  z-index: 990;
  top: 0;
  left: 0;
  background-color: #000;
  display: flex;
  align-items: center;
  justify-content: space-between;
  .header_right_wrap {
    display: flex;
    align-items: center;
    .logo {
      width: 150px;
      margin-right: 50px;
    }

    .menu_wrap {
      display: flex;
      .menu {
        margin-right: 10px;
        padding: 10px;
        color: rgba(255, 255, 255, 0.7);
        border-radius: 5px;
        transition: 0.25s ease-in-out;
      }
      .menu:hover {
        background-color: #3b3b3b;
      }
    }
  }
`;

const menuList: string[] = ["TV", "영화", "스포츠", "스토어", "키즈", "뉴스"];

const Header = (): JSX.Element => {
  return (
    <HeaderWrap>
      <div className="header_right_wrap">
        <div className="logo">
          <Link to={"/"}>
            <img
              src="https://assets.coupangplay.com/images/svg/web_gnb_logo_new.svg"
              alt="logo"
            />
          </Link>
        </div>
        <div className="menu_wrap">
          {menuList.map((list, index) => (
            <NavLink to={"/"} key={index}>
              <div className="menu">{list}</div>
            </NavLink>
          ))}
        </div>
      </div>
    </HeaderWrap>
  );
};

export default Header;
