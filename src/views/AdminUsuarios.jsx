import { useState } from 'react';
import DataTable from 'react-data-table-component';
import { users } from '../data/users';
import ModalAdminUser from '../components/ModalAdminUser';

export const AdminUsuarios = () => {
  const [selectedUser, setSelectedUser] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleEdit = (user) => {
    setSelectedUser(user);
    setIsModalOpen(true);
  };

  const handleDelete = (id) => {
    alert(`Eliminar usuario con ID: ${id}`);
  };

  const columnas = [
    {
      name: 'ID',
      selector: (row) => row.id,
      sortable: true,
      style: { textAlign: 'center'},
    },
    {
      name: 'Nombre',
      selector: (row) => row.username,
      sortable: true,
    },
    {
      name: 'Correo Electrónico',
      selector: (row) => row.email,
      sortable: true,
    },
    {
      name: 'Acciones',
      cell: (row) => (
        <div className="btn-group">
          <button
            onClick={() => handleEdit(row)}
            className="btn btn-primary btn-sm"
          >
            Editar
          </button>
          <button
            onClick={() => handleDelete(row.id)}
            className="btn btn-danger btn-sm"
          >
            Eliminar
          </button>
        </div>
      ),
      ignoreRowClick: true,
      style: { minWidth: '150px', overflow: 'visible' },
    },
  ];

  const paginacion = {
    rowsPerPageText: 'Filas por página',
    rangeSeparatorText: 'de',
    selectAllRowsItem: true,
    selectAllRowsItemText: 'Todos',
  };

  return (
    <div className="container py-5">
      <DataTable
        title="Lista de Usuarios"
        columns={columnas}
        data={users.data.users}
        pagination
        paginationComponentOptions={paginacion}
        fixedHeader
        fixedHeaderScrollHeight="600px"
        responsive
      />

      <ModalAdminUser
        user={selectedUser}
        onClose={() => setIsModalOpen(false)}
        isModalOpen={isModalOpen}
      />
    </div>
  );
};
