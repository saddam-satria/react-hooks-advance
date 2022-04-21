import React, { useState } from 'react';

const UseStatePage = () => {
  const [name, setName] = useState('');
  const [fruits, setFruits] = useState([]);
  const [student, setStudent] = useState({});
  const [isAcivate, setIsActivate] = useState(false);

  /**
   *
   * fill state with string, it makes react rerender twice
   *
   */
  const changeNameHandler = () => {
    setName('alexa');
  };

  /**
   *
   * fill state with array, it makes react rerender more than twice
   *
   */
  const fillTheFruits = () => {
    setFruits(['banana', 'mango']);
  };

  /**
   *
   * same as array
   *
   */
  const fillTheStudent = () => {
    setStudent({
      name: 'john',
      class: 'B',
    });
  };

  /**
   *
   * same as string => if once changes
   * same as array => if everytime change, wll re render
   *
   */
  const setActive = () => {
    setIsActivate(!isAcivate);
  };

  /**
   *
   * conclusion
   * every time state change, react will rerender page
   *
   */

  console.log('render');
  return (
    <>
      <h2>{name}</h2>
      <button type="button" onClick={changeNameHandler}>
        Change name
      </button>

      <ul>
        {fruits.map((fruit, index) => {
          return <li key={index}>{fruit}</li>;
        })}
      </ul>
      <button type="button" onClick={fillTheFruits}>
        flll the fruits
      </button>

      <div style={{ padding: '20px 0px' }}>
        <span>{student.name}</span>
        <br />
        <span> {student.class}</span>
      </div>
      <button type="button" onClick={fillTheStudent}>
        generate student
      </button>
      <br />
      <button
        type="button"
        style={{ background: isAcivate && 'red' }}
        onClick={setActive}
      >
        activate
      </button>
    </>
  );
};

export default UseStatePage;
