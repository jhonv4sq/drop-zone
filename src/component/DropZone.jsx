import React, {useState, useCallback} from 'react'
import {useDropzone} from 'react-dropzone'


const DropZone = (props) => {
    const [files, setFiles] = useState([]);
    const [slot, setSlot] = useState(props.slot)

    const onDrop = useCallback(acceptedFiles => {
        acceptedFiles.forEach((file) => {
            const reader = new FileReader()
            reader.onload = () => {
                const binaryStr = reader.result
                console.log(binaryStr)
            }
            reader.readAsArrayBuffer(file)
        })
    }, [])


    const  { getRootProps , getInputProps , isDragActive }  =  useDropzone ( {

        accept: {
            'image/*': []
        },
         onDrop: acceptedFiles => {
            setFiles(acceptedFiles.map(file => Object.assign(file, {
              preview: URL.createObjectURL(file)
            })));
          }
    }) 

  return (
    <>
        <div {...getRootProps()} className='first-card background relative flex justify-center items-center rounded w-full lg:w-[600px] h-40 lg:h-[400px] shadow-[0_5px_26px_8px_rgb(86,155,81)] cursor-pointer '>
            
            {files.map(file => <img key={file.name} src={file.preview} className="w-full h-full absolute" />)}

            <input {...getInputProps()} className='absolute z-10 w-full lg:w-[600px] h-40 lg:h-[400px] cursor-pointer cursor-pointer' multiple />

            <p className='uppercase text-white text-lg lg:text-3xl font-[500]'>{slot}</p>
        </div>
    </>
  )
}

export default DropZone
