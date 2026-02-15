interface IFilterProps {
  search: string;
  setSearch: (_: string) => void;
  severity: string;
  setSeverity: (_: string) => void;
  status: string;
  setStatus: (_: string) => void;
}

const Filters = ({
  search,
  setSearch,
  severity,
  setSeverity,
  status,
  setStatus,
}: IFilterProps) => {
  return (
    <div className="filters">
      <input
        placeholder="Search..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <select value={severity} onChange={(e) => setSeverity(e.target.value)} style={{padding: '5px'}}>
        <option value="">All Severities</option>
        <option value="SEV1">SEV1</option>
        <option value="SEV2">SEV2</option>
        <option value="SEV3">SEV3</option>
        <option value="SEV4">SEV4</option>
      </select>

      <select value={status} onChange={(e) => setStatus(e.target.value)}>
        <option value="">All Status</option>
        <option value="OPEN">OPEN</option>
        <option value="MITIGATED">MITIGATED</option>
        <option value="RESOLVED">RESOLVED</option>
      </select>
    </div>
  );
};

export default Filters;
