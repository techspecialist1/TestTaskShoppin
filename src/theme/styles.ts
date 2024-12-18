import { StyleSheet, TextStyle, ViewStyle } from "react-native";
import { COLORS, fontSize, fonts } from ".";
import { moderateScale } from "../utils";

interface Styles {
  [key: string]: ViewStyle | TextStyle;
}

export const _: Styles = StyleSheet.create<Styles>({
  ['flex']: {
    display: 'flex',
  },
  ['flex-column']: {
    flexDirection: 'column',
  },
  ['flex-row']: {
    flexDirection: 'row',
  },

  ['align-start']: {
    display: 'flex',
    alignItems: "flex-start",
  },
  ['align-center']: {
    display: 'flex',
    alignItems: "center",
  },
  ['align-end']: {
    display: 'flex',
    alignItems: "flex-end",
  },

  ['justifyContent-start']: {
    display: 'flex',
    justifyContent: "flex-start",
  },
  ['justifyContent-center']: {
    display: 'flex',
    justifyContent: "center",
  },
  ['justifyContent-end']: {
    display: 'flex',
    justifyContent: "flex-end",
  },

  ['flex-center']: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  ['flex-space-between']: {
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: "space-between",
  },

  ['flex-space-between-row']: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  ['text-center']: {
    textAlign: 'center',
  },
  ['text-right']: {
    textAlign: 'right',
  },
  ['text-left']: {
    textAlign: 'left',
  },

  ['h1']: {
    fontFamily: fonts.roboto_700,
    fontSize: fontSize["20"],
    fontStyle: "normal",
    fontWeight: "700",
    color: COLORS.black
  },
  ['h3']: {
    fontFamily: fonts.roboto_700, 
    fontSize: fontSize["14"],
    fontStyle: "normal",
    fontWeight: "700",
    color: COLORS.black
  },
  ['h2']: {
    fontFamily: fonts.roboto_700,
    fontSize: fontSize["16"],
    fontStyle: "normal",
    fontWeight: "700",
    color: COLORS.black
  },
  ['body-1']: {
    fontFamily: fonts.roboto_400,
    fontSize: fontSize["14"],
    fontStyle: "normal",
    fontWeight: "400",
    color: COLORS.black
  },
  ['body-2']: {
    fontFamily: fonts.roboto_500, 
    fontSize: fontSize["13"],
    fontStyle: "normal",
    fontWeight: "500",
    color: COLORS.black
  },
  ['body-3']: {
    fontFamily: fonts.roboto_400,
    fontSize: fontSize["12"],
    fontStyle: "normal",
    fontWeight: "400",
    color: COLORS.black
  },
  

  ['body-padding']: {
    paddingLeft: moderateScale(24),
    paddingRight: moderateScale(24),
  },
});
