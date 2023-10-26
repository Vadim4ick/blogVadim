import "./Counter.scss";

interface CounterProps {
  className?: string;
}

export const Counter: React.FC<CounterProps> = (props) => {
  const { className } = props;

  return (
    <>
      <div className="test">Testing</div>
    </>
  );
};
