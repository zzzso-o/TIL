import React from 'react';
import ArticleList from '../../components/ArticleList';
import { infoList } from '../../Data';

const InfoList = () => {
  // const [ dataList, setDataList ] = useState([]);

  // useEffect(() => {
  //   setDataList();
  // })
  console.log(infoList)
  return (
      <ArticleList />
  )
}

export default InfoList;