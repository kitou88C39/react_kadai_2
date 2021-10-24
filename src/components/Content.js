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

function getSteps() {
  return ["お客様の情報を入力してください", "以下にお答えください", "ご相談ください"];
}

function getStepContent(stepIndex) {
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
                  <option value={1}>　1990</option>
                  <option value={2}>　1991</option>
                  <option value={3}>　1992</option>
                  <option value={4}>　1993</option>
                  <option value={5}>　1994</option>
                  <option value={6}>　1995</option>
                  <option value={7}>　1996</option>
                  <option value={8}>　1997</option>
                  <option value={9}>　1998</option>
                  <option value={10}>　1999</option>
                  <option value={11}>　2000</option>
                  <option value={12}>　2001</option>
                  <option value={13}>　2002</option>
                  <option value={14}>　2003</option>
                  <option value={15}>　2004</option>
                  <option value={16}>　2005</option>
                  <option value={17}>　2006</option>
                  <option value={18}>　2007</option>
                  <option value={19}>　2008</option>
                  <option value={20}>　2009</option>
                  <option value={21}>　2010</option>
                  <option value={22}>　2011</option>
                  <option value={23}>　2012</option>
                  <option value={24}>　2013</option>
                  <option value={25}>　2014</option>
                  <option value={26}>　2015</option>
                  <option value={27}>　2016</option>
                  <option value={28}>　2017</option>
                  <option value={29}>　2018</option>
                  <option value={30}>　2019</option>
                  <option value={31}>　2020</option>
                  <option value={32}>　2021</option>
                </optgroup>
              </Select>
            </FormControl>
            <FormControl sx={{ m: 1, minWidth: 120 }}>
              <InputLabel htmlFor="grouped-native-select">month</InputLabel>
              <Select native defaultValue="" id="grouped-native-select" label="Grouping">
                <option aria-label="None" value="" />
                <optgroup label="month">
                  <option value={1}> 1</option>
                  <option value={2}> 2</option>
                  <option value={3}> 3</option>
                  <option value={4}> 4</option>
                  <option value={5}> 5</option>
                  <option value={6}> 6</option>
                  <option value={7}> 7</option>
                  <option value={8}> 8</option>
                  <option value={9}> 9</option>
                  <option value={10}> 10</option>
                  <option value={11}> 11</option>
                  <option value={12}> 12</option>
                </optgroup>
              </Select>
            </FormControl>
            <FormControl sx={{ m: 1, minWidth: 120 }}>
              <InputLabel htmlFor="grouped-native-select">day</InputLabel>
              <Select native defaultValue="" id="grouped-native-select" label="Grouping">
                <option aria-label="None" value="" />
                <optgroup label="day">
                  <option value={1}> 1</option>
                  <option value={2}> 2</option>
                  <option value={3}> 3</option>
                  <option value={4}> 4</option>
                  <option value={5}> 2</option>
                  <option value={6}> 6</option>
                  <option value={7}> 7</option>
                  <option value={8}> 8</option>
                  <option value={9}> 9</option>
                  <option value={10}> 10</option>
                  <option value={11}> 11</option>
                  <option value={12}> 12</option>
                  <option value={13}> 13</option>
                  <option value={14}> 14</option>
                  <option value={15}> 15</option>
                  <option value={16}> 16</option>
                  <option value={17}> 17</option>
                  <option value={18}> 18</option>
                  <option value={19}> 19</option>
                  <option value={20}> 20</option>
                  <option value={21}> 21</option>
                  <option value={22}> 22</option>
                  <option value={23}> 23</option>
                  <option value={24}> 24</option>
                  <option value={25}> 25</option>
                  <option value={26}> 26</option>
                  <option value={27}> 27</option>
                  <option value={28}> 28</option>
                  <option value={29}> 29</option>
                  <option value={30}> 30</option>
                  <option value={31}> 31</option>
                </optgroup>
              </Select>
            </FormControl>
          </div>
        </>
      );
    case 1:
      return (
        <div>
          <FormControl component="fieldset">
            <FormLabel component="legend">現在、生命保険に加入されていますか？</FormLabel>
            <RadioGroup row aria-label="gender" name="row-radio-buttons-group">
              <FormControlLabel value="yes" control={<Radio />} label="はい" />
              <FormControlLabel value="no" control={<Radio />} label="いいえ" />
            </RadioGroup>
            <FormLabel component="legend">
              現在、入院中ですか。また、3ヶ月以内に医師の診察・検査の結果、入院・手術をすすめられたことがありますか？
            </FormLabel>
            <RadioGroup row aria-label="gender" name="row-radio-buttons-group">
              <FormControlLabel value="yes" control={<Radio />} label="はい" />
              <FormControlLabel value="no" control={<Radio />} label="いいえ" />
            </RadioGroup>
            <FormLabel component="legend">
              過去、5年以内に病気やケガで手術を受けたことまたは継続して７日以上の入院をしたことはありますか？
            </FormLabel>
            <RadioGroup row aria-label="gender" name="row-radio-buttons-group">
              <FormControlLabel value="yes" control={<Radio />} label="はい" />
              <FormControlLabel value="no" control={<Radio />} label="いいえ" />
            </RadioGroup>
          </FormControl>
        </div>
      );
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
}

function Content() {
  const [activeStep, setActiveStep] = React.useState(0);
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
            <Typography>{getStepContent(activeStep)}</Typography>
            <Button disabled={activeStep === 0} onClick={handleBack}>
              戻る
            </Button>
            <Button variant="contained" color="primary" onClick={handleNext}>
              {activeStep === steps.length - 1 ? "送信" : "次へ"}
            </Button>
          </div>
        )}
      </Grid>
    </Grid>
  );
}
// }
export default Content;
