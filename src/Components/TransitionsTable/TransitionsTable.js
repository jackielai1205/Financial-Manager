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

const rows = [
    {id: 1, transitionName: 'Buy lunch', transitionDescription: 'Buy macdonald', amount: "$" + 9, categories: "food", essential: "No", date: "29 Nov 2022"},
    {id: 2, transitionName: 'Purchase a car', transitionDescription: 'Mazda Demio', amount: "$" + 11000, categories: "food", essential: "Yes", date: "29 Nov 2022"},
    {id: 3, transitionName: 'Buy groceries', transitionDescription: 'Egg, Fish', amount: "$" + 120, categories: "food", essential: "Yes", date: "12 Nov 2022"},
    {id: 4, transitionName: 'Buy dinner', transitionDescription: 'Korean Food', amount: "$" + 120, categories: "food", essential: "No", date: "15 Dec 2022"},
    {id: 5, transitionName: 'Buy groceries', transitionDescription: 'Bread', amount: "$" + 2, categories: "food", essential: "Yes", date: "11 Nov 2022"},
    {id: 6, transitionName: 'Buy lunch', transitionDescription: 'Buy macdonald', amount: "$" + 9, categories: "food", essential: "No", date: "29 Nov 2022"},
    {id: 7, transitionName: 'Purchase a car', transitionDescription: 'Mazda Demio', amount: "$" + 11000, categories: "food", essential: "Yes", date: "29 Nov 2022"},
    {id: 8, transitionName: 'Buy groceries', transitionDescription: 'Egg, Fish', amount: "$" + 120, categories: "food", essential: "Yes", date: "12 Nov 2022"},
    {id: 9, transitionName: 'Buy dinner', transitionDescription: 'Korean Food', amount: "$" + 120, categories: "food", essential: "No", date: "15 Dec 2022"},
    {id: 10, transitionName: 'Buy groceries', transitionDescription: 'Bread', amount: "$" + 2, categories: "food", essential: "Yes", date: "11 Nov 2022"},
];


function TransitionsTable(){
    return (
        <div className="table">
            <DataGrid
                rows={rows}
                columns={columns}
                pageSize={5}
                rowsPerPageOptions={[10]}
                checkboxSelection
            />
        </div>
    )
}



export default TransitionsTable;