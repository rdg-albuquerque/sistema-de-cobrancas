import { makeStyles } from "@material-ui/core";

export default makeStyles({
  root: {
    width: "368px",
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderRadius: "8px",
      },
    },
    backgroundColor: "white",
  },
});
