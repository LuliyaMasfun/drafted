interface Props {
  title: String;
}
const SubTitle: React.FC<Props> = ({ title }) => {
  return (
    <h1 className={`font-titleFont text-3xl font-semibold flex items-center`}>
      {title}
    </h1>
  );
};
export default SubTitle;
