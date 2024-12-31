import React from "react";
import StudentForm from "./components/StudentForm";
import { Card } from "react-bootstrap";

const App = () => {
  return (
    <div className="p-4 bg-gradient">
      <Card className="my-4">
  <Card.Body className="p-4 bg-gradient">
   
      <StudentForm/>
      </Card.Body>
</Card>
    </div>
  );
};

export default App;
