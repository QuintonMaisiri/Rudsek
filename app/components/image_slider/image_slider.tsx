import Image from "next/image"
import { useState } from "react"

export default function ImageSlider() {
    // {images} : {images : [string,string,string]}
    let images = [
        '/images/phone.jpg',
        '/images/test.jpg',
        '/images/phone.jpg',
    ]
    let [selectedImage, setSelectedImage] = useState<string>(images[0])
    return (
        <div className="">
            <Image
                src={selectedImage!}
                width={200}
                height={300}
                alt="hauwei phone"
                className="mx-[auto] mb-5"
            />
            <div className="grid grid-cols-3">

                <Image
                className="cursor-pointer"
                onClick={()=>{
                    setSelectedImage(images[0])
                }}
                    src={images[0]}
                    width={50}
                    height={300}
                    alt="phone"
                />
                <Image
                className="cursor-pointer"
                onClick={()=>{
                    setSelectedImage(images[1])
                }}
                    src={images[1]}
                    width={50}
                    height={300}
                    alt="phone"
                />

                <Image
                className="cursor-pointer"
                onClick={()=>{
                    setSelectedImage(images[2])
                }}
                    src={images[2]}
                    width={50}
                    height={300}
                    alt="phone"
                />
            </div>
        </div>
    )
}