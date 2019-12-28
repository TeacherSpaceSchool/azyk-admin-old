import { gql } from 'apollo-boost';
import { SingletonApolloClient } from '../singleton/client';
import { SingletonStore } from '../singleton/store';

export const getEquipments = async({search: search, sort: sort, filter: filter}, client)=>{
    try{
        client = client? client : new SingletonApolloClient().getClient()
        let res = await client
            .query({
                variables: {search: search, sort: sort, filter: filter},
                query: gql`
                    query ($search: String!, $sort: String!, $filter: String!) {
                        equipments(search: $search, sort: $sort, filter: $filter) {
                            _id
                            number
                            name
                            createdAt
                            client 
                                {_id name}
                            organization 
                                {_id name}
                          }
                          sortEquipment {
                           name
                            field
                          }
                          filterEquipment {
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

export const getEquipment = async({_id: _id}, client)=> {
    try {
        client = client? client : new SingletonApolloClient().getClient()
        let res = await client
            .query({
                variables: {_id: _id},
                query: gql`
                    query ($_id: ID!) {
                        equipment(_id: $_id) {
                            _id
                            number
                            name
                            createdAt
                            client 
                                {_id name}
                            organization 
                                {_id name}
                        }
                    }`,
            })
        return res.data
    } catch (err) {
        console.error(err)
    }
}

export const deleteEquipment = async(ids)=>{
    try{
        const client = new SingletonApolloClient().getClient()
        await client.mutate({
            variables: {_id: ids},
            mutation : gql`
                    mutation ($_id: [ID]!) {
                        deleteEquipment(_id: $_id) {
                             data
                        }
                    }`})
        return await getEquipments(new SingletonStore().getStore().getState().app)
    } catch(err){
        console.error(err)
    }
}

export const setEquipment = async(element)=>{
    try{
        const client = new SingletonApolloClient().getClient()
        await client.mutate({
            variables: element,
            mutation : gql`
                    mutation ($_id: ID!, $name: String, $number: String, $organization: ID, $client: ID) {
                        setEquipment(_id: $_id, name: $name, number: $number, organization: $organization, client: $client) {
                             data
                        }
                    }`})
        let list = await getEquipments(new SingletonStore().getStore().getState().app)
        return list
    } catch(err){
        console.error(err)
    }
}

export const addEquipment = async(element)=>{
    try{
        const client = new SingletonApolloClient().getClient()
        await client.mutate({
            variables: element,
            mutation : gql`
                    mutation ($name: String!, $number: String!, $organization: ID, $client: ID) {
                        addEquipment(name: $name, number: $number, organization: $organization, client: $client) {
                             data
                        }
                    }`})
        return await getEquipments(new SingletonStore().getStore().getState().app)
    } catch(err){
        console.error(err)
    }
}