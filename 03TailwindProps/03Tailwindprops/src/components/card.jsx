import React from 'react'

function Card({shoebrand, src="https://images.unsplash.com/photo-1560769629-975ec94e6a86?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8c2hvZXN8ZW58MHx8MHx8&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=60"}) {
  return (
    <div className="mx-auto max-w-7xl px-4 md:px-8 2xl:px-16">

  <div className="block grid-cols-9 items-start gap-x-10 pb-10 pt-7 lg:grid lg:pb-14 xl:gap-x-14 2xl:pb-20">
    <div className="col-span-5 grid grid-cols-2 gap-2.5">
      <div className="col-span-1 transition duration-150 ease-in hover:opacity-90">
        <img
          src={src}
          alt="Nike Air Max 95 By You--0"
          className="w-full object-cover"
        />
      </div>
      <div className="col-span-1 transition duration-150 ease-in hover:opacity-90">
        <img
          src={src}
          alt="Nike Air Max 95 By You--0"
          className="w-full object-cover"
        />
      </div>
      <div className="col-span-1 transition duration-150 ease-in hover:opacity-90">
        <img
          src={src}
          alt="Nike Air Max 95 By You--0"
          className="w-full object-cover"
        />
      </div>
      <div className="col-span-1 transition duration-150 ease-in hover:opacity-90">
        <img
          src={src}
          alt="Nike Air Max 95 By You--0"
          className="w-full object-cover"
        />
      </div>
    </div>
    <div className="col-span-4 pt-8 lg:pt-0">
      <div className="mb-7 border-b border-gray-300 pb-7">
        <h2 className="text-heading mb-3.5 text-lg font-bold md:text-xl lg:text-2xl 2xl:text-3xl">
          {shoebrand} Air Max 95 By You
        </h2>
        <p className="text-body text-sm leading-6  lg:text-base lg:leading-8">
          The {shoebrand} Air Max 95 By You lets you take inspiration from the human
          body itself. The midsole represents the spine, graduated panels are
          the muscles, the lace loops are the shoe&#x27;s ribs and the mesh in
          the upper is the skin.
        </p>
        <div className="mt-5 flex items-center ">
          <div className="text-heading pr-2 text-base font-bold md:pr-0 md:text-xl lg:pr-2 lg:text-2xl 2xl:pr-0 2xl:text-4xl">
            $40.00
          </div>
          <span className="font-segoe pl-2 text-sm text-gray-400 line-through md:text-base lg:text-lg xl:text-xl">
            $50.00
          </span>
        </div>
      </div>
      <div className="border-b border-gray-300 pb-3  ">
        <div className="mb-4">
          <h3 className="text-heading mb-2.5 text-base font-semibold capitalize md:text-lg">
            size
          </h3>
          <ul className="colors -mr-3 flex flex-wrap">
            <li className="text-heading mb-2 mr-2 flex h-9 w-9 cursor-pointer items-center justify-center rounded border border-gray-100 p-1 text-xs font-semibold uppercase transition duration-200 ease-in-out hover:border-black md:mb-3 md:mr-3 md:h-11 md:w-11 md:text-sm ">
              S
            </li>
            <li className="text-heading mb-2 mr-2 flex h-9 w-9 cursor-pointer items-center justify-center rounded border border-gray-100 p-1 text-xs font-semibold uppercase transition duration-200 ease-in-out hover:border-black md:mb-3 md:mr-3 md:h-11 md:w-11 md:text-sm ">
              M
            </li>
            <li className="text-heading mb-2 mr-2 flex h-9 w-9 cursor-pointer items-center justify-center rounded border border-gray-100 p-1 text-xs font-semibold uppercase transition duration-200 ease-in-out hover:border-black md:mb-3 md:mr-3 md:h-11 md:w-11 md:text-sm ">
              L
            </li>
            <li className="text-heading mb-2 mr-2 flex h-9 w-9 cursor-pointer items-center justify-center rounded border border-gray-100 p-1 text-xs font-semibold uppercase transition duration-200 ease-in-out hover:border-black md:mb-3 md:mr-3 md:h-11 md:w-11 md:text-sm ">
              XL
            </li>
          </ul>
        </div>
        <div className="mb-4 ">
          <h3 className="text-heading mb-2.5 text-base font-semibold capitalize md:text-lg">
            color
          </h3>
          <ul className="colors -mr-3 flex flex-wrap">
            <li className="text-heading mb-2 mr-2 flex h-9 w-9 cursor-pointer items-center justify-center rounded border border-gray-100 p-1 text-xs font-semibold uppercase transition duration-200 ease-in-out hover:border-black md:mb-3 md:mr-3 md:h-11 md:w-11 md:text-sm">
              <span className="block h-full w-full rounded bg-orange-400"></span>
            </li>
            <li className="text-heading mb-2 mr-2 flex h-9 w-9 cursor-pointer items-center justify-center rounded border border-gray-100 p-1 text-xs font-semibold uppercase transition duration-200 ease-in-out hover:border-black md:mb-3 md:mr-3 md:h-11 md:w-11 md:text-sm">
              <span className="block h-full w-full rounded bg-pink-400"></span>
            </li>
            <li className="text-heading mb-2 mr-2 flex h-9 w-9 cursor-pointer items-center justify-center rounded border border-gray-100 p-1 text-xs font-semibold uppercase transition duration-200 ease-in-out hover:border-black md:mb-3 md:mr-3 md:h-11 md:w-11 md:text-sm">
              <span className="block h-full w-full rounded bg-violet-600"></span>
            </li>
            <li className="text-heading mb-2 mr-2 flex h-9 w-9 cursor-pointer items-center justify-center rounded border border-gray-100 p-1 text-xs font-semibold uppercase transition duration-200 ease-in-out hover:border-black md:mb-3 md:mr-3 md:h-11 md:w-11 md:text-sm">
              <span className="block h-full w-full rounded bg-red-500"></span>
            </li>
          </ul>
        </div>
      </div>
      <div className="space-s-4 3xl:pr-48 flex items-center gap-2 border-b border-gray-300 py-8  md:pr-32 lg:pr-12 2xl:pr-32">
        <div className="group flex h-11 flex-shrink-0 items-center justify-between overflow-hidden rounded-md border border-gray-300 md:h-12">
          <button
            className="text-heading hover:bg-heading flex h-full w-10 flex-shrink-0 items-center justify-center border-e border-gray-300 transition duration-300 ease-in-out focus:outline-none md:w-12"
            disabled=""
          >
            +
          </button>
          <span className="duration-250 text-heading flex h-full w-12  flex-shrink-0 cursor-default items-center justify-center text-base font-semibold transition-colors ease-in-out  md:w-20 xl:w-24">
            1
          </span>
          <button className="text-heading hover:bg-heading flex h-full w-10 flex-shrink-0 items-center justify-center border-s border-gray-300 transition duration-300 ease-in-out focus:outline-none md:w-12">
            -
          </button>
        </div>
        <button
          type="button"
          className="h-11 w-full rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
        >
          Add to cart
        </button>
      </div>
 
    </div>
  </div>
</div>


  )
}

export default Card