import {
  appFontColor, appBackgroundColor, appPrimaryColor, appBorderColor,
} from './colors';

export const title = {
  fontWeight: 'bold',
  fontSize: 32,
  color: appFontColor,
  maxHeight: 100,
  maxWidth: '75%',
};

export const titleBar = {
  alignSelf: 'flex-start',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'space-between',
  width: '100%',
  paddingRight: 10,
  paddingLeft: 10,
};

export const container = {
  alignItems: 'center',
  justifyContent: 'flex-start',
  backgroundColor: appPrimaryColor,
  borderColor: appBorderColor,
  borderWidth: 4,
  margin: 10,
  padding: 10,
  borderRadius: 15,
};

export const main = {
  flex: 1,
  backgroundColor: appBackgroundColor,
  paddingTop: 40,
};

export const text = {
  color: appFontColor,
  fontWeight: 'bold',
  fontSize: 20,
  maxHeight: 100,
};

export const button = {
  color: appFontColor,
  marginHorizontal: 25,
};

export const buttonContainer = {
  flexDirection: 'row-reverse',
  justifyContent: 'space-around',
  alignItems: 'center',
};

export const addModalnput = {
  backgroundColor: appBorderColor,
  fontSize: 16,
  color: appFontColor,
  padding: 10,
  margin: 10,
  height: 40,
  borderWidth: 2,
  borderColor: appFontColor,
  borderRadius: 15,
};
