import { PageHeader } from 'antd'
import { FC, ReactNode } from 'react'
import Navigation from './Navigation'
interface IProps {
  children?: ReactNode
  title: string
  subTitle?: string
}
const Layout: FC<IProps> = ({ children, title, subTitle }) => {
  return (
    <>
      <Navigation />
      <PageHeader title={title} subTitle={subTitle} />
      <div className="layout">{children}</div>
    </>
  )
}
export default Layout
