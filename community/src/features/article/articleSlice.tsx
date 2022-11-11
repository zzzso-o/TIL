import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
// import { create } from 'yup/lib/array';
import { request } from '../../utils/axios'
import { infoList } from '../../Data';

export type articleData = {
    no: any;
    title:string;
    content:string;
    createDate:any;
    readCount:any;
    articleList:any;
}

export const initialState: articleData = {
    no: "",
    title:"",
    content:"",
    createDate:"",
    readCount:"",
    articleList:[],
}

const articleSlice = createSlice({
    name: 'article',
    initialState,
    reducers: {
        getArticleList: (state:articleData, action) => {
          state.articleList = infoList
        }
      },
      
    },
  );

// export const sendRegisterRequest = (data : Object) => {
//     request('POST', 'api/user/register', data)
// } 

export const getArticleRequest = createAsyncThunk('getArticleRequest', async (data) => {
  return request('GET', '../../Data', data)
}  )


const { reducer, actions } = articleSlice
export const { getArticleList } = actions
export default reducer