import Head from 'next/head';
import React, { useState, useEffect } from 'react';
import App from '../../layouts/App';
import { connect } from 'react-redux'
import pageListStyle from '../../src/styleMUI/item/itemList'
import CardItem from '../../components/items/CardItem'
import { useRouter } from 'next/router'
import {getBrands} from '../../src/gql/items';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import Link from 'next/link';
import { urlMain } from '../../redux/constants/other'
import initialApp from '../../src/initialApp'
import Badge from '@material-ui/core/Badge';
import LocalGroceryStore from '@material-ui/icons/LocalGroceryStore';
import LazyLoad from 'react-lazyload';
import { forceCheck } from 'react-lazyload';
import CardItemPlaceholder from '../../components/items/CardItemPlaceholder'
import { getClientGqlSsr } from '../../src/getClientGQL'
import Router from 'next/router'
const height = 377;

const Brand = React.memo((props) => {
    const classes = pageListStyle();
    const { data } = props;
    const router = useRouter()
    let [list, setList] = useState(data.brands);
    const { search, filter, sort, countBasket, city } = props.app;
    const { profile } = props.user;
    useEffect(()=>{
        (async()=>{
            if(data)
                setList((await getBrands({city: city, organization: router.query.id, search: search, sort: sort})).brands)
            setPagination(100)
            forceCheck()
        })()
    },[filter, sort, search, city])
    let [pagination, setPagination] = useState(100);
    const checkPagination = ()=>{
        if(pagination<list.length){
            setPagination(pagination+100)
        }
    }
    return (
        <App cityShow checkPagination={checkPagination} searchShow={true} sorts={data?data.sortItem:undefined} pageName={data&&data.brands[0]?data.brands[0].organization.name:'Ничего не найдено'}>
            <Head>
                <title>{data&&data.brands[0]?data.brands[0].organization.name:'Ничего не найдено'}</title>
                <meta name='description' content={data&&data.brands[0]?data.brands[0].organization.info:'Ничего не найдено'} />
                <meta property='og:title' content={data&&data.brands[0]?data.brands[0].organization.name:'Ничего не найдено'} />
                <meta property='og:description' content={data&&data.brands[0]?data.brands[0].organization.info:'Ничего не найдено'} />
                <meta property='og:type' content='website' />
                <meta property='og:image' content={`${urlMain}/static/512x512.png`} />
                <meta property="og:url" content={data&&data.brands[0]?data.brands[0].organization.image:`${urlMain}/brand/${router.query.id}`} />
                <link rel='canonical' href={`${urlMain}/brand/${router.query.id}`}/>
            </Head>
            <div className={classes.page}>
                {list?list.map((element, idx)=> {
                    if(idx<=pagination)
                        return(
                            <LazyLoad scrollContainer={'.App-body'} key={element._id} height={height} offset={[height, 0]} debounce={0} once={true}  placeholder={<CardItemPlaceholder/>}>
                                <CardItem setList={setList} key={element._id} element={element} subCategory={element.subCategory._id}/>
                            </LazyLoad>
                        )}
                ):null}
            </div>
            {['admin', 'суперорганизация', 'организация'].includes(profile.role)?
                <Link href='/item/[id]' as={`/item/new`}>
                    <Fab color='primary' aria-label='add' className={classes.fab}>
                        <AddIcon />
                    </Fab>
                </Link>
                :
                profile.role==='client'?
                    <Link href='/basket'>
                        <Fab color='primary' aria-label='add' className={classes.fab}>
                            <Badge badgeContent={countBasket} color='secondary'>
                                <LocalGroceryStore />
                            </Badge>
                        </Fab>
                    </Link>
                    :
                    null
            }
            <div className='count'>
                {
                    `Всего товаров: ${list.length}`
                }
            </div>
        </App>
    )
})

Brand.getInitialProps = async function(ctx) {
    await initialApp(ctx)
    ctx.store.getState().app.city = 'Бишкек'
    if(!ctx.store.getState().user.profile.role)
        if(ctx.res) {
            ctx.res.writeHead(302, {
                Location: '/contact'
            })
            ctx.res.end()
        } else
            Router.push('/contact')
    ctx.store.getState().app.sort = 'name'
    return {
        data: await getBrands({city: ctx.store.getState().app.city, organization: ctx.query.id, search: '', sort: ctx.store.getState().app.sort}, ctx.req?await getClientGqlSsr(ctx.req):undefined),
    };
};

function mapStateToProps (state) {
    return {
        app: state.app,
        user: state.user,
    }
}

export default connect(mapStateToProps)(Brand);