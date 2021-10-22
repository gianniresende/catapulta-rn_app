import {useCallback, useEffect, useMemo, useState} from 'react';
import {Appearance} from 'react-native';
import {themeDark} from '../../constants/styles/themes/dark';
import {themeLight} from '../../constants/styles/themes/light';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
import {colorSchemeProps, Props, themeType} from './types';

const useAppearance = (): Props => {
  const [currentTheme, setCurrenttheme] = useState<themeType>(
    Appearance.getColorScheme() || 'light',
  );

  const handleChangeAppearence = useCallback(
    ({colorScheme}: colorSchemeProps) => {
      if (colorScheme) {
        setCurrenttheme(colorScheme);
      }
    },
    [],
  );

  const theme = useMemo(() => {
    if (currentTheme === 'light') {
      return themeLight;
    }
    return themeDark;
  }, [currentTheme]);

  useEffect(() => {
    Appearance.addChangeListener(handleChangeAppearence);
    return Appearance.removeChangeListener(handleChangeAppearence);
  }, [handleChangeAppearence]);
  return {currentTheme, theme};
};

export default useAppearance;
