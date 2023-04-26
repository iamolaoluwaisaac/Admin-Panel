import React, { useState } from 'react'
import "./UserList.css"
import { DataGrid, GridColDef} from '@mui/x-data-grid';
import { DeleteOutline } from '@mui/icons-material';
import {userRows} from "../../dummyData"
import { Link } from 'react-router-dom';


export default function UserList() {
    const [data, setData ] =useState(userRows);

    const handleDelete = (id)=>{
      setData(data.filter((item)=> item.id !== id))
    }

const columns: GridColDef[] = [
  { field: 'id', headerName: 'ID', width: 70 }, 
  { field: 'User', headerName: 'User', width: 200, renderCell:(params)=>{
    return(
        <div className='userListUser'>
            <img className='userListImg' src={params.row.Avatar} alt=""/>
            {params.row.Username}
        </div>
    )
  } },
  { field: 'email', headerName: 'Email', width: 200 },
  {
    field: 'status',
    headerName: 'Status',
    width: 90,
  },

    {
    field: 'transaction',
    headerName: 'Transaction Volume',
    width: 160,
  },

  {
    field : "action",
    headerName : "action",
    width: 150,
    renderCell:(params)=>{
        return (
            <>
            <Link to={"/users/"+params.row.id}>
            <button className='userListEdit'>Edit</button>
            </Link>
            <DeleteOutline className='userListDelete' onClick={()=>handleDelete(params.row.id)}/>
            </>
        )
    }
  }

];

  return (
    <div className='userList'>
        <DataGrid
        rows={data} disableRowSelectionOnClick
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
      />  
    </div>
  )
}




// const rows = [
//   { id: 1, 
//     Username: 'Spark Snow',
//     Avatar: "https://images.unsplash.com/photo-1480429370139-e0132c086e2a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=388&q=80",
//     email: "spark@gmail.com",
//     status: "active",
//     transaction: "$165.00"
//   },

//     { id: 2, 
//     Username: 'Spark Snow',
//     Avatar: "https://images.unsplash.com/photo-1480429370139-e0132c086e2a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=388&q=80",
//     email: "spark@gmail.com",
//     status: "active",
//     transaction: "$165.00"
//   },

//     { id: 3, 
//     Username: 'Spark Snow',
//     Avatar: "https://images.unsplash.com/photo-1480429370139-e0132c086e2a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=388&q=80",
//     email: "spark@gmail.com",
//     status: "active",
//     transaction: "$165.00"
//   },

//     { id: 4, 
//     Username: 'Spark Snow',
//     Avatar: "https://images.unsplash.com/photo-1480429370139-e0132c086e2a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=388&q=80",
//     email: "spark@gmail.com",
//     status: "active",
//     transaction: "$165.00"
//   },

//     { id: 5, 
//     Username: 'Spark Snow',
//     Avatar: "https://images.unsplash.com/photo-1480429370139-e0132c086e2a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=388&q=80",
//     email: "spark@gmail.com",
//     status: "active",
//     transaction: "$165.00"
//   },

//     { id: 6, 
//     Username: 'Spark Snow',
//     Avatar: "https://images.unsplash.com/photo-1480429370139-e0132c086e2a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=388&q=80",
//     email: "spark@gmail.com",
//     status: "active",
//     transaction: "$165.00"
//   },

//     { id: 7, 
//     Username: 'Spark Snow',
//     Avatar: "https://images.unsplash.com/photo-1480429370139-e0132c086e2a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=388&q=80",
//     email: "spark@gmail.com",
//     status: "active",
//     transaction: "$165.00"
//   },

//     { id: 8, 
//     Username: 'Spark Snow',
//     Avatar: "https://images.unsplash.com/photo-1480429370139-e0132c086e2a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=388&q=80",
//     email: "spark@gmail.com",
//     status: "active",
//     transaction: "$165.00"
//   },

//     { id: 9, 
//     Username: 'Spark Snow',
//     Avatar: "https://images.unsplash.com/photo-1480429370139-e0132c086e2a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=388&q=80",
//     email: "spark@gmail.com",
//     status: "active",
//     transaction: "$165.00"
//   },

//     { id: 10, 
//     Username: 'Spark Snow',
//     Avatar: "https://images.unsplash.com/photo-1480429370139-e0132c086e2a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=388&q=80",
//     email: "spark@gmail.com",
//     status: "active",
//     transaction: "$165.00"
//   },

// ];