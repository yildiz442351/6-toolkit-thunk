// API'isteği atıp isteğin durumuna (yükleniyor,başarılı,hata)
// göre store'u güncelleme

import axios from 'axios';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  setError,
  setLoading,
  setUsers,
} from '../redux/slices/userSlice';

const Classic = () => {
  const dispatch = useDispatch();
  const state = useSelector((store) => store.userSlice);

  useEffect(() => {
    // yüklenme durumunda store'u güncelle
    dispatch(setLoading());

    // api isteği at
    axios
      .get('https://jsonplaceholder.typicode.com/users')
      // başarılı olursa verileri store'a aktar
      .then((res) => dispatch(setUsers(res.data)))
      // başarısız olursa hatayı store'a aktar
      .catch((err) => dispatch(setError(err.message)));
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

export default Classic;