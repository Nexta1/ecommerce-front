import { Menu } from 'antd'

import React from 'react'

import { Link } from 'react-router-dom'
// import { AppState } from '../../store/reducers'

// function useActive(currentPath: string, path: string) {
//   return currentPath === path ? 'ant-menu-item-selected' : ''
// }

const Navigation = () => {
  const items = [
    { label: <Link to="/">首页</Link>, key: '/' }, // 菜单项务必填写 key
    { label: <Link to="/shop">商城</Link>, key: '/shop' }, // 菜单项务必填写 key
    { label: <Link to="/SignIn">登入</Link>, key: '/SignIn' }, // 菜单项务必填写 key
    { label: <Link to="/SignUp">注册</Link>, key: '/SignUp' }, // 菜单项务必填写 key
  ]
  return <Menu items={items} mode="horizontal" />
}

export default Navigation
