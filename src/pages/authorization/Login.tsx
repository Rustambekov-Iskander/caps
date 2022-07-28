import React from 'react';
import {useFormik} from "formik";
import {loginSchema} from "../../utils/schema";
import axios from "axios";
import {CAPS_URL} from "../../common/constants";
import {Button, Card, TextField, Typography} from "@mui/material";
import {useNavigate} from "react-router-dom";
import {useAppDispatch} from "../../hooks/redux";
import {isAuthAction} from "../../store/reducers/auth/ActionCreators";
import Cookies from 'js-cookie';


const Login = () => {
    //hooks
    const navigate = useNavigate();
    const dispatch = useAppDispatch();

    const onSubmit = async () => {
        try {
            const response = await axios.post(
                `${CAPS_URL.CAPS_API_URL}/${CAPS_URL.USERS}/${CAPS_URL.LOGIN}/`,
                    values
                )
            Cookies.set('access', response.data.access, {expires: 1, path: '/'})
            Cookies.set('refresh', response.data.refresh, {expires: 1, path: '/'})
            dispatch(isAuthAction(true, response.data.access, response.data.refresh))
            navigate('/')
        }catch (e) {
            console.log(e);
            alert('Пароль или логин введён неверно')
        }
    }
    const {values, errors, touched, handleBlur, handleChange, handleSubmit} =
        useFormik({
            initialValues: {
                username: '',
                password: '',
            },
            onSubmit,
            validationSchema: loginSchema
        })

    return (
        <div className={'container'}>
            <Card sx={{padding: '50px', margin: '20px 0px'}}>
                <Typography sx={{textAlign: 'center', margin: '20px 0px'}} variant={'h4'}>
                    Авторизация
                </Typography>
                <form onSubmit={handleSubmit}>
                    <TextField
                        error={Boolean(errors.username && touched.username)}
                        helperText={touched.username && errors.username}
                        value={values.username}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        fullWidth
                        name={'username'}
                        label="Имя пользователя"
                        variant="outlined"
                        sx={{margin: '20px 0px'}}
                    />
                    <TextField
                        error={Boolean(errors.password && touched.password)}
                        helperText={touched.password && errors.password}
                        value={values.password}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        fullWidth
                        type={'password'}
                        name={'password'}
                        label="Пароль"
                        variant="outlined"
                        sx={{margin: '20px 0px'}}
                    />
                    <Button sx={{margin: '20px 0px'}} type={'submit'} variant={'contained'}>Войти</Button>
                </form>
            </Card>
        </div>
    );
}

export default Login;
