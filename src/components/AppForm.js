import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Button from './Button';
import Checkbox from './Checkbox';
import Dropdown from './Dropdown';
import TextField from './TextField';

const Container = styled.div`
    display: flex;
    min-height: 100vh;
    justify-content: center;
    align-items: center;
    padding: 40px 15px;
    background-color: palevioletred;
`;

const Heading = styled.h1`
    font-weight: bold;
    font-size: 34px;
    line-height: 44px;
    margin: 10px 0;
    color: #2c2738;
`;

const Form = styled.form`
    width: 100%;
    max-width: 460px;
    padding: 30px 30px;
    background: #ffffff;
    box-shadow: 0px 12px 24px rgba(44, 39, 56, 0.02),
        0px 32px 64px rgba(44, 39, 56, 0.04);
    border-radius: 24px;
    color: #2c2738;
`;

export default function AppForm({ onSubmit }) {
    // form validators
    const validators = {
        name: (v) => v.match(/^[a-zA-ZА-Яа-я -]{3,}$/) !== null,
        email: (v) => v.match(/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/) !== null,
        phone: (v) =>
            v.match(/^[+]?[0-9]\(?[0-9]{3}\)?[0-9]{3}-?[0-9]{2}-?[0-9]{2}$/) !==
            null,
        lang: (v) => v !== null,
        agreement: (v) => v,
    };

    // form values
    const [values, setValues] = useState({
        name: '',
        email: '',
        phone: '',
        agreement: false,
        lang: { text: 'Язык', value: null },
    });

    // form validity
    const [valid, setValid] = useState({
        name: false,
        email: false,
        phone: false,
        agreement: false,
        lang: false,
    });

    // helpers to include validation on change
    const onChange = (key) => (v) => {
        setValues((prev) => ({ ...prev, [key]: v }));
        setValid((prev) => ({ ...prev, [key]: validators[key](v) }));
    };

    // form ready to submit
    const [ready, setReady] = useState(false);
    useEffect(() => setReady(Object.values(valid).every((v) => v)), [valid]);

    return (
        <Container>
            <Form
                onSubmit={(e) => {
                    e.preventDefault();
                    onSubmit(values);
                }}
            >
                <Heading>Регистрация</Heading>
                <p>
                    Уже есть аккаунт? <a href="/">Войти</a>
                </p>

                <TextField
                    id="name"
                    placeholder="Введите ваше имя"
                    label="Имя"
                    value={values.name}
                    onChange={onChange('name')}
                    errorMessage={
                        !valid.name &&
                        'Минимум 3 символа, только буквы пробелы и дефис'
                    }
                />
                <TextField
                    id="email"
                    placeholder="Введите ваш email"
                    label="Email"
                    value={values.email}
                    onChange={onChange('email')}
                    errorMessage={
                        !valid.email && 'Email должен быть дейтвительным'
                    }
                />
                <TextField
                    id="phone"
                    placeholder="Введите ваш номер телефона"
                    label="Номер телефона"
                    value={values.phone}
                    onChange={onChange('phone')}
                    errorMessage={
                        !valid.email && 'Телефон должен быть дейтвительным'
                    }
                />
                <Dropdown
                    items={[
                        { text: 'Русский', value: 'ru' },
                        { text: 'Английский', value: 'en' },
                        { text: 'Китайский', value: 'cn' },
                        { text: 'Испанский', value: 'es' },
                    ]}
                    selected={values.lang}
                    setSelected={onChange('lang')}
                    label="Язык"
                />

                <Checkbox
                    id="chkbx"
                    value={values.agreement}
                    onChange={onChange('agreement')}
                    required
                >
                    Принимаю <a href="/">условия</a> использования
                </Checkbox>

                <Button disabled={!ready} block type="submit">
                    Зарегестрироваться
                </Button>
            </Form>
        </Container>
    );
}
