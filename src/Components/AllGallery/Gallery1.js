import React, { useState } from "react";
import { MdClose } from "react-icons/md";

const Gallery1 = () => {
  const images = [
    "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image.jpg",
    "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-1.jpg",
    "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-2.jpg",
    "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-3.jpg",
    "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-4.jpg",
    "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-5.jpg",
    "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-6.jpg",
    "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-7.jpg",
    "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-8.jpg",
    "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-9.jpg",
    "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-10.jpg",
    "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-11.jpg",
    "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-12.jpg",
    "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-13.jpg",
  ];

  const col1 = images.slice(0, 3);
  const col2 = images.slice(3, 6);
  const col3 = images.slice(6, 9);
  const col4 = images.slice(9, 12);

  const [selectedImage, setSelectedImage] = useState(null);

  const openModal = (image) => {
    setSelectedImage(image);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <div>
      <div className="flex flex-col items-center lg:flex-row justify-center pb-4 m-2">
      <h1 className="text-6xl tracking-widest">Name</h1>
      </div>
      <div className="flex flex-col lg:flex-row ">
        <div className="max-w-5xl m-4 lg:w-1/2 lg:pr-4">
          <img
            src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-8.jpg"
            alt="Cit College"
            className="mb-6 shadow-lg rounded-lg shadow-white w-full h-96"
          />
        </div>

        <div className="max-w-5xl m-4 lg:w-1/2">
          <div className="mb-6">
            <h1 className="text-5xl tracking-widest">Name</h1>
          </div>
          <p className="mb-6 text-xl">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Itaque reprehenderit quas, delectus rem deserunt accusamus temporibus, fugiat mollitia provident beatae totam necessitatibus, quos tenetur. Doloremque, a voluptates beatae sed accusamus explicabo voluptatem quae delectus, excepturi enim vitae ratione cupiditate, ab nam sit aperiam? Alias praesentium, excepturi maxime omnis amet, fugiat quas ratione voluptatibus libero optio vitae ex facere vel saepe ad impedit molestias commodi voluptas! Ea minima velit autem quidem?
          </p>
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 m-3">
        <div className="grid gap-4">
          {col1.map((image, index) => (
            <div key={index} onClick={() => openModal(image)}>
              <img
                className="h-auto max-w-full rounded-lg cursor-pointer"
                src={image}
                alt=""
              />
            </div>
          ))}
        </div>
        <div className="grid gap-4">
          {col2.map((image, index) => (
            <div key={index} onClick={() => openModal(image)}>
              <img
                className="h-auto max-w-full rounded-lg cursor-pointer"
                src={image}
                alt=""
              />
            </div>
          ))}
        </div>
        <div className="grid gap-4">
          {col3.map((image, index) => (
            <div key={index} onClick={() => openModal(image)}>
              <img
                className="h-auto max-w-full rounded-lg cursor-pointer"
                src={image}
                alt=""
              />
            </div>
          ))}
        </div>
        <div className="grid gap-4">
          {col4.map((image, index) => (
            <div key={index} onClick={() => openModal(image)}>
              <img
                className="h-auto max-w-full rounded-lg cursor-pointer"
                src={image}
                alt=""
              />
            </div>
          ))}
        </div>

        {selectedImage && (
          <div
            className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-75"
            onClick={closeModal}
          >
            <div className="relative bg-white p-4 rounded-lg">
              <img
                className="max-w-full max-h-full rounded-lg"
                src={selectedImage}
                alt=""
              />
              <button
                className="absolute top-2 right-2 text-gray-700 cursor-pointer"
                onClick={closeModal}
              >
                <MdClose size={24} />
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Gallery1;
