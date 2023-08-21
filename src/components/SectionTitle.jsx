export default function SectionTitle({ name, number, ...props }) {
  return (
    <div
      className={`text-4xl text-lylla flex flex-row gap-4 font-bold max-sm:justify-center mb-16 ${
        props.styles ? props.styles : ""
      }`}
    >
      <span>
        {number}. {name}
      </span>
      <hr className="border-lylla w-1/2 self-center border max-sm:hidden" />
    </div>
  );
}
