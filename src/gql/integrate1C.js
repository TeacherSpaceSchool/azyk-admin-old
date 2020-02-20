import { gql } from 'apollo-boost';
import { SingletonApolloClient } from '../singleton/client';
import { SingletonStore } from '../singleton/store';

export const getIntegrate1Cs = async({search: search, filter: filter}, organization, client)=>{
    try{
        client = client? client : new SingletonApolloClient().getClient()
        let res = await client
            .query({
                variables: {search: search, organization: organization, filter: filter},
                query: gql`
                    query ($search: String!, $organization: ID!, $filter: String!) {
                        integrate1Cs(search: $search, organization: $organization, filter: $filter) {
                            _id
                            createdAt
                            ecspeditor
                                {_id name}
                            guid
                            organization
                                {_id name}
                            client
                                {_id name}
                            agent
                                {_id name}
                            item
                                {_id name}
                          }
                          filterIntegrate1C {
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

export const getEcspeditorsIntegrate1C = async(organization, client)=>{
    try{
        client = client? client : new SingletonApolloClient().getClient()
        let res = await client
            .query({
                variables: {organization: organization},
                query: gql`
                    query ($organization: ID!) {
                        ecspeditorsIntegrate1C(organization: $organization) {
                            _id 
                            name
                        }
                    }`,
            })
        return res.data
    } catch(err){
        console.error(err)
    }
}

export const unloadingIntegrate1C = async({document, organization}, client)=>{
    try{
        client = client? client : new SingletonApolloClient().getClient()
        let res = await client
            .mutate({
                variables: {document: document, organization: organization},
                mutation: gql`
                    mutation ($document: Upload!, $organization: ID!) {
                        unloadingIntegrate1C(document: $document, organization: $organization) {
                            data
                        }
                    }`,
            })
        return res.data
    } catch(err){
        console.error(err)
    }
}

export const getAgentsIntegrate1C = async(organization, client)=>{
    try{
        client = client? client : new SingletonApolloClient().getClient()
        let res = await client
            .query({
                variables: {organization: organization},
                query: gql`
                    query ($organization: ID!) {
                        agentsIntegrate1C(organization: $organization) {
                            _id 
                            name
                        }
                    }`,
            })
        return res.data
    } catch(err){
        console.error(err)
    }
}

export const getItemsIntegrate1C = async(organization, client)=>{
    try{
        client = client? client : new SingletonApolloClient().getClient()
        let res = await client
            .query({
                variables: {organization: organization},
                query: gql`
                    query ($organization: ID!) {
                        itemsIntegrate1C(organization: $organization) {
                            _id 
                            name
                        }
                    }`,
            })
        return res.data
    } catch(err){
        console.error(err)
    }
}

export const getClientsIntegrate1C = async(organization, client)=>{
    try{
        client = client? client : new SingletonApolloClient().getClient()
        let res = await client
            .query({
                variables: {organization: organization},
                query: gql`
                    query ($organization: ID!) {
                        clientsIntegrate1C(organization: $organization) {
                            _id 
                            name
                        }
                    }`,
            })
        return res.data
    } catch(err){
        console.error(err)
    }
}

export const getIntegrate1C = async(_id, client)=>{
    try{
        client = client? client : new SingletonApolloClient().getClient()
        let res = await client
            .query({
                variables: {_id: _id},
                query: gql`
                    query ($_id: ID!) {
                        integrate1C(_id: $_id) {
                            _id
                            createdAt
                            ecspeditor
                                {_id name}
                            guid
                            organization
                                {_id name}
                            client
                                {_id name}
                            agent
                                {_id name}
                            item
                                {_id name}
                        }
                    }`,
            })
        return res.data
    } catch(err){
        console.error(err)
    }
}

export const deleteIntegrate1C = async(ids, organization)=>{
    try{
        const client = new SingletonApolloClient().getClient()
        await client.mutate({
            variables: {_id: ids},
            mutation : gql`
                    mutation ($_id: [ID]!) {
                        deleteIntegrate1C(_id: $_id) {
                             data
                        }
                    }`})
        return await getIntegrate1Cs(new SingletonStore().getStore().getState().app, organization)
    } catch(err){
        console.error(err)
    }
}

export const addIntegrate1C = async(element)=>{
    try{
        const client = new SingletonApolloClient().getClient()
        await client.mutate({
            variables: element,
            mutation : gql`
                    mutation ($organization: ID!, $item: ID, $client: ID, $guid: String, $agent: ID, $ecspeditor: ID) {
                        addIntegrate1C(organization: $organization, item: $item, client: $client, guid: $guid, agent: $agent, ecspeditor: $ecspeditor) {
                             data
                        }
                    }`})
        let list = await getIntegrate1Cs(new SingletonStore().getStore().getState().app, element.organization)
        return list
    } catch(err){
        console.error(err)
    }
}

export const setIntegrate1C = async(element)=>{
    try{
        const client = new SingletonApolloClient().getClient()
        await client.mutate({
            variables: element,
            mutation : gql`
                    mutation ($_id: ID!, $item: ID, $client: ID, $guid: String, $agent: ID, $ecspeditor: ID) {
                        setIntegrate1C(_id: $_id, item: $item, client: $client, guid: $guid, agent: $agent, ecspeditor: $ecspeditor) {
                             data
                        }
                    }`})
        let list = await getIntegrate1Cs(new SingletonStore().getStore().getState().app, element.organization)
        return list
    } catch(err){
        console.error(err)
    }
}