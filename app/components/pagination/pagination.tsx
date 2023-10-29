import PhoneCard from "@/app/components/phonecard/Phonecard";
import { useEffect, useState } from "react";

export default function Pagination({ phones }: { phones: any[] }) {

    enum enumOperations {
        PREV = 'previous',
        NEXT = 'next',
    }

    const numberOfPages = Math.floor(phones.length / 20)
    let [currentPage, setCurrentPage] = useState(0)
    let [currentFirstEntryNumber, setCurrentFirstEntryNumber] = useState(currentPage * 20 + 1)
    let [phonesToShow, setPhonesToShow] = useState([])

    useEffect(()=>{
        ()=>{
            updatePhonesShown()
        }
    },[currentPage])

    function updatePhonesShown() {
        let holder: any = []
        for (let index = currentPage * 20; index < currentPage * 20 + 20; index++) {
            if (index < phones.length) {
                holder.push(phones[index])
            }
        }
        setPhonesToShow(holder)
    }

    function updatePage(operation: enumOperations) {
        if (operation == enumOperations.PREV) {
            if (currentPage > 0) {
                setCurrentPage(--currentPage)
            }
        } else if (operation == enumOperations.NEXT) {
            if (currentPage < numberOfPages) {
                setCurrentPage(++currentPage)
            }

            setCurrentFirstEntryNumber(currentPage * 20 + 1)
            updatePhonesShown()
        }
    }
    
    return (
        <div>
            <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 p-5'>
                {
                phonesToShow.map((phone: any) => {
                    return (<PhoneCard key={phone.id} product={phone} />)
                }
                )}
            </div>

            <div className="flex flex-col items-center">
                <span className="text-sm text-gray-700 dark:text-gray-400">
                    Showing <span className="font-semibold text-gray-900"> {currentFirstEntryNumber} </span> to <span className="font-semibold text-gray-900 ">20</span> of <span className="font-semibold text-gray-900 dark:text-white">{phones.length}</span> Entries
                </span>
                <div className="inline-flex mt-2 xs:mt-0">
                    <button
                        onClick={() => {
                            updatePage(enumOperations.PREV)
                        }}
                        className="flex items-center justify-center px-4 h-10 text-base font-medium text-white bg-primary-blue rounded-l hover:bg-gray-900">
                        Prev
                    </button>
                    {
                        Array.from(Array(4), (e, i) => {
                            return <button
                                key={i}
                                onClick={() => {
                                    setCurrentPage(i)
                                    setCurrentFirstEntryNumber(currentPage * 20 + 1)
                                    updatePhonesShown()
                                }}
                                className={currentPage === i ? "flex items-center justify-center px-4 h-10 text-base font-medium text-white border-0 border-l border-white bg-gray-900" : "flex items-center justify-center px-4 h-10 text-base font-medium text-white bg-primary-blue border-0 border-l border-white hover:bg-gray-900"}>
                                {i}
                            </button>
                        })
                    }
                    <button
                        onClick={() => {
                            updatePage(enumOperations.NEXT)
                        }}
                        className="flex items-center justify-center px-4 h-10 text-base font-medium text-white bg-primary-blue border-0 border-l border-white rounded-r hover:bg-gray-900">
                        Next
                    </button>
                </div>
            </div>
        </div>
    )
}