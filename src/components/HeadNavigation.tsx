"use client"

import Link from "next/link"

export default function HeaderNavigationBar({PageList}:{PageList: Array<String>}){


  const MenuItems = PageList.map((predicate, index) => {
    return <Link className="flex bg-black text-white" key={index} href={ "/" + predicate }>{predicate}</Link>
  })

  return <div className="flex flex-row justify-center">
      {MenuItems}
    </div>
  
}