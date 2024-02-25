import React from 'react'

function DashboardAdmin() {
  return (
    <>

      <header>
        <nav class="bg-white border-gray-200 px-4 lg:px-6 py-2.5 dark:bg-gray-800">
          <div class="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
            <img src="/src/assets/return.png" class="mr-3 h-6 sm:h-6" alt="Flowbite Logo" />
            <div class="flex items-center lg:order-2">
              <img src="/src/assets/microsoft-excel.svg" class="mr-3 h-6 sm:h-6" alt="Flowbite Logo" />
              <img src="/src/assets/settings.png" class="mr-3 h-6 sm:h-6" alt="Flowbite Logo" />
            </div>
          </div>
        </nav>
      </header>
      <h1 className="text-4xl font-bold leading-tight text-gray-900 sm:text-5xl sm:leading-tight lg:leading-tight lg:text-3xl font-pj"> Welcame Admin *User* </h1>
      <button className="block w-[90%] max-w-xs mx-auto bg-[#2E3837] hover:bg-[#FAF7FF] hover:text-[#2E3837] font-bold text-white rounded-2xl  py-3 font-[simple] mt-5">All Users</button>
      <div class="flex flex-col">
        <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div class="inline-block min-w-full py-2 sm:px-6 lg:px-8">
            <div class="overflow-hidden">
              <table class="min-w-full text-left text-sm font-light">
                <thead class="border-b font-medium dark:border-neutral-500">
                  <tr>
                    <th scope="col" className="px-4 py-2">Id</th>
                    <th scope="col" className="px-4 py-2">ID / Name</th>
                    <th scope="col" className="px-4 py-2">Date</th>
                    <th scope="col" className="px-4 py-2">Role</th>
                    <th scope="col" className="px-4 py-2">Time</th>
                    <th scope="col" className="px-4 py-2">The number of questions</th>
                    <th scope="col" className="px-4 py-2">More details</th>
                  </tr>
                </thead>
                {/* <tbody>
      <tr
          class="border-b transition duration-300 ease-in-out hover:bg-neutral-100 dark:border-neutral-500 dark:hover:bg-neutral-600">
          <td className="whitespace-nowrap px-4 py-2 font-medium">1</td>
          <td className="whitespace-nowrap px-4 py-2">Cell</td>
          <td className="whitespace-nowrap px-4 py-2">Cell</td>
          <td className="whitespace-nowrap px-4 py-2">Cell</td>
          <td className="whitespace-nowrap px-4 py-2">Cell</td>
          <td className="whitespace-nowrap px-4 py-2">Cell</td>
          <td className="whitespace-nowrap px-4 py-2">Cell</td>
          <td className="whitespace-nowrap px-4 py-2">Cell</td>
          <td className="whitespace-nowrap px-4 py-2">Cell</td>
          </tr>
        <tr
        class="border-b transition duration-300 ease-in-out hover:bg-neutral-100 dark:border-neutral-500 dark:hover:bg-neutral-600">
          <td className="whitespace-nowrap px-4 py-2 font-medium ">2</td>
          <td className="whitespace-nowrap px-4 py-2">Cell</td>
          <td className="whitespace-nowrap px-4 py-2">Cell</td>
          <td className="whitespace-nowrap px-4 py-2">Cell</td>
          <td className="whitespace-nowrap px-4 py-2">Cell</td>
          <td className="whitespace-nowrap px-4 py-2">Cell</td>
          <td className="whitespace-nowrap px-4 py-2">Cell</td>
          <td className="whitespace-nowrap px-4 py-2 ">Cell</td>
          <td className="whitespace-nowrap px-4 py-2 ">Cell</td>
        </tr>
        <tr className="border-b ">
          <td className="whitespace-nowrap px-4 py-2 font-medium ">3</td>
          <td className="whitespace-nowrap px-4 py-2">Cell</td>
          <td className="whitespace-nowrap px-4 py-2">Cell</td>
          <td className="whitespace-nowrap px-4 py-2">Cell</td>
          <td className="whitespace-nowrap px-4 py-2">Cell</td>
          <td className="whitespace-nowrap px-4 py-2">Cell</td>
          <td className="whitespace-nowrap px-4 py-2">Cell</td>
          <td className="whitespace-nowrap px-4 py-2">Cell</td>
          <td className="whitespace-nowrap px-4 py-2">Cell</td>
        </tr>
      </tbody> */}
              </table>
            </div>

          </div>

        </div>

      </div>
    </>
  )
}

export default DashboardAdmin