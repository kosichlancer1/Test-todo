import React from 'react';
import MainLayout from '../Layouts/MainLayout';
import { Container } from '../Components';
import { TodosList } from '../Containers';

const Main = () => {
    return (
        <MainLayout>
            <Container>
                <TodosList />
            </Container>
        </MainLayout>
    )
};

export default Main;