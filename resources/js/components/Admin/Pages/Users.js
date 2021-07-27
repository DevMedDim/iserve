import React, { useState } from 'react'
import "/resources/css/Users.css";
import { DataGrid } from '@material-ui/data-grid';
import { DeleteOutline } from '@material-ui/icons';
import { userRows } from '/resources/DummyData'
import { Link } from 'react-router-dom';

export default function Users() {

    const [data, setdata] = useState(userRows);
    const handleDelete = (id) => {
        setdata(data.filter((item) => item.id !== id));
    };
    const columns = [
        {
            field: 'id',
            headerName: 'ID',
            width: 100
        },
        {
            field: 'userName',
            headerName: 'User Name',
            width: 200,
            renderCell: (params) => {
                return (
                    <div className="listUserColumn">
                        <img className="userColumnImg" src={params.row.avatar} alt="avatar" />
                        {params.row.userName}
                    </div>
                )
            }
        },
        {
            field: 'email',
            headerName: 'Email',
            width: 200
        },
        {
            field: 'status',
            headerName: 'Status',
            width: 200,
        },
        {
            field: 'transaction',
            headerName: 'Transaction',
            width: 200,
        },
        {
            field: 'action',
            headerName: 'Action',
            width: 200,
            renderCell: (params) => {
                return (
                    <>
                        <Link to={"users/user" + params.row.id} className="link" >
                            <button className="userListEdit">Edit</button>
                        </Link>
                        <DeleteOutline onClick={() => handleDelete(params.row.id)} className="userListDelete" />
                    </>

                )
            }
        },
    ];


    return (

        <div className="Users">




            <div style={{ height: 740, width: '100%' }}>
                <DataGrid rows={data} disableSelectionOnClick columns={columns} pageSize={13} checkboxSelection />
            </div>


        </div>
    )
}
