import PhoneCard from "../components/phonecard/Phonecard";
import Searchbar from "../components/searchbar/Searchbar";

export default function Phone() {
    return (
        <div className='' >
            <Searchbar />
            <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 p-5'>
                <PhoneCard />
                <PhoneCard />
                <PhoneCard />
                <PhoneCard />
                <PhoneCard />
                <PhoneCard />
                <PhoneCard />
                <PhoneCard />
                <PhoneCard />
                <PhoneCard />
                <PhoneCard />
                <PhoneCard />
                <PhoneCard />
                <PhoneCard />
                <PhoneCard />
                <PhoneCard />
                <PhoneCard />
                <PhoneCard />
                <PhoneCard />
                <PhoneCard />
                <PhoneCard />
                <PhoneCard />
                <PhoneCard />
                <PhoneCard />
                <PhoneCard />
                <PhoneCard />
                <PhoneCard />
            </div>

            <div className="flex flex-col items-center">
                <span className="text-sm text-gray-700 dark:text-gray-400">
                    Showing <span className="font-semibold text-gray-900 dark:text-white">1</span> to <span className="font-semibold text-gray-900 dark:text-white">10</span> of <span className="font-semibold text-gray-900 dark:text-white">100</span> Entries
                </span>
                <div className="inline-flex mt-2 xs:mt-0">
                    <button className="flex items-center justify-center px-4 h-10 text-base font-medium text-white bg-primary-blue rounded-l hover:bg-gray-900">
                        Prev
                    </button>
                    <button className="flex items-center justify-center px-4 h-10 text-base font-medium text-white bg-primary-blue border-0 border-l border-white rounded-r hover:bg-gray-900">
                        Next
                    </button>
                </div>
            </div>

        </div>
    )
}