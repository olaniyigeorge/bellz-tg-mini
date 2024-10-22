import {ReactNode} from "react"

const HomeLayout = ({ children }: { children: ReactNode }) => {
  return (
    <>
        {/* <nav>HomeLayout</nav> */}
        <main className="">
            { children }
        </main>
    </>
  )
}

export default HomeLayout