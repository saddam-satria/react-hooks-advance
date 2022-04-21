import React, { useEffect, useState } from 'react';

const UseEffectPage = () => {
  const [page, setPage] = useState(0);
  const [passengers, setPassengers] = useState([]);
  const [loading, setLoading] = useState(false);

  // useEffect(() => {
  //   console.log('without dependency');
  // });

  // useEffect(() => {
  //   console.log('with empty array dependency');
  // }, []);

  // useEffect(() => {
  //   if (user) {
  //     console.log('user change ');
  //   }
  // }, [user]);

  // useEffect(() => {
  //   return () => {
  //     setTimeout(() => {
  //       setPage(0);
  //     }, 8000);
  //     console.log('unmounting');
  //   };
  // }, [page]);

  useEffect(() => {
    console.log('fetching data');
    setLoading(true);
    const getData = async () => {
      const result = await fetch(
        `https://api.instantwebtools.net/v1/passenger?page=${page}&size=10`
      );
      const resultObject = await result.json();
      const currentPassenger = resultObject.data;
      const prevPassenger = passengers;

      setLoading(false);
      if (page === 0) {
        return setPassengers(currentPassenger);
      }
      return setPassengers([...prevPassenger, ...currentPassenger]);
    };

    getData();
  }, [page]);

  console.log('render');

  return (
    <div>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          padding: '20px 0px',
        }}
      >
        {passengers.length > 0
          ? passengers.map((passenger, index) => {
              return <span key={index}>{passenger.name}</span>;
            })
          : null}
        <div>
          <button
            disabled={loading && true}
            type="button"
            onClick={() => {
              setPage(page + 1);
            }}
          >
            load more
          </button>
          <button
            disabled={loading && true}
            type="button"
            onClick={() => {
              setPage(0);
            }}
          >
            reset
          </button>
        </div>
      </div>
    </div>
  );
};

export default UseEffectPage;
