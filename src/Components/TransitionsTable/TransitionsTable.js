import { DataGrid, GridColDef} from '@mui/x-data-grid';
import "./TransitionsTable.css";

const columns: GridColDef[] = [
    { field: 'id', headerName: 'ID', minWidth: 100},
    { field: 'transitionName', headerName: 'Transition Name', minWidth: 200 },
    { field: 'transitionDescription', headerName: 'Transition Description', minWidth: 400 },
    { field: 'amount', headerName: 'Amount', minWidth: 100,},
    { field: 'categories', headerName: 'Categories', minWidth: 200
        // valueGetter: (params: GridValueGetterParams) =>
        //     `${params.row.firstName || ''} ${params.row.lastName || ''}`,
    },
    {field: 'essential', headerName: 'Essential', minWidth: 100},
    { field: 'date', headerName: 'Date', minWidth: 200}
];

function TransitionsTable(props){
    return (
        <div className="table">
            <DataGrid
                rows={props.transitions}
                columns={columns}
                pageSize={5}
                rowsPerPageOptions={[5]}
                checkboxSelection
            />
        </div>
    )
}



export default TransitionsTable;