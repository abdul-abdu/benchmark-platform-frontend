import { Grid, Paper, Typography, Button } from "@material-ui/core";
import useStyles from "../styles/Styles";

const Question = ({
  currentQuestion,
  providedAnswer,
  submitQuestion,
  updateAns,
}) => {
  const classes = useStyles();

  return (
    <div>
      <Paper>
        <Grid>
          <Typography>{currentQuestion.text}</Typography>
          <br />
          <form onSubmit={submitQuestion}>
            <Typography>Select your answer</Typography>
            {currentQuestion.answers.map((ans, idx) => (
              <div key={idx}>
                <input
                  type="radio"
                  id={idx}
                  name={providedAnswer.question}
                  value={ans.text}
                  onChange={updateAns}
                />
                {"  "}
                <label htmlFor={idx}>{ans.text}</label>
                <br></br>
              </div>
            ))}
            <Button
              className={classes.button}
              variant="contained"
              color="secondary"
              type="submit"
            >
              Submit
            </Button>
          </form>
        </Grid>
      </Paper>
    </div>
  );
};

export default Question;