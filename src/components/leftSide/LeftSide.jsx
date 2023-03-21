import React from 'react'
import InvestItem from './InvestItem'
import { InvestDB } from './utils/InvestmentsDB'

const LeftSide = () => {
  return (
    <div className='col-span-2 min-h-[90vh] border-r border-feay-200 items-start justify-start flex flex-col w-full'>
        {/* Top Section */}
        <div className="w-full items-start justify-start-flex flex-col px-10 pt-12 pb-6">
            <h1 className='font-bold text-xl xl:text-2xl pb-2'>My Card</h1>
            <p className='text-md text-gray-800'>Find all your investments on a card</p>
            <div className='items-start justify-start flex flex-col px-6 pt-8 pb-4 w-full mt-6 bg-[#89F8B7]'>
                <h1>Olaniyi Olamide</h1>
                <h1 className='xl:text-2xl text-xl font-bold py-6'>$ 920 434.00</h1>
            </div>
            <div className="bg-black py-8 px-8 w-full item-start justify-between flex shadow-2xl shadow-emerald-200 ">
              <span className="flex flex-col item-start justify-start text-white">
                <h1 className="px-0 pb-0 pt-0 text-left">Card Number</h1>
                <h3>**** **** **** 3711</h3>
              </span>
              <span className="flex flex-col items-start justify-start text-white">
                <h1>CCV</h1>
                <h3>786</h3>
              </span>
            </div>
        </div>

        {/* Bottom Section */}
        <div className="w-full items-start justify-start flex flex-col px-12 py-6">
          <h1 className="font-bold text-xl xl:text-2xl pb-2">Recent Investment</h1>
          <div className="w-full space-y-5 overflow-y-auto max-h-[350px] py-6 scrollbar-hide ">
          {InvestDB.map((item) => (
            <InvestItem item={item} key={item.id} />
          ))}
          </div>
        </div>
    </div>
  )
}

export default LeftSide