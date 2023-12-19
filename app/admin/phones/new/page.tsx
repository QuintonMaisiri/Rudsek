'use client';
import { useState, useEffect, useRef, useCallback } from "react";
import { addNewPhone, getBrands } from '@/app/dbengine'
import { useSession, signIn } from "next-auth/react";

import * as LR from "@uploadcare/blocks";
LR.registerBlocks(LR);

export default function NewPhone() {

    useEffect(() => {
        (async () => {
            try {
                const res: any = await getBrands()
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
    const fingerPrintOptions = [
        'yes',
        'no'
    ]


    let [brandOptions, setBrandOptions] = useState([]);
    let [name, setName] = useState<string>();
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
    let [memory, setMemory] = useState<string>();

  
    // window.addEventListener('LR_DATA_OUTPUT', (e) => {
    //     let imageUrls : any = []
    //     const {data} = e.detail
    //     data.map((image : any)=>{
    //         imageUrls.push(image.uuid)
    //     })
    //     setImages(imageUrls)
    //     console.log(images)
    //   });

    function resetFields() {
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
    }



    return (
        <div className="w-11/12 lg:w-5/6  mx-[auto] mt-10">

            <lr-config
                ctx-name="my-uploader"
                pubkey="621e44bf4300bac01221"
                maxLocalFileSizeBytes={2000000}
                multipleMax={3}
                imgOnly={true}
                sourceList="local, camera"
                useCloudImageEditor={false}
            ></lr-config>
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
                                (brand: any) => {
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
                                (network) => {
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
                                (android) => {
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
                                (option) => {
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
                                (option) => {
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
                            <lr-file-uploader-regular
                                css-src="https://cdn.jsdelivr.net/npm/@uploadcare/blocks@0.25.0/web/lr-file-uploader-regular.min.css"
                                ctx-name="my-uploader"
                                class="my-config"
                                onEvent={(e) => {
                                    console.log('fired')
                                }}
                            >
                            </lr-file-uploader-regular>

                            <lr-data-output
                                ctx-name="my-uploader"
                                use-event
                                use-input
                            ></lr-data-output>
                        </div>
                    </div>
                </div>
                <button
                    type="button"
                    disabled={!name || !brand || !size || !network || !battery || !frontCamera || !backCamera || !fingerPrint || !android || !description || !simCard || !price}
                    onClick={() => {
                        let imgs :any = []
                        const imageUrls=document.getElementsByName('my-uploader') as NodeListOf <HTMLInputElement> 
                        imageUrls.forEach((item)=>{
                            imgs.push(item.value)
                        })
                        addNewPhone(name!, brand!, size!, network!, battery!, frontCamera!, backCamera!, fingerPrint!, android!, description!, simCard!, price!, memory!, imgs);
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