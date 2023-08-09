import Part from "./Part"
import { CoursePart } from "./types"
// interface coursePartProps {
//   name: string,
//   exerciseCount: number
// }

// interface ContentProps {
//   courseParts: coursePartProps[]
// }

const Content = ({courseParts}: {courseParts : CoursePart[]}): JSX.Element => {
  
  return (
    <div>
      {courseParts.map((course, index) => (
        <div key={index}>
          <div>
            <h3>

            {course.name} {course.exerciseCount}
            </h3>
          </div>
          <Part course={course} />
        </div>
      ))}

      {/* {courseParts.map((course) => (
        <p key={course.name}>{course.name} {course.exerciseCount}<br />
        </p>
        ))} */}
</div>








  );
};


export default Content