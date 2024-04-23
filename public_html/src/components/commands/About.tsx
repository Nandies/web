import {
  AboutWrapper,
  HighlightAlt,
  HighlightSpan,
} from "../styles/About.styled";

const About: React.FC = () => {
  return (
    <AboutWrapper data-testid="about">
      <p>
        Hi, my name is <HighlightSpan>Nandies</HighlightSpan>!
      </p>
      <p>
        I'm <HighlightAlt>New Developer currently focusing on Reverse Engineering</HighlightAlt>
      </p>
      <p>
        I currenlty love using c++ can make any program I want to do what I want so it comes in handy. <br />
        I want to do what I want so it comes in handy. Also learning reverse engineering to understand how things work.
      </p>
    </AboutWrapper>
  );
};

export default About;
