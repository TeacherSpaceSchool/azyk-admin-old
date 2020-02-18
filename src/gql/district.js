import { gql } from 'apollo-boost';
import { SingletonApolloClient } from '../singleton/client';
import { SingletonStore } from '../singleton/store';

export const getDistricts = async({search, sort, organization}, client)=>{
    try{
        client = client? client : new SingletonApolloClient().getClient()
        let res = await client
            .query({
                variables: {search: search, sort: sort, organization: organization},
                query: gql`
                    query ($organization: ID, $search: String!, $sort: String!) {
                        districts(organization: $organization, search: $search, sort: $sort) {
                            _id
                            createdAt
                            organization
                                {_id name}
                            client
                                { 
                                    _id
                                    name
                                    address
                                }
                            name
                            agent
                                { 
                                    _id
                                    name
                                }
                            ecspeditor
                                { 
                                    _id
                                    name
                                }
                            manager
                                { 
                                    _id
                                    createdAt
                                    name
                                }
                        }
                        sortDistrict {
                            name
                            field
                        }
                    }`,
            })
        return res.data
    } catch(err){
        console.error(err)
    }
}

export const getDistrict = async({_id}, client)=>{
    try{
        client = client? client : new SingletonApolloClient().getClient()
        let res = await client
            .query({
                variables: {_id: _id},
                query: gql`
                    query ($_id: ID!) {
                        district(_id: $_id) {
                            _id
                            createdAt
                            organization
                                {_id name}
                            client
                                { 
                                    _id
                                    image
                                    createdAt
                                    name
                                    email
                                    address
                                    lastActive
                                    device
                                    notification
                                    info
                                    reiting
                                    city
                                    phone
                                    organization 
                                        {_id name}
                                    user 
                                        {_id role status login}
                                }
                            ecspeditor
                                { 
                                    _id
                                    name
                                }
                            name
                            agent
                                { 
                                    _id
                                    createdAt
                                    name
                                }
                            manager
                                { 
                                    _id
                                    name
                                }
                        }
                    }`,
            })
        return res.data
    } catch(err){
        console.error(err)
    }
}

export const deleteDistrict = async(ids, organization)=>{
    try{
        const client = new SingletonApolloClient().getClient()
        await client.mutate({
            variables: {_id: ids},
            mutation : gql`
                    mutation ($_id: [ID]!) {
                        deleteDistrict(_id: $_id) {
                             data
                        }
                    }`})
        return await getDistricts({organization: organization, ...(new SingletonStore().getStore().getState().app)})
    } catch(err){
        console.error(err)
    }
}

export const addDistrict = async(element)=>{
    try{
        const client = new SingletonApolloClient().getClient()
        await client.mutate({
            variables: element,
            mutation : gql`
                    mutation ($organization: ID, $client: [ID]!, $name: String!, $agent: ID, $ecspeditor: ID, $manager: ID) {
                        addDistrict(organization: $organization, client: $client, name: $name, agent: $agent, ecspeditor: $ecspeditor, manager: $manager) {
                             data
                        }
                    }`})
    } catch(err){
        console.error(err)
    }
}

export const setDistrict = async(element)=>{
    try{
        const client = new SingletonApolloClient().getClient()
        await client.mutate({
            variables: element,
            mutation : gql`
                    mutation ($_id: ID!, $organization: ID, $client: [ID], $name: String, $agent: ID, $ecspeditor: ID, $manager: ID) {
                        setDistrict(_id: $_id, organization: $organization, client: $client, name: $name, agent: $agent, ecspeditor: $ecspeditor, manager: $manager) {
                             data
                        }
                    }`})
    } catch(err){
        console.error(err)
    }
}