import React, { useState } from 'react'
import "/resources/css/Services.css"
import { DataGrid } from '@material-ui/data-grid';
import { DeleteOutline } from '@material-ui/icons';
import { ServiceRows } from '/resources/DummyData'
import { Link } from 'react-router-dom';


export default function Services() {
    const [data, setdata] = useState(ServiceRows);
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
            field: 'name',
            headerName: 'Service Name',
            width: 200,
            renderCell: (params) => {
                return (
                    <div className="listUserColumn">
                        <img className="userColumnImg" src={params.row.img} alt="Service image" />
                        {params.row.name}
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
        <div className="Services">
             <div style={{ height: 740, width: '100%' }}>
                <DataGrid rows={data} disableSelectionOnClick columns={columns} pageSize={13} checkboxSelection />
            </div>
        </div>
    )
}
