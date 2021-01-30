import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { Helmet } from "react-helmet";
import { auth } from '@config';
import { get } from '@service';
import { setUser } from "@store/actions";
import CardProduct from '@component/cardProduct';
import CardPromo from '@component/cardPromo';
import CardList from '@component/cardList';
import magnifier from '../../magnifier.svg';
import arrowBack from '../../arrowback.svg';
import './style.css'


function Home () {
    const history = useHistory();
    const user = useSelector((state) => state.user);
    const dispatch = useDispatch();
    const [data, setData] = useState({})
    const [dataProduct, setDataProduct] = useState([])
    const [dataPromo, setDataPromo] = useState([])
    const [search, setSearch] = useState(false)
    const [searchTerm, setSearchTerm] = useState('')

    const [loading, setLoading] = useState(false)
    

    const handleLogout = () => {
        dispatch(setUser({}))
        auth.signOut()
        history.push('/')
    }

    const fetchData = async () => {
        setLoading(true)
        try {
          const result = await get('/home')
          setData(result.data[0].data)
          setDataProduct(result.data[0].data.category)
          setDataPromo(result.data[0].data.productPromo)
        } catch (error) {
          console.log(error)
        }
        setLoading(false)
      }

      useEffect(() => {
        fetchData()
      }, [])
    
    const openSearch = () => {
        setSearch(true)
    }

    const closeSearch = () => {
        setSearch(false)
    }

    const gotoCart = () => {
        history.push('/cartpage')
    }

    const gotoWishList = () => {
        history.push('/wishlist')
    }
    
       
    return (
        <div className="container p-4">
            <Helmet>
                <title>Home Test SehatQ</title>
                <meta name="description" content="Home Test SehatQ" />
                <meta name="keyword" content="Home Test SehatQ keyword" />
            </Helmet>
            {!loading && (
                <>
                    {search ? (
                        <>
                            <div className="header flex items-center py-4">
                                <button onClick={closeSearch}>
                                    <img src={arrowBack} alt="icon-arrowback" style={{ width: '20px' }} />
                                </button>
                                <div className="flex justify-between w-full items-center relative">
                                    <img src={magnifier} alt="icon-magnifier" className="icon" />
                                    <input type="text" className="w-full btn-search-cstm" onChange={e => setSearchTerm(e.target.value)} />
                                </div>
                            </div>
                            <div className='mb-16'>
                                {dataPromo.filter((val) => {
                                    if (searchTerm === "") {
                                        return val
                                    } else if (val.title.toLowerCase().includes(searchTerm.toLowerCase())) {
                                        return val
                                    }
                                }).map((item, index) => {
                                    return (
                                        <div key={index}>
                                            <CardList data={item} />
                                        </div>
                                    )
                                })}
                            </div>
                        </>
                    ) : (
                        <>
                        <div className="header flex justify-between items-center py-4">
                            <h2>{user.user.user.displayName}</h2>
                            </div>
                            <button className="btn-search" onClick={openSearch}>
                                <img src={magnifier} alt="icon-magnifier" style={{ width: '20px' }} />
                            </button>
                            <div className='flex overflow-auto mt-4'>
                                {data && dataProduct.map((item, index) => {
                                    return (
                                        <div key={index}>
                                            <CardProduct data={item} />
                                        </div>
                                    )
                                })}
                            </div>
                            <div className='mb-16'>
                                {data && dataPromo.map((item, index) => {
                                    return (
                                        <div key={index}>
                                            <CardPromo data={item} />
                                        </div>
                                    )
                                })}
                            </div>
                        </>
                    )}
                    
                </>
            )}
            {!search && (
                <div className="container-float-btn flex justify-between">
                    <button className="btn-float">HOME</button>
                    <button className="btn-float" onClick={gotoWishList}>WISHLIST</button>
                    <button className="btn-float" onClick={gotoCart}>CART</button>
                    <button className="btn-float" onClick={handleLogout}>LOGOUT</button>
                </div>
            )}
        </div>
    )
}

export default Home