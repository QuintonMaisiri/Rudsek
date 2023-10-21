'use client'
import { signIn, useSession } from "next-auth/react";
import { useEffect, useState } from "react";

export default function Settings() {

    const { data: session } = useSession();

    const { status: sessionStatus } = useSession();
    const authorized = sessionStatus === 'authenticated';
    const unAuthorized = sessionStatus === 'unauthenticated';
    const loading = sessionStatus === 'loading';

    useEffect(() => {
        // check if the session is loading or the router is not ready
        if (loading) return;

        // if the user is not authorized, redirect to the login page
        // with a return url to the current page
        if (unAuthorized) {
            console.log('not authorized');
            signIn()
        }
    }, [loading, unAuthorized, sessionStatus]);

    if (loading) {
        return <>Loading app...</>;
      }


    if (authorized){
        if (session!.user!.role === 'user'){
            return <>Not Authorized to view this section</>
        }
    }

    return (
        <div>
            <div className="w-11/12 lg:w-5/6  mx-[auto] mt-10">
                <div>
                    <h1 className="text-xl font-bold ">Account Settings</h1>
                    <p>Change Username And Password</p>
                </div>
                <div className="rounded p-5 border mt-10 shadow-sm">
                    <div className="mt-10 flex flex-col md:justify-between md:items-center md:flex-row  ">
                        <div>
                            <p>Username</p>
                            <input type="text" className="border p-3 mt-3 w-full md:w-[auto]"/>
                        </div>
                        <div>
                            <button className="bg-primary-blue rounded text-white w-[120px] mt-5 md:mt-0 p-3">
                                Change
                            </button>
                        </div>
                    </div>
                    <div className="mt-10 flex flex-col md:justify-between md:items-center md:flex-row ">
                        <div>
                            <p>Password</p>
                            <input type="password" className="border p-3 mt-3 w-full md:w-[auto]"/>
                        </div>
                        <div>
                            <button className="bg-primary-blue rounded text-white w-[120px] p-3 mt-5 md:mt-0">
                                Change
                            </button>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}