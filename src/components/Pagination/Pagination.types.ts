export interface IPagination {
  currentPage: number | `${number}`;
  limit: number;
  totalCount: number;
  onPageChange: (page: number) => void;
}
