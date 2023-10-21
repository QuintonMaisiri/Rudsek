'use client';
import { faCloudArrowUp } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useState, useEffect } from "react";
import {addNewPhone, getBrands} from '@/app/dbengine'
// import fs from 'fs'
import { useSession, signIn } from "next-auth/react";

export default function NewPhone() {

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


    useEffect(() => {
        (async () => {
            try {
                const res : any = await getBrands()
                setBrandOptions(res)
            } catch (e) {
                console.log(e);
            }
        })();
    }, []);

    let [brandOptions, setBrandOptions] =useState([]);
    let [name, setName] = useState<string >();
    let [brand, setBrand] = useState<string>();
    let [size, setSize] = useState<string>();
    let [network, setNetwork] = useState<string>();
    let [battery, setBattery] = useState<string>();
    let [frontCamera, setFrontCamera] = useState<string>();
    let [backCamera, setBackCamera] = useState<string>();
    let [fingerPrint, setFingerPrint] = useState<string>();
    let [android, setAndroid] = useState<string>();
    let [description, setDescription] = useState<string>();
    let [simCard, setSimcard] = useState<string>();
    let [price, setPrice] = useState<string>();
    let [memory,setMemory] = useState<string>();
    let [image, setImage] = useState<any>();
    
    if (loading) {
        return <>Loading app...</>;
      }


    if (authorized){
        if (session!.user!.role === 'user'){
            return <>Not Authorized to view this section</>
        }
    }
    const networkOptions = ['3G', '4G', '5G'];
    const simCardOptions = ['Single', 'Dual'];
    const androidOptions = [
        'Android 4',
        'Android 5',
        'Android 6',
        'Android 7',
        'Android 8',
        'Android 9',
        'Android 10',
        'Android 11',
        'Android 12',
        'Android 13',
        'Android 14',
        'Android 15',
    ]
    const fingerPrintOptions =[
        'yes',
        'no'
    ]

    function resetFields(){
         setName('')
         setBrand('0')
         setSize('')
         setNetwork('')
         setBattery('')
         setFrontCamera('')
        setBackCamera('')
        setFingerPrint('')
         setAndroid('')
         setDescription('')
         setSimcard('')
        setPrice('')
        setImage('')
    }

    
    return (
        <div className="w-11/12 lg:w-5/6  mx-[auto] mt-10">
            <div>
                <h1 className="text-xl font-bold ">Add Phone</h1>
                <p>create new phone</p>
            </div>
            <div className="rounded p-5 border mt-10 shadow-sm">

                <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
                    <div>
                        <h2 className="mb-2">Phone Name</h2>
                        <input
                        value={name}
                            onChange={(e) => setName(e.target.value)}
                            type="text" className="p-2 border rounded w-full" />
                    </div>
                    <div>
                        <h2 className="mb-2">Brand</h2>
                        <select
                        value={brand}
                            onChange={(e) => setBrand(e.target.value)}
                            className="p-2 border rounded w-full" defaultValue={0}>
                                <option value="0">Select Brand</option>
                                {brandOptions.map(
                                    (brand : any)=>{
                                        return <option key={brand.data.name} value={brand.data.name}>{brand.data.name}</option>
                                    }
                                )}
                            </select>
                    </div>
                    <div>
                        <h2 className="mb-2">Size</h2>
                        <input
                        value={size}
                            onChange={(e) => setSize(e.target.value)}
                            type="text" className="p-2 border rounded w-full" />
                    </div>
                    <div>
                        <h2 className="mb-2">Network</h2>
                        <select
                        value={network}
                            onChange={(e) => setNetwork(e.target.value)}
                            className="p-2 border rounded w-full" defaultValue={0}>
                                <option value={0}>Select Network</option>
                                {networkOptions.map(
                                    (network)=>{
                                        return <option key={network} value={network}>{network}</option>
                                    }
                                )}
                            </select>
                    </div>
                    <div>
                        <h2 className="mb-2">Battery</h2>
                        <input
                        value={battery}
                            onChange={(e) => setBattery(e.target.value)}
                            type="text" className="p-2 border rounded w-full" />
                    </div>
                    <div>
                        <h2 className="mb-2">Front Camera</h2>
                        <input
                        value={frontCamera}
                            onChange={(e) => setFrontCamera(e.target.value)}
                            type="text" className="p-2 border rounded w-full" />
                    </div>
                    <div>
                        <h2 className="mb-2">Back Camera</h2>
                        <input
                        value={backCamera}
                            onChange={(e) => setBackCamera(e.target.value)}
                            type="text" className="p-2 border rounded w-full" />
                    </div>
                    <div>
                        <h2 className="mb-2">Android</h2>
                        <select
                        value={android}
                            onChange={(e) => setAndroid(e.target.value)}
                            className="p-2 border rounded w-full " defaultValue={0}>
                                <option value={0}>Select android version</option>
                                {androidOptions.map(
                                    (android)=>{
                                        return <option key={android} value={android}> {android}</option>
                                    }
                                )}
                            </select>
                    </div>
                    <div>
                        <h2 className="mb-2">Sim Card</h2>
                        <select
                        value={simCard}
                            onChange={(e) => setSimcard(e.target.value)}
                            className="p-2 border rounded w-full" defaultValue={0}>
                                <option value={0}>Select</option>
                                {simCardOptions.map(
                                    (option)=>{
                                        return <option key={option} value={option}>{option}</option>
                                    }
                                )}
                            </select>
                    </div>
                    <div>
                        <h2 className="mb-2">Finger Print</h2>
                        <select
                        value={fingerPrint}
                            onChange={(e) => setFingerPrint(e.target.value)}
                            className="p-2 border rounded w-full" defaultValue={0}>
                                <option value={0}>Select</option>
                                {fingerPrintOptions.map(
                                    (option)=>{
                                        return <option key={option} value={option}>{option}</option>
                                    }
                                )}
                            </select>
                    </div>
                    <div>
                        <h2 className="mb-2">Price</h2>
                        <input
                        value={price}
                            onChange={(e) => setPrice(e.target.value)}
                            type="text" className="p-2 border rounded w-full" />
                    </div>
                    <div>
                        <h2 className="mb-2">Memory</h2>
                        <input
                        value={memory}
                            onChange={(e) => setMemory(e.target.value)}
                            type="text" className="p-2 border rounded w-full" />
                    </div>
                    <div className=" md:col-span-2 lg:col-span-3 xl:col-span-4">
                        <h2 className="mb-2">Description</h2>
                        <textarea
                            onChange={(e) => setDescription(e.target.value)}
                            className="p-2 border rounded w-full" rows={5} />
                    </div>
                    <div className=" md:col-span-2 lg:col-span-3 xl:col-span-4">
                        <h2 className="mb-2">Phone Image</h2>
                        <div className="p-2 border rounded w-full h-40 border border-primary-blue hover:bg-primary-blue flex items-center justify-center text-primary-blue hover:text-white" >
                            <FontAwesomeIcon icon={faCloudArrowUp} className="text-4xl mr-3" />
                            <input type="file" id="img" name="img" accept="image/*" value={image} onChange={(e)=>{
                                if (e.target.files){
                                    const file = e.target.files[0]
                                    setImage(file)
                                    console.log()
                                }
                                
                            }}/>
                        </div>
                    </div>
                </div>
                <button
                    type="button"
                    disabled ={!name || !brand || !size || !network || !battery || !frontCamera || !backCamera || ! fingerPrint || !android || ! description || ! simCard || !price}  
                    onClick={() => {addNewPhone( name !, brand !, size !, network !, battery !, frontCamera !, backCamera !, fingerPrint !, android !,description !, simCard !,price !,memory !,image !);
                        resetFields();
                        window.alert("Phone added successfully");
                    }}
                    className="rounded p-3 bg-primary-blue text-white mt-10 w-[120px]">
                    Submit
                </button>
            </div>
        </div>
    )
}
export const dynamic = 'force-dynamic'