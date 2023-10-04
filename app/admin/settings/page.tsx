import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Settings() {
    return (
        <div>
            <div className="w-11/12 lg:w-5/6  mx-[auto] mt-10">
                <div>
                    <h1 className="text-xl font-bold ">Account Settings</h1>
                    <p>Change Username And Password</p>
                </div>
                <div className="rounded p-5 border mt-10 shadow-sm">
                    <div className="mt-10 flex justify-between items-center">
                        <div>
                            <p>Username</p>
                            <input type="text" className="border p-3 mt-3"/>
                        </div>
                        <div>
                            <button className="bg-primary-blue rounded text-white w-[120px] p-3">
                                Change
                            </button>
                        </div>
                    </div>
                    <div className="mt-10 flex justify-between items-center">
                        <div>
                            <p>Password</p>
                            <input type="password" className="border p-3 mt-3"/>
                        </div>
                        <div>
                            <button className="bg-primary-blue rounded text-white w-[120px] p-3">
                                Change
                            </button>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}