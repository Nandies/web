import { EduIntro, EduList } from "../styles/Education.styled";
import { Wrapper } from "../styles/Output.styled";

const Education: React.FC = () => {
  return (
    <Wrapper data-testid="education">
      <EduIntro>Here is my education background!</EduIntro>
      {eduBg.map(({ title, desc }) => (
        <EduList key={title}>
          <div className="title">{title}</div>
          <div className="desc">{desc}</div>
        </EduList>
      ))}
    </Wrapper>
  );
};

const eduBg = [
  {
    title: "Current Student in Cyber Security",
    desc: "CRC College | 2022 - Present",
  },
  {
    title: "Marine Corps",
    desc: "Administrtive Specialist | 2018 - 2022",
  },
  {
    title: "Full time Gamer",
    desc: "In your head rent free | 1999 - 2024",
  },
];

export default Education;
