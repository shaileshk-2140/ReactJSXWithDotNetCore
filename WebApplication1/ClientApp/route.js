import * as React from 'react';
import { Route } from 'react-router-dom';
import  Layout  from './components/Layouts';
import  Home  from './components/Homes'; 
import Counter from './components/Counter';
import FetchData from './components/FetchData';

export const routes = <Layout>
    <Route exact path='/' component={Home} /> 
    <Route path='/counter' component={Counter} />
    <Route path='/fetchdata' component={FetchData} />
</Layout>;
