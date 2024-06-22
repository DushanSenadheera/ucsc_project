import { DataGrid } from '@mui/x-data-grid';
import Box from '@mui/material/Box';
import { useState } from 'react';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import useFetch from '../../hooks/useFetch';

export default function Guest() {

  const [data, loading, error] = useFetch('http://localhost:8000/getUsers');

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
    { field: 'roomType', headerName: 'Room Type', width: 130 },
    { field: 'adult', headerName: 'Adult', width: 130 },
    {
      field: 'child',
      headerName: 'Child',
      type: 'number',
      width: 90,
    },
    {
      field: 'checkIn',
      headerName: 'Check In',
      description: 'This column has a value getter and is not sortable.',
      sortable: false,
      width: 160,
    },
    {
      field: 'checkOut',
      headerName: 'Check Out',
      description: 'This column has a value getter and is not sortable.',
      sortable: false,
      width: 160,
    },
    {
      field: 'status',
      headerName: 'Status',
      description: 'This column has a value getter and is not sortable.',
      sortable: false,
      width: 160,
    },
    {
      field: 'actions',
      headerName: 'Actions',
      sortable: false,
      width: 150,
      renderCell: (params) => (
        <>
          <button onClick={() => handleOpen(params.row)}>Checkout</button>
        </>
      ),
    },
  ];

  const rows = [];

  data?.forEach((user, index) => {
    rows.push({
      id: user.roomId,
      roomType: user.roomType,
      adult: user.adult,
      child: user.child,
      checkIn: user.checkIn,
      checkOut: user.checkOut,
      status: user.status,
    });
  })
    
  const [open, setOpen] = useState(false);
  const handleOpen = (row) => setOpen(true);
  const handleClose = (row) => setOpen(false);

  if (loading) return <small>Loading...</small>;
  if (error) return <small>Error: {error.message}</small>;

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
            Are you sure? want to checkout now?
          </Typography>
          <button>Yes</button>
          <button>No</button>
        </Box>
      </Modal>
    </div>
  )
}
