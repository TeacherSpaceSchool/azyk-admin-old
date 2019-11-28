import { gql } from 'apollo-boost';
import { SingletonApolloClient } from '../singleton/client';
import { SingletonStore } from '../singleton/store';

export const getRoutes = async({search, sort, filter})=>{
    try{
        const client = new SingletonApolloClient().getClient()
        let res = await client
            .query({
                variables: {search: search, sort: sort, filter: filter},
                query: gql`
                    query ($search: String!, $sort: String!, $filter: String!) {
                        routes(search: $search, sort: $sort, filter: $filter) {
                            _id
                            updatedAt
                            invoices
                                {
                                    _id
                                    updatedAt
                                    orders 
                                        { 
                                            _id
                                            updatedAt
                                            item
                                                {
                                                    image
                                                    _id
                                                    name    
                                                    organization
                                                        {_id name}
                                                }
                                            count
                                            allPrice
                                            status
                                         }
                                    client 
                                        { 
                                            _id
                                            name
                                            email
                                            user 
                                                {_id phone} 
                                        }
                                    allPrice
                                    info
                                    address
                                    paymentMethod
                                    number
                                    confirmationForwarder
                                    confirmationClient
                                }
                            employment
                                { 
                                    _id
                                    updatedAt
                                    name
                                    email
                                    user 
                                        {_id role status phone}
                                    organization 
                                        {_id name}
                                }
                            status
                            dateStart
                            dateEnd
                            number
                        }
                        sortRoute {
                            name
                            field
                        }
                        filterRoute {
                           name
                           value
                        }
                    }`,
            })
        return res.data
    } catch(err){
        console.error(err)
    }
}

export const getRoute = async({_id})=>{
    try{
        const client = new SingletonApolloClient().getClient()
        let res = await client
            .query({
                variables: {_id: _id},
                query: gql`
                    query ($_id: ID!) {
                        route(_id: $_id) {
                            _id
                            updatedAt
                            invoices
                                {
                                    _id
                                    updatedAt
                                    orders 
                                        { 
                                            _id
                                            updatedAt
                                            item
                                                {
                                                    image
                                                    _id
                                                    name    
                                                    organization
                                                        {_id name}
                                                }
                                            count
                                            allPrice
                                            status
                                         }
                                    client 
                                        { 
                                            _id
                                            name
                                            email
                                            user 
                                                {_id phone} 
                                        }
                                    allPrice
                                    info
                                    address
                                    paymentMethod
                                    number
                                    confirmationForwarder
                                    confirmationClient
                                }
                            employment
                                { 
                                    _id
                                    updatedAt
                                    name
                                    email
                                    user 
                                        {_id role status phone}
                                    organization 
                                        {_id name}
                                }
                            status
                            dateStart
                            dateEnd
                            number
                        }
                    }`,
            })
        return res.data
    } catch(err){
        console.error(err)
    }
}

export const deleteRoute = async(ids)=>{
    try{
        const client = new SingletonApolloClient().getClient()
        await client.mutate({
            variables: {_id: ids},
            mutation : gql`
                    mutation ($_id: [ID]!) {
                        deleteRoute(_id: $_id) {
                             data
                        }
                    }`})
    } catch(err){
        console.error(err)
    }
}

export const addRoute = async(element)=>{
    try{
        const client = new SingletonApolloClient().getClient()
        await client.mutate({
            variables: element,
            mutation : gql`
                    mutation ($invoices: [ID]!, $employment: ID!, $dateStart: Date!) {
                        addRoute(invoices: $invoices, employment: $employment, dateStart: $dateStart) {
                             data
                        }
                    }`})
    } catch(err){
        console.error(err)
    }
}

export const setRoute = async(element)=>{
    try{
        const client = new SingletonApolloClient().getClient()
        await client.mutate({
            variables: element,
            mutation : gql`
                    mutation ($_id: ID!, $invoices: [ID], $employment: ID, $cancelInvoices: [ID], $dateStart: Date) {
                        setRoute(_id: $_id, invoices: $invoices, employment: $employment, cancelInvoices: $cancelInvoices, dateStart: $dateStart) {
                             data
                        }
                    }`})
    } catch(err){
        console.error(err)
    }
}
