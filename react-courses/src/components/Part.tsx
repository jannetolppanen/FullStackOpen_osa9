import { CoursePart } from './types';

const Part = ({ course }: { course: CoursePart }): JSX.Element => {
  switch (course.kind) {
    case 'basic':
      return <p>{course.description}</p>;
    case 'group':
      return <p>project exercises {course.groupProjectCount}</p>
    case 'background':
      return <p>{course.description}<br />{course.backgroundMaterial}</p>
    default:
      return <></>;
  }
};

export default Part;
