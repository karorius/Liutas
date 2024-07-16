import useServerGet from '../../Hooks/useServerGet';
import * as l from '../../Constants/urls';
import { useEffect, useState } from 'react';

export default function UsersList() {

    const { doAction: doGet, serverResponse: serverGetResponse } = useServerGet(l.SERVER_GET_USERS);
    const { doAction: doDelete, serverResponse: serverDeleteResponse } = useServerDelete(l.SERVER_DELETE_USER);

    const [users, setUsers] = useState(null);

    useEffect(_ => {
        doGet();
    }, [doGet]);

    useEffect(_ => {
        if (null === serverGetResponse) {
            return;
        }
        console.log(serverGetResponse)
        setUsers(serverGetResponse.serverData.users ?? null)
    }, [serverGetResponse]);

    useEffect(_ => {
        doDelete();
    }, [doDelete]);

    useEffect(_ => {
        if (null === serverDeleteResponse) {
            return;
        }
        console.log(serverDeleteResponse)
        setUsers(serverDeleteResponse.serverData.users ?? null)
    }, [serverDeleteResponse]);


    return (
        <>
            <section id="banner">
                <div className="content">
                    <header>
                        <h1>Vartotojų sąrašas</h1>
                    </header>
                </div>
            </section>
            <section>
                {
                    users === null && <h2>Palaukite, siunčiamas vartotojų sąrašą</h2>
                }
                {
                    users !== null && <div className="table-wrapper">
                        <table className="alt">
                            <thead>
                                <tr>
                                    <th>Vardas</th>
                                    <th>Elektroninis paštas</th>
                                    <th>Rolė</th>
                                    <th>Veiksmai</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    users.map(u =>
                                        <tr key={u.id}>
                                            <td>{u.name}</td>
                                            <td>{u.email}</td>
                                            <td>{u.role}</td>
                                            <td className="two">
                                                <ul className="actions special">
                                                    <li><input type="button" value="redaguoti" className="small" /></li>
                                                    <li><input onClick ={_ => setDeleteModal({
                                                        user: u,
                                                        doDelete
                                                    })} type="button" value="ištrinti" className="small" /></li>
                                                </ul>
                                            </td>
                                        </tr>
                                        )
                                }
                            </tbody>
                            <tfoot>
                                <tr>
                                    <td colSpan="2"></td>
                                    <td>Viso vartototojų: {users.length}</td>
                                </tr>
                            </tfoot>
                        </table>
                    </div>
                }
            </section>
        </>
    );
}