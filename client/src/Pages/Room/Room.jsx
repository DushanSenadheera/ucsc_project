import { DataGrid } from '@mui/x-data-grid';
import Box from '@mui/material/Box';
import { useState } from 'react';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import {Fab} from '../../style';
// import AddIcon from '@mui/icons-material/Add';
import { validations } from '../../util/validations';
import { TextField, Button } from "../../style";
import { useForm, Controller } from 'react-hook-form';

export default function Room() {
    const { handleSubmit, control, formState: { errors } } = useForm({ mode: 'onChange' });

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
        { field: 'id', headerName: 'Room ID', width: 70 },
        { field: 'firstName', headerName: 'Room Type', width: 130 },
        { field: 'lastName', headerName: 'Price', width: 130 },
        {
            field: 'status',
            headerName: 'Status',
            type: 'string',
            width: 90,
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
        { id: "S001", lastName: '80 USD', firstName: 'Single', age: 35, status: 'Available'},
        { id: "S002", lastName: '80 USD', firstName: 'Single', age: 42, status: 'Occupied'},
        { id: "D001", lastName: '120 USD', firstName: 'Double', age: 45, status: 'Available'},
        { id: "D002", lastName: '120 USD', firstName: 'Double', age: 16, status: 'Available'},
        { id: "F001", lastName: '150 USD', firstName: 'Family', age: null, status: 'Occupied'},
        { id: "F002", lastName: '150 USD', firstName: 'Family', age: 150, status: 'Available'},
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
                <form>
          <Controller name="name" control={control} defaultValue="" rules={validations.email}
            render={({ field }) =>
              <TextField {...field} placeholder='First Last' type="text" label="Room ID" variant="outlined" size="small" error={Boolean(errors.email)} helperText={errors.email?.message}
              />
            }
          />
          <Controller name="email" control={control} defaultValue="" rules={validations.email}
            render={({ field }) =>
              <TextField {...field} type="email" label="Room Type" variant="outlined" size="small" error={Boolean(errors.email)} helperText={errors.email?.message}
              />
            }
          />
          <Controller name="mobile" control={control} defaultValue="" rules={validations.password}
            render={({ field }) =>
              <TextField {...field} type="tel" label="Price" variant="outlined" size="small" error={Boolean(errors.password)} helperText={errors.password?.message} />
            }
          />
          <Button type="submit" variant="contained" color="primary">Add Room</Button>
          </form>
                </Box>
            </Modal>
            <Fab onClick={() => handleOpen()} color="primary" aria-label="add">
        {/* <AddIcon /> */} +
      </Fab>
        </div>
    )
}
