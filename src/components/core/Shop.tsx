import Layout from './Layout'
import { useSelector } from 'react-redux'
const Shop = () => {
  const state = useSelector(state => state)
  console.log(state)
  return (
    <Layout subTitle="GoGo" title="商城">
      Shop
    </Layout>
  )
}
export default Shop
