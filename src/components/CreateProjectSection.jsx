export default function CreateProjectSection(params) {
    return (
        <section className="flex flex-col justify-center items-center flex-1 bg-slate-100 p-8 w-full h-full">
            <form action="submit" className="flex flex-col items-start w-full max-w-2xl">
                <label htmlFor="title" className="mb-2 text-lg font-medium text-gray-700">TITLE</label>
                <input id="title" type="text" className="mb-4 p-2 border border-gray-300 rounded-lg w-full focus:border-purple-500 focus:ring-purple-500"/>
                <label htmlFor="description" className="mb-2 text-lg font-medium text-gray-700">DESCRIPTION</label>
                <textarea id="description" className="mb-4 p-2 border border-gray-300 rounded-lg w-full h-20 focus:border-purple-500 focus:ring-purple-500"></textarea>
                <label htmlFor="date" className="mb-2 text-lg font-medium text-gray-700">DUE DATE</label>
                <input id="date" type="date" className="mb-4 p-2 border border-gray-300 rounded-lg w-full focus:border-purple-500 focus:ring-purple-500"/>
                <div className="flex justify-end space-x-4 w-full mt-6">
                    <button type="submit" className="px-4 py-2 bg-purple-500 text-white rounded-lg shadow-md hover:bg-purple-600 transition-colors duration-150">Create Project</button>
                    <button type="button" className="px-4 py-2 bg-gray-500 text-white rounded-lg shadow-md hover:bg-gray-600 transition-colors duration-150">Cancel</button>
                </div>
            </form>
        </section>
    );
}
