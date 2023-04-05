import { Form } from "react-bootstrap";
import { SectionType } from "../types.d";
import React from "react";

interface Props {
  type: SectionType;
  loading?: boolean;
  onChange: (value: string) => void;
  value: string;
}

const getPlaceHolder = ({
  type,
  loading,
}: {
  type: SectionType;
  loading?: boolean;
}) => {
  if (type === SectionType.From) return "Introducir texto";
  if (loading === true) return "Cargando...";
  return "Traducción";
};

const commonsStyles = { border: 0, height: "200px", resize: "none" };

export const Textarea = ({ type, loading, value, onChange }: Props) => {
  const styles =
    type === SectionType.From
      ? commonsStyles
      : { ...commonsStyles, background: "#f5f5f5" };

  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    onChange(event.target.value);
  };

  return (
    <Form.Control
      as="textarea"
      placeholder={getPlaceHolder({ type, loading })}
      style={styles}
      autoFocus={type === SectionType.From}
      value={value}
      onChange={handleChange}
    />
  );
};
