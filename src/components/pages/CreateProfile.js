import React from "react";
import { useNavigate, useParams } from "react-router";
import {
  skillOptions,
  roleOptions,
  validate,
} from "../../Data/ProfileServices";
import SelectForm from "../common/SelectForm";

function CreateProfile({ onCreate }) {
  const navigate = useNavigate();
  const params = useParams();
  const userId = params.userId;
  const handleSubmit = (profile) => {
    onCreate(userId, profile);
    navigate(`/profile/${userId}`);
  };
  const handleCancel = () => {
    navigate(`/profile/${userId}`);
  };
  return (
    <div className="w-md">
      <SelectForm
        selectList={[
          {
            label: "Skill",
            multiple: true,
            listItems: skillOptions,
            field: "skill",
          },
          {
            label: "Role",
            multiple: false,
            listItems: roleOptions,
            field: "role",
          },
        ]}
        submitText="Create"
        initialValue={{ skill: [], role: [] }}
        validator={validate}
        onSubmit={handleSubmit}
        onCancel={handleCancel}
      />
    </div>
  );
}

export default CreateProfile;
