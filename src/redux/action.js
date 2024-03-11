// Thunk Aksiyonu
// asenkron işlemler (veritabanı istekleri) yapıp
// sonucunu store'a aktarmamız istediğimiz akyionları
// toolkitte createAsyncThunk methodu ile oluştururuz

import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// bizden iki parametre ister
// 1) aksiyonun tipi
// 2) asenkron işlem yapıp sonuç döndüren fonksiyon
export const getUsers = createAsyncThunk(
  'users/getUsers',
  async () => {
    // asenkron işlem
    const res = await axios.get(
      'https://jsonplaceholder.typicode.com/users'
    );

    // store'a aksiyonun payload'ı olarak gidicek olan veriyi return ederiz
    return res.data;
  }
);

// Async thunk aksiyonları yaptığı isteğin durumuna göre
// store'a 3 farklı aksiyon gönderebilir

// 1) Pending: isteği yaptığı anda gönderir
// isteğin başladığını belirtir

// 2) Fulfilled: istek başarılı olursa gönderiri
//  payload'ınd return edilen veri olur

// 3) Rejected: istekte hata olursa göndrir