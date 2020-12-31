import React from "react";
import {useSelector} from "react-redux";
import {Menu} from "antd";
import {Link} from "react-router-dom";

import CustomScrollbars from "../../util/CustomScrollbars";
import SidebarLogo from "./SidebarLogo";
import UserProfile from "./UserProfile";
import AppsNavigation from "./AppsNavigation";
import {
  NAV_STYLE_NO_HEADER_EXPANDED_SIDEBAR,
  NAV_STYLE_NO_HEADER_MINI_SIDEBAR,
  THEME_TYPE_LITE
} from "../../constants/ThemeSetting";
import IntlMessages from "../../util/IntlMessages";
import routes from "../../util/routes";
import keys from "../../util/Keys";

const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

const SidebarContent = () => {

  let {navStyle, themeType, pathname} = useSelector(({settings}) => settings);

  const getNoHeaderClass = (navStyle) => {
    if (navStyle === NAV_STYLE_NO_HEADER_MINI_SIDEBAR || navStyle === NAV_STYLE_NO_HEADER_EXPANDED_SIDEBAR) {
      return "gx-no-header-notifications";
    }
    return "";
  };
  const getNavStyleSubMenuClass = (navStyle) => {
    if (navStyle === NAV_STYLE_NO_HEADER_MINI_SIDEBAR) {
      return "gx-no-header-submenu-popup";
    }
    return "";
  };
  const selectedKeys = pathname.substr(1);
  const defaultOpenKeys = selectedKeys.split('/')[1];

  function handleClick(e) {
    console.log('click', e);
  }

  return (<>

      <SidebarLogo/>
      <div className="gx-sidebar-content">
        <div className={`gx-sidebar-notifications ${getNoHeaderClass(navStyle)}`}>
          <UserProfile/>
          <AppsNavigation/>
        </div>
        <CustomScrollbars className="gx-layout-sider-scrollbar">
          <Menu
            defaultOpenKeys={[defaultOpenKeys]}
            selectedKeys={[selectedKeys]}
            theme={themeType === THEME_TYPE_LITE ? 'lite' : 'dark'}
            mode="inline">

            <Menu.Item key="sample">
              <Link to="/sample"><i className="icon icon-widgets"/>
                <span><IntlMessages id="sidebar.samplePage"/></span>
              </Link>
            </Menu.Item>
            <Menu.Item key={keys.persona}>
              <Link to={routes.persona}><i className="icon icon-widgets"/>
                <span><IntlMessages id="sidebar.personas" /></span>
              </Link>
            </Menu.Item>

            <MenuItemGroup key="main" className="gx-menu-group" title={<IntlMessages id="sidebar.main"/>}>
              <SubMenu key="dashboard" popupClassName={getNavStyleSubMenuClass(navStyle)}
                       title={<span> <i className="icon icon-dasbhoard"/>
                         <span><IntlMessages id="sidebar.dashboard"/></span></span>}>
                <Menu.Item key="main/dashboard/crypto">
                  <Link to="/main/dashboard/crypto">
                    <i className="icon icon-crypto"/>
                    <span><IntlMessages id="sidebar.dashboard.crypto"/></span>
                  </Link>
                </Menu.Item>
                <Menu.Item key="main/dashboard/crm">
                  <Link to="/main/dashboard/crm">
                    <i className="icon icon-crm"/>
                    <span><IntlMessages id="sidebar.dashboard.crm"/></span>
                  </Link>
                </Menu.Item>
                <Menu.Item key="main/dashboard/listing">
                  <Link to="/main/dashboard/listing">
                    <i className="icon icon-listing-dbrd"/>
                    <span><IntlMessages id="sidebar.dashboard.listing"/></span>
                  </Link>
                </Menu.Item>
              </SubMenu>
            </MenuItemGroup>

          </Menu>
        </CustomScrollbars>
      </div>
    </>
  );
};

SidebarContent.propTypes = {};

export default SidebarContent;

