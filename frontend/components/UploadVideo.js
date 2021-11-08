import React, { useState } from "react";
import ipfs from "./../src/ipfs";
import SimpleTube from "../src/SimpleTube";

export default function UploadVideo({ setLoading, user }) {
  const [file, setFile] = useState({});
  const [title, setTitle] = useState("");

  const handleChange = async (e) => {
    let f = e.target.files[0];
    const reader = new window.FileReader();
    reader.readAsArrayBuffer(f);

    reader.onloadend = () => {
      setFile(Buffer(reader.result));
    };
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const result = await ipfs.add(file);

      let uploaded = await SimpleTube.methods
        .uploadVideo(result[0].hash, title)
        .send({ from: user });
      console.log(uploaded);
      setLoading(false);
      setTitle("");
      setFile({});
      window.location.reload();
    } catch (err) {
      console.log(err);
      window.alert(err.message);
      setLoading(false);
    }
    setLoading(false);
  };

  return (
    <div className='uploadVideo'>
      <form onSubmit={handleSubmit}>
        <div className=''>
          <h1>Share Your Video</h1>

          <div className='w-100 d-flex justify-content-between my-3'>
            <input
              type='text'
              placeholder='Enter a title...'
              className='title mx-3'
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
            <input
              type='file'
              accepts='.mp4 .MP4 .mkv .ogg .wmv'
              className='fileInput form-control-file'
              id='files'
              onChange={handleChange}
            />
          </div>
        </div>
        <p className='text-warning'>
          *Please also upload your video to IPFS from your local device to get
          preview immediately.
        </p>
        <button type='submit' className='btn btn-success'>
          Upload video
        </button>
      </form>
    </div>
  );
}
