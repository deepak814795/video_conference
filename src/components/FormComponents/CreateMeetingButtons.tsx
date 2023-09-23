import { EuiButton, EuiFlexGroup, EuiFlexItem } from "@elastic/eui";
import React from "react";
import { useNavigate } from "react-router-dom";

function CreateMeetingButtons({
  createMeeting,
  isEdit = false,
  closeFlyout,
}: {
  createMeeting: () => {};
  isEdit?: boolean;
  closeFlyout?: () => {};
}) {
  const navigate = useNavigate();
  return (
    <EuiFlexGroup>
      <EuiFlexItem grow={false}>
        <EuiButton
          color="ghost"
          onClick={() => (isEdit ? closeFlyout!() : navigate("/"))}
          fill
          //color=""
         
        >
          Discard
        </EuiButton>
      </EuiFlexItem>
      <EuiFlexItem grow={false}>
        <EuiButton type="submit" onClick={createMeeting} fill>
          {isEdit ? "Save Changes" : "Create Meeting"}
        </EuiButton>
      </EuiFlexItem>
    </EuiFlexGroup>
  );
}

export default CreateMeetingButtons;
