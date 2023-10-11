'use client';
import { faCloudArrowUp } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useState, useEffect } from "react";
import {addNewPhone, getBrands} from '@/app/dbengine'

export default function NewPhone() {
    let [brandOptions, setBrandOptions] =useState([]);
    let [name, setName] = useState<String>();
    let [brand, setBrand] = useState<String>();
    let [size, setSize] = useState<String>();
    let [network, setNetwork] = useState<String>();
    let [battery, setBattery] = useState<String>();
    let [frontCamera, setFrontCamera] = useState<String>();
    let [backCamera, setBackCamera] = useState<String>();
    let [fingerPrint, setFingerPrint] = useState<String>();
    let [android, setAndroid] = useState<String>();
    let [description, setDescription] = useState<String>();
    let [simCard, setSimcard] = useState<String>();
    let [price, setPrice] = useState<String>();
    let [memory,setMemory] = useState<String>();
    let [image, setImage] = useState<String>();

    useEffect(() => {
        (async () => {
            try {
                const res = await getBrands()
                setBrandOptions(res)
            } catch (e) {
                console.log(e);
            }
        })();
    }, []);

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
         setName(undefined)
         setBrand(undefined)
         setSize(undefined)
         setNetwork(undefined)
         setBattery(undefined)
         setFrontCamera(undefined)
        setBackCamera(undefined)
        setFingerPrint(undefined)
         setAndroid(undefined)
         setDescription(undefined)
         setSimcard(undefined)
        setPrice(undefined)
        setImage(undefined)
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
                            onChange={(e) => setName(e.target.value)}
                            type="text" className="p-2 border rounded w-full" />
                    </div>
                    <div>
                        <h2 className="mb-2">Brand</h2>
                        <select
                            onChange={(e) => setBrand(e.target.value)}
                            className="p-2 border rounded w-full" defaultValue={0}>
                                <option value="0">Select Brand</option>
                                {brandOptions.map(
                                    (brand : any)=>{
                                        return <option value={brand.data.name}>{brand.data.name}</option>
                                    }
                                )}
                            </select>
                    </div>
                    <div>
                        <h2 className="mb-2">Size</h2>
                        <input
                            onChange={(e) => setSize(e.target.value)}
                            type="text" className="p-2 border rounded w-full" />
                    </div>
                    <div>
                        <h2 className="mb-2">Network</h2>
                        <select
                            onChange={(e) => setNetwork(e.target.value)}
                            className="p-2 border rounded w-full" defaultValue={0}>
                                <option value={0}>Select Network</option>
                                {networkOptions.map(
                                    (network)=>{
                                        return <option value={network}>{network}</option>
                                    }
                                )}
                            </select>
                    </div>
                    <div>
                        <h2 className="mb-2">Battery</h2>
                        <input
                            onChange={(e) => setBattery(e.target.value)}
                            type="text" className="p-2 border rounded w-full" />
                    </div>
                    <div>
                        <h2 className="mb-2">Front Camera</h2>
                        <input
                            onChange={(e) => setFrontCamera(e.target.value)}
                            type="text" className="p-2 border rounded w-full" />
                    </div>
                    <div>
                        <h2 className="mb-2">Back Camera</h2>
                        <input
                            onChange={(e) => setBackCamera(e.target.value)}
                            type="text" className="p-2 border rounded w-full" />
                    </div>
                    <div>
                        <h2 className="mb-2">Android</h2>
                        <select
                            onChange={(e) => setAndroid(e.target.value)}
                            className="p-2 border rounded w-full " defaultValue={0}>
                                <option value={0}>Select android version</option>
                                {androidOptions.map(
                                    (android)=>{
                                        return <option value={android}> {android}</option>
                                    }
                                )}
                            </select>
                    </div>
                    <div>
                        <h2 className="mb-2">Sim Card</h2>
                        <select
                            onChange={(e) => setSimcard(e.target.value)}
                            className="p-2 border rounded w-full" defaultValue={0}>
                                <option value={0}>Select</option>
                                {simCardOptions.map(
                                    (option)=>{
                                        return <option value={option}>{option}</option>
                                    }
                                )}
                            </select>
                    </div>
                    <div>
                        <h2 className="mb-2">Finger Print</h2>
                        <select
                            onChange={(e) => setFingerPrint(e.target.value)}
                            className="p-2 border rounded w-full" defaultValue={0}>
                                <option value={0}>Select</option>
                                {fingerPrintOptions.map(
                                    (option)=>{
                                        return <option value={option}>{option}</option>
                                    }
                                )}
                            </select>
                    </div>
                    <div>
                        <h2 className="mb-2">Price</h2>
                        <input
                            onChange={(e) => setPrice(e.target.value)}
                            type="text" className="p-2 border rounded w-full" />
                    </div>
                    <div>
                        <h2 className="mb-2">Memory</h2>
                        <input
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
                            <p>Drag and drop a file to upload</p>
                        </div>
                    </div>
                </div>
                <button
                    type="button"
                    disabled ={!name || !brand || !size || !network || !battery || !frontCamera || !backCamera || ! fingerPrint || !android || ! description || ! simCard || !price}  
                    onClick={() => {addNewPhone( name, brand, size, network, battery, frontCamera, backCamera, fingerPrint, android,description, simCard,price,memory);
                        window.alert("Phone added successfully");
                        resetFields();
                    }}
                    className="rounded p-3 bg-primary-blue text-white mt-10 w-[120px]">
                    Submit
                </button>
            </div>
        </div>
    )
}