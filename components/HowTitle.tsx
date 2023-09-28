interface Props {
  title: String;
  onClick: () => void;
}
const HowTitle: React.FC<Props> = ({ title, onClick }) => {
  return (
    <>
      <h1
        className={`font-titleFont text-3xl font-semibold flex items-center cursor-pointer`}
        onClick={onClick}
      >
        {title}
      </h1>
      <div className="border-b-2 border-white pb-6 mb-3 w-[40vh]"></div>
    </>
  );
};
export default HowTitle;
