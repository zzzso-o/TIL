import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getArticleList } from '../features/article/articleSlice';
// import { getArticleRequest } from '../features/article/articleSlice';


export default function ArticleList() {
  const { articleNumber } = useSelector((state: any) => state.no)
  const { articleTitle } = useSelector((state: any) => state.title)
  const { articleContent } = useSelector((state: any) => state.content)
  const { articleDate } = useSelector((state: any) => state.createDate)
  

  const dispatch = useDispatch();
  useEffect(() => {
      dispatch(getArticleList);
  });
  
  // const ArticleRequest: any = (method: string, url: string, data: object) => {
  //   return axios({
      
  //   })
  // }
    return (
        <div>
          <h1>ArticleList</h1>
          <div>
            <p>{ articleNumber } { articleTitle } { articleContent } { articleDate }</p>
          </div>
        </div>
        
    )
}