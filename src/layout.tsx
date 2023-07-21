import { PropsChildren } from './utils/types/genericTypes'
import Header from './Layout/Header'

function Layout({ children }: PropsChildren) {
  return (
    <>
      <Header />
      <main className='p-3'>{children}</main>
    </>
  )
}

export default Layout