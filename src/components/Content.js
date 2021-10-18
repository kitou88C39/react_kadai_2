import React from "react";
import { Grid } from "@material-ui/core";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import Tooltip from "@mui/material/Tooltip";
import TextField from "@mui/material/TextField";

function getSteps() {
  return ["お客様の情報を入力してください", "以下にお答えください", "ご相談ください"];
}

function getStepContent(stepIndex) {
  switch (stepIndex) {
    case 0:
      return (
        // <>
        <FormControl component="fieldset">
          <FormLabel component="legend">- 性別 -</FormLabel>
          <RadioGroup row aria-label="gender" name="row-radio-buttons-group">
            <FormControlLabel value="male" control={<Radio />} label="男性" />
            <FormControlLabel value="female" control={<Radio />} label="女性" />
          </RadioGroup>
        </FormControl>

        // <FormLabel component="legend">- 生年月日 -</FormLabel>
        // <select name="year">
        //   <option value="1941">1941</option>
        //   <option value="1942">1942</option>
        //   <option value="1943">1943</option>
        //   <option value="1944">1944</option>
        //   <option value="1945">1945</option>
        //   <option value="1946">1946</option>
        //   <option value="1947">1947</option>
        //   <option value="1948">1948</option>
        //   <option value="1949">1949</option>
        //   <option value="1950">1950</option>
        //   <option value="1951">1951</option>
        //   <option value="1952">1952</option>
        //   <option value="1953">1953</option>
        // <option value="1954">1954</option>
        // <option value="1955">1955</option>
        // <option value="1956">1956</option>
        // <option value="1957">1957</option>
        // <option value="1958">1958</option>
        // <option value="1959">1959</option>
        // <option value="1960">1960</option>
        // <option value="1961">1961</option>
        // <option value="1962">1962</option>
        // <option value="1963">1963</option>
        // <option value="1964">1964</option>
        // <option value="1965">1965</option>
        // <option value="1966">1966</option>
        // <option value="1967">1967</option>
        // <option value="1968">1968</option>
        // <option value="1969">1969</option>
        // <option value="1970">1970</option>
        // <option value="1971">1971</option>
        // <option value="1972">1972</option>
        // <option value="1973">1973</option>
        // <option value="1974">1974</option>
        //   <option value="1975">1975</option>
        //   <option value="1976">1976</option>
        //   <option value="1977">1977</option>
        //   <option value="1978">1978</option>
        //   <option value="1979">1979</option>
        //   <option value="1980">1980</option>
        //   <option value="1981">1981</option>
        //   <option value="1982">1982</option>
        //   <option value="1983">1983</option>
        //   <option value="1984">1984</option>
        //   <option value="1985">1985</option>
        //   <option value="1986">1986</option>
        //   <option value="1987">1987</option>
        //   <option value="1988">1988</option>
        //   <option value="1989">1989</option>
        //   <option value="1990">1990</option>
        //   <option value="1991">1991</option>
        //   <option value="1992">1992</option>
        //   <option value="1993">1993</option>
        //   <option value="1994">1994</option>
        //   <option value="1995">1995</option>
        //   <option value="1996">1996</option>
        //   <option value="1997">1997</option>
        //   <option value="1998">1998</option>
        //   <option value="1999">1999</option>
        //   <option value="2000">2000</option>
        //   <option value="2001">2001</option>
        //   <option value="2002">2002</option>
        //   <option value="2003">2003</option>
        //   <option value="2004">2004</option>
        //   <option value="2005">2005</option>
        //   <option value="2006">2006</option>
        //   <option value="2007">2007</option>
        //   <option value="2008">2008</option>
        //   <option value="2009">2009</option>
        //   <option value="2010">2010</option>
        //   <option value="2011">2011</option>
        //   <option value="2012">2012</option>
        //   <option value="2013">2013</option>
        //   <option value="2014">2014</option>
        //   <option value="2015">2015</option>
        //   <option value="2016">2016</option>
        //   <option value="2017">2017</option>
        //   <option value="2018">2018</option>
        //   <option value="2019">2019</option>
        //   <option value="2020">2020</option>
        // </select>
        // 年
        // <select name="month">
        //   <option value="1">1</option>
        //   <option value="2">2</option>
        //   <option value="3">3</option>
        //   <option value="4">4</option>
        //   <option value="5">5</option>
        //   <option value="6">6</option>
        //   <option value="7">7</option>
        //   <option value="8">8</option>
        //   <option value="9">9</option>
        //   <option value="10">10</option>
        //   <option value="11">11</option>
        //   <option value="12">12</option>
        // </select>
        // 月
        // <select name="day">
        //   <option value="1">1</option>
        //   <option value="2">2</option>
        //   <option value="3">3</option>
        //   <option value="4">4</option>
        //   <option value="5">5</option>
        //   <option value="6">6</option>
        //   <option value="7">7</option>
        //   <option value="8">8</option>
        //   <option value="9">9</option>
        //   <option value="10">10</option>
        //   <option value="11">11</option>
        //   <option value="12">12</option>
        //   <option value="13">13</option>
        //   <option value="14">14</option>
        //   <option value="15">15</option>
        //     <option value="16">16</option>
        //     <option value="17">17</option>
        //     <option value="18">18</option>
        //     <option value="19">19</option>
        //     <option value="20">20</option>
        //     <option value="21">21</option>
        //     <option value="22">22</option>
        //     <option value="23">23</option>
        //     <option value="24">24</option>
        //     <option value="25">25</option>
        //     <option value="26">26</option>
        //     <option value="27">27</option>
        //     <option value="28">28</option>
        //     <option value="29">29</option>
        //     <option value="30">30</option>
        //     <option value="31">31</option>
        //   </select>
        //   日
        // </>
      );
    case 1:
      return (
        <FormControl component="fieldset">
          <FormLabel component="legend">- 現在、生命保険に加入されていますか？ -</FormLabel>
          <RadioGroup row aria-label="gender" name="row-radio-buttons-group">
            <FormControlLabel value="yes" control={<Radio />} label="はい" />
            <FormControlLabel value="no" control={<Radio />} label="いいえ" />
          </RadioGroup>
          <FormLabel component="legend">
            - 現在、入院中ですか。また、3ヶ月以内に医師の診察・検査の結果、入院・手術をすすめられたことがありますか？ -
          </FormLabel>
          <RadioGroup row aria-label="gender" name="row-radio-buttons-group">
            <FormControlLabel value="yes" control={<Radio />} label="はい" />
            <FormControlLabel value="no" control={<Radio />} label="いいえ" />
          </RadioGroup>
          <FormLabel component="legend">
            - 過去、5年以内に病気やケガで手術を受けたことまたは継続して７日以上の入院をしたことはありますか？ -
          </FormLabel>
          <RadioGroup row aria-label="gender" name="row-radio-buttons-group">
            <FormControlLabel value="yes" control={<Radio />} label="はい" />
            <FormControlLabel value="no" control={<Radio />} label="いいえ" />
          </RadioGroup>
        </FormControl>
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
export default Content;
