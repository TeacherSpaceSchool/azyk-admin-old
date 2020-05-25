import { gql } from 'apollo-boost';
import { SingletonApolloClient } from '../singleton/client';
import { SingletonStore } from '../singleton/store';

export const getRoutes = async({search, sort, filter, date, skip, organization}, client)=>{
    try{
        client = client? client : new SingletonApolloClient().getClient()
        let res = await client
            .query({
                variables: {search: search, sort: sort, filter: filter, date: date, skip: skip, organization: organization},
                query: gql`
                    query ($organization: ID!, $search: String!, $sort: String!, $filter: String!, $date: String!, $skip: Int) {
                        routes(organization: $organization, search: $search, sort: $sort, filter: $filter, date: $date, skip: $skip) {
                            _id
                            createdAt
                            deliverys {tonnage lengthInMeters}
                            selectEcspeditor {name}
                            selectedOrders {_id}
                            dateDelivery
                            status
                            number
                            dateStart
                            dateEnd
                            allTonnage
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
                            deliverys {
                                legs
                                lengthInMeters
                                orders{
                                    _id
                                    agent 
                                        {_id name}
                                    createdAt
                                    updatedAt
                                    allTonnage
                                    allSize
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
                                    returnedPrice
                                    info
                                    address
                                    paymentMethod
                                    adss
                                        { 
                                            _id
                                            title
                                        }
                                    editor
                                    number
                                    confirmationForwarder
                                    confirmationClient
                                    cancelClient
                                    district
                                    track
                                    forwarder
                                        {_id name}
                                    sale
                                        {_id name}
                                    provider
                                        {_id name}
                                    organization
                                        {_id name}
                                    cancelForwarder
                                    paymentConsignation
                                    taken
                                    sync
                                    dateDelivery
                                    usedBonus
                                }
                                tonnage
                            }
                            provider {_id name}
                            selectProdusers {_id name}
                            selectDistricts {_id name}
                            selectEcspeditor {_id name}
                            selectAuto {_id number}
                            selectedOrders {
                                    _id
                                    agent 
                                        {_id name}
                                    createdAt
                                    updatedAt
                                    allTonnage
                                    allSize
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
                                    returnedPrice
                                    info
                                    address
                                    paymentMethod
                                    adss
                                        { 
                                            _id
                                            title
                                        }
                                    editor
                                    number
                                    confirmationForwarder
                                    confirmationClient
                                    cancelClient
                                    district
                                    track
                                    forwarder
                                        {_id name}
                                    sale
                                        {_id name}
                                    provider
                                        {_id name}
                                    organization
                                        {_id name}
                                    cancelForwarder
                                    paymentConsignation
                                    taken
                                    sync
                                    dateDelivery
                                    usedBonus
                                }
                            dateDelivery
                            status
                            number
                            dateStart
                            dateEnd
                            allTonnage
                        }
                    }`,
            })
        return res.data
    } catch(err){
        console.error(err)
    }
}

export const listDownload = async(orders, client)=>{
    try{
        client = client? client : new SingletonApolloClient().getClient()
        let res = await client
            .query({
                variables: {orders: orders},
                query: gql`
                    query ($orders: [ID]!) {
                        listDownload(orders: $orders) 
                    }`,
            })
        return res.data
    } catch(err){
        console.error(err)
    }
}

export const listUnload = async(orders, client)=>{
    try{
        client = client? client : new SingletonApolloClient().getClient()
        let res = await client
            .query({
                variables: {orders: orders},
                query: gql`
                    query ($orders: [ID]!) {
                        listUnload(orders: $orders) 
                    }`,
            })
        return res.data
    } catch(err){
        console.error(err)
    }
}

export const getUnloadingInvoicesFromRouting = async({orders, organization}, client)=>{
    try{
        client = client? client : new SingletonApolloClient().getClient()
        let res = await client
            .query({
                variables: {orders: orders, organization: organization},
                query: gql`
                    query ($organization: ID!, $orders: [ID]!) {
                        unloadingInvoicesFromRouting(organization: $organization, orders: $orders) {
                            data
                        }
                    }`,
            })
        console.log(res.data)
        return res.data
    } catch(err){
        console.error(err)
    }
}

export const buildRoute = async({autoTonnage, orders, provider})=>{
    try{
        const client = new SingletonApolloClient().getClient()
        let res = await client.mutate({
            variables: {autoTonnage: autoTonnage, orders: orders, provider: provider},
            mutation : gql`
                    mutation ($autoTonnage: Int!, $orders: [ID]!, $provider: ID!) {
                        buildRoute(autoTonnage: $autoTonnage, orders: $orders, provider: $provider) {
                            legs
                            lengthInMeters
                            orders{
                                _id
                                agent 
                                    {_id name}
                                createdAt
                                updatedAt
                                allTonnage
                                allSize
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
                                returnedPrice
                                info
                                address
                                paymentMethod
                                adss
                                    { 
                                        _id
                                        title
                                    }
                                editor
                                number
                                confirmationForwarder
                                confirmationClient
                                cancelClient
                                district
                                track
                                forwarder
                                    {_id name}
                                sale
                                    {_id name}
                                provider
                                    {_id name}
                                organization
                                    {_id name}
                                cancelForwarder
                                paymentConsignation
                                taken
                                sync
                                dateDelivery
                                usedBonus
                            }
                            tonnage
                        }
                    }`})
        return res.data
    } catch(err){
        console.error(err)
    }
}

export const deleteRoute = async({_id, selectedOrders})=>{
    try{
        const client = new SingletonApolloClient().getClient()
        await client.mutate({
            variables: {_id: _id, selectedOrders: selectedOrders},
            mutation : gql`
                    mutation ($_id: ID!, $selectedOrders: [ID]!) {
                        deleteRoute(_id: $_id, selectedOrders: $selectedOrders) {
                             data
                        }
                    }`})
    } catch(err){
        console.error(err)
    }
}

export const addRoute = async({deliverys, provider, selectProdusers, selectDistricts, selectEcspeditor, selectAuto, selectedOrders, dateDelivery, dateStart, dateEnd, allTonnage})=>{
    try{
        const client = new SingletonApolloClient().getClient()
        await client.mutate({
            variables: {deliverys: deliverys, provider: provider, selectProdusers: selectProdusers, selectDistricts: selectDistricts, selectEcspeditor: selectEcspeditor, selectAuto: selectAuto, selectedOrders: selectedOrders, dateDelivery: dateDelivery, dateStart: dateStart, dateEnd: dateEnd, allTonnage: allTonnage},
            mutation : gql`
                    mutation ($deliverys: [DeliveryInput]!, $provider: ID!, $selectProdusers: [ID]!, $selectDistricts: [ID]!, $selectEcspeditor: ID!, $selectAuto: ID!, $selectedOrders: [ID]!, $dateDelivery: Date!, $dateStart: Date!, $dateEnd: Date, $allTonnage: Int!) {
                        addRoute(deliverys: $deliverys, provider: $provider, selectProdusers: $selectProdusers, selectDistricts: $selectDistricts, selectEcspeditor: $selectEcspeditor, selectAuto: $selectAuto, selectedOrders: $selectedOrders, dateDelivery: $dateDelivery, dateStart: $dateStart, dateEnd: $dateEnd, allTonnage: $allTonnage) {
                             data
                        }
                    }`})
    } catch(err){
        console.error(err)
    }
}