import Image from "next/image"
import { useEffect, useState } from "react"

export default function ImageSlider({ imgs }: { imgs: string[] }) {

    let [selectedImage, setSelectedImage] = useState<string>('')

    useEffect(()=>{
        if (imgs != undefined){
            setSelectedImage(imgs[0])
        }
    },[])
    

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
                {
                    imgs != undefined 
                    &&
                    imgs.map((image) => {
                        return (
                            <Image
                                className="cursor-pointer"
                                onClick={() => {
                                    setSelectedImage(image)
                                }}
                                src={image}
                                width={50}
                                height={300}
                                alt="phone"
                            />
                        )
                    })
                }
            </div>
        </div>
    )
}