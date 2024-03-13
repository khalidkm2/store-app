import React from 'react'
import { Oval } from 'react-loader-spinner'


const Loading = () => {
  return (
    <div className=' absolute bottom-[300px] left-[690px] '>
<Oval
  visible={true}
  height="80"
  width="80"
  color="#4fa94d"
  ariaLabel="oval-loading"
  wrapperStyle={{}}
  wrapperClass=""
  />
    </div>
  )
}

export default Loading