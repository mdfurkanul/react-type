import { type } from "@testing-library/user-event/dist/type";

type StatusProps = {
  status: "loading" | "error" | "successs";
};

const Status = ({ status }: StatusProps) => {
  return (
    <div>
      <h2>Loading....</h2>
      <h2>Data Fetched Successfully</h2>
      <h2>Error fetching data</h2>
    </div>
  );
};

export default Status;
