import { useRef } from "react";
import type { Incident } from "../types/incident.types";
import { useNavigate } from "react-router-dom";

interface Props {
  incidents: Incident[];
  loading: boolean;
  setSortBy: (value: string) => void;
  setOrder: (value: "asc" | "desc") => void;
  order: "asc" | "desc";
  sortBy: string;
}

const IncidentTable = ({
  incidents,
  loading,
  setSortBy,
  setOrder,
  order,
  sortBy,
}: Props) => {
  const navigate = useNavigate();
  const numberOfClicks = useRef(0);

  const handleSort = (field: string) => {
    if (sortBy === field) {
      numberOfClicks.current += 1;
    } else {
      numberOfClicks.current = 1;
    }
    if (numberOfClicks.current === 3) {
      setSortBy("createdAt");
      setOrder("desc");
    } else {
      setSortBy(field);
      setOrder(order === "asc" ? "desc" : "asc");
    }
  };

  if (loading) return <p>Loading...</p>;

  return (
    <table className="incident-table">
      <thead>
        <tr>
          <ColumnHeaders
            title="title"
            handleSort={handleSort}
            sortBy={sortBy}
            order={order}
          />
          <ColumnHeaders
            title="service"
            handleSort={handleSort}
            sortBy={sortBy}
            order={order}
          />
          <ColumnHeaders
            title="severity"
            handleSort={handleSort}
            sortBy={sortBy}
            order={order}
          />
          <th>Status</th>
          <th>Owner</th>
        </tr>
      </thead>
      <tbody>
        {incidents.map((incident) => (
          <tr
            key={incident._id}
            onClick={() => navigate(`/incident/${incident._id}`)}
            className="table-data-row"
          >
            <td>{incident.title}</td>
            <td>{incident.service}</td>
            <td>{incident.severity}</td>
            <td>
              <span className={`badge ${incident.status.toLowerCase()}`}>
                {incident.status}
              </span>
            </td>
            <td>{incident.owner}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

interface iColumnHeaders {
  title: string;
  handleSort: (_: string) => void;
  sortBy: string;
  order: string;
}
const ColumnHeaders = ({
  title,
  handleSort,
  sortBy,
  order,
}: iColumnHeaders) => {
  return (
    <th onClick={() => handleSort(title)}>
      <div className="two-columns">
        <span style={{ textTransform: "capitalize" }}>{title}</span>
        <div className="icons">
          {title === sortBy ? (
            <img
              src={order === "asc" ? "../sort-asc.png" : "../sort-desc.png"}
            />
          ) : null}
        </div>
      </div>
    </th>
  );
};

export default IncidentTable;
