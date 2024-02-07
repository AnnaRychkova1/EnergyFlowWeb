import Pagination from 'tui-pagination';
import 'tui.pagination/dist/tui-pagination.min.css';

  export const pagination1 = new tui.Pagination('pagination1', {
        totalItems: 500,
        itemsPerPage: 10,
        visiblePages: 5
    });