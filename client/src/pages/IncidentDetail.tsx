import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { fetchIncidentById, deleteIncident } from "../api/incident.api";
import type { Incident } from "../types/incident.types";
import Loader from "../components/Loader";
import Header from "../components/Header";
import DetailsForm from "../components/Details/DetailsForm";
import DetailsFields from "../components/Details/DetailsFields";

const IncidentDetail = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const [incident, setIncident] = useState<Incident | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  const [editMode, setEditMode] = useState(false);

  const loadIncident = async () => {
    if (!id) return;

    try {
      const response = await fetchIncidentById(id);
      setIncident(response.data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadIncident();
  }, [id]);

  const handleDelete = async () => {
    if (!id) return;

    try {
      await deleteIncident(id);
      navigate("/");
    } catch (error) {
      console.error(error);
    }
  };

  const handleEdit = () => {
    setEditMode((prev) => !prev);
  };

  if (loading) return <Loader />;
  if (!incident) return <p>Incident not found</p>;

  return (
    <div className="app-container">
      <Header
        title={`${editMode ? "Edit " : ""}Incident Detail`}
        backSupport={true}
        buttons={[
          {
            title: "Delete",
            handler: handleDelete,
            className: "btn primary-btn",
          },
          {
            title: `${!editMode ? "Enable" : "Disable"} Edit`,
            handler: handleEdit,
            className: "btn secondary-btn",
          },
        ]}
      />
      {editMode ? (
        <DetailsForm
          {...{
            ...(incident || {}),
            setLoading,
            editMode: true,
            setEditMode: setEditMode,
          }}
        />
      ) : (
        <DetailsFields incident={incident} />
      )}
    </div>
  );
};

export default IncidentDetail;
