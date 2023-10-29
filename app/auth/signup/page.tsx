'use client'

import { faShop } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { NewUser } from '@/app/components/interfaces/new_user'
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { createNewUser } from "@/app/dbengine";
import { signIn } from "next-auth/react";
import * as LR from "@uploadcare/blocks";
LR.registerBlocks(LR);


export default function Page() {

    let [email, setEmail] = useState<string>('')
    let [address, setAddress] = useState<string>('')
    let [password, setPassword] = useState<string>('')
    let [name, setName] = useState<string>('')
    let [confirmPassword, setConfirmPasssword] = useState<string>('')
    let [phoneNumber, setPhoneNumber] = useState<string>('')
    let [passwordsDoNotMatch, setPasswordsDoNotMatch] = useState(false)

    function resetFields() {
        setEmail('')
        setAddress('')
        setPassword('')
        setConfirmPasssword('')
        setName('')
        setPhoneNumber('')

    }

    function signup() {
        if (password === confirmPassword) {
            let user: NewUser = {
                email,
                password,
                address,
                phoneNumber,
                name,
            }
            const auth = getAuth();
            createUserWithEmailAndPassword(auth, email, password)
                .then((userCredential) => {
                    const createdUser: any = userCredential.user;
                    createNewUser(user, createdUser.uid)
                    signIn('credentials', { email, password, redirect: true, callbackUrl: '/' })
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                });

        } else {
            setPasswordsDoNotMatch(true)
            setConfirmPasssword('')
        }
    }

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
                            value={name}
                            onChange={(e) => {
                                setName(e.target.value)
                            }}
                            type="text"
                            className="block border border-grey-light w-full p-3 rounded mb-4 text-sm"
                            name="fullname"
                            placeholder="Full Name" />

                        <input
                            value={phoneNumber}
                            onChange={(e) => {
                                setPhoneNumber(e.target.value)
                            }}
                            type="text"
                            className="block border border-grey-light w-full p-3 rounded mb-4 text-sm"
                            name="fullname"
                            placeholder="Phone number" />

                        <input
                            value={
                                address
                            }
                            onChange={(e) => {
                                setAddress(e.target.value)
                            }}
                            type="text"
                            className="block border border-grey-light w-full p-3 rounded mb-4 text-sm"
                            name="fullname"
                            placeholder="Address" />

                        <input
                            value={email}
                            onChange={(e) => {
                                setEmail(e.target.value)
                            }}
                            type="text"
                            className="block border border-grey-light w-full p-3 rounded mb-4 text-sm"
                            name="email"
                            placeholder="Email" />

                        <input
                            value={password}
                            onChange={(e) => {
                                setPassword(e.target.value)
                            }}
                            type="password"
                            className="block border border-grey-light w-full p-3 rounded mb-4 text-sm"
                            name="password"
                            placeholder="Password" />
                        <p hidden={!passwordsDoNotMatch} className="text-red-400 text-sm">*Passwords Do Not Match</p>
                        <input
                            value={confirmPassword}
                            onChange={(e) => {
                                setConfirmPasssword(e.target.value)
                            }}
                            type="password"
                            className="block border border-grey-light w-full p-3 rounded mb-4 text-sm"
                            name="confirm_password"
                            placeholder="Confirm Password" />

                        <button
                            disabled={!name || !password || !email || !address || !phoneNumber || !confirmPassword}
                            onClick={() => {
                                signup()
                            }}
                            type="button"
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
                        <a className="no-underline border-b border-blue text-primary-blue" href="/auth/signin/">
                            Log in
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}
export const dynamic = 'force-dynamic'