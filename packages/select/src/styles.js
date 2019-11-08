module.exports = function addSelectComponentPlugin({ addComponents, theme }) {
  const select = {
    ".select": {
      display: "block",
    },
    ".select > [role='group']": {
      position: "relative",
      maxWidth: "300px",
      minWidth: "150px",
    },
    ".select [type='search']": {
      width: "100%",
    },
    ".select label + [type='search']": {
      marginTop: theme("margin.1"),
    },
    ".select [role='listbox']": {
      position: "absolute",
      top: "100%",
      width: "100%",
      maxWidth: "100%",
      left: 0,
      margin: 0,
      padding: 0,
      zIndex: 2,
      background: "white",
      border: `${theme("borderWidth.default")} solid ${theme(
        "borderColor.gray.300"
      )}`,
      display: "none",
      overflow: "auto",
      maxHeight: "200px",
      borderRadius: theme("borderRadius.default"),
      boxShadow: theme("boxShadow.default"),
    },
    ".select[data-focused='true'] [role='listbox']": {
      display: "block",
    },
    ".select.select-inline [role='listbox']": {
      position: "relative",
      display: "block",
    },
    ".select.select-inline.select-not-searchable [role='listbox']": {
      boxShadow: "none",
      background: "transparent",
      border: "none",
    },

    ".select [role='listbox'] [role='option']": {
      listStyle: "none",
      display: "block",
      padding: `${theme("spacing.ie-y")} ${theme("spacing.ie-x")}`,
      outline: "none !important",
      cursor: "pointer",
    },
    ".select [aria-readonly='true']": {
      color: "silver",
    },
    ".select [role='listbox'] [role='option'] + [role='option']": {
      borderTop: `${theme("borderWidth.default")} solid ${theme(
        "borderColor.gray.300"
      )}`,
    },
    ".select.select-inline.select-not-searchable [role='listbox'] [role='option']": {
      paddingLeft: "2px",
    },
    ".select.select-inline.select-not-searchable [role='listbox'] [role='option'] + [role='option']": {
      borderTop: "none",
    },
    ".select [role='listbox'] [role='option']:hover, .select [role='listbox'] [role='option'][data-focused='true']": {
      background: theme("backgroundColor.gray.100"),
    },
    ".select [role='listbox'] [aria-selected='true']": {
      background: theme("backgroundColor.gray.300"),
    },
    ".select.select-inline.select-not-searchable [role='listbox'] [aria-selected='true']": {
      background: "transparent",
    },
    ".select ul": {
      display: "block",
      listStyle: "none",
      padding: 0,
      margin: 0,
      marginTop: "5px",
    },
    ".select .selected-list li": {
      display: "inline-block",
      margin: "0 5px 5px 0",
      padding: "3px 8px",
      borderRadius: theme("borderRadius.default"),
      fontSize: theme("fontSize.sm"),
      cursor: "pointer",
      background: theme("backgroundColor.gray.300"),
    },
    ".select__loader": {
      position: "absolute",
      right: "10px",
      bottom: ".6rem",
      width: "1rem",
      height: "1rem",
      borderRadius: "50%",
      overflow: "hidden",
      border: "2px solid #a0aec0",
      borderTopColor: "transparent",
      animation: "select-loader-spin 500ms infinite linear",
    },
    "@keyframes select-loader-spin": {
      from: {
        transform: `rotate(0deg)`,
      },
      to: {
        transform: `rotate(360deg)`,
      },
    },
  }
  addComponents(select)
}
