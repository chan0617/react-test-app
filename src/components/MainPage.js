import React from "react";
import { Link } from "react-router-dom";
import "./MainPage.css";
import axios from "axios";
import { useEffect } from "react";

const MainPage = () => {
  //let product1=React.useState();//초기값,콜백함수(변경된초기값)
  //let product1=product1[0];//초기값
  //let setProducts=product1[1];//변경된초기값
  let [products, setProducts] = React.useState([]); //컴포넌트의 상태를 바꿀 수 있는 함수:useState
  //let arr=[];
  //[]빈배열에서부터 시작하겠다는 뜻. 빈 값을 저장
  //products를 setProducts 바꿔주는 역활.

  useEffect(() => {
    //콜백함수:useEffect 한번만 실행되도록 되어있다.[]넣어주면 렌더되자마자 더이상 실행하지 않음
    //**컴포넌트가 랜더될때 딱한번만 실행 */
    //**useEffect(()=>{실행문},[]) */
    // useEffect(axios()=>{})//axios가 계속반복되서 한번만 실행되라고 함
    //useEffect 마지막에 [] 이 부분은 없데이트 할게없다고 생각해서 한번만 실행됨 []값이 들어가면 업데이트 된게 있다고 생각함 F5를 계속 한다고 생각하면됨
    //컴포넌트가 바뀔때마다 가상 돔을 사용해서 그려주는데 새로 그려줌
    axios
      // 상품db정보
      .get("https://3d1fe4a0-6c49-43a8-af25-27f9c7914ec2.mock.pstmn.io/products")
      .then((res) => {
        products = res.data.products; //products에 내용저장 //기존의 값을 버리고 상태값이 바뀜
        setProducts(products); //통신완료를 하면 값을 바꿔
      })
      .catch((err) => {
        return console.log(err);
      });
  }, []);
  return (
    <>
      <div id="header">
        <img src="images/icons/logo.png" alt="logo" />
      </div>
      <div id="body">
        <div id="banner">
          <img src="images/banners/banner1.png" alt="banner" />
        </div>
        <h2>Products</h2>
        <div id="product-list">
          {products.map((product, idx) => {
            {
              /* 원소들을 배열하는 함수: map 각각 배열요소들의 키가 필요하다. 
            고유의 요소에 키를 붙여라 최상의요소에 붙여줌*/
            }
            // console.log(products, product, idx);
            return (
              <div className="product-card" key={idx}>
                {/* 중복되지않는 값을 키로 사용해야한다 */}
                <Link className="product-link" to={`/product/${idx}`}>
                  {/* 썸네일 이미지 */}
                  <div>
                    <img className="product-img" src={product.imageUrl} alt="{product.name}" />
                  </div>
                  {/* 상품정보내역 */}
                    <div className="product-content">
                      <span className="product-name">{product.name}</span>
                      <span className="product-price">{product.price}원</span>
                      <div className="product-seller">
                        <img className="product-avatar" src="images/icons/avatar.png" alt="" />
                        <span>내츄럴코어</span>
                      </div>
                    </div>
                    </Link>
              </div>
            );
          })}
        </div>
      </div>
      <div id="footer">
        <Link to={"/about"}>회사소개</Link>
        <Link to={"/policy"}>이용약관</Link>
        <Link to={"/sales"}>통신판매업:123-1234</Link>
        <Link to={"/license"}>사업자등록번호:456-56-78951</Link>
      </div>{" "}
    </>
  );
};
export default MainPage;
