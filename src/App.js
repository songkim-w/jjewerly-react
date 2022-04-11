/*eslint-disable*/
import './App.css';
import React, {useEffect, useMemo, useState} from 'react';
import { HiMenuAlt2, HiSearch, HiOutlineUser, HiOutlineShoppingBag } from "react-icons/hi";
import { Carousel} from'react-bootstrap';
import Data from './data';
import {Link, Route, Switch} from 'react-router-dom';
import Shop from './shop';
import { throttle } from 'lodash';

import Detail from './Detail';
import ProductList from './ProductList';
import Search from'./Search';
import Cart from './Cart';
import SignIn from './Login';


function App() {

  let [data, setData] = useState(Data);
  let [shop, setShop] = useState(Shop);
 
  let [menu, setMenu] = useState(false);
  let [screenWidth, setScreenWidth] = useState(window.innerWidth);
  let [navSize, setNavSize] = useState("6rem");
  let [navBotton, setNavBottom] = useState("translate3d(0, 0, 0)")
  let [lastScrollY, setLastScrollY] = useState(0);
  let [inputData, setInputData] = useState('');

  let copy = [...data];
  let rings = copy.filter(item => item.type === 'ring');
  let necklaces = copy.filter(item => item.type === 'necklace');
  let earrings = copy.filter(item => item.type === 'earring');
  let branks = copy.filter(item => item.type === 'brank');
  let others = copy.filter(item => item.type === 'other');
  let bestseller = copy.filter(item => item.status === 'bestseller');
  let newItem = copy.filter(item => item.status === 'new');
  let sale = copy.filter(item => item.status === 'sale');

  let searchAtoB = [...data].sort(function(a, b){
    return a.title < b.title ? -1 : a.title > b.title ? 1 : 0;
  });

  let searchData = searchAtoB.filter(item => item.title.includes(inputData.toUpperCase().toLowerCase()) || item.type.includes(inputData.toUpperCase().toLowerCase()));

 
  let toggleNav = ()=>{
    setMenu(!menu);
    if(window.innerWidth < 900 && !menu){
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

  }

  let closeMenu = () => {
    setMenu(false);
    document.body.style.overflow = 'unset';
  }

  let clearSearchData = ()=>{
    setInputData('');
  }

  let navScrollEvent = useMemo(
    ()=>
      throttle(()=>{
        if(window.innerWidth > 900){
        window.scrollY> 10 ? setNavSize("4rem") : setNavSize("6rem");
          if (window.scrollY > lastScrollY ) {
            setNavBottom("translate3d(0, -100%, 0)")
          } else { 
            setNavBottom("translate3d(0, 0, 0)") 
          }
      
          setLastScrollY(window.scrollY);}
      },1000)
    );

    let scrollTop = ()=>{
      window.scrollTo(0,0);
    }


  useEffect(()=>{
    let resizeWidth = ()=>{
      setScreenWidth(window.innerWidth);
      if(screenWidth > 900){
        document.body.style.overflow = 'unset';
      }
    }
    window.addEventListener('resize', resizeWidth);
  })

  useEffect(()=>{
    window.addEventListener('scroll', navScrollEvent);
  })

  useEffect(()=>{
    let link = document.querySelectorAll('.link');
    for(let i =0; i < link.length; i++){
      link[i].addEventListener('click', clearSearchData);
    }
  })



  return (
    <div className="App">

      <header>
        <nav>
          <div className='nav-top--container' style={{
            height: navSize,
            transition: "all 0.3s"
            }}>
            <div className='menu--icon' onClick={toggleNav}><HiMenuAlt2 /></div>
            <h1 className='logo' onClick={closeMenu}><Link to="/" className='link'>J jewerly.</Link></h1>
            <div className='nav-top--right'>
              <div><Link to="/search" className='link' onClick={scrollTop}><HiSearch/></Link></div>
              <div><Link to="/login" onClick={scrollTop}><HiOutlineUser/></Link></div>
              <div><Link to="/cart" className='link' onClick={scrollTop}><HiOutlineShoppingBag/></Link></div>
            </div>
          </div>

          {(menu || screenWidth > 900) && (
            <div className='nav-bottom--container' style={{
              top: navSize,
              transform: navBotton,
              transition: "all 0.3s"
            }}>
            <Link to='/all' onClick={closeMenu} className='link'><span onClick={scrollTop}>shop all</span></Link>
            <Link to='/bestseller' onClick={closeMenu} className='link'><span onClick={scrollTop}>Bestseller</span></Link>
            <Link to='/new' onClick={closeMenu} className='link'><span onClick={scrollTop}>New</span></Link>
            <Link to='/sale' onClick={closeMenu} className='link'><span onClick={scrollTop}>Sale</span></Link>
            <Link to='/rings'onClick={closeMenu} className='link'><span onClick={scrollTop}>Rings</span></Link>
            <Link to='/necklaces' onClick={closeMenu} className='link'><span onClick={scrollTop}>Necklaces</span></Link>
            <Link to='/earrings' onClick={closeMenu} className='link'><span onClick={scrollTop}>Earings</span></Link>
            <Link to='/branks' onClick={closeMenu} className='link'><span onClick={scrollTop}>Bracelets + Anklet</span></Link>
            <Link to='/others' onClick={closeMenu} className='link'><span onClick={scrollTop}>Others</span></Link>
          </div>
          )}
        </nav>
      </header>

      <Switch>

      <Route exact path="/">
      <section className='carousel__margin'>
        <Carousel fade>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://images.pexels.com/photos/9637586/pexels-photo-9637586.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="First slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100 img-2"
              src="https://images.pexels.com/photos/6758029/pexels-photo-6758029.jpeg?cs=srgb&dl=pexels-jill-burrow-6758029.jpg&fm=jpg"
              alt="Second slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://images.pexels.com/photos/9432679/pexels-photo-9432679.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="Third slide"
            />
          </Carousel.Item>
        </Carousel>

        </section>

        <section className='mt-5'>
            <div className='banner--container'>
              <div className='banner--item'>
                <img className='w-100 h-100 card--img' src='https://images.unsplash.com/photo-1600427150683-348f588e815c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=776&q=80'/>
              </div>
              <div className='banner--item banner--text'>
                <h2>Finding the sparkle in every moment</h2>
                <p>Show more love, spread more light, and carry a little sparkle with you everywhere you go </p>
                <p>J jewlery</p>
              </div>
            </div>
        
        </section>
        
        <section>
          <div className="container shoplist--container">
            <h3 className='mb-5'>Shop by category</h3>
            <div className='row justify-content-center' onClick={scrollTop}>
              {
                shop.map((a, i)=>{
                  return<ShopList shop={shop[i]} key={i}></ShopList>
                })
                
              }
            </div>
          </div>
        </section>

        <section>
          <div className='discover--container'>
            <h3 className='container text-start'>J jewerly story</h3>
            <div className='discover--item--container'>
              <Link to="/bestseller">
                <div className='discover--item bestseller--container' onClick={scrollTop}>
                  <h6>bestseller</h6>
                  <div></div>
                </div>
              </Link>
              <Link to='/new'>
                <div className='discover--item new--arival--container' onClick={scrollTop}>
                  <h6>new arrival</h6>
                  <div></div>
                </div>
              </Link>
              <Link to='/all'>
                <div className='discover--item shop--style--container' onClick={scrollTop}>
                  <h6>shop all</h6>
                  <div></div>
                </div>
              </Link>
            </div>
          </div>
        </section>

        <section>
          <div className="event--container container mb-5" style={{backgroundImage:'url(https://images.unsplash.com/photo-1515626553181-0f218cb03f14?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1742&q=80)'}}>
            <p className='event-title'>spring sale</p>
            <p>3.2 ~ 4.30</p>
            <Link to='sale'><button className='mb-5 event-button' onClick={scrollTop}>explore more</button></Link>
          </div>
        </section>

        <section>
     
      </section>

      </Route>

      <Route path="/all"> 
          <h2 className='prodcut-h2'>shop all</h2>
        <ProductList data={data}></ProductList>         
      </Route>

      <Route path="/rings">
      <h2 className='prodcut-h2'>rings</h2>
        <ProductList data={rings}></ProductList>   
      </Route>

      <Route path="/necklaces">
      <h2 className='prodcut-h2'>necklaces</h2>
        <ProductList data={necklaces}></ProductList>     
      </Route>

      <Route path="/earrings">
      <h2 className='prodcut-h2'>earrings</h2>
        <ProductList data={earrings}></ProductList>
      </Route>

      <Route path="/branks">
        <h2 className='prodcut-h2'>Bracelets + Anklets</h2>
        <ProductList data={branks}></ProductList>
      </Route>

      <Route path="/others">
      <h2 className='prodcut-h2'>others</h2>
        <ProductList data={others}></ProductList>
      </Route>

      <Route path="/bestseller">
      <h2 className='prodcut-h2'>bestseller</h2>
        <ProductList data={bestseller}></ProductList>
      </Route>

      <Route path="/new">
      <h2 className='prodcut-h2'>new</h2>
        <ProductList data={newItem}></ProductList>
      </Route>

      <Route path="/sale">
      <h2 className='prodcut-h2'>sale</h2>
        <ProductList data={sale}></ProductList>
      </Route>

      <Route path="/search">
      <h2 className='prodcut-h2'>search</h2>
        <div className='container shop-all--container cart'>
          <div  className='row'>
            <div>
              <input onChange={(e)=>{ setInputData(e.target.value) }} placeholder='Whar are you looking for?' className='search-input'></input>
            </div>
            {
             searchData.map((a, i) => {
                return inputData ? 
                      <Search data={searchData[i]} key={i} onClick={clearSearchData} className='link'></Search>
                      :null
              })
            }
            </div>
            {
              !inputData
              ?<div className='please-search'>Search items!</div>
              :null
            }
          </div>
      </Route>

      <Route path="/cart">
        <Cart></Cart>
      </Route>

      <Route path="/login">
       <SignIn></SignIn>
      </Route>

      <Route path="/detail/:id">
        <Detail data={data}/>
      </Route>
      
      <Route path="/:id">
        <div>아무거나 </div>
      </Route>


      </Switch>

      <footer >
        <p>© 2022 J jewelry</p>
      </footer>

    </div>
  );
}

function ShopList(props){
  return(
    <div className="col-md-2 center-block shop--list">
      <Link to={props.shop.link}>
        <img src={props.shop.img} width="100%" height="60%" className='card--img img__round'/>
        <h6>{props.shop.title}</h6>
      </Link>
    </div>
  )
}


export default App;
