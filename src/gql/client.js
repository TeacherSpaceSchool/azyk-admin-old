import { gql } from 'apollo-boost';
import { SingletonApolloClient } from '../singleton/client';
import { SingletonStore } from '../singleton/store';
import { getReceiveDataByIndex, putReceiveDataByIndex } from '../service/idb/receiveData';

export const getClientsSync = async(arg, client)=>{
    try{
        client = client? client : new SingletonApolloClient().getClient()
        let res = await client
            .query({
                variables: arg,
                query: gql`
                    query ($search: String!, $organization: ID!, $skip: Int!) {
                        clientsSync(search: $search, organization: $organization, skip: $skip) {
                                            _id
                                            image
                                            createdAt
                                            name
                                            address
                                            lastActive
                                            category
                                            device
                                            notification
                                            city
                                            phone
                                            user 
                                                {status}
                          }
                    }`,
            })
        return res.data
    } catch(err){
        console.error(err)
    }
}

export const getClientsSyncStatistic = async(arg, client)=>{
    try{
        client = client? client : new SingletonApolloClient().getClient()
        let res = await client
            .query({
                variables: arg,
                query: gql`
                    query ($search: String!, $organization: ID!) {
                        clientsSyncStatistic(search: $search, organization: $organization) 
                    }`,
            })
        return res.data
    } catch(err){
        console.error(err)
    }
}

export const getClients = async(arg, client)=>{
    try{
        client = client? client : new SingletonApolloClient().getClient()
        let res = await client
            .query({
                variables: arg,
                query: gql`
                    query ($search: String!, $sort: String!, $filter: String!, $date: String, $skip: Int, $city: String) {
                        clients(search: $search, sort: $sort, filter: $filter, date: $date, skip: $skip, city: $city) {
                                            _id
                                            image
                                            createdAt
                                            name
                                            address
                                            lastActive
                                            device
                                            notification
                                            city
                                            phone
                                            category
                                            user 
                                                {status}
                          }
                          sortClient {
                           name
                            field
                          }
                          filterClient {
                           name
                           value
                          }
                    }`,
            })
        if(new SingletonStore().getStore()&&new SingletonStore().getStore().getState().user.profile.role.includes('агент'))
            await putReceiveDataByIndex(`clients(search: ${arg.search}, sort: ${arg.sort}, filter: ${arg.filter}, date: ${arg.date}, skip: ${arg.skip})`, res.data)
        return res.data
    } catch(err){
        console.error(err)
        if(new SingletonStore().getStore()&&new SingletonStore().getStore().getState().user.profile.role.includes('агент'))
            return await getReceiveDataByIndex(`clients(search: ${arg.search}, sort: ${arg.sort}, filter: ${arg.filter}, date: ${arg.date}, skip: ${arg.skip})`)
    }
}

export const getClientsSimpleStatistic = async(arg, client)=>{
    try{
        client = client? client : new SingletonApolloClient().getClient()
        let res = await client
            .query({
                variables: arg,
                query: gql`
                    query ($search: String!, $filter: String!, $date: String, $city: String) {
                        clientsSimpleStatistic(search: $search, filter: $filter, date: $date, city: $city)
                    }`,
            })
        return res.data
    } catch(err){
        console.error(err)
    }
}

export const getClientsTrash = async(arg, client)=>{
    try{
        client = client? client : new SingletonApolloClient().getClient()
        let res = await client
            .query({
                variables: arg,
                query: gql`
                    query ($search: String!, $skip: Int) {
                        clientsTrash(search: $search, skip: $skip) {
                                            _id
                                            image
                                            createdAt
                                            name
                                            address
                                            lastActive
                                            category
                                            device
                                            notification
                                            city
                                            phone
                                            user 
                                                {status}
                          }
                    }`,
            })
        return res.data
    } catch(err){
        console.error(err)
    }
}

export const getClientsTrashSimpleStatistic = async(arg, client)=>{
    try{
        client = client? client : new SingletonApolloClient().getClient()
        let res = await client
            .query({
                variables: arg,
                query: gql`
                    query ($search: String!) {
                        clientsTrashSimpleStatistic(search: $search)
                    }`,
            })
        return res.data
    } catch(err){
        console.error(err)
    }
}

