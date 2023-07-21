import { PropsChildren } from './utils/types/genericTypes'
import Header from './Layout/Header'

function Layout({ children }: PropsChildren) {
  return (
    <>
      <Header />
      {children}
    </>
  )
}

export default Layout