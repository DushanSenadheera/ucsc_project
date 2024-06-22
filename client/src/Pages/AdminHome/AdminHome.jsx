import Dashboard from '../../layout/AdminLayout/Dashboard'
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function AdminHome() {

  if (!localStorage.getItem('adminToken')) {
    window.location.href = '/admin';
  }else{
    return (
      <div>AdminHome</div>
  )
  }
}
