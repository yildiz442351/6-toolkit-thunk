import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getUsers } from '../redux/action';

const Updated = () => {
  const dispatch = useDispatch();
  const state = useSelector((store) => store.updatedSlice);

  useEffect(() => {
    dispatch(getUsers());
  }, []);

  return (
    <div>
      {state.isLoading ? (
        <h1>Yükleniyor...</h1>
      ) : state.isError ? (
        <h1>Üzgünüz bir hata oluşu</h1>
      ) : (
        state.users.map((user) => <h1>{user.name}</h1>)
      )}
    </div>
  );
};

export default Updated;