import { faCloudArrowUp, faPlus } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

export default function NewPhone() {
    return (
        <div className="w-11/12 lg:w-5/6  mx-[auto] mt-10">
            <div className="flex justify-between items-center">
                <div>
                    <h1 className="text-xl font-bold ">Add Phone</h1>
                    <p>create new phone</p>
                </div>
                <div>
                    <button className="bg-primary-blue rounded p-3 text-white">
                        <FontAwesomeIcon icon={faPlus} className="text-white mr-5" />
                        Add New Phone
                    </button>
                </div>
            </div>
            <div className="rounded p-5 border mt-10 shadow-sm">

                <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
                    <div>
                        <h2 className="mb-2">Phone Name</h2>
                        <input type="text" className="p-2 border rounded w-full" />
                    </div>
                    <div>
                        <h2 className="mb-2">Brand</h2>
                        <select className="p-2 border rounded w-full"></select>
                    </div>
                    <div>
                        <h2 className="mb-2">Size</h2>
                        <input type="text" className="p-2 border rounded w-full" />
                    </div>
                    <div>
                        <h2 className="mb-2">Network</h2>
                        <select className="p-2 border rounded w-full"></select>
                    </div>
                    <div>
                        <h2 className="mb-2">Battery</h2>
                        <input type="text" className="p-2 border rounded w-full" />
                    </div>
                    <div>
                        <h2 className="mb-2">Front Camera</h2>
                        <input type="text" className="p-2 border rounded w-full" />
                    </div>
                    <div>
                        <h2 className="mb-2">Back Camera</h2>
                        <input type="text" className="p-2 border rounded w-full" />
                    </div>
                    <div>
                        <h2 className="mb-2">Android</h2>
                        <select className="p-2 border rounded w-full"></select>
                    </div>
                    <div>
                        <h2 className="mb-2">Sim Card</h2>
                        <select className="p-2 border rounded w-full"></select>
                    </div>
                    <div>
                        <h2 className="mb-2">Finger Print</h2>
                        <select className="p-2 border rounded w-full"></select>
                    </div>
                    <div>
                        <h2 className="mb-2">Price</h2>
                        <input type="text" className="p-2 border rounded w-full" />
                    </div>
                    <div className=" md:col-span-2 lg:col-span-3 xl:col-span-4">
                        <h2 className="mb-2">Description</h2>
                        <textarea className="p-2 border rounded w-full" rows={5} />
                    </div>
                    <div className=" md:col-span-2 lg:col-span-3 xl:col-span-4">
                        <h2 className="mb-2">Phone Image</h2>
                        <div className="p-2 border rounded w-full h-40 border border-primary-blue hover:bg-primary-blue flex items-center justify-center text-primary-blue hover:text-white" >
                            <FontAwesomeIcon icon={faCloudArrowUp} className="text-4xl mr-3" />
                            <p>Drag and drop a file to upload</p>
                        </div>
                    </div>
                </div>
                <button className="rounded p-3 bg-primary-blue text-white mt-10 w-[120px]">
                    Submit
                </button>
            </div>
        </div>
    )
}