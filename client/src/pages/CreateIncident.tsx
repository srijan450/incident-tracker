import { useState } from "react";
import Loader from "../components/Loader";
import Header from "../components/Header";
import DetailsForm from "../components/Details/DetailsForm";

const CreateIncident = () => {
  const [loading, setLoading] = useState<boolean>(false);
  if (loading) return <Loader />;

  return (
    <div className="app-container">
      <Header title="Create New Incident" backSupport={true} />
      <DetailsForm setLoading={setLoading} editMode={false} />
    </div>
  );
};

export default CreateIncident;
