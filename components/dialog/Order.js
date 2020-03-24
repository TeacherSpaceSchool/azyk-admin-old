import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { setOrder, setInvoice } from '../../src/gql/order'
import * as mini_dialogActions from '../../redux/actions/mini_dialog'
import * as snackbarActions from '../../redux/actions/snackbar'
import Button from '@material-ui/core/Button';
import dialogContentStyle from '../../src/styleMUI/dialogContent'
import { pdDDMMYYHHMM, pdDDMMYYHHMMCancel } from '../../src/lib'
import Confirmation from './Confirmation'
import Geo from '../../components/dialog/Geo'
import HistoryOrder from '../../components/dialog/HistoryOrder'
import IconButton from '@material-ui/core/IconButton';
import CancelIcon from '@material-ui/icons/Cancel';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';

const Order =  React.memo(
    (props) =>{
        const { isMobileApp } = props.app;
        const { profile, authenticated } = props.user;
        const { showMiniDialog, setMiniDialog, showFullDialog, setFullDialog } = props.mini_dialogActions;
        const { classes, element, setList, getInvoices, list, idx } = props;
        let [orders, setOrders] = useState([...element.orders]);
        let [allPrice, setAllPrice] = useState(element.allPrice);
        let [consignmentPrice, setConsignmentPrice] = useState(element.consignmentPrice);
        let [allTonnage, setAllTonnage] = useState(element.allTonnage);
        let [allSize, setAllSize] = useState(element.allSize);
        let [showCons, setShowCons] = useState({});
        let [showReturn, setShowReturn] = useState({});
        let [taken, setTaken] = useState(element.taken);
        let [paymentConsignation, setPaymentConsignation] = useState(element.paymentConsignation);
        let [confirmationForwarder, setConfirmationForwarder] = useState(element.confirmationForwarder);
        let [confirmationClient, setConfirmationClient] = useState(element.confirmationClient);
        let [cancelForwarder, setCancelForwarder] = useState(element.cancelForwarder!=undefined&&element.cancelForwarder);
        let [cancelClient, setCancelClient] = useState(element.cancelClient!=undefined&&element.cancelClient);
        let [changeOrders, setChangeOrders] = useState(false);
        const width = isMobileApp? (window.innerWidth-112) : 500;
        const allowOrganization = (['менеджер', 'организация', 'агент'].includes(profile.role)&&((profile.organization===element.orders[0].item.organization._id&&!element.distributer&&!element.distributer._id)||(element.distributer&&element.distributer._id&&profile.organization===element.distributer._id)))
        const { showSnackBar } = props.snackbarActions;
        let canculateAllPrice = ()=>{
            allTonnage=0
            allSize=0
            allPrice=0
            consignmentPrice=0
            for(let i=0; i<orders.length; i++){
                consignmentPrice+=orders[i].consignmentPrice
                allPrice+=orders[i].allPrice
                allTonnage+=orders[i].allTonnage
                allSize+=orders[i].allSize
            }
            if(element.usedBonus&&element.usedBonus>0)
                allPrice -= element.usedBonus
            setAllPrice(Math.round(allPrice))
            setAllTonnage(Math.round(allTonnage))
            setAllSize(Math.round(allSize))
            setConsignmentPrice(consignmentPrice)
            setChangeOrders(true)
        }
        let increment = (idx)=>{
            if(orders[idx].item.apiece)
                orders[idx].count+=1
            else
                orders[idx].count+=orders[idx].item.packaging
            orders[idx].allPrice = Math.round(orders[idx].count * (!orders[idx].item.stock?orders[idx].item.price:orders[idx].item.stock))
            orders[idx].allTonnage = orders[idx].count * orders[idx].item.weight
            orders[idx].allSize = orders[idx].count * orders[idx].item.size
            setOrders([...orders])
            canculateAllPrice()
        }
        let decrement = (idx)=>{
            if(orders[idx].count>1&&orders[idx].item.apiece) {
                let takePrice = 1 * (!orders[idx].item.stock?orders[idx].item.price:orders[idx].item.stock)
                if(!orders[idx].item.organization.minimumOrder||((allPrice-takePrice)>=orders[idx].item.organization.minimumOrder)) {
                    orders[idx].count -= 1
                    orders[idx].allPrice = Math.round(orders[idx].count * (!orders[idx].item.stock ? orders[idx].item.price : orders[idx].item.stock))
                    orders[idx].allTonnage = orders[idx].count * orders[idx].item.weight
                    orders[idx].allSize = orders[idx].count * orders[idx].item.size
                    setOrders([...orders])
                    canculateAllPrice()
                } else
                    showSnackBar('Сумма не может быть меньше минимальной')
            }
            else if(orders[idx].count>orders[idx].item.packaging&&!orders[idx].item.apiece) {
                let takePrice = orders[idx].item.packaging * (!orders[idx].item.stock?orders[idx].item.price:orders[idx].item.stock)
                if(!orders[idx].item.organization.minimumOrder||((allPrice-takePrice)>=orders[idx].item.organization.minimumOrder)) {
                    orders[idx].count -= orders[idx].item.packaging
                    orders[idx].allPrice = Math.round(orders[idx].count * (!orders[idx].item.stock? orders[idx].item.price : orders[idx].item.stock))
                    orders[idx].allTonnage = orders[idx].count * orders[idx].item.weight
                    orders[idx].allSize = orders[idx].count * orders[idx].item.size
                    setOrders([...orders])
                    canculateAllPrice()
                } else
                    showSnackBar('Сумма не может быть меньше минимальной')
            }
        }
        let incrementConsignation = (idx)=>{
            if(orders[idx].consignment<orders[idx].count){
                orders[idx].consignment+=1
                orders[idx].consignmentPrice = Math.round(orders[idx].consignment * (!orders[idx].item.stock?orders[idx].item.price:orders[idx].item.stock))
                setOrders([...orders])
                canculateAllPrice()
            }
        }
        let decrementConsignation = (idx)=>{
            if(orders[idx].consignment>0) {
                orders[idx].consignment -= 1
                orders[idx].consignmentPrice = Math.round(orders[idx].consignment * (!orders[idx].item.stock?orders[idx].item.price:orders[idx].item.stock))
                setOrders([...orders])
                canculateAllPrice()
            }
        }
        let incrementReturned = (idx)=>{
            if(orders[idx].returned<orders[idx].count){
                orders[idx].returned+=1
                setOrders([...orders])
                canculateAllPrice()
            }
        }
        let decrementReturned  = (idx)=>{
            if(orders[idx].returned>0) {
                orders[idx].returned -= 1
                setOrders([...orders])
                canculateAllPrice()
            }
        }
        let remove = (idx)=>{
            if(orders.length>1) {
                orders.splice(idx, 1)
                setOrders([...orders])
                canculateAllPrice()
            } else
                showSnackBar('Товары не могут отсутствовать в заказе')
        }
        let [priceAfterReturn, setPriceAfterReturn] = useState(0);
        useEffect(()=>{
            priceAfterReturn = 0
            for(let i=0; i<orders.length; i++){
                priceAfterReturn += (orders[i].allPrice-orders[i].returned*(orders[i].item.stock?orders[i].item.stock:orders[i].item.price))
            }
            setPriceAfterReturn(Math.round(priceAfterReturn))
        },[orders,])
        return (
            <div className={classes.column} style={{width: width}}>
                <div className={classes.row}>
                    <div className={classes.nameField}>Заказ №:&nbsp;</div>
                    <div className={classes.value}>{element.number}</div>
                </div>
                <div className={classes.row}>
                    <div className={classes.nameField}>Статус:&nbsp;</div>
                    <div className={classes.value}>{
                            element.orders[0].status==='принят'&&(element.confirmationForwarder||element.confirmationClient)?
                                element.confirmationClient?
                                    'подтвержден клиентом'
                                    :
                                    element.confirmationForwarder?
                                        'доставлен поставщиком'
                                        :
                                        element.orders[0].status
                                :
                                element.orders[0].status
                    }</div>
                </div>
                <div className={classes.row}>
                    <div className={classes.nameField}>Время заказа: &nbsp;</div>
                    <div className={classes.value}>{pdDDMMYYHHMM(new Date(element.createdAt))}</div>
                </div>
                {
                    (['admin', 'суперагент'].includes(profile.role)||allowOrganization)&&element.orders[0].updatedAt!==element.orders[0].createdAt?
                       <a>
                           <div style={{cursor: 'pointer'}} className={classes.row} onClick={()=>{setMiniDialog('История', <HistoryOrder invoice={element._id}/>)}}>
                               <div className={classes.nameField}>Изменен:&nbsp;</div>
                               <div className={classes.value}>{pdDDMMYYHHMM(new Date(element.orders[0].updatedAt))}</div>
                            </div>
                       </a>
                        :
                        null
                }
                {
                    element.agent&&element.agent.name?
                        <a href={`/employment/${element.agent._id}`} target='_blank'>
                            <div className={classes.row}>
                                <div className={classes.nameField}>Агент: &nbsp;</div>
                                <div className={classes.value}>{element.agent.name}</div>
                            </div>
                        </a>
                        :
                        null
                }
                <div className={classes.row}>
                    <div className={classes.nameField}>Адрес: &nbsp;</div>
                    <div className={classes.value}>{`${element.address[2]?`${element.address[2]}, `:''}${element.address[0]}`}</div>
                </div>
                <div className={classes.geo} style={{color: element.address[1]?'#ffb300':'red'}} onClick={()=>{
                    if(element.address[1]) {
                        setFullDialog('Геолокация', <Geo geo={element.address[1]}/>)
                        showFullDialog(true)
                    }
                }}>
                    {
                        element.address[1]?
                            'Посмотреть геолокацию'
                            :
                            'Геолокация не задана'
                    }
                </div>
                {
                    element.dateDelivery?
                        <div className={classes.row}>
                            <div className={classes.nameField}>Время доставки:&nbsp;</div>
                            <div className={classes.value}>{pdDDMMYYHHMM(new Date(element.dateDelivery))}</div>
                        </div>
                        :
                        null
                }
                <a href={`/client/${element.client._id}`} target='_blank'>
                    <div className={classes.row}>
                        <div className={classes.nameField}>Получатель:&nbsp;</div>
                        <div className={classes.value}>{element.client.name}</div>
                    </div>
                </a>
                <a href={`/organization/${element.orders[0].item.organization._id}`} target='_blank'>
                    <div className={classes.row}>
                        <div className={classes.nameField}>Производитель:&nbsp;</div>
                        <div className={classes.value}>{element.orders[0].item.organization.name}</div>
                    </div>
                </a>
                {
                    element.distributer?
                        <a href={`/organization/${element.distributer._id}`} target='_blank'>
                            <div className={classes.row}>
                                <div className={classes.nameField}>Дистрибьютор:&nbsp;</div>
                                <div className={classes.value}>{element.distributer.name}</div>
                            </div>
                        </a>
                        :
                        null
                }
                {
                    element.usedBonus&&element.usedBonus>0?
                        <div className={classes.row}>
                            <div className={classes.nameField}>Использованный бонус:&nbsp;</div>
                            <div className={classes.value}>{element.usedBonus}&nbsp;сом</div>
                        </div>
                        :
                        null
                }
                <div className={classes.row}>
                    <div className={classes.nameField}>Сумма{priceAfterReturn!==allPrice?' (факт./итого)':''}:&nbsp;</div>
                    <div className={classes.value}>{priceAfterReturn!==allPrice?`${priceAfterReturn} сом/${allPrice} сом`:`${allPrice} сом`}</div>
                </div>
                {
                    consignmentPrice?
                        <div className={classes.row}>
                            <div className={classes.nameField}>Консигнации:&nbsp;</div>
                            <div className={classes.value} style={{color: element.paymentConsignation?'green':'red'}}>{consignmentPrice}&nbsp;сом,&nbsp;{element.paymentConsignation?'оплачены':'не оплачены'}</div>
                        </div>
                        :
                        null
                }
                {
                    authenticated&&profile.role!=='client'?
                        <>
                        {
                            allTonnage?
                                <div className={classes.row}>
                                    <div className={classes.nameField}>Тоннаж:&nbsp;</div>
                                    <div className={classes.value}>{allTonnage}&nbsp;кг</div>
                                </div>
                                :
                                null
                        }
                        {
                            allSize?
                                <div className={classes.row}>
                                    <div className={classes.nameField}>Кубатура:&nbsp;</div>
                                    <div className={classes.value}>{allSize}&nbsp;см³</div>
                                </div>
                                :
                                null
                        }
                        </>
                        :
                        null
                }
                <div className={classes.row}>
                    <div className={classes.nameField}>Способ оплаты:&nbsp;</div>
                    <div className={classes.value}>{element.paymentMethod}</div>
                </div>
                <div className={classes.row}>
                    <div className={classes.nameField}>Информация:&nbsp;</div>
                    <div className={classes.value}>{element.info}</div>
                </div>
                <br/>
                <div className={classes.column}>
                    <b>{`Товары(${orders.length}):`}</b>
                    {element.orders[0].status!=='обработка'?<><br/><br/></>:null}
                    {
                        orders.map((order, idx) => {
                            if(
                                element.orders[0].status==='обработка'&&
                                (
                                    profile.role==='client'||
                                    allowOrganization||
                                    ['admin', 'суперагент'].includes(profile.role)
                                )
                            )
                                return(
                                    <div key={idx} className={classes.column}>
                                        <div className={classes.row}>
                                            <div className={classes.nameField}>Товар:&nbsp;</div>
                                            <a href={`/item/${order.item._id}`} target='_blank'>
                                                <div className={classes.value}>{order.item.name}</div>
                                            </a>
                                            <IconButton onClick={()=>{
                                                remove(idx)
                                            }} color='primary' className={classes.button} aria-label='удалить'>
                                                <CancelIcon style={{height: 20, width: 20}}/>
                                            </IconButton>
                                        </div>
                                        <div className={classes.row}>
                                            <div className={classes.nameField}>Количество:&nbsp;</div>
                                            <div className={classes.column}>
                                                <div className={classes.row}>
                                                    <div className={classes.counterbtn} onClick={()=>{decrement(idx)}}>-</div>
                                                    <div className={classes.value}>{order.count}&nbsp;шт</div>
                                                    <div className={classes.counterbtn} onClick={()=>{increment(idx)}}>+</div>
                                                </div>
                                                {
                                                    orders[idx].item.apiece?
                                                        <div className={classes.addPackaging} style={{color: '#ffb300'}} onClick={()=>{
                                                            orders[idx].count = (parseInt(orders[idx].count/order.item.packaging)+1)*order.item.packaging
                                                            orders[idx].allPrice = orders[idx].count * (orders[idx].item.stock===0||orders[idx].item.stock===undefined?orders[idx].item.price:orders[idx].item.stock)
                                                            orders[idx].allTonnage = orders[idx].count * orders[idx].item.weight
                                                            setOrders([...orders])
                                                            canculateAllPrice()
                                                        }}>
                                                            Добавить упаковку
                                                        </div>
                                                        :
                                                        <div className={classes.addPackaging} style={{color: '#ffb300'}}>
                                                            Упаковок: {(order.count/order.item.packaging)}
                                                        </div>
                                                }
                                            </div>
                                        </div>
                                        <div className={classes.row}>
                                            <div className={classes.nameField}>Общая стоимость:&nbsp;</div>
                                            <div className={classes.value}>{order.allPrice}&nbsp;сом</div>
                                        </div>
                                        {
                                            order.item.organization.consignation?
                                                <div className={classes.row}>
                                                    <div onClick={()=>{showCons[order._id]=!showCons[order._id];setShowCons({...showCons})}} style={showCons[order._id]?{background: '#ffb300'}:{}} className={classes.minibtn}>КОНС</div>
                                                </div>
                                                :null

                                        }
                                         {
                                            showCons[order._id]||showReturn[order._id]?
                                                <br/>
                                                :null
                                        }
                                        {
                                            showCons[order._id]?
                                                <>
                                                <div className={classes.row}>
                                                    <div className={classes.nameField}>Консигнации:&nbsp;</div>
                                                    <div className={classes.column}>
                                                        <div className={classes.row}>
                                                            <div className={classes.counterbtn} onClick={()=>{decrementConsignation(idx)}}>-</div>
                                                            <div className={classes.value}>{order.consignment}&nbsp;шт</div>
                                                            <div className={classes.counterbtn} onClick={()=>{incrementConsignation(idx)}}>+</div>
                                                        </div>
                                                        <div className={classes.addPackaging} style={{color: '#ffb300'}} onClick={()=>{
                                                            let consignment = (parseInt(orders[idx].consignment/order.item.packaging)+1)*order.item.packaging
                                                            if(consignment<=orders[idx].count){
                                                                orders[idx].consignment = consignment
                                                            }
                                                            orders[idx].consignmentPrice = orders[idx].consignment * (orders[idx].item.stock===0||orders[idx].item.stock===undefined?orders[idx].item.price:orders[idx].item.stock)
                                                            setOrders([...orders])
                                                            canculateAllPrice()
                                                        }}>
                                                            Добавить упаковку
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className={classes.row}>
                                                    <div className={classes.nameField}>Стоимость консигнации:&nbsp;</div>
                                                    <div className={classes.value}>{order.consignmentPrice}&nbsp;сом</div>
                                                </div>
                                                </>
                                                :
                                                null
                                        }
                                     </div>
                                )
                            else if(
                                allowOrganization&&!confirmationForwarder
                                ||
                                ['admin', 'суперагент'].includes(profile.role)
                            )
                                return(
                                    <div key={idx} className={classes.column}>
                                        <a href={`/item/${order.item._id}`} target='_blank'>
                                            <div className={classes.row}>
                                                <div className={classes.nameField}>Товар:&nbsp;</div>
                                                <div className={classes.value}>{order.item.name}</div>
                                            </div>
                                        </a>
                                        <div className={classes.row}>
                                            <div className={classes.nameField}>Количество{order.returned?' (факт./итого)':''}:&nbsp;</div>
                                            <div className={classes.value}>{order.returned?`${order.count-order.returned} шт/${order.count} шт`:`${order.count} шт`}</div>
                                        </div>
                                        <div className={classes.row}>
                                            <div className={classes.nameField}>Сумма{order.returned?' (факт./итого)':''}:&nbsp;</div>
                                            <div className={classes.value}>
                                                {
                                                    order.returned?
                                                        `${order.allPrice/order.count*(order.count-order.returned)} сом/${order.allPrice} сом`
                                                        :
                                                        `${order.allPrice} сом`
                                                }
                                            </div>
                                        </div>
                                        <div className={classes.row}>
                                            {order.item.organization.consignation?
                                                <div onClick={()=>{showCons[order._id]=!showCons[order._id];setShowCons({...showCons})}} style={showCons[order._id]?{background: '#ffb300'}:{}} className={classes.minibtn}>КОНС</div>
                                                :
                                                null
                                            }
                                            <div onClick={()=>{showReturn[order._id]=!showReturn[order._id];setShowReturn({...showReturn})}} style={showReturn[order._id]?{background: '#ffb300'}:{}} className={classes.minibtn}>ВОЗВ</div>
                                        </div>
                                        {
                                            showCons[order._id]||showReturn[order._id]?
                                                <br/>
                                                :null
                                        }
                                                {
                                                    showCons[order._id]?
                                                        <>
                                                        <div className={classes.row}>
                                                            <div className={classes.nameField}>Консигнации:&nbsp;</div>
                                                            <div className={classes.column}>
                                                                <div className={classes.row}>
                                                                    <div className={classes.counterbtn} onClick={()=>{decrementConsignation(idx)}}>-</div>
                                                                    <div className={classes.value}>{order.consignment}&nbsp;шт</div>
                                                                    <div className={classes.counterbtn} onClick={()=>{incrementConsignation(idx)}}>+</div>
                                                                </div>
                                                                <div className={classes.addPackaging} style={{color: '#ffb300'}} onClick={()=>{
                                                                    let consignment = (parseInt(orders[idx].consignment/order.item.packaging)+1)*order.item.packaging
                                                                    if(consignment<=orders[idx].count){
                                                                        orders[idx].consignment = consignment
                                                                    }
                                                                    orders[idx].consignmentPrice = orders[idx].consignment * (orders[idx].item.stock===0||orders[idx].item.stock===undefined?orders[idx].item.price:orders[idx].item.stock)
                                                                    setOrders([...orders])
                                                                    canculateAllPrice()
                                                                }}>
                                                                    Добавить упаковку
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className={classes.row}>
                                                            <div className={classes.nameField}>Стоимость консигнации:&nbsp;</div>
                                                            <div className={classes.value}>{order.consignmentPrice}&nbsp;сом</div>
                                                        </div>
                                                        </>
                                                        :null
                                                }
                                                {
                                                    showReturn[order._id] ?
                                                        <div className={classes.row}>
                                                            <div className={classes.nameField}>Возврат:&nbsp;</div>
                                                            <div className={classes.column}>
                                                                <div className={classes.row}>
                                                                    <div className={classes.counterbtn} onClick={() => {
                                                                        decrementReturned(idx)
                                                                    }}>-
                                                                    </div>
                                                                    <div
                                                                        className={classes.value}>{order.returned}&nbsp;
                                                                        шт
                                                                    </div>
                                                                    <div className={classes.counterbtn} onClick={() => {
                                                                        incrementReturned(idx)
                                                                    }}>+
                                                                    </div>
                                                                </div>
                                                                <div className={classes.addPackaging}
                                                                     style={{color: '#ffb300'}} onClick={() => {
                                                                    let returned = (parseInt(orders[idx].returned / order.item.packaging) + 1) * order.item.packaging
                                                                    if (returned <= orders[idx].count) {
                                                                        orders[idx].returned = returned
                                                                    }
                                                                    setOrders([...orders])
                                                                    canculateAllPrice()
                                                                }}>
                                                                    Добавить упаковку
                                                                </div>
                                                            </div>
                                                        </div>
                                                        : null
                                                }
                                        <br/>
                                    </div>
                                )
                            else
                                return(
                                    <div key={idx} className={classes.column}>
                                        <a href={`/item/${order.item._id}`} target='_blank'>
                                            <div className={classes.row}>
                                                <div className={classes.nameField}>Товар:&nbsp;</div>
                                                <div className={classes.value}>{order.item.name}</div>
                                            </div>
                                        </a>
                                        <div className={classes.row}>
                                            <div className={classes.nameField}>Количество{order.returned?' (факт./итого)':''}:&nbsp;</div>
                                            <div className={classes.value}>{order.returned?`${order.count-order.returned} шт/${order.count} шт`:`${order.count} шт`}</div>
                                        </div>
                                        <div className={classes.row}>
                                            <div className={classes.nameField}>Сумма{order.returned?' (факт./итого)':''}:&nbsp;</div>
                                            <div className={classes.value}>
                                                {
                                                    order.returned?
                                                        `${order.allPrice/order.count*(order.count-order.returned)} шт/${order.allPrice} сом`
                                                        :
                                                        `${order.allPrice} сом`
                                                }
                                            </div>
                                        </div>
                                        {
                                            order.consignment?
                                                <>
                                                <div className={classes.row}>
                                                    <div className={classes.nameField}>Консигнации:&nbsp;</div>
                                                    <div className={classes.value}>{order.consignment}&nbsp;шт</div>
                                                </div>
                                                <div className={classes.row}>
                                                    <div className={classes.nameField}>Стоимость консигнации:&nbsp;</div>
                                                    <div className={classes.value}>{order.consignmentPrice}&nbsp;сом</div>
                                                </div>
                                                </>
                                                :
                                                null
                                        }
                                        {
                                            order.returned?
                                                <>
                                                <div className={classes.row}>
                                                    <div className={classes.nameField}>Возврат:&nbsp;</div>
                                                    <div className={classes.value}>{order.returned}&nbsp;шт</div>
                                                </div>
                                                </>
                                                :
                                                null
                                        }
                                        <br/>
                                    </div>
                                )
                        })
                    }
                </div>
                {element.orders[0].status==='обработка'?<br/>:null}
                {
                    consignmentPrice?
                    <div>
                        <FormControlLabel
                            disabled={!(['admin', 'суперагент'].includes(profile.role)||allowOrganization)}
                            control={
                                <Checkbox
                                    checked={paymentConsignation}
                                    onChange={()=>{
                                        setPaymentConsignation(!paymentConsignation);
                                    }}
                                    color='primary'
                                />
                            }
                            label='Консигнации оплачены'
                        />
                    </div>
                        :
                        null
                }
                <div>
                    <FormControlLabel
                        disabled=
                            {['admin', 'суперагент'].includes(profile.role)?
                                !['обработка','принят'].includes(element.orders[0].status)
                                :
                                !(allowOrganization&&['обработка','принят'].includes(element.orders[0].status))}
                        control={
                            <Checkbox
                                checked={taken}
                                onChange={()=>{
                                    setTaken(!taken);
                                }}
                                color='primary'
                            />
                        }
                        label='Заказ принят'
                    />
                </div>
                <div>
                    <FormControlLabel
                        disabled={
                            profile.role==='admin'?
                                !['выполнен','принят'].includes(element.orders[0].status)
                                :
                                !((allowOrganization||'экспедитор'===profile.role)&&'принят'===element.orders[0].status)}
                        control={
                            <Checkbox
                                checked={confirmationForwarder}
                                onChange={()=>{
                                    setConfirmationForwarder(!confirmationForwarder);
                                }}
                                color='primary'
                            />
                        }
                        label='Заказ доставлен'
                    />
                </div>
                <div>
                    <FormControlLabel
                        disabled={
                            profile.role==='admin'?
                                !['выполнен','принят'].includes(element.orders[0].status)
                                :
                                profile.role==='client'?
                                    'принят'!==element.orders[0].status
                                    :
                                    true
                        }
                        control={
                            <Checkbox
                                checked={confirmationClient}
                                onChange={()=>{
                                    setConfirmationClient(!confirmationClient);
                                }}
                                color='primary'
                            />
                        }
                        label='Заказ получен'
                    />
                </div>
                <div>
                    <FormControlLabel
                        disabled={(
                            ['admin', 'суперагент'].includes(profile.role)?
                                !['отмена','обработка'].includes(element.orders[0].status)
                                :
                                !(('client'===profile.role||allowOrganization)&&['отмена','обработка'].includes(element.orders[0].status))
                        )}
                        control={
                            <Checkbox
                                checked={
                                    element.cancelClient!=undefined||element.cancelForwarder!=undefined?
                                        element.cancelClient!=undefined?
                                            cancelClient
                                            :
                                            cancelForwarder
                                        :
                                        'client'===profile.role?
                                            cancelClient
                                            :
                                            cancelForwarder
                                }
                                onChange={()=>{
                                    if('client'===profile.role) setCancelClient(!cancelClient);
                                    else if(['admin', 'суперагент'].includes(profile.role)){
                                        if(element.cancelClient!=undefined)
                                            setCancelClient(!cancelClient)
                                        else
                                            setCancelForwarder(!cancelForwarder)
                                    }
                                    else setCancelForwarder(!cancelForwarder);
                                }}
                                color='secondary'
                            />
                        }
                        label={
                            !element.cancelClient&&!element.cancelForwarder?
                                'Заказ отменен'
                                :
                                `Заказ отменен ${element.cancelClient?'клиентом':' поставщиком'}. Востановить заказ до ${element.cancelClient?pdDDMMYYHHMMCancel(new Date(element.cancelClient)):pdDDMMYYHHMMCancel(new Date(element.cancelForwarder))}`
                        }
                    />
                </div>
                {/*
                    {
                        (
                            (profile.role==='client'&&'принят'===element.orders[0].status&&!element.confirmationClient)
                            ||
                            (['менеджер', 'организация'].includes(profile.role)&&'принят'===element.orders[0].status&&!element.confirmationForwarder)
                            ||
                            profile.role==='admin'
                        )?
                            <Button variant='contained' color='primary' onClick={()=>{
                                const action = async() => {
                                    let invoices = (await approveOrders({route: route, invoices: [element._id]})).invoices
                                    if(setList)
                                        setList(invoices)
                                    if(getInvoices)
                                        getInvoices()
                                }
                                setMiniDialog('Вы уверены?', <Confirmation action={action}/>)
                            }} className={classes.button}>
                                Заказ выполнен
                            </Button>
                            :
                            null
                    }
                    {
                        (profile.role==='client'&&element.orders[0].status==='обработка')
                        ||(['менеджер', 'организация'].includes(profile.role)&&['обработка', 'принят'].includes(element.orders[0].status)&&!element.confirmationForwarder
                        ||profile.role==='admin')?
                            <Button variant='contained' color='primary' onClick={()=>{
                                let _id = element.orders.map(order=>order._id)
                                const action = async() => {
                                    let invoices = (await cancelOrders({_id: _id, invoice: element._id})).invoices
                                    if(setList)
                                        setList(invoices)
                                    if(getInvoices)
                                        getInvoices()
                                }
                                setMiniDialog('Вы уверены?', <Confirmation action={action}/>)
                            }} className={classes.button}>
                                Отменить заказ
                            </Button>
                            :
                            null
                    }
                    */}
                    <div>
                {
                    ((profile.role==='client'||allowOrganization||['агент', 'экспедитор'].includes(profile.role)||['admin', 'суперагент'].includes(profile.role)))?
                        <Button variant='contained' color='primary' onClick={()=>{
                            const action = async() => {

                                let invoice = {invoice: element._id}
                                if(element.taken!==taken)invoice.taken=taken;
                                if(element.confirmationClient!==confirmationClient) invoice.confirmationClient=confirmationClient;
                                if(element.confirmationForwarder!==confirmationForwarder) invoice.confirmationForwarder=confirmationForwarder;
                                if(element.cancelClient!==cancelClient) invoice.cancelClient=cancelClient;
                                if(element.cancelForwarder!==cancelForwarder) invoice.cancelForwarder=cancelForwarder;
                                if(element.paymentConsignation!==paymentConsignation) invoice.paymentConsignation=paymentConsignation;
                                await setInvoice(invoice)

                                let sendOrders = [];
                                if(changeOrders)
                                    sendOrders = orders.map((order) => {
                                        return {
                                            _id: order._id,
                                            consignmentPrice: order.consignmentPrice,
                                            name: order.item.name,
                                            returned: taken !== true ? 0 : order.returned,
                                            consignment: order.consignment,
                                            count: order.count,
                                            allPrice: order.allPrice,
                                            allTonnage: order.allTonnage,
                                            allSize: order.allSize,
                                            status: order.status
                                        }
                                    })
                                let res = await setOrder({orders: sendOrders, invoice: element._id})
                                if (res) {
                                    let _list = [...list]
                                    _list[idx] = res
                                    setList(_list)
                                }
                                /*if(setList)
                                    setList(invoices)
                                if(getInvoices)
                                    getInvoices()*/
                                showMiniDialog(false);
                            }
                            setMiniDialog('Вы уверены?', <Confirmation action={action}/>)
                        }} className={classes.button}>
                            Сохранить
                        </Button>
                        :
                        null
                }
                <Button variant='contained' color='secondary' onClick={()=>{showMiniDialog(false);}} className={classes.button}>
                    Закрыть
                </Button>
                    </div>
            </div>
        );
    }
)

function mapStateToProps (state) {
    return {
        mini_dialog: state.mini_dialog,
        user: state.user,
        app: state.app
    }
}

function mapDispatchToProps(dispatch) {
    return {
        mini_dialogActions: bindActionCreators(mini_dialogActions, dispatch),
        snackbarActions: bindActionCreators(snackbarActions, dispatch),
    }
}

Order.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(dialogContentStyle)(Order));