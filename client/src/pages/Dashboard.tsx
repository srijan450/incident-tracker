import { useEffect, useState } from "react";
import { fetchIncidents } from "../api/incident.api";
import type { Incident, Pagination } from "../types/incident.types";
import { useDebounce } from "../hooks/useDebounce";
import IncidentTable from "../components/IncidentTable";
import PaginationComponent from "../components/Pagination";
import Filters from "../components/Filters";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";

const Dashboard = () => {
  const [incidents, setIncidents] = useState<Incident[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [pagination, setPagination] = useState<Pagination | null>(null);

  const [page, setPage] = useState<number>(1);
  const [search, setSearch] = useState<string>("");
  const [severity, setSeverity] = useState<string>("");
  const [status, setStatus] = useState<string>("");
  const [sortBy, setSortBy] = useState<string>("createdAt");
  const [order, setOrder] = useState<"asc" | "desc">("desc");
  const navigate = useNavigate();

  const debouncedSearch = useDebounce(search);

  const getData = async () => {
    setLoading(true);

    const response = await fetchIncidents({
      page,
      limit: 10,
      search: debouncedSearch,
      severity,
      status,
      sortBy,
      order,
    });

    setIncidents(response.data);
    setPagination(response.meta);
    setLoading(false);
  };

  useEffect(() => {
    getData();
  }, [page, debouncedSearch, severity, status, sortBy, order]);

  return (
    <div className="app-container">
      <Header
        title="Incident Tracker"
        buttons={[
          {
            title: "New Incident",
            handler: () => navigate("/create"),
            className: "btn primary-btn",
          },
        ]}
      />

      <Filters
        search={search}
        setSearch={setSearch}
        severity={severity}
        setSeverity={setSeverity}
        status={status}
        setStatus={setStatus}
      />

      <IncidentTable
        incidents={incidents}
        loading={loading}
        setSortBy={setSortBy}
        setOrder={setOrder}
        order={order}
        sortBy={sortBy}
      />

      {pagination && <PaginationComponent {...{ ...pagination, setPage }} />}
    </div>
  );
};

export default Dashboard;
