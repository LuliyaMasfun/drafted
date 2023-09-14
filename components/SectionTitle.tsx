interface Props {
  title: String;
}
const SectionTitle = ({ title }: Props) => {
  return (
    <h1 className="font-titleFont text-7xl font-semibold flex items-center">
      {title}
    </h1>
  );
};
export default SectionTitle;
