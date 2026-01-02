import type { ExpCard } from "../constants/types";

interface ExpContentProps {
  expContent: ExpCard;
}

const ExpContent = ({ expContent }: ExpContentProps) => {
  return (
    <div className="card-border rounded-xl p-10">
      <h1 className="font-semibold text-3xl">{expContent.title}</h1>
      <p>{expContent.date}</p>
      <p className="text-white-50">Responsibilities</p>
      <ul className="list-disc ms-5 text-white-50">
        {expContent.responsibilities.map((responsibility, index) => (
          <li key={`${responsibility.slice(0, 20)}-${index}`}>
            {responsibility}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ExpContent;
