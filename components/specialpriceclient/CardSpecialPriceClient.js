import React, {useState} from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import cardCategoryStyle from '../../src/styleMUI/subcategory/cardSubcategory'
import { connect } from 'react-redux'
import Button from '@material-ui/core/Button';
import CardActions from '@material-ui/core/CardActions';
import { addSpecialPriceClient, setSpecialPriceClient, deleteSpecialPriceClient} from '../../src/gql/specialPrice'
import { bindActionCreators } from 'redux'
import * as mini_dialogActions from '../../redux/actions/mini_dialog'
import TextField from '@material-ui/core/TextField';
import Confirmation from '../dialog/Confirmation';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { checkFloat, inputFloat } from '../../src/lib'

const CardSpecialPriceClient = React.memo((props) => {
    const classes = cardCategoryStyle();
    const { element, setList, organization, items, client, idx, list } = props;
    const { isMobileApp } = props.app;
    //addCard
    let [price, setPrice] = useState(element?element.price:'');
    let [item, setItem] = useState(element?element.item:undefined);
    let handleItem =  (item) => {
        setItem(item)
    };
    const { setMiniDialog, showMiniDialog } = props.mini_dialogActions;
    return (
        <div>
            <Card className={isMobileApp?classes.cardM:classes.cardD}>
                <CardActionArea>
                    <CardContent>
                        <Autocomplete
                            className={classes.input}
                            options={items}
                            getOptionLabel={option => option.name}
                            value={item}
                            onChange={(event, newValue) => {
                                handleItem(newValue)
                            }}
                            noOptionsText='Ничего не найдено'
                            renderInput={params => (
                                <TextField {...params} label='Выберите товар' fullWidth />
                            )}
                        />
                        <br/>
                        <br/>
                        <TextField
                            label='Цена'
                            value={price}
                            className={classes.input}
                            onChange={ event => setPrice(inputFloat(event.target.value)) }
                            inputProps={{
                                'aria-label': 'description',
                            }}
                        />
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    {
                        element!==undefined?
                            <>
                            <Button onClick={async()=>{
                                if(price) {
                                    const action = async () => {
                                        await setSpecialPriceClient({_id: element._id, price: checkFloat(price)})
                                    }
                                    setMiniDialog('Вы уверены?', <Confirmation action={action}/>)
                                    showMiniDialog(true)
                                }
                            }} size='small' color='primary'>
                                Сохранить
                            </Button>
                            <Button size='small' color='secondary' onClick={()=>{
                                const action = async() => {
                                    await deleteSpecialPriceClient(element._id)
                                    let _list = [...list]
                                    _list.splice(idx, 1)
                                    setList(_list)
                                }
                                setMiniDialog('Вы уверены?', <Confirmation action={action}/>)
                                showMiniDialog(true)
                            }}>
                                Удалить
                            </Button>
                            </>
                            :
                            <Button onClick={async()=> {
                                if(price&&item) {
                                    const action = async () => {
                                        let element = {
                                            price: checkFloat(price),
                                            organization: organization._id,
                                            client: client._id,
                                            item: item._id
                                        }
                                        let res = await addSpecialPriceClient(element)
                                        if (res)
                                            setList([res, ...list])
                                    }
                                    setPrice('')
                                    setItem(undefined)
                                    setMiniDialog('Вы уверены?', <Confirmation action={action}/>)
                                    showMiniDialog(true)
                                }
                            }} size='small' color='primary'>
                                Добавить
                            </Button>}
                        </CardActions>
                    </Card>
        </div>
    );
})

function mapStateToProps (state) {
    return {
        app: state.app
    }
}

function mapDispatchToProps(dispatch) {
    return {
        mini_dialogActions: bindActionCreators(mini_dialogActions, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CardSpecialPriceClient)