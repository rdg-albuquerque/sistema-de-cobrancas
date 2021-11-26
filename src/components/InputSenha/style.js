import { makeStyles } from "@material-ui/core";

export default makeStyles({
  root: {
    width: 368,
    "& .MuiOutlinedInput-root": {
      borderRadius: 8,
      "& fieldset": {},
      "&.Mui-focused fieldset": {
        borderColor: "#b20a64",
      },
    },
    backgroundColor: "white",
  },
});
