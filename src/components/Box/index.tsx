import React, { ReactNode } from 'react'

const Box = ({ children }: { children: ReactNode }) => {
  return <div className="flex flex-wrap bg-gray-900 p-8 rounded-lg ">{children}</div>
}

export default Box
