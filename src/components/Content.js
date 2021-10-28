import React from "react";
import { Grid } from "@mui/material";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import Tooltip from "@mui/material/Tooltip";
import TextField from "@mui/material/TextField";
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";

const QUESTIONS = [
  "現在、生命保険に加入されていますか？",
  "現在、入院中ですか。また、3ヶ月以内に医師の診察・検査の結果、入院・手術をすすめられたことがありますか？",
  "過去、5年以内に病気やケガで手術を受けたことまたは継続して７日以上の入院をしたことはありますか？",
];

const Questionnaire = ({ answers, setAnswers }) => {
  const handleAnswer = (answeredIndex, answer) => {
    setAnswers(answers.map((e, i) => (i === answeredIndex ? answer : e)));
  };
  return (
    <div>
      <FormControl component="fieldset">
        {answers
          .filter((_, i) => i === 0 || answers[i - 1])
          .map((answer, i) => (
            <React.Fragment key={i}>
              <FormLabel component="legend">{QUESTIONS[i]}</FormLabel>
              {answer ? (
                <Typography>{answer === "yes" ? "はい" : "いいえ"}</Typography>
              ) : (
                <RadioGroup
                  row
                  aria-label="gender"
                  name="row-radio-buttons-group"
                  onChange={(_evt, value) => {
                    handleAnswer(i, value);
                  }}
                >
                  <FormControlLabel value="yes" control={<Radio />} label="はい" />
                  <FormControlLabel value="no" control={<Radio />} label="いいえ" />
                </RadioGroup>
              )}
            </React.Fragment>
          ))}
      </FormControl>
    </div>
  );
};
function getSteps() {
  return ["お客様の情報を入力してください", "以下にお答えください", "ご相談ください"];
}

const StepContent = ({ stepIndex, questionnaireProps }) => {
  switch (stepIndex) {
    case 0:
      return (
        <>
          <div>
            <FormControl component="fieldset">
              <FormLabel component="legend">- 性別 -</FormLabel>
              <RadioGroup row aria-label="gender" name="row-radio-buttons-group">
                <FormControlLabel value="male" control={<Radio />} label="男性" />
                <FormControlLabel value="female" control={<Radio />} label="女性" />
              </RadioGroup>
            </FormControl>
          </div>
          <div>
            <FormLabel component="legend">- 生年月日 -</FormLabel>
            <FormControl sx={{ m: 1, minWidth: 120 }}>
              <InputLabel htmlFor="grouped-native-select">year</InputLabel>
              <Select native defaultValue="" id="grouped-native-select" label="Grouping">
                <option aria-label="None" value="" />
                <optgroup label="year">
                  {Array.from(Array(2020), (_, num) => (
                    <option key={num} value={num + 1}>
                      {num + 1990}
                    </option>
                  ))}
                </optgroup>
              </Select>
            </FormControl>
            <FormControl sx={{ m: 1, minWidth: 120 }}>
              <InputLabel htmlFor="grouped-native-select">month</InputLabel>
              <Select native defaultValue="" id="grouped-native-select" label="Grouping">
                <option aria-label="None" value="" />
                <optgroup label="month">
                  {Array.from(Array(12), (_, num) => (
                    <option key={num} value={num + 1}>
                      {num + 1}
                    </option>
                  ))}
                </optgroup>
              </Select>
            </FormControl>
            <FormControl sx={{ m: 1, minWidth: 120 }}>
              <InputLabel htmlFor="grouped-native-select">day</InputLabel>
              <Select native defaultValue="" id="grouped-native-select" label="Grouping">
                <option aria-label="None" value="" />
                <optgroup label="day">
                  {Array.from(Array(12), (_, num) => (
                    <option key={num} value={num + 1}>
                      {num + 1}
                    </option>
                  ))}
                </optgroup>
              </Select>
            </FormControl>
          </div>
        </>
      );
    case 1:
      return <Questionnaire {...questionnaireProps} />;
    case 2:
      return (
        <Grid container>
          <Grid sm={2} />
          <Grid lg={8} sm={8} spacing={10}>
            <Tooltip title="ご相談内容を記入することができます" placement="top-start" arrow>
              <TextField
                label="ご相談内容"
                fullWidth
                margin="normal"
                rows={4}
                multiline
                variant="outlined"
                placeholder="その他ご要望等あれば、ご記入ください"
              />
            </Tooltip>
          </Grid>
        </Grid>
      );
    default:
      return "Unknown stepIndex";
  }
};
function Content() {
  const [activeStep, setActiveStep] = React.useState(0);
  const [answers, setAnswers] = React.useState(Array(QUESTIONS.length).fill(null));
  const steps = getSteps();
  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };
  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };
  const handleReset = () => {
    setActiveStep(0);
  };
  const buttonDisabled = activeStep === 1 && answers.some((a) => !a);
  return (
    <Grid container>
      <Grid sm={2} />
      <Grid lg={8} sm={8} spacing={10}>
        <Stepper activeStep={activeStep} alternativeLabel>
          {steps.map((label) => (
            <Step key={label}>
              <StepLabel>{label}</StepLabel>
            </Step>
          ))}
        </Stepper>
        {activeStep === steps.length ? (
          <div>
            <Typography>全ステップの表示を完了</Typography>
            <Button onClick={handleReset}>リセット</Button>
          </div>
        ) : (
          <div>
            <Typography>
              <StepContent stepIndex={activeStep} questionnaireProps={{ answers, setAnswers }} />
            </Typography>
            <Button disabled={activeStep === 0} onClick={handleBack}>
              戻る
            </Button>
            <Button variant="contained" color="primary" onClick={handleNext} disabled={buttonDisabled}>
              {activeStep === steps.length - 1 ? "送信" : "次へ"}
            </Button>
          </div>
        )}
      </Grid>
    </Grid>
  );
}
export default Content;
