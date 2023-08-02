/* eslint-disable react/prop-types */
export function ServiceCard({name, description, minDescription, children}){
    return(
        <div className="group mb-8 bg-white p-5 lg:p-10 rounded-xl shadow-2xl ease-in duration-100
        hover:scale-105 hover:bg-cyan-600 hover:text-white">
            <h2 className="text-4xl font-bold mb-2 text-center lg:text-left py-4 ">
              {name}
            </h2>
            <div className="flex flex-col lg:flex-row items-center justify-center lg:justify-start lg:space-x-7">
              <div className="flex justify-center bg-cyan-900 rounded-full text-white text-6xl p-4 mb-2 
              group-hover:bg-white group-hover:text-black">
                {children}
              </div>
              <p className="text-3xl hidden lg:flex">
               {description}
              </p>
              <p className="text-xl p-2 lg:text-3xl flex lg:hidden w-max">
                {minDescription}
              </p>
            </div>
          </div>
    )
}