import React, { useState } from "react";
import { PlusOutlined } from "@ant-design/icons";
import { Image, Upload } from "antd";

const getBase64 = (file) =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = (error) => reject(error);
  });

function Step7({ nextStep, prevStep }) {
  const [loading, setLoading] = useState(false);

  const [previewOpen, setPreviewOpen] = useState(false);
  const [previewImage, setPreviewImage] = useState("");
  const [fileList, setFileList] = useState([
    {
      uid: "-1",
      name: "image.png",
      status: "done",
      url: "https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png",
    },
  ]);

  const handlePreview = async (file) => {
    if (!file.url && !file.preview) {
      file.preview = await getBase64(file.originFileObj);
    }
    setPreviewImage(file.url || file.preview);
    setPreviewOpen(true);
  };
  const handleChange = ({ fileList: newFileList }) => setFileList(newFileList);
  const uploadButton = (
    <button
      style={{
        border: 0,
        background: "none",
      }}
      type="button"
    >
      <PlusOutlined />
      <div
        style={{
          marginTop: 8,
        }}
      >
        Upload
      </div>
    </button>
  );
  return (
    <>
      {/* <!-- * Step 4 start --> */}
      <div className="stp step-4">
        <div className="header">
          <h1 className="title">Image Uploads</h1>
          <p className="exp">
            Uploading good quality images will improve the visibility of your
            listing.
          </p>
        </div>
        <form>
          <div className="label">
            <label for="name">Your Images</label>
            <p className="error">This Field Is Required</p>
          </div>

          <div className="grid grid-cols-4">
            <>
              <Upload
                action="https://660d2bd96ddfa2943b33731c.mockapi.io/api/upload"
                listType="picture-card"
                fileList={fileList}
                onPreview={handlePreview}
                onChange={handleChange}
              >
                {fileList.length >= 8 ? null : uploadButton}
              </Upload>
              {previewImage && (
                <Image
                  wrapperStyle={{
                    display: "none",
                  }}
                  preview={{
                    visible: previewOpen,
                    onVisibleChange: (visible) => setPreviewOpen(visible),
                    afterOpenChange: (visible) =>
                      !visible && setPreviewImage(""),
                  }}
                  src={previewImage}
                />
              )}
            </>
          </div>
        </form>
        <div className="btns">
          <button className="prev-stp" type="button" onClick={prevStep}>
            Go Back
          </button>
          <button className="next-stp" type="submit" onClick={nextStep}>
            Next Step
          </button>
        </div>
      </div>
      {/* <!-- Step 4 end --> */}
    </>
  );
}

export default Step7;
