interface coursePartProps {
  name: string;
  exerciseCount: number;
}

interface ContentProps {
  courseParts: coursePartProps[];
}

const Total = ({ courseParts }: ContentProps): JSX.Element => {
  return (
    <div>
      <p>
        Number of exercises{' '}
        {courseParts.reduce((carry, part) => carry + part.exerciseCount, 0)}
      </p>
      <br />
    </div>
  );
};

export default Total;
