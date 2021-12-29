import "./userList.css"
import { DataGrid } from '@mui/x-data-grid';
import DeleteForeverOutlinedIcon from '@mui/icons-material/DeleteForeverOutlined';

const UserList = () => {
    const columns = [
  { field: 'id', headerName: 'ID', width: 70 },
  { field: 'user', headerName: 'User', width: 200, renderCell:(params)=>{
      return (
          <div className="userListUser">
              <img className="userListImg" src={params.row.avatar} alt="" />
              {params.row.username}
          </div>
      )
  } },
  { field: 'email', headerName: 'Email', width: 200 },
  { field: 'status', headerName: 'Status', width: 130},
  { field: 'transaction',headerName: 'Transaction', width: 160 },
  { field: 'action',headerName: 'Action', width: 150,
    renderCell:(params)=>{
        return (
            <>
            <button className="userListEdit">Edit</button>
            <DeleteForeverOutlinedIcon className="userListDelete"/>
            </>
        )
    }
},
];

const rows = [
  { id: 1, 
    username: "Jon Snow",
    avatar: "https://images.pexels.com/photos/3992656/pexels-photo-3992656.png?auto=compress&cs=tinysrgb&dpr=2&w=500",
    email:"jongmail.com",
    status:"active",
    transaction:"$120"
    }, 
  { id: 2, 
    username: "Jon Snow",
    avatar: "https://images.pexels.com/photos/3992656/pexels-photo-3992656.png?auto=compress&cs=tinysrgb&dpr=2&w=500",
    email:"jongmail.com",
    status:"active",
    transaction:"$820"
    }, 
  { id: 3, 
    username: "Jon Snow",
    avatar: "https://images.pexels.com/photos/3992656/pexels-photo-3992656.png?auto=compress&cs=tinysrgb&dpr=2&w=500",
    email:"jongmail.com",
    status:"active",
    transaction:"$320"
    }, 
  { id: 4, 
    username: "Jon Snow",
    avatar: "https://images.pexels.com/photos/3992656/pexels-photo-3992656.png?auto=compress&cs=tinysrgb&dpr=2&w=500",
    email:"jongmail.com",
    status:"active",
    transaction:"$12020"
    }, 
  { id: 5, 
    username: "Jon Snow",
    avatar: "https://images.pexels.com/photos/3992656/pexels-photo-3992656.png?auto=compress&cs=tinysrgb&dpr=2&w=500",
    email:"jongmail.com",
    status:"active",
    transaction:"$12020"
    }, 
  { id: 6, 
    username: "Jon Snow",
    avatar: "https://images.pexels.com/photos/3992656/pexels-photo-3992656.png?auto=compress&cs=tinysrgb&dpr=2&w=500",
    email:"jongmail.com",
    status:"active",
    transaction:"$12020"
    }, 
  { id: 7, 
    username: "Jon Snow",
    avatar: "https://images.pexels.com/photos/3992656/pexels-photo-3992656.png?auto=compress&cs=tinysrgb&dpr=2&w=500",
    email:"jongmail.com",
    status:"active",
    transaction:"$12020"
    }, 
  { id: 8, 
    username: "Jon Snow",
    avatar: "https://images.pexels.com/photos/3992656/pexels-photo-3992656.png?auto=compress&cs=tinysrgb&dpr=2&w=500",
    email:"jongmail.com",
    status:"active",
    transaction:"$12020"
    }, 
];
    return (
        <div className="userList"> 
            <DataGrid rows={rows} disableSelectionOnClick columns={columns} pageSize={5} rowsPerPageOptions={[5]} checkboxSelection />
        </div>
    )
}

export default UserList
