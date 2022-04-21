import React, { useRef, useEffect, useState } from 'react';

const UseRefPage = () => {
  const [value, setValue] = useState('');
  const [valueChange, setValuChange] = useState('');
  const timeRef = useRef(null);
  const formRef = useRef(null);
  const imageRef = useRef();
  const [image, setImage] = useState(null);

  const cancel = () => {
    clearTimeout(timeRef.current);
  };

  const valueChangeHandler = () => {
    setValuChange(formRef.current.value);
  };

  useEffect(() => {
    cancel();
    timeRef.current = setTimeout(() => {
      setValue(valueChange);
    }, 800);
  }, [valueChange]);

  const imageHandler = () => {
    imageRef.current.click();
  };

  const onChangeImageHandler = (e) => {
    const imageOBJ = URL.createObjectURL(e.target.files[0]);
    setImage(imageOBJ);
  };

  console.log('render');

  return (
    <div>
      <input onChange={valueChangeHandler} type="text" ref={formRef} />
      {/* <span>{valueChange}</span> */}
      <span>{value}</span>
      <div style={{ marginTop: '5rem' }}>
        <img
          onClick={imageHandler}
          width={'120'}
          src={
            !image
              ? 'https://statinfer.com/wp-content/uploads/dummy-user.png'
              : image
          }
          alt=""
          style={{ cursor: 'pointer' }}
        />
        <input
          style={{ marginLeft: '-5rem', display: 'none' }}
          type="file"
          ref={imageRef}
          onChange={onChangeImageHandler}
        />
      </div>
    </div>
  );
};

export default UseRefPage;
