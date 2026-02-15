import { useCallback } from "react";
import type { Incident } from "../../types/incident.types";

interface iDetailsFeilds {
  incident: Incident;
}

const DetailsFields = ({ incident }: iDetailsFeilds) => {
  const fieldsToDisplay: (keyof Incident)[] = [
    "title",
    "service",
    "severity",
    "status",
    "owner",
    "createdAt",
    "summary",
  ];
  return fieldsToDisplay.map((field, ind) => (
    <Fields key={ind} title={field} value={incident[field]} />
  ));
};

interface iFeilds {
  title: string;
  value: string | undefined;
}

const Fields = ({ title, value }: iFeilds) => {
  const renameFields = useCallback(() => {
    switch (title) {
      case "owner":
        return "Assigned To";
      case "createdAt":
        return "Occured At";

      default:
        return title;
    }
  }, [title]);

  const formatDate = useCallback(() => {
    switch (title) {
      case "createdAt": {
        const date = new Date(value as string);
        const months = [
          "January",
          "February",
          "March",
          "April",
          "May",
          "June",
          "July",
          "August",
          "September",
          "October",
          "November",
          "December",
        ];

        return `${months[date.getMonth()]} ${date.getDate()}, ${date.getFullYear()}`;
      }

      default:
        return value;
    }
  }, [value]);

  if (title === "title")
    return (
      <p className="d-flex" style={{ borderBlock: "1px solid #e5e7eb" }}>
        <h3>{value}</h3>
      </p>
    );
  return (
    <div className="d-flex" style={{ borderBottom: "1px solid #e5e7eb" }}>
      <p>
        <strong style={{ textTransform: "capitalize" }}>
          {renameFields()}:
        </strong>{" "}
        {formatDate() as string}
      </p>
    </div>
  );
};

export default DetailsFields;
