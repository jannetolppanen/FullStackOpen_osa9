interface coursePartProps {
  name: string,
  exerciseCount: number
}

interface ContentProps {
  courseParts: coursePartProps[]
}

const Content = ({courseParts}: ContentProps): JSX.Element => {
  
  return (
    <div>
      {courseParts.map((course) => (
        <p key={course.name}>{course.name} {course.exerciseCount}</p>
      ))}
    </div>
  );
};


export default Content