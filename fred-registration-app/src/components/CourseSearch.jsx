export default function CourseSearch() {
  return (
    <>
      <h1 className={"text-center"}>Course Search</h1>
      <div className="flex flex-col gap-y-2">
        <div>
          <label
            htmlFor="courseTitle"
            className="block text-sm font-medium leading-6 text-gray-900"
          >
            Course Title
          </label>
          <div className="mt-2">
            <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
              <input
                type="text"
                name="courseTitle"
                id="courseTitle"
                className="block flex-1  bg-transparent py-1.5 pl-1 text-gray-900  focus:ring-0 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
        </div>
        <div>
          <label
            htmlFor="courseCode"
            className="block text-sm font-medium leading-6 text-gray-900"
          >
            Course Code 
          </label>
          <div className="mt-2">
            <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
              <input
                type="text"
                name="courseCode"
                id="courseCode"
                className="block flex-1 bg-transparent py-1.5 pl-1 text-gray-900  focus:ring-0 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

//CourseCode CourseTitle CourseCredits Departement Level...
