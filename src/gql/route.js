import { gql } from 'apollo-boost';
import { SingletonApolloClient } from '../singleton/client';
import { SingletonStore } from '../singleton/store';

export const getRoutes = async({search, sort, filter, date}, client)=>{
    try{
        client = client? client : new SingletonApolloClient().getClient()
        let res = await client
            .query({
                variables: {search: search, sort: sort, filter: filter, date: date},
                query: gql`
                    query ($search: String!, $sort: String!, $filter: String!, $date: String!) {
                        routes(search: $search, sort: $sort, filter: $filter, date: $date) {
                            _id
                            createdAt
                            invoices
                                {
                                    _id
                                    agent 
                                        {_id name}
                                    createdAt
                                    updatedAt
                                    allTonnage
                                    allSize
                                    orders 
                                        { 
                                            _id
                                            allTonnage
                                            allSize
                                            createdAt
                                            updatedAt
                                            item
                                                {
                                                    image
                                                    _id
                                                    name    
                                                    stock 
                                                    apiece
                                                    unit
                                                    priotiry
                                                    price
                                                    packaging
                                                    weight
                                                    size
                                                    organization
                                                        {_id name consignation}
                                                }
                                            count
                                            allPrice
                                            consignment
                                            returned
                                            consignmentPrice
                                            status
                                         }
                                    client 
                                        { 
                                            _id
                                            name
                                            email
                                            phone 
                                            user 
                                                {_id }
                                        }
                                    allPrice
                                    consignmentPrice
                                    info
                                    address
                                    paymentMethod
                                    editor
                                    number
                                    confirmationForwarder
                                    confirmationClient
                                    cancelClient
                            distributer
                                {_id name}
                                    cancelForwarder
                                    paymentConsignation
                                    taken
                                    sync
                                    dateDelivery
                                    usedBonus
                                }
                            employment
                                { 
                                    _id
                                    createdAt
                                    name
                                    email
                                    phone
                                    user 
                                        {_id role status }
                                    organization 
                                        {_id name consignation}
                                }
                            status
                            dateStart
                            dateEnd
                            allTonnage
                            allSize
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

export const getRoute = async({_id}, client)=>{
    try{
        client = client? client : new SingletonApolloClient().getClient()
        let res = await client
            .query({
                variables: {_id: _id},
                query: gql`
                    query ($_id: ID!) {
                        route(_id: $_id) {
                            _id
                            createdAt
                            invoices
                                {
                                    _id
                                    agent 
                                        {_id name}
                                    createdAt
                                    updatedAt
                                    allTonnage
                                    allSize
                                    orders 
                                        { 
                                            _id
                                            createdAt
                                            updatedAt
                                            allTonnage
                                            allSize
                                            item
                                                {
                                                    image
                                                    packaging
                                                    weight
                                                    size
                                                    _id
                                                    name    
                                                    stock 
                                                    apiece
                                                    unit
                                                    priotiry
                                                    price
                                                    organization
                                                        {_id name consignation}
                                                }
                                            count
                                            allPrice
                                            consignment
                                            returned
                                            consignmentPrice
                                            status
                                         }
                                    client 
                                        { 
                                            _id
                                            name
                                            email
                                            phone 
                                            user 
                                                {_id }
                                        }
                                    allPrice
                                    consignmentPrice
                                    info
                                    address
                                    paymentMethod
                                    editor
                                    number
                                    confirmationForwarder
                                    confirmationClient
                                    cancelClient
                            distributer
                                {_id name}
                                    cancelForwarder
                                    paymentConsignation
                                    taken
                                    sync
                                    dateDelivery
                                    usedBonus
                                }
                            employment
                                { 
                                    _id
                                    createdAt
                                    name
                                    email
                                    phone
                                    user 
                                        {_id role status }
                                    organization 
                                        {_id name consignation}
                                }
                            status
                            dateStart
                            dateEnd
                            allTonnage
                            allSize
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
        return await getRoutes(new SingletonStore().getStore().getState().app)
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