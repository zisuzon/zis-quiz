import classes from "../styles/Question.module.css";
import Answers from "./Answers";

export default function Analysis() {
  return (
    <div className={classes.question}>
      <div className={classes.qtitle}>
        <span className="material-icons-outlined"> help_outline </span>
        Here goes the question from Learn with Sumit?
      </div>

      <Answers />
    </div>

    // <div className={classes.question}>
    //   <div className={classes.qtitle}>
    //     <span className="material-icons-outlined"> help_outline </span>
    //     Here goes the question from Learn with Sumit?
    //   </div>
    //   <div className={classes.answers}>
    //     <label className={classes.answer} for="option1">
    //       A New Hope 1
    //     </label>
    //   </div>
    // </div>
  );
}
