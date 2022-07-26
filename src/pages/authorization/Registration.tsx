import React from 'react';
import {Button, Card, TextField, Typography} from "@mui/material";
import {Form, useFormik} from "formik";
import {basicSchema} from "../../utils/schema";
import axios from "axios";
import {CAPS_URL} from "../../common/constants";
import {useNavigate} from "react-router-dom";


const Registration = () => {
    const navigate = useNavigate();

    const onSubmit = async () => {
        try {
            const response = await axios.post(
                `${CAPS_URL.CAPS_API_URL}/${CAPS_URL.USERS}/${CAPS_URL.REGISTRATION}/`,
                values
            );
            alert('Регистрация прошла успешно');
            navigate(`/${CAPS_URL.LOGIN}/`);
        } catch (e) {
            console.log(e);
            alert('пользователь с таким именем, номером телефона и email уже существуют');
        }
    };

    const {values, errors, touched, handleBlur, handleChange, handleSubmit} =
        useFormik({
            initialValues: {
                username: '',
                email: '',
                password: '',
                password2: '',
                first_name: '',
                last_name: '',
                phone: ''
            },
            onSubmit,
            validationSchema: basicSchema
        })

    return (
        <div className={'container'}>
            <Card sx={{padding: '50px', margin: '20px 0px'}}>
                <form onSubmit={handleSubmit}>
                    <Typography sx={{textAlign: 'center', margin: '20px 0px'}} variant={'h4'}>
                        Регистрация
                    </Typography>
                    <TextField
                        error={Boolean(errors.username && touched.username)}
                        helperText={touched.username && errors.username}
                        value={values.username}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        name={'username'}
                        label="Имя пользователя"
                        variant="outlined"
                        sx={{margin: '20px 20px 20px 0px'}}
                    />
                    <TextField
                        error={Boolean(errors.email && touched.email)}
                        helperText={touched.email && errors.email}
                        value={values.email}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        type={'email'}
                        name={'email'}
                        label="Email"
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
                    <TextField
                        error={Boolean(errors.password2 && touched.password2)}
                        helperText={touched.password2 && errors.password2}
                        value={values.password2}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        fullWidth
                        type={'password'}
                        name={'password2'}
                        label="Повторите пароль"
                        variant="outlined"
                        sx={{margin: '20px 0px'}}
                    />
                    <TextField
                        error={Boolean(errors.first_name && touched.first_name)}
                        helperText={touched.first_name && errors.first_name}
                        value={values.first_name}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        name={'first_name'}
                        label="Ваше имя"
                        variant="outlined"
                        sx={{margin: '20px 20px 20px 0px'}}
                    />
                    <TextField
                        error={Boolean(errors.last_name && touched.last_name)}
                        helperText={touched.last_name && errors.last_name}
                        value={values.last_name}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        name={'last_name'}
                        label="Ваша фамилия"
                        variant="outlined"
                        sx={{margin: '20px 0px'}}
                    />
                    <TextField
                        error={Boolean(errors.phone && touched.phone)}
                        helperText={touched.phone && errors.phone}
                        value={values.phone}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        fullWidth
                        name={'phone'}
                        label="Номер телефона"
                        variant="outlined"
                        sx={{margin: '20px 0px'}}
                    />

                    <Button sx={{margin: '20px 0px'}} type={'submit'} variant={'contained'}>Зарегистрироваться</Button>
                </form>
            </Card>
        </div>
    );
};

export default Registration;
