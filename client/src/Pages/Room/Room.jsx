import { DataGrid } from '@mui/x-data-grid';
import Box from '@mui/material/Box';
import { useState } from 'react';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import {Fab} from '../../style';
// import AddIcon from '@mui/icons-material/Add';

export default function Room() {

    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
    };

    const columns = [
        { field: 'id', headerName: 'ID', width: 70 },
        { field: 'firstName', headerName: 'First name', width: 130 },
        { field: 'lastName', headerName: 'Last name', width: 130 },
        {
            field: 'age',
            headerName: 'Age',
            type: 'number',
            width: 90,
        },
        {
            field: 'status',
            headerName: 'Status',
            type: 'string',
            width: 90,
        },
        {
            field: 'fullName',
            headerName: 'Full name',
            description: 'This column has a value getter and is not sortable.',
            sortable: false,
            width: 160,
            valueGetter: (value, row) => `${row.firstName || ''} ${row.lastName || ''}`,
        },
        {
            field: 'actions',
            headerName: 'Actions',
            sortable: false,
            width: 150,
            renderCell: (params) => (
                <>
                    <button onClick={() => handleOpen(params.row)}>Edit</button>
                    <button>Delete</button>
                </>
            ),
        },
    ];

    const rows = [
        { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35, status: 'Available'},
        { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42, status: 'Occupied'},
        { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45, status: 'Available'},
        { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16, status: 'Available'},
        { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null, status: 'Occupied'},
        { id: 6, lastName: 'Melisandre', firstName: null, age: 150, status: 'Available'},
        { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44, status: 'Occupied'},
        { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36, status: 'Available'},
        { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65, status: 'Occupied'},
        { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45, status: 'Available'},
        { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16, status: 'Available'},
        { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null, status: 'Occupied'},
        { id: 6, lastName: 'Melisandre', firstName: null, age: 150, status: 'Available'},
        { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44, status: 'Available'},
        { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36, status: 'Available' },
        { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65, status: 'Available'},
    ];



    const [open, setOpen] = useState(false);
    const handleOpen = (row) => setOpen(true);
    const handleClose = (row) => setOpen(false);

    return (
        <div style={{ height: 400, width: '100%' }}>
            <DataGrid
                rows={rows}
                columns={columns}
                initialState={{
                    pagination: {
                        paginationModel: { page: 0, pageSize: 5 },
                    },
                }}
                pageSizeOptions={[5, 10]}
            />
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        Text in a modal
                    </Typography>
                    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                        Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
                    </Typography>
                </Box>
            </Modal>
            <Fab color="primary" aria-label="add">
        {/* <AddIcon /> */} +
      </Fab>
        </div>
    )
}
