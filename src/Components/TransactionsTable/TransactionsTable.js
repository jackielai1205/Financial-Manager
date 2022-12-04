import { DataGrid, GridColDef} from '@mui/x-data-grid';
import "./TransactionsTable.css";

const columns: GridColDef[] = [
    { field: 'id', headerName: 'ID', minWidth: 100},
    { field: 'description', headerName: 'Transaction Name', minWidth: 200 },
    { field: 'transactionDescription', headerName: 'Transaction Description', minWidth: 400 },
    { field: 'amount', headerName: 'Amount', minWidth: 100,},
    { field: 'categories', headerName: 'Categories', minWidth: 200
        // valueGetter: (params: GridValueGetterParams) =>
        //     `${params.row.firstName || ''} ${params.row.lastName || ''}`,
    },
    {field: 'essential', headerName: 'Essential', minWidth: 100},
    { field: 'date', headerName: 'Date', minWidth: 200}
];

function TransactionsTable(props){
    return (
        <div className="table">
            <DataGrid
                rows={props.transactions}
                columns={columns}
                pageSize={5}
                rowsPerPageOptions={[5]}
                checkboxSelection
            />
        </div>
    )
}



export default TransactionsTable;