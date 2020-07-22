import { gql } from 'apollo-boost';
import { SingletonApolloClient } from '../singleton/client';
import { SingletonStore } from '../singleton/store';
import { getReceiveDataByIndex, putReceiveDataByIndex } from '../service/idb/receiveData';

export const getDeliveryDates = async({clients, organization}, client)=>{
    try{
        client = client? client : new SingletonApolloClient().getClient()
        let res = await client
            .query({
                variables: { clients: clients, organization: organization },
                query: gql`
                     query ($clients: [ID]!, $organization: ID!) {
                        deliveryDates(clients: $clients, organization: $organization) {
                            client
                            days
                            organization
                         }
                    }`,
            })
        return res.data
    } catch(err){
        console.error(err)
    }
}

export const getDeliveryDate = async({client, organization})=>{
    try{
        let res = await (new SingletonApolloClient().getClient())
            .query({
                variables: { client: client, organization: organization },
                query: gql`
                     query ($client: ID!, $organization: ID!) {
                        deliveryDate(client: $client, organization: $organization) {
                            client
                            days
                            organization
                         }
                    }`,
            })
        if(new SingletonStore().getStore()&&new SingletonStore().getStore().getState().user.profile.role.includes('агент'))
            await putReceiveDataByIndex(`deliveryDate(client: ${client}, organization: ${organization})`, res.data)
        return res.data
    } catch(err){
        console.error(err)
        if(new SingletonStore().getStore()&&new SingletonStore().getStore().getState().user.profile.role.includes('агент'))
            return await getReceiveDataByIndex(`deliveryDate(client: ${client}, organization: ${organization})`)
    }
}

export const saveDeliveryDates = async(clients, organization, days)=>{
    try{
        const client = new SingletonApolloClient().getClient()
        await client.mutate({
            variables: { clients: clients, organization: organization, days: days },
            mutation : gql`
                    mutation ($clients: [ID]!, $organization: ID!, $days: [Boolean]!) {
                        setDeliveryDates(clients: $clients, organization: $organization, days: $days) {
                             data
                        }
                    }`})
    } catch(err){
        console.error(err)
    }
}