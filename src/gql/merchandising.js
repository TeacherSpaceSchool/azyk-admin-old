import { gql } from 'apollo-boost';
import { SingletonApolloClient } from '../singleton/client';

export const getMerchandisings = async(args, client)=>{
    try{
        client = client? client : new SingletonApolloClient().getClient()
        let res = await client
            .query({
                variables: args,
                query: gql`
                    query ($organization: ID!, $search: String!, $sort: String!, $filter: String!, $skip: Int) {
                        merchandisings(organization: $organization, search: $search, sort: $sort, filter: $filter, skip: $skip) {
                            client 
                                {_id name address}
                            employment 
                                {_id name}
                            date 
                            stateProduct 
                            check
                            _id
                            fhos
                                {state}
                          }
                        sortMerchandising {
                            name
                            field
                        }
                        filterMerchandising {
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

export const getMerchandising = async(args, client)=>{
    try{
        client = client? client : new SingletonApolloClient().getClient()
        let res = await client
            .query({
                variables: args,
                query: gql`
                    query ($_id: ID!) {
                        merchandising(_id: $_id) {
                            _id
                            date
                            employment
                                {_id name}
                            organization
                                {_id name}
                            client
                                {_id name address}
                            productAvailability
                            productInventory
                            productConditions
                            productLocation
                            images
                            fhos
                                {type images layout state foreignProducts filling}
                            needFho
                            check
                            stateProduct
                            comment
                          }
                    }`,
            })
        return res.data
    } catch(err){
        console.error(err)
    }
}

export const deleteMerchandising = async(ids)=>{
    try{
        const client = new SingletonApolloClient().getClient()
        await client.mutate({
            variables: {_id: ids},
            mutation : gql`
                    mutation ($_id: [ID]!) {
                        deleteMerchandising(_id: $_id) {
                             data
                        }
                    }`})
    } catch(err){
        console.error(err)
    }
}

export const checkMerchandising = async(ids)=>{
    try{
        const client = new SingletonApolloClient().getClient()
        await client.mutate({
            variables: {_id: ids},
            mutation : gql`
                    mutation ($_id: ID!) {
                        checkMerchandising(_id: $_id) {
                             data
                        }
                    }`})
    } catch(err){
        console.error(err)
    }
}

export const addMerchandising = async(element)=>{
    try{
        const client = new SingletonApolloClient().getClient()
        await client.mutate({
            variables: element,
            mutation : gql`
                    mutation ($organization: ID!, $client: ID!, $productAvailability: [String]!, $productInventory: Boolean!, $productConditions: Int!, $productLocation: Int!, $images: [Upload]!, $fhos: [InputFho]!, $needFho: Boolean!, $stateProduct: Int!, $comment: String!) {
                        addMerchandising(organization: $organization, client: $client, productAvailability: $productAvailability, productInventory: $productInventory, productConditions: $productConditions, productLocation: $productLocation, images: $images, fhos: $fhos, needFho: $needFho, stateProduct: $stateProduct, comment: $comment) {
                            data
                        }
                    }`})
    } catch(err){
        console.error(err)
    }
}
