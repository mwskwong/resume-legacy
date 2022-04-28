const useSx = () => ({
  comment: {
    mb: 2
  },
  profileContainer: {
    display: "flex",
    alignItems: "center"
  },
  refereeInfoContainer: {
    ml: 2
  },
  name: {
    fontWeight: "bold",
    "@supports (font-variation-settings: normal)": theme => ({
      fontVariationSettings: `'wght' ${theme.typography.fontWeightBold}`
    })
  },
  jobTitle: {
    color: "text.secondary",
    fontWeight: "regular",
    "@supports (font-variation-settings: normal)": theme => ({
      fontVariationSettings: `'wght' ${theme.typography.fontWeightRegular}`
    })
  },
  company: {
    color: "primary.main"
  }
});

export default useSx;