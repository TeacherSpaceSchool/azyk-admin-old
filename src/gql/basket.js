import { gql } from 'apollo-boost';
import { SingletonApolloClient } from '../singleton/client';
import { SingletonStore } from '../singleton/store';
import {
    setCountBasket
} from '../../redux/actions/app'

export const getBasket = async(client)=>{
    try{
        client = client? client : new SingletonApolloClient().getClient()
        let res = await client.query({
                query: gql`
                    query{
                        baskets {
                            _id
                            createdAt
                            item 
                                {
                                    _id 
                                    name 
                                    stock 
                                    apiece
                                    unit
                                    priotiry
                                    image 
                                    packaging
                                    price
                                    weight
                                    size
                                    organization
                                        {_id name minimumOrder consignation}
                                }
                            count
                            consignment
                        }
                    }`,
            })
        return res.data
    } catch(err){
        console.error(err)
    }
}

export const getCountBasket = async()=>{
    try{
        const client = new SingletonApolloClient().getClient()
        let res;
            res = await client.query({
                query : gql`
                    query {
                        countBasket 
                    }`
            })
        new SingletonStore().getStore().dispatch(setCountBasket(res.data.countBasket))
    } catch(err){
        console.error(err)
    }
}

export const deleteBasket = async(ids)=>{
    try{
        const client = new SingletonApolloClient().getClient()
        await client.mutate({
            variables: {_id: ids},
            mutation : gql`
                    mutation ($_id: [ID]!) {
                        deleteBasket(_id: $_id) {
                             data
                        }
                    }`})
        await getCountBasket()
        return await getBasket()
    } catch(err){
        console.error(err)
    }
}

export const deleteBasketAll = async(client)=>{
    try{
        client = client? client : new SingletonApolloClient().getClient()
        await client.mutate({
            mutation : gql`
                    mutation{
                        deleteBasketAll{
                             data
                        }
                    }`})
    } catch(err){
        console.error(err)
    }
}

export const addBasket = async(element)=>{
    try{
        const client = new SingletonApolloClient().getClient()
        await client.mutate({
            variables: element,
            mutation : gql`
                    mutation ($item: ID!, $count: Int!, $consignment: Int) {
                        addBasket(item: $item, count: $count, consignment: $consignment) {
                             data
                        }
                    }`})
        await getCountBasket()
    } catch(err){
        console.error(err)
    }
}

export const setBasket = async(element)=>{
    try{
        const client = new SingletonApolloClient().getClient()
        await client.mutate({
            variables: element,
            mutation : gql`
                    mutation ($_id: ID!, $count: Int!, $consignment: Int) {
                        setBasket(_id: $_id, count: $count, consignment: $consignment) {
                             data
                        }
                    }`})
        await getCountBasket()
        return await getBasket()
    } catch(err){
        console.error(err)
    }
}