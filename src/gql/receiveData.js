import { gql } from 'apollo-boost';
import { SingletonApolloClient } from '../singleton/client';
import { SingletonStore } from '../singleton/store';

export const getReceivedDatas = async({search}, client)=>{
    try{
        client = client? client : new SingletonApolloClient().getClient()
        let res = await client
            .query({
                variables: {search: search},
                query: gql`
                    query ($search: String!) {
                        receivedDatas(search: $search) {
                            _id
                            createdAt
                            guid
                            name
                            addres
                            agent
                            phone
                            type
                            status
                            organization {name}
                        }
                    }`,
            })
        return res.data
    } catch(err){
        console.error(err)
    }
}

export const deleteReceivedData = async(ids)=>{
    try{
        const client = new SingletonApolloClient().getClient()
        await client.mutate({
            variables: {_ids: ids},
            mutation : gql`
                    mutation ($_ids: [ID]!) {
                        deleteReceivedData(_ids: $_ids) {
                             data
                        }
                    }`})
    } catch(err){
        console.error(err)
    }
}

export const addReceivedDataClient = async(id)=>{
    try{
        const client = new SingletonApolloClient().getClient()
        await client.mutate({
            variables: {_id: id},
            mutation : gql`
                    mutation ($_id: ID!) {
                        addReceivedDataClient(_id: $_id) {
                             data
                        }
                    }`})
    } catch(err){
        console.error(err)
    }
}

export const clearAllReceivedDatas = async()=>{
    try{
        const client = new SingletonApolloClient().getClient()
        await client.mutate({
            mutation : gql`
                    mutation {
                        clearAllReceivedDatas {
                             data
                        }
                    }`})
    } catch(err){
        console.error(err)
    }
}