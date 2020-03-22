const classes = (i) => {
    if(i<3) return "";
    else if(i<7) return "rowexpose";
    else if(i<20) return "rowsymp";
    else return "rowrisk";
}
export default classes;