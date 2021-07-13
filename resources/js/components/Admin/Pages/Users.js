import React from 'react'
import "/resources/css/Users.css";
import { DataGrid } from '@material-ui/data-grid';
import { DeleteOutline } from '@material-ui/icons';

export default function Users() {
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
            renderCell:(params)=>{
                return(
                    <div className="listUserColumn">
                        <img  className="userColumnImg" src={params.row.avatar} alt="avatar" />
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
            renderCell:(params)=>{
                return(
                    <>
                    <button className="userListEdit">Edit</button>
                    <DeleteOutline className="userListDelete" />
                    </>
                    
                )
            }
        },
    ];

    const rows = [
        {
            id: 1,
            userName: 'Jon Snow',
            avatar: 'https://images.pexels.com/photos/5474040/pexels-photo-5474040.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
            email: 'Jon@gmail.com',
            status: 'active',
            transaction: '$239.00'
        },
        {
            id: 2,
            userName: 'Jon Snow',
            avatar: 'https://images.pexels.com/photos/5474040/pexels-photo-5474040.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
            email: 'Jon@gmail.com',
            status: 'active',
            transaction: '$239.00'
        },
        {
            id: 3,
            userName: 'Jon Snow',
            avatar: 'https://images.pexels.com/photos/5474040/pexels-photo-5474040.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
            email: 'Jon@gmail.com',
            status: 'active',
            transaction: '$239.00'
        },
        {
            id: 4,
            userName: 'Jon Snow',
            avatar: 'https://images.pexels.com/photos/5474040/pexels-photo-5474040.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
            email: 'Jon@gmail.com',
            status: 'active',
            transaction: '$239.00'
        },
        {
            id: 5,
            userName: 'Jon Snow',
            avatar: 'https://images.pexels.com/photos/5474040/pexels-photo-5474040.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
            email: 'Jon@gmail.com',
            status: 'active',
            transaction: '$239.00'
        },
        {
            id: 6,
            userName: 'Jon Snow',
            avatar: 'https://images.pexels.com/photos/5474040/pexels-photo-5474040.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
            email: 'Jon@gmail.com',
            status: 'active',
            transaction: '$239.00'
        },
        {
            id: 7,
            userName: 'Jon Snow',
            avatar: 'https://images.pexels.com/photos/5474040/pexels-photo-5474040.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
            email: 'Jon@gmail.com',
            status: 'active',
            transaction: '$239.00'
        },
        {
            id: 8,
            userName: 'Jon Snow',
            avatar: 'https://images.pexels.com/photos/5474040/pexels-photo-5474040.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
            email: 'Jon@gmail.com',
            status: 'active',
            transaction: '$239.00'
        },
        {
            id: 9,
            userName: 'Jon Snow',
            avatar: 'https://images.pexels.com/photos/5474040/pexels-photo-5474040.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
            email: 'Jon@gmail.com',
            status: 'active',
            transaction: '$239.00'
        },
        {
            id: 10,
            userName: 'Jon Snow',
            avatar: 'https://images.pexels.com/photos/5474040/pexels-photo-5474040.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
            email: 'Jon@gmail.com',
            status: 'active',
            transaction: '$239.00'
        },

    ];
    return (

        <div className="Users">




            <div style={{ height: 423, width: '100%' }}>
                <DataGrid rows={rows} disableSelectionOnClick columns={columns} pageSize={6} checkboxSelection />
            </div>


        </div>
    )
}
