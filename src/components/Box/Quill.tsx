import React, { useState } from "react";
import styled from "@emotion/styled";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

const toolbarOptions = [
  [{ header: [1, 2, 3, false] }],
  [{ font: [] }],
  ["bold", "italic", "underline", "strike"],
  [{ color: [] }, { background: [] }],
  [{ list: "ordered" }, { list: "bullet" }],
  ["image"],
];

const MyEditor = () => {
  const [content, setContent] = useState("");

  return (
    <>
      <div
        style={{
          width: "1160px",
          height: "573px",
          border: "1px solid #d2d2d2",
          overflow: "scroll",
        }}
      >
        <ReactQuill
          value={content}
          onChange={setContent}
          modules={{
            toolbar: toolbarOptions,
          }}
        />
      </div>

      <ButtonBox>
        <SaveButton>저장</SaveButton>
      </ButtonBox>
    </>
  );
};
const ButtonBox = styled.div`
  display: flex;
  flex-direction: row;
  text-align: center;
  justify-content: center;
  margin-top: 47px;
`;
const SaveButton = styled.button`
  width: 101px;
  height: 31px;
  background-color: black;
  color: white;
  border-radius: 6px;
  font-size: 16px;
  cursor:pointer;
`;
export default MyEditor;
