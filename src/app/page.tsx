
import HeaderNavigationBar from "../components/HeadNavigation"

export default function Page() {
  return <div className=" min-h-screen bg-black">
      <HeaderNavigationBar PageList={["test1","test2","test3"]} />
      <h1 className="flex flex-col justify-center bg-black text-white font-HelveticaNow">Test</h1>
      <div className="h-24 text-white font-helvetica_now text-9xl">
      {/* <div className="h-24 text-white text-9xl font-ferrite_core_dx"> */}
        Welcome to the future.
      </div>
    </div>
  
}