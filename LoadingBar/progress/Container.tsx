import classes from './Container.module.css'

export const Container = ({ animationDuration, children, isFinished }: any) => (
  <div
    className={classes.main}
    style={{
      opacity: isFinished ? 0 : 1,
      transition: `opacity ${animationDuration}ms linear`,
    }}
  >
    {children}
  </div>
);
