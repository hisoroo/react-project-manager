import { useRef } from "react";

const commonInputClasses = "mb-4 p-2 border border-gray-300 rounded-lg w-full focus:border-purple-500 focus:ring-purple-500";
const commonButtonClasses = "px-4 py-2 rounded-lg shadow-md transition-colors duration-150 text-white";

export default function CreateProjectSection({ onCreateProject, onCancel }) {
  const titleRef = useRef(null);
  const descriptionRef = useRef(null);
  const dateRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = {
      title: titleRef.current.value,
      description: descriptionRef.current.value,
      date: dateRef.current.value,
    };
    onCreateProject(formData);
  };

  return (
    <section className="flex flex-col justify-center items-center flex-1 bg-slate-100 p-8 w-full h-full">
      <form
        className="flex flex-col items-start w-full max-w-2xl"
        onSubmit={handleSubmit}
      >
        <label
          htmlFor="title"
          className="mb-2 text-lg font-medium text-gray-700"
        >
          TITLE
        </label>
        <input
          id="title"
          type="text"
          className={commonInputClasses}
          ref={titleRef}
          required
        />
        <label
          htmlFor="description"
          className="mb-2 text-lg font-medium text-gray-700"
        >
          DESCRIPTION
        </label>
        <textarea
          id="description"
          className={`${commonInputClasses} h-20`}
          ref={descriptionRef}
          required
        ></textarea>
        <label
          htmlFor="date"
          className="mb-2 text-lg font-medium text-gray-700"
        >
          DUE DATE
        </label>
        <input
          id="date"
          type="date"
          className={commonInputClasses}
          ref={dateRef}
          required
        />
        <div className="flex justify-end space-x-4 w-full mt-6">
          <button
            type="submit"
            className={`${commonButtonClasses} bg-purple-500 hover:bg-purple-600`}
          >
            Create Project
          </button>
          <button
            type="button"
            className={`${commonButtonClasses} bg-gray-500 hover:bg-gray-600`}
            onClick={onCancel}
          >
            Cancel
          </button>
        </div>
      </form>
    </section>
  );
}
