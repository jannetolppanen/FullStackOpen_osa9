import { CoursePart } from './types';

const Part = ({ course }: { course: CoursePart }): JSX.Element => {
  const assertNever = (value: never): never => {
    throw new Error(
      `Unhandled discriminated union member: ${JSON.stringify(value)}`
    );
  };

  switch (course.kind) {
    case 'basic':
      return <p>{course.description}</p>;
    case 'group':
      return <p>project exercises {course.groupProjectCount}</p>;
    case 'background':
      return (
        <p>
          {course.description}
          <br />
          {course.backgroundMaterial}
        </p>
      );
    case 'special':
      return (
        <div>
          <p>{course.description}</p>
          <p>required skills {course.requirements.map((req) => req).join(', ')}</p>
        </div>
      );
    default:
      return assertNever(course);
  }
};

export default Part;
