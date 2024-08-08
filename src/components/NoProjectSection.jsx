export default function NoProjectSection({onCreateProject}) {
  return (
    <section className="flex flex-col justify-center items-center flex-1 bg-slate-100">
      <div className="flex flex-col justify-center items-center mb-10">
        <img
          src="src/assets/project-svgrepo-com.svg"
          alt="project-icon"
          className="size-16 mb-3 ml-3"
        />
        <h1 className="text-2xl font-semibold m-3">No Project Selected</h1>
        <h3 className="text-lg mt-3 text-gray-500">
          Select a project or get started with a new one
        </h3>
        <button className="mt-4 px-6 py-2 bg-purple-500 text-white font-semibold rounded-lg shadow-md hover:bg-purple-700 active:scale-95 transition-transform duration-150"
        onClick={onCreateProject}>
          Create new Project
        </button>
      </div>
    </section>
  );
}
