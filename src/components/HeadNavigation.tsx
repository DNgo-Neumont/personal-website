"use client"

import Link from "next/link"

export default function HeaderNavigationBar({PageList}:{PageList: Array<String>}){


  const MenuItems = PageList.map((predicate, index) => {
    return <Link className="flex bg-black text-white flex-1/2 justify-center text-4xl pt-5 pb-5 font-helvetica_now" key={index} href={ "/" + predicate }>{predicate}</Link>
  })

  return <div className="flex flex-row justify-center">
      {MenuItems}
    </div>
  
}