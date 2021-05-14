import { makeStyles } from "@material-ui/core/styles";
import styled from "styled-components";
export const useStyles = makeStyles((theme) => ({
  gridSearchBar: {
    display: "flex",
    background: "rgba( 67, 54, 243, 0.25 )",
    borderRadius: "45px",
    border: "2px solid white",
    width: "100%",
  },
  searchInput: {
    background: "transparent",
    borderRadius: "45px",
    color: "white",
    border: "0",
    width: "100%",
    "&::placeholder": {
      textAlign: "center",
      color: "white",
    },
    "&:focus-visible": {
      outline: "0",
    },
    minHeight: "50px",
    textAlign: "center",
    fontSize: "20px",
    fontWeight: "bolder",
  },
  searchButton: {
    border: "none",
    backgroundColor: "transparent",
    color: "white",
    margin: "auto",
    cursor: "pointer",
  },
  autoComplete: {
    maxWidth: "360px",
    margin: "15px",
    fontSize: "20px",
    borderTop: "2px solid gray",
    borderLeft: "2px solid gray",
    borderRight: "2px solid gray",
    borderRadius: "30px",
    padding: "10px",
    background: "white",
  },
  option: {
    background: "white",
    color: "black",
    backdropFilter: " blur( 0.0px )",
    borderBottom: "2px solid gray",
    "&:hover": {
      background: "rgba( 67, 54, 90, 0.3 )",
    },
  },
  topPart: {
    margin: "auto",
    width: "310px",
    minHeight: "250px",
  },
  optionText: {
    fontWeight: "lighter",
  },
}));

// export const SearchBar = styled.input`
//   border: none;
//   width: 300px;
//   height: 50px;
//   outline: none;
//   border: 1px solid white;
//   border-radius: 45px;
//   margin-top: 2rem;
//   text-align: center;
//   font-size: 20px;
//   text-decoration: none;
//   :focus::-webkit-input-placeholder {
//     color: gray;
//     -webkit-transition: all 0.4s ease;
//     -ms-transition: all 0.4s ease;
//     -moz-transition: all 0.4s ease;
//     -o-transition: all 0.4s ease;
//     transition: all 0.4s ease;
//   }
//   :focus::-moz-placeholder {
//     color: gray;
//     -webkit-transition: all 0.4s ease;
//     -ms-transition: all 0.4s ease;
//     -moz-transition: all 0.4s ease;
//     -o-transition: all 0.4s ease;
//     transition: all 0.4s ease;
//   }
//   :focus:-moz-placeholder {
//     color: gray;
//     -webkit-transition: all 0.4s ease;
//     -ms-transition: all 0.4s ease;
//     -moz-transition: all 0.4s ease;
//     -o-transition: all 0.4s ease;
//     transition: all 0.4s ease;
//   }
//     :focus::-webkit-input-placeholder {
//       border: none;
//       transition: text-indent 0.3s 0.45s ease;
//       text-indent: -150%;
//       opacity: 1;
//     }

//   :focus::-webkit-input-placeholder {
//     color: transparent;
//   }
//   :focus::-moz-placeholder {
//     color: transparent;
//   }
//   :focus:-moz-placeholder {
//     color: transparent;
//   }
// `;
