import { Box } from "native-base";
import React, { useState } from "react";
import Buttons from "../components/calculator/Buttons";
import Display from "../components/calculator/Display";

const Calculator = () => {
  const [value, setValue] = useState("");
  const [result, setResult] = useState("");

  return (
    <Box flex={1} bg="#f7347a">
      <Box mx="3" mt="10">
        <Display result={result} value={value} />
      </Box>
      <Box mx="3" mt="10">
        <Buttons
          result={result}
          setResult={setResult}
          value={value}
          setValue={setValue}
        />
      </Box>
    </Box>
  );
};

export default Calculator;
