import React from 'react'
import millify from 'millify';
import { Typography, Row, Col, Statistic } from 'antd';
import { Link } from 'react-router-dom';
import { useGetCryptosQuery  } from '../services/cryptoApi';
import { Cryptocurrencies, News } from "../components"

const { Title } = Typography;


const Homepage = () => {

  const { data, isFetching } = useGetCryptosQuery(10);
  console.log('cryptodata:', data)

  const globalStats = data?.data?.stats;
  

  if(isFetching) return ('Loading...')

  return (
    <>
        <Title level={2} className='header'> 
            Global Crypto Stats
        </Title>
        <Row>
            <Col span={12}><Statistic title="Total Crypto" value={millify(globalStats.total)} /></Col>
            <Col span={12}><Statistic title="Total Exchanges" value={millify(globalStats.totalExchanges)} /></Col>
            <Col span={12}><Statistic title="Total Market Cap" value={millify(globalStats.totalMarketCap)} /></Col>
            <Col span={12}><Statistic title="Total 24h Volume" value={millify(globalStats.total24hVolume)} /></Col>
            <Col span={12}><Statistic title="Total Market" value={millify(globalStats.totalMarkets)} /></Col>
        </Row>
        <div className='home-heading-container'> 
          <Title level={2} className='home-title'>Top 10 Crypto Currencies in the world</Title>
          <Title level={3}  className='show-more'><Link to="/cryptocurrencies">Show more</Link></Title>
        </div>
        <Cryptocurrencies simplyfied />
        <div className='home-heading-container'> 
          <Title level={2} className='home-title'>Latest Crypto Currencies news </Title>
          <Title level={3}  className='show-more'><Link to="/news">Show more</Link></Title>
        </div>
        <News simplyfied />
    </>
  )
}

export default Homepage