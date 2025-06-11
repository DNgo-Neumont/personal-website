
import HeaderNavigationBar from "../components/HeadNavigation"

export default function Page() {
  return <div>
      <HeaderNavigationBar PageList={["test1","test2","test3"]} />
      <h1 className="flex flex-col justify-center bg-black text-white ">Test</h1>
    </div>
  
}