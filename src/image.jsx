import React, { useEffect, useState } from 'react';
import { useDropzone } from 'react-dropzone';


export function Previews(props) {
    const [files, setFiles] = useState([]);
    const { getRootProps, getInputProps } = useDropzone({
        accept: "image/jpg, image/jpeg",
        onDrop: acceptedFiles => {
            setFiles(acceptedFiles.map(file => Object.assign(file, {
                preview: URL.createObjectURL(file)
            },

            )));
        },
    });



    const thumbs = files.map(file => (
        <div className="Dropzone-thumb" key={file.name}>
            <div className="Dropzone-thumbInner" >
                <img
                    src={file.preview}
                    alt=""
                    className="Dropzone-imgUser"
                />
            </div>
        </div>
    ));

    useEffect(() => () => {
        files.forEach(file => URL.revokeObjectURL(file.preview));
    }, [files]);



    return (
        <section className="container">
            <h4>Zdjęcie:</h4>
            <div {...getRootProps({ className: 'Dropzone' })}>
                <input
                    {...getInputProps()}
                    type='file'
                    name="userImage"
                    accept="image/jpg, image/jpeg"
                />


                {thumbs}

                <h3>Przeciągnij i upuść plik tutaj lub kliknij, aby wybrać z dysku</h3>


            </div>
            <p>*Fromat zdjęcia jpg/jpeg</p>
        </section>
    );
}