export const getClientsWithoutDistrict = async({organization, city}, client)=>{
    try{
        client = client? client : new SingletonApolloClient().getClient()
        let res = await client
            .query({
                variables: {organization, city},
                query: gql`
                    query ($organization: ID, $city: String) {
                        clientsWithoutDistrict(organization: $organization, city: $city) {
                                            _id
                                            image
                                            createdAt
                                            name
                                            address
                                            lastActive
                                            device
                                            category
                                            notification
                                            city
                                            phone
                                            user 
                                                {status}
                        }
                    }`,
            })
        return res.data
    } catch(err){
        console.error(err)
    }
}

export const getClient = async({_id: _id}, client)=>{
    try{
        client = client? client : new SingletonApolloClient().getClient()
        let res = await client
            .query({
                variables: {_id: _id},
                query: gql`
                    query ($_id: ID!) {
                        client(_id: $_id) {
                            _id
                            image
                            createdAt
                            lastActive
                            name
                            email
                            address
                            info
                            reiting
                            city
                            category
                            phone
                            user 
                                {_id role status login}
                        }
                    }`,
            })
        if(new SingletonStore().getStore()&&new SingletonStore().getStore().getState().user.profile.role.includes('агент'))
            await putReceiveDataByIndex(`client(_id: ${_id})`, res.data)
        return res.data
    } catch(err){
        console.error(err)
        if(new SingletonStore().getStore()&&new SingletonStore().getStore().getState().user.profile.role.includes('агент'))
            return await getReceiveDataByIndex(`client(_id: ${_id})`)
    }
}

export const onoffClient = async(ids)=>{
    try{
        const client = new SingletonApolloClient().getClient()
        await client.mutate({
            variables: {_id: ids},
            mutation : gql`
                    mutation ($_id: [ID]!) {
                        onoffClient(_id: $_id) {
                             data
                        }
                    }`})
    } catch(err){
        console.error(err)
    }
}

export const clearClientsSync = async(organization)=>{
    try{
        const client = new SingletonApolloClient().getClient()
        await client.mutate({
            variables: {organization: organization},
            mutation : gql`
                    mutation ($organization: ID!) {
                        clearClientsSync(organization: $organization) {
                             data
                        }
                    }`})
    } catch(err){
        console.error(err)
    }
}

export const deleteClient = async(ids)=>{
    try{
        const client = new SingletonApolloClient().getClient()
        await client.mutate({
            variables: {_id: ids},
            mutation : gql`
                    mutation ($_id: [ID]!) {
                        deleteClient(_id: $_id) {
                             data
                        }
                    }`})
    } catch(err){
        console.error(err)
    }
}

export const restoreClient = async(ids)=>{
    try{
        const client = new SingletonApolloClient().getClient()
        await client.mutate({
            variables: {_id: ids},
            mutation : gql`
                    mutation ($_id: [ID]!) {
                        restoreClient(_id: $_id) {
                             data
                        }
                    }`})
    } catch(err){
        console.error(err)
    }
}

export const setClient = async(element, client)=>{
    try{
        client = client? client : new SingletonApolloClient().getClient()
        await client.mutate({
            variables: element,
            mutation : gql`
                    mutation ($_id: ID!, $phone: [String], $login: String, $device: String, $category: String, $city: String, $image: Upload, $name: String, $email: String, $address: [[String]], $info: String, $newPass: String) {
                        setClient(_id: $_id, device: $device, phone: $phone, login: $login, category: $category, city: $city, image: $image, name: $name, email: $email, address: $address, info: $info, newPass: $newPass) {
                             data
                        }
                    }`})
    } catch(err){
        console.error(err)
    }
}

export const addClient = async(element)=>{
    try{
        const client = new SingletonApolloClient().getClient()
        await client.mutate({
            variables: element,
            mutation : gql`
                    mutation ($image: Upload, $name: String!, $email: String, $category: String!, $city: String!, $address: [[String]]!, $phone: [String]!, $info: String, $password: String!, $login: String!) {
                        addClient(image: $image, name: $name, email: $email, category: $category, city: $city, address: $address, phone: $phone, info: $info, password: $password, login: $login) {
                             data
                        }
                    }`})
    } catch(err){
        console.error(err)
    }
}