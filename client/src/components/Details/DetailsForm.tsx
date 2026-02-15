import { useState } from "react";
import { createIncident, updateIncident } from "../../api/incident.api";
import type { Severity, Status } from "../../types/incident.types";
import { useNavigate, useParams } from "react-router-dom";

interface iDetailsForm {
  title?: string;
  service?: string;
  severity?: Severity;
  status?: Status;
  owner?: string;
  summary?: string;
  setEditMode?: (_: boolean) => void;
  setLoading: (_: boolean) => void;
  editMode: boolean;
}
const DetailsForm = ({
  title,
  service,
  severity,
  status,
  owner,
  summary,
  setLoading,
  editMode,
  setEditMode,
}: iDetailsForm) => {
  const { id } = useParams<{ id: string }>();
  const [form, setForm] = useState(
    editMode
      ? { title, service, severity, status, owner, summary }
      : {
          title: "",
          service: "",
          severity: "SEV3" as Severity,
          status: "OPEN" as Status,
          owner: "",
          summary: "",
        },
  );

  const navigate = useNavigate();

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >,
  ) => {
    setForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      if (editMode) {
        if (!id) return;
        await updateIncident(id, form);
      } else await createIncident(form);
      navigate("/");
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const handleCancelEdit = () => {
    if (editMode && setEditMode) setEditMode(false);
  };
  return (
    <form className="form-layout" onSubmit={handleSubmit}>
      <Input
        name="title"
        placeholder="Title"
        required
        value={form.title}
        onChange={handleChange}
        type="text"
      />

      <Input
        name="service"
        placeholder="Service"
        required
        value={form.service}
        onChange={handleChange}
        type="service"
      />

      <Input
        name="severity"
        type={"select"}
        selectProps={{
          name: "severity",
          value: form.severity,
          onChange: handleChange,
        }}
        options={["Sev1", "Sev2", "Sev3", "Sev4"]}
      />

      <Input
        name="status"
        type={"select"}
        selectProps={{
          name: "status",
          value: form.status,
          onChange: handleChange,
        }}
        options={["OPEN", "MITIGATED", "RESOLVED"]}
      />

      <Input
        name="owner"
        placeholder="Owner"
        value={form.owner}
        onChange={handleChange}
      />

      <Input
        name="summary"
        placeholder="Summary"
        value={form.summary}
        onChange={handleChange}
        type={"textarea"}
      />

      <div className="d-flex">
        {!editMode ? (
          <button className="btn primary-btn" type="submit">
            Create
          </button>
        ) : (
          <>
            <button className="btn primary-btn" type="submit">
              Save Changes
            </button>
            <button
              className="btn secondary-btn"
              type="button"
              onClick={handleCancelEdit}
            >
              Cancle
            </button>
          </>
        )}
      </div>
    </form>
  );
};

const Input = (props: any) => {
  return (
    <div style={{ display: "grid", rowGap: "5px" }}>
      <label htmlFor={props.name} style={{ textTransform: "capitalize" }}>
        {props.name}
      </label>
      <InputComponent {...props} />
    </div>
  );
};

const InputComponent = (props: any) => {
  if (props.type === "textarea") return <textarea {...props}></textarea>;
  if (props.type === "select")
    return (
      <select {...props.selectProps}>
        {props.options.map((item: string) => (
          <option value={item} key={item}>
            {item}
          </option>
        ))}
      </select>
    );
  return <input {...props} />;
};

export default DetailsForm;
