import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Area, AreaChart, Bar, BarChart, CartesianGrid, Legend, Line, LineChart, PolarAngleAxis, PolarGrid, PolarRadiusAxis, Radar, RadarChart, Tooltip, XAxis, YAxis } from 'recharts';

const Rechart = () => {
    const [data, setData] = useState([]);
    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setData(data))
    }, []);

    return (
        <div>
            <Container>
                <Row>
                    <Col md="6">
                        <h2 className='py-5'>Invest vs Sell</h2>

                        <LineChart
                            width={500}
                            height={400}
                            data={data}>
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="month" />
                            <YAxis />
                            <Tooltip />
                            <Legend />
                            <Line type="monotone" dataKey="investment" stroke="#8884d8" fill="#8884d8" activeDot={{ r: 8 }} />
                            <Line type="monotone" dataKey="sell" stroke="#82ca9d" fill="#8884d8" />

                        </LineChart>

                    </Col>

                    <Col md="6">
                        <h2 className='py-5'>Month wise Sell</h2>
                        <BarChart width={500} height={400} data={data}>
                            <Bar dataKey="month" fill="#8884d8" />
                            <XAxis dataKey="month" />
                            <YAxis />
                            <Tooltip />
                            <Legend />

                            <Bar dataKey="sell" stackId="a" fill="#82ca9d" />
                        </BarChart>
                    </Col>
                    <Col md="6">
                        <h2 className='py-5'>Month wise Sell</h2>
                        <AreaChart width={500} height={400} data={data}
                            margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                            <defs>
                                <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                                    <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
                                    <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
                                </linearGradient>
                                <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
                                    <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8} />
                                    <stop offset="95%" stopColor="#82ca9d" stopOpacity={0} />
                                </linearGradient>
                            </defs>
                            <XAxis dataKey="name" />
                            <YAxis />
                            <CartesianGrid strokeDasharray="3 3" />
                            <Tooltip />
                            <Area type="monotone" dataKey="month" stroke="#8884d8" fillOpacity={1} fill="url(#colorUv)" />
                            <Area type="monotone" dataKey="sell" stroke="#82ca9d" fillOpacity={1} fill="url(#colorPv)" />
                        </AreaChart>
                    </Col>
                    <Col md="6">
                        <h2 className='py-5'> Invest vs Sell</h2>
                        <RadarChart outerRadius={90} width={500} height={400} data={data}>
                            <PolarGrid />
                            <PolarAngleAxis dataKey="subject" />
                            <PolarRadiusAxis angle={30} domain={[0, 150]} />
                            <Radar name="Mike" dataKey="month" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6} />
                            <Radar name="Lily" dataKey="sell" stroke="#82ca9d" fill="#82ca9d" fillOpacity={0.6} />
                            <Legend />
                        </RadarChart>
                    </Col>
                </Row>
            </Container>

        </div>
    );
};

export default Rechart;