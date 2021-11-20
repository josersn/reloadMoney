import { useEffect, useState } from 'react';

import { instance } from '../../service/api';

import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';

import { Container, UserTable, ContentTable } from './styles';

interface userProps {
    id: string
    nome: string
    email: string
    telefone: string
}
function Users() {
    const [users, setUser] = useState([]);

    useEffect(() => {
        getUsers()
    }, []);

    async function getUsers() {
        const res = await instance.get("usuarios/listartodos");
        setUser(res.data);
    }
    return (
        <Container>
            <Header />
            <ContentTable>
                <UserTable>
                    <tr>
                        <th>ID</th>
                        <th>Nome</th>
                        <th>Email</th>
                        <th>Número de telefone</th>
                        <th>Editar</th>
                        <th>Deletar</th>
                    </tr>

                    {users && users.map((user: userProps) => (

                        <tr>
                            <td>{user.id}</td>
                            <td>{user.nome}</td>
                            <td>{user.email}</td>
                            <td>{user.telefone}</td>
                            <td> <a href="#">Editar</a> </td>
                            <td> <a href="#">Deletar</a> </td>
                        </tr>

                    ))}
                </UserTable>
            </ContentTable>
            <Footer />
        </Container>
    )
}

export { Users };