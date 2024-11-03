import { Link, NavLink } from "react-router-dom";
import styled from "styled-components";
import { commonPadding } from "../GlobalStyled";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleDown,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";
import { category } from "./category/category";

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
  .header_left_wrap {
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

  .header_right_wrap {
    position: relative;
    z-index: 990;
    display: flex;
    height: 100%;
    align-items: center;
    .search {
      font-size: 20px;
      margin-right: 30px;
    }

    .profile_icon {
      .icon {
        width: 30px;
        height: 30px;
        border-radius: 30px;
        background-color: #ddd;
      }
    }
  }
`;

const Category = styled.div`
  position: relative;
  z-index: 991;
  display: flex;
  align-items: center;
  padding: 10px 15px;
  background-color: #303030;
  border-radius: 10px;
  margin-right: 50px;

  &&::before {
    content: '';
    position: absolute;
    width: 100%;
    height: 40px;
    z-index: 991;
    top: 30px;
    right: 0;
    display: none;
  }

  &&:hover .category {
    display: flex;
  }

  &&:hover::before {
    display: block;
  }

  .text {
    margin-right: 5px;
  }
  .category {
    position: absolute;
    z-index: 992;
    display: flex;
    flex-wrap: wrap;
    width: 612px;
    top: 60px;
    right: 0;
    background-color: #303030;
    padding: 5px;
    border-radius: 10px;
    border: 1px solid rgba(255, 255, 255, 0.3);
    display: none;

    .category_list {
      width: 200px;
      padding: 10px;
      border-radius: 10px;
      transition: 0.25s ease-in-out;
      a {
        width: 100%;
        height: 100%;
      }
    }

    .category_list:hover {
      background-color: #474747;
    }
  }
`;

const menuList: string[] = ["TV", "영화", "스포츠", "스토어", "키즈", "뉴스"];

const Header = (): JSX.Element => {
  return (
    <HeaderWrap>
      <div className="header_left_wrap">
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

      <div className="header_right_wrap">
        <Category>
          <div className="text">모든 카테고리</div>
          <FontAwesomeIcon icon={faAngleDown} />
          <ul className="category">
            {category.map((list, index) => (
              <li key={index} className="category_list">
                <Link to={"/"}>{list}</Link>
              </li>
            ))}
          </ul>
        </Category>

        <Link to={"/"} className="search">
          <FontAwesomeIcon icon={faMagnifyingGlass} />
        </Link>

        <Link to={"/"}>
          <div className="profile_icon">
            <div className="icon"></div>
          </div>
        </Link>
      </div>
    </HeaderWrap>
  );
};

export default Header;
