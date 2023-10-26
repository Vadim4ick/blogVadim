import cls from "./Counter.module.scss";

interface CounterProps {
  className?: string;
}

export const Counter: React.FC<CounterProps> = (props) => {
  const { className } = props;

  return (
    <>
      <div className={cls.test}>Testing</div>
      <div className={"text-2xl bg-yellow-300"}>Testing</div>
    </>
  );
};
