import classes from './Bar.module.css';

export const Bar = ({ animationDuration, progress }: any) => (
  <div
    className={classes.main}
    style={{
      marginLeft: `${(-1 + progress) * 100}%`,
      transition: `margin-left ${animationDuration}ms linear`,
    }}
  ></div>
);
