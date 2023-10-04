import { faShop } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Page() {
    return (
        <div>

            <div className="bg-grey-lighter min-h-screen flex flex-col">

                <div className="container w-max mx-auto flex-1 flex flex-col items-center justify-center px-2">
                    <a href="/" className="flex items-center mb-6 text-2xl font-semibold text-gray-900 ">
                        <FontAwesomeIcon icon={faShop} className="mr-3 text-primary-blue" />
                        Rudsek
                    </a>
                    <div className="bg-white px-6 py-8 rounded shadow text-black w-full">
                        <h1 className="mb-8 text-3xl text-center">Sign up to create an account</h1>
                        <input
                            type="text"
                            className="block border border-grey-light w-full p-3 rounded mb-4 text-sm"
                            name="fullname"
                            placeholder="Full Name" />

                        <input
                            type="text"
                            className="block border border-grey-light w-full p-3 rounded mb-4 text-sm"
                            name="email"
                            placeholder="Email" />

                        <input
                            type="password"
                            className="block border border-grey-light w-full p-3 rounded mb-4 text-sm"
                            name="password"
                            placeholder="Password" />
                        <input
                            type="password"
                            className="block border border-grey-light w-full p-3 rounded mb-4 text-sm"
                            name="confirm_password"
                            placeholder="Confirm Password" />

                        <button
                            type="submit"
                            className="w-full text-center py-3 rounded bg-green-500 text-white hover:bg-green-dark focus:outline-none my-1"
                        >Create Account</button>

                        <div className="text-center text-sm text-grey-dark mt-4">
                            By signing up, you agree to the
                            <a className="no-underline border-b border-grey-dark text-grey-dark" href="#">
                                Terms of Service
                            </a> and
                            <a className="no-underline border-b border-grey-dark text-grey-dark" href="#">
                                Privacy Policy
                            </a>
                        </div>
                    </div>

                    <div className="text-grey-dark mt-6">
                        Already have an account? 
                        <a className="no-underline border-b border-blue text-primary-blue" href="/auth/login/">
                             Log in
                        </a>.
                    </div>
                </div>
            </div>
        </div>
    )
}