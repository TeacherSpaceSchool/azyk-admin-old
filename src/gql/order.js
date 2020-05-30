import { gql } from 'apollo-boost';
import { SingletonApolloClient } from '../singleton/client';
import { SingletonStore } from '../singleton/store';

export const getOrders = async(args, client)=>{
    try{
        client = client? client : new SingletonApolloClient().getClient()
        let res = await client
            .query({
                variables: args,
                query: gql`
                    query ($search: String!, $sort: String!, $filter: String!, $date: String!, $skip: Int) {
                        invoices(search: $search, sort: $sort, filter: $filter, date: $date, skip: $skip) {
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
                        sortInvoice {
                            name
                            field
                        }
                        filterInvoice {
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

export const getOrdersFromDistrict = async(args, client)=>{
    try{
        client = client? client : new SingletonApolloClient().getClient()
        let res = await client
            .query({
                variables: args,
                query: gql`
                    query ($organization: ID!, $district: ID!, $date: String!) {
                        invoicesFromDistrict(organization: $organization, district: $district, date: $date) {
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
                        sortInvoice {
                            name
                            field
                        }
                        filterInvoice {
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

export const getOrdersTrash = async(args, client)=>{
    try{
        client = client? client : new SingletonApolloClient().getClient()
        let res = await client
            .query({
                variables: args,
                query: gql`
                    query ($search: String!, $skip: Int) {
                        invoicesTrash(search: $search, skip: $skip) {
                            _id
                            agent 
                                {_id name}
                            createdAt
                            updatedAt
                            allTonnage
                            allSize
                            del
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
                    }`,
            })
        return res.data
    } catch(err){
        console.error(err)
    }
}

export const getInvoicesSimpleStatistic = async(args, client)=>{
    try{
        client = client? client : new SingletonApolloClient().getClient()
        let res = await client
            .query({
                variables: args,
                query: gql`
                    query ($search: String!, $filter: String!, $date: String!) {
                        invoicesSimpleStatistic(search: $search, filter: $filter, date: $date) 
                    }`,
            })
        return res.data
    } catch(err){
        console.error(err)
    }
}

export const getInvoicesTrashSimpleStatistic = async(args, client)=>{
    try{
        client = client? client : new SingletonApolloClient().getClient()
        let res = await client
            .query({
                variables: args,
                query: gql`
                    query ($search: String!) {
                        invoicesTrashSimpleStatistic(search: $search) 
                    }`,
            })
        return res.data
    } catch(err){
        console.error(err)
    }
}

export const isOrderToday = async(args, client)=>{
    try{
        client = client? client : new SingletonApolloClient().getClient()
        let res = await client
            .query({
                variables: args,
                query: gql`
                    query ($organization: ID!) {
                        isOrderToday(organization: $organization) 
                    }`,
            })
        return res.data
    } catch(err){
        console.error(err)
    }
}

export const getOrderHistorys = async(invoice, client)=>{
    try{
        client = client? client : new SingletonApolloClient().getClient()
        let res = await client
            .query({
                variables: {invoice: invoice},
                query: gql`
                    query ($invoice: ID!) {
                        orderHistorys(invoice: $invoice) {
                            createdAt
                            editor
                        }
                    }`,
            })
        return res.data
    } catch(err){
        console.error(err)
    }
}

export const getOrdersForRouting = async({produsers, clients, dateStart, dateEnd, dateDelivery})=>{
    try{
        const client = new SingletonApolloClient().getClient();
        let res = await client
            .query({
                variables: {produsers: produsers, clients: clients, dateStart: dateStart, dateEnd: dateEnd, dateDelivery: dateDelivery},
                query: gql`
                    query($produsers: [ID]!, $clients: [ID]!, $dateStart: Date!, $dateEnd: Date, $dateDelivery: Date!){
                        invoicesForRouting(produsers: $produsers, clients: $clients, dateStart: $dateStart, dateEnd: $dateEnd, dateDelivery: $dateDelivery){
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
                                        { _id }
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
                    }`,
            })
        return res.data
    } catch(err){
        console.error(err)
    }
}

export const getOrder = async({_id})=>{
    try{
        const client = new SingletonApolloClient().getClient()
        let res = await client
            .query({
                variables: {_id: _id},
                query: gql`
                    query ($_id: ID!) {
                        invoice(_id: $_id) {
                            _id
                            createdAt
                            updatedAt
                            agent
                                {_id name}
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
                                            _id
                                            name    
                                            stock 
                                            apiece
                                            unit
                                            priotiry
                                            packaging
                                            weight
                                            size
                                            price
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
                                {_id name consignation minimumOrder}
                            cancelForwarder
                            paymentConsignation
                            confirmationClient
                            taken
                            sync
                            dateDelivery
                            usedBonus
                        }
                    }`,
            })
        return res.data
    } catch(err){
        console.error(err)
    }
}

export const addOrders = async(element)=>{
    try{
        const client = new SingletonApolloClient().getClient()
        await client.mutate({
            variables: element,
            mutation : gql`
                    mutation ($info: String, $inv: Boolean, $unite: Boolean, $usedBonus: Boolean, $paymentMethod: String, $address: [[String]], $organization: ID!, $client: ID!) {
                        addOrders(usedBonus: $usedBonus, inv: $inv, unite: $unite, info: $info, paymentMethod: $paymentMethod, address: $address, organization: $organization, client: $client) {
                             data
                        }
                    }`})
    } catch(err){
        console.error(err)
    }
}

export const deleteOrders = async(ids)=>{
    try{
        const client = new SingletonApolloClient().getClient()
        await client.mutate({
            variables: {_id: ids},
            mutation : gql`
                    mutation ($_id: [ID]!) {
                        deleteOrders(_id: $_id) {
                             data
                        }
                    }`})
    } catch(err){
        console.error(err)
    }
}

export const restoreOrders = async(ids)=>{
    try{
        const client = new SingletonApolloClient().getClient()
        await client.mutate({
            variables: {_id: ids},
            mutation : gql`
                    mutation ($_id: [ID]!) {
                        restoreOrders(_id: $_id) {
                             data
                        }
                    }`})
    } catch(err){
        console.error(err)
    }
}

export const approveOrders = async(element)=>{
    try{
        const client = new SingletonApolloClient().getClient()
        await client.mutate({
            variables: element,
            mutation : gql`
                    mutation ($invoices: [ID]!, $route: ID) {
                        approveOrders(invoices: $invoices, route: $route) {
                             data
                        }
                    }`})
        return await getOrders(new SingletonStore().getStore().getState().app)
    } catch(err){
        console.error(err)
    }
}

export const setInvoicesLogic = async(element)=>{
    try{
        const client = new SingletonApolloClient().getClient()
        await client.mutate({
            variables: element,
            mutation : gql`
                    mutation ($track: Int, $forwarder: ID, $invoices: [ID]!) {
                        setInvoicesLogic(track: $track, forwarder: $forwarder, invoices: $invoices) {
                             data
                        }
                    }`})
        //return await getOrders(new SingletonStore().getStore().getState().app)
    } catch(err){
        console.error(err)
    }
}

export const setInvoice = async(element)=>{
    try{
        const client = new SingletonApolloClient().getClient()
        await client.mutate({
            variables: element,
            mutation : gql`
                    mutation ($adss: [ID], $taken: Boolean, $invoice: ID!, $confirmationClient: Boolean, $confirmationForwarder: Boolean, $cancelClient: Boolean, $cancelForwarder: Boolean, $paymentConsignation: Boolean) {
                        setInvoice(adss: $adss, taken: $taken, invoice: $invoice, confirmationClient: $confirmationClient, confirmationForwarder: $confirmationForwarder, cancelClient: $cancelClient, cancelForwarder: $cancelForwarder, paymentConsignation: $paymentConsignation) {
                             data
                        }
                    }`})
        //return await getOrders(new SingletonStore().getStore().getState().app)
    } catch(err){
        console.error(err)
    }
}

export const setOrder = async(element)=>{
    try{
        const client = new SingletonApolloClient().getClient()
        let res = await client.mutate({
            variables: element,
            mutation : gql`
                    mutation ($orders: [OrderInput], $invoice: ID) {
                        setOrder(orders: $orders, invoice: $invoice) {
                             _id
                            createdAt
                            updatedAt
                            agent
                                {_id name}
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
                            confirmationClient
                            taken
                            adss
                                { 
                                    _id
                                    title
                                }
                            sync
                            dateDelivery
                            usedBonus
                        }
                    }`})
        return res.data.setOrder
    } catch(err){
        console.error(err)
    }
}

export const subscriptionOrder = gql`
  subscription  {
    reloadOrder {
      who
      invoice {
                             _id
                            createdAt
                            updatedAt
                            agent
                                {_id name}
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
                                            _id
                                            name    
                                            stock 
                                            apiece
                                            unit
                                            priotiry
                                            packaging
                                            weight
                                            size
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
                            confirmationClient
                            taken
                            sync
                            dateDelivery
                            usedBonus
                        }
      type
    }
  }
`