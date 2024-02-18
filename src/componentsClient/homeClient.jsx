// import React from 'react'

function HomeClient() {
  return (
    <div className="mt-3">
      {/* <h1 className="font-[SM-Sans] text-2xl text-[#2E3837]">Wolcame User</h1> */}

      <h1 className="text-4xl font-bold leading-tight text-gray-900 sm:text-5xl sm:leading-tight lg:leading-tight lg:text-3xl font-pj"> Welcame *User*</h1>

      <h1 className="text-4xl font-bold leading-tight text-gray-900 sm:text-5xl sm:leading-tight lg:leading-tight lg:text-3xl font-pj">Your History</h1>
      <p className="mt-2 text-lg text-gray-600 sm:mt-8 font-inter">  Your history can teach you and you can only learn from it</p>



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
                    <th scope="col" className="px-4 py-2">Rating / More</th>
                    <th scope="col" className="px-4 py-2">Start Again</th>
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
        <button className="block w-[90%] max-w-xs mx-auto bg-[#2E3837] hover:bg-[#FAF7FF] hover:text-[#2E3837] font-bold text-white rounded-2xl  py-3 font-[simple] mt-5">New Interview..</button>

      </div>

    </div>
  )
}

export default HomeClient